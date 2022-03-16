import styled from "@emotion/styled";
import React from "react";
import VideoComponent from "./VideoComponent";
import "./UserVideo.css";

const UserVideoComponent = (props) => {
  const getNicknameTag = () =>
    JSON.parse(props.streamManager.stream.connection.data).clientData;

  return (
    <>
      {props.streamManager !== undefined ? (
        <VideoComponent
          streamManager={props.streamManager}
          nickname={getNicknameTag()}
        />
      ) : null}
    </>
  );
};

export default UserVideoComponent;
