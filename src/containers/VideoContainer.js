import React from "react";
import { OpenVidu } from "openvidu-browser";
import { Component } from "@fullcalendar/core";
import axios from "axios";
import UserVideoComponent from "../components/UserVideoComponent";
import "../App.css";
import ChatNav from "../components/ChatNav";
import {
  BodyWrap,
  MainVideo,
  MainVideoWrap,
  VideoList,
  VideoListWrap,
} from "./VideoContainer/VideoConEle";
import YoutubeVideo from "../components/YoutubeVideo";
// const OPENVIDU_SERVER_URL = "https://" + window.location.hostname + ":4443";
const OPENVIDU_SERVER_URL = "https://goonzu.shop:5443";
const OPENVIDU_SERVER_SECRET = "MY_SECRET";

class VideoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mySessionId: "SessionA",
      myUserName: "Participant" + Math.floor(Math.random() * 100),
      session: undefined,
      mainStreamManager: undefined,
      publisher: undefined,
      subscribers: [],
    };

    this.joinSession = this.joinSession.bind(this);
    this.leaveSession = this.leaveSession.bind(this);
    this.handleChangeSessionId = this.handleChangeSessionId.bind(this);
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleMainVideoStream = this.handleMainVideoStream.bind(this);
    this.onbeforeunload = this.onbeforeunload.bind(this);
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.onbeforeunload);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onbeforeunload);
  }

  onbeforeunload(event) {
    this.leaveSession();
  }

  handleChangeSessionId(e) {
    this.setState({
      mySessionId: e.target.value,
    });
  }

  handleChangeUserName(e) {
    this.setState({
      myUserName: e.target.value,
    });
  }

  handleMainVideoStream(stream) {
    if (this.state.mainStreamManager !== stream) {
      this.setState({
        mainStreamManager: stream,
      });
    }
  }

  deleteSubscriber(streamManager) {
    let subscribers = this.state.subscribers;
    let index = subscribers.indexOf(streamManager, 0);
    if (index > -1) {
      subscribers.splice(index, 1);
      this.setState({
        subscribers: subscribers,
      });
    }
  }

  joinSession() {
    // ** setState 와 동시에 async 로 함수 호출

    this.OV = new OpenVidu();

    // ** session 초기화

    this.setState(
      {
        session: this.OV.initSession(),
      },
      () => {
        var mySession = this.state.session;
        // ** 새로운 구독자 추가

        mySession.on("streamCreated", (event) => {
          var subscriber = mySession.subscribe(event.stream, undefined);
          var subscribers = this.state.subscribers;
          subscribers.push(subscriber);
          this.setState({
            subscribers: subscribers,
          });
        });

        // ** 구독자 삭제
        mySession.on("streamDestroyed", (event) => {
          this.deleteSubscriber(event.stream.streamManager);
        });
        mySession.on("exception", (exception) => {
          console.warn(exception);
        });
        // ** 토큰 가져오는 과정에서 session 과 token 이 생성되며 return  된다.
        // ** 그 후, 가져온 세션과 토큰을 이용해 WebScoket과 통신을 시도하며, sdp 정보를 보내준다.
        this.getToken().then((token) => {
          // ** 첫 번째 param은 OV Server 에서 오는 토큰 값이며, 두 번째 param은 모든 유저가 "streamCreated"를 통해
          // ** 받는 정보들이다. 그리고 이것은 유저 닉네임으로 DOM 에 추가된다.
          mySession
            .connect(token, { clientData: this.state.myUserName })
            .then(() => {
              // ** 본인의 카메라 stream (sdp 정보 등과 함께) 을 가져온다.
              let publisher = this.OV.initPublisher(undefined, {
                audioSource: undefined, // The source of audio. If undefined default microphone
                videoSource: undefined, // The source of video. If undefined default webcam
                publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
                publishVideo: true, // Whether you want to start publishing with your video enabled or not
                resolution: "640x480", // The resolution of your video "640x480", "1280x720"
                frameRate: 30, // The frame rate of your video
                insertMode: "APPEND", // How the video is inserted in the target element 'video-container'
                mirror: false, // Whether to mirror your local video or not
              });

              // ** 본인의 정보를 publishing 한다.
              mySession.publish(publisher);
              // ** 첫 번째 메인 카메라를 본인의 웹캠으로 설정시키는 것
              // ** 추후에 방장으로 바꾸면 됨.
              this.setState({
                mainStreamManager: publisher,
                publisher: publisher,
              });
            })
            .catch((error) => {
              console.log(
                "There was an error connecting to the session:",
                error.code,
                error.message
              );
            });
        });
      }
    );
  }

  leaveSession() {
    const mySession = this.state.session;
    if (mySession) {
      mySession.disconnect();
    }
    this.OV = null;
    this.setState({
      session: undefined,
      subscribers: [],
      mySessionId: "SessionA",
      myUserName: "Participant" + Math.floor(Math.random() * 100),
      mainStreamManager: undefined,
      publisher: undefined,
    });
  }

  render() {
    const mySessionId = this.state.mySessionId;
    const myUserName = this.state.myUserName;

    return (
      <BodyWrap className="container">
        {this.state.session === undefined ? (
          <div id="join">
            <div id="img-div">
              <img
                src="resources/images/openvidu_grey_bg_transp_cropped.png"
                alt="OpenVidu logo"
              />
            </div>
            <div id="join-dialog" className="jumbotron vertical-center">
              <h1> Join a video session </h1>
              <form className="form-group" onSubmit={this.joinSession}>
                <p>
                  <label>Participant: </label>
                  <input
                    className="form-control"
                    type="text"
                    id="userName"
                    value={myUserName}
                    onChange={this.handleChangeUserName}
                    required
                  />
                </p>
                <p>
                  <label> Session: </label>
                  <input
                    className="form-control"
                    type="text"
                    id="sessionId"
                    value={mySessionId}
                    onChange={this.handleChangeSessionId}
                    required
                  />
                </p>
                <p className="text-center">
                  <input
                    className="btn btn-lg btn-success"
                    name="commit"
                    type="submit"
                    value="JOIN"
                  />
                </p>
              </form>
            </div>
          </div>
        ) : null}

        {this.state.session !== undefined ? (
          <div id="session">
            <ChatNav
              leaveSession={this.leaveSession}
              mySessionId={mySessionId}
              chatNum={this.state.subscribers.length}
            />
            <YoutubeVideo />
            <VideoListWrap id="video-container">
              <VideoList>
                {this.state.publisher !== undefined ? (
                  <div
                    // className="stream-container col-md-6 col-xs-6"
                    onClick={() =>
                      this.handleMainVideoStream(this.state.publisher)
                    }
                  >
                    <UserVideoComponent streamManager={this.state.publisher} />
                  </div>
                ) : null}
                {this.state.subscribers.map((sub, i) => (
                  <div
                    key={i}
                    // className="stream-container col-md-6 col-xs-6"
                    onClick={() => this.handleMainVideoStream(sub)}
                  >
                    <UserVideoComponent streamManager={sub} />
                  </div>
                ))}
              </VideoList>
            </VideoListWrap>
            {this.state.mainStreamManager !== undefined ? (
              <MainVideoWrap>
                <MainVideo id="main-video" className="col-md-6">
                  <UserVideoComponent
                    streamManager={this.state.mainStreamManager}
                  />
                </MainVideo>
              </MainVideoWrap>
            ) : null}
          </div>
        ) : null}
      </BodyWrap>
    );
  }

  /**
   * --------------------------
   * SERVER-SIDE RESPONSIBILITY
   * --------------------------
   * These methods retrieve the mandatory user token from OpenVidu Server.
   * This behavior MUST BE IN YOUR SERVER-SIDE IN PRODUCTION (by using
   * the API REST, openvidu-java-client or openvidu-node-client):
   *   1) Initialize a Session in OpenVidu Server	(POST /openvidu/api/sessions)
   *   2) Create a Connection in OpenVidu Server (POST /openvidu/api/sessions/<SESSION_ID>/connection)
   *   3) The Connection.token must be consumed in Session.connect() method
   */

  getToken() {
    return this.createSession(this.state.mySessionId).then((sessionId) =>
      this.createToken(sessionId)
    );
  }
  // /openvidu/api/sessions
  createSession(sessionId) {
    return new Promise((resolve, reject) => {
      var data = JSON.stringify({ customSessionId: sessionId });
      axios
        .post(OPENVIDU_SERVER_URL + "/openvidu/api/sessions", data, {
          headers: {
            Authorization:
              "Basic " + btoa("OPENVIDUAPP:" + OPENVIDU_SERVER_SECRET),
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("CREATE SESION", response);
          resolve(response.data.id);
        })
        .catch((response) => {
          var error = Object.assign({}, response);
          if (error?.response?.status === 409) {
            resolve(sessionId);
          } else {
            console.log(error);
            console.warn(
              "No connection to OpenVidu Server. This may be a certificate error at " +
                OPENVIDU_SERVER_URL
            );
            if (
              window.confirm(
                'No connection to OpenVidu Server. This may be a certificate error at "' +
                  OPENVIDU_SERVER_URL +
                  '"\n\nClick OK to navigate and accept it. ' +
                  'If no certificate warning is shown, then check that your OpenVidu Server is up and running at "' +
                  OPENVIDU_SERVER_URL +
                  '"'
              )
            ) {
              window.location.assign(
                OPENVIDU_SERVER_URL + "/accept-certificate"
              );
            }
          }
        });
    });
  }

  createToken(sessionId) {
    return new Promise((resolve, reject) => {
      var data = {};
      axios
        .post(
          OPENVIDU_SERVER_URL +
            "/openvidu/api/sessions/" +
            sessionId +
            "/connection",
          data,
          {
            headers: {
              Authorization:
                "Basic " + btoa("OPENVIDUAPP:" + OPENVIDU_SERVER_SECRET),
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("TOKEN", response);
          resolve(response.data.token);
        })
        .catch((error) => reject(error));
    });
  }
}

export default VideoContainer;
