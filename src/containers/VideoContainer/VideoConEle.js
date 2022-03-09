import styled from "@emotion/styled";

const BodyWrap = styled.div`
  width: 100vw;
`;

// ** 메인 비디오
const MainVideoWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;

const MainVideo = styled.div`
  height: auto;
  p {
    /* position: absolute; */
    display: inline-block;
    background: #f8f8f8;
    padding-right: 5px;
    padding-left: 5px;
    /* left: 800px; */
    font-size: 22px;
    color: #777777;
    font-weight: bold;
    border-bottom-right-radius: 4px;
  }
  video {
    cursor: initial;
  }
`;

const StreamContainer = styled.div`
  padding: 0;
`;

// ** 비디오 리스트 Wrap
const VideoListWrap = styled.div`
  width: 80%;
  height: auto;
  /* height: 200px; */
  img {
    position: relative;
    float: left;
    width: 50%;
    cursor: pointer;
    object-fit: cover;
    height: 180px;
  }
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    background: #f8f8f8;
    padding-right: 5px;
    padding-left: 5px;
    color: #777777;
    font-weight: bold;
    border-bottom-right-radius: 4px;
  }
`;

// ** 나열된 비디오 리스트
const VideoList = styled.div`
  display: flex;
  flex-direction: row;
  video {
    position: relative;
    float: left;
    cursor: pointer;
    height: 15vw;
  }
`;

export {
  BodyWrap,
  MainVideo,
  StreamContainer,
  VideoList,
  MainVideoWrap,
  VideoListWrap,
};
