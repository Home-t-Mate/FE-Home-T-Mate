import React from "react";
import { OpenVidu } from "openvidu-browser";
import { VideoList, VideoListWrap } from "./VideoContainer/VideoConEle";
import UserVideoComponent from "../components/UserVideoComponent";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { actionCreators as sessionAcions } from "../redux/modules/sessionReducer";

const WebRTCContainer = (props) => {
  const { publisher, subscribers, leaveSession, session, OV } = props;
  console.log(subscribers);
  const dispatch = useDispatch();
  // ** windowSize
  // ** leaveSession 전달용
  React.useEffect(() => {
    dispatch(sessionAcions.leaveSessionFunc(leaveSession));
    return () => {};
  }, []);

  return (
    <>
      <SessionWrap id="session">
        <VideoListWrap id="video-container">
          {subscribers.length < 5 ? (
            <VideoList>
              {publisher !== undefined ? (
                <div>
                  <UserVideoComponent streamManager={publisher} />
                </div>
              ) : null}
              {subscribers.map((sub, i) => (
                <div key={i}>
                  <UserVideoComponent streamManager={sub} />
                </div>
              ))}
            </VideoList>
          ) : (
            <FiveVideoList>
              {publisher !== undefined ? (
                <div>
                  <UserVideoComponent streamManager={publisher} />
                </div>
              ) : null}
              {subscribers.map((sub, i) => (
                <div key={i}>
                  <UserVideoComponent streamManager={sub} />
                </div>
              ))}
            </FiveVideoList>
          )}
        </VideoListWrap>
      </SessionWrap>
    </>
  );
};

const SessionWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const FiveVideoList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  margin-top: 50px;
  width: 100%;
  height: 100%;

  video {
    position: relative;
    float: left;
    cursor: pointer;
    height: auto;
    min-height: 250px;
    margin-left: 4px;
  }
`;

export default WebRTCContainer;
