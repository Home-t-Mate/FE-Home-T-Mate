import styled from "@emotion/styled";
import React from "react";
import YouTube from "react-youtube";
import useWindowSize from "../hooks/useWindowSize";

const YoutubeVideo = () => {
  const size = useWindowSize();
  console.log(size);
  const youtubeRef = React.useRef();
  const fixedWidth = `${size.width / 1.8}`;
  const fixedHeight = `${((size.width / 1.8) * 9) / 16}`;
  const opts = {
    width: fixedWidth,
    height: fixedHeight,

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  // ** 유튜브 켜졌는지 꺼졌는지
  const [isYoutube, setIsYoutube] = React.useState(false);
  // ** 유튜브 상태관리
  const _onReady = (e) => {
    e.target.pauseVideo();
  };
  const handlePlay = (e) => {
    console.log(e);
    console.log("유튜브 재생");
  };
  const handlePause = (e) => {
    console.log(e);
    console.log("유튜브 일시정지");
  };
  const handleEnd = (e) => {
    console.log(e);
    console.log("유튜브 종료");
    setIsYoutube(false);
  };
  // ** 유튜브 url 설정
  // 유튜브 url to id
  function youtube_parser(url) {
    var regExp =
      /^https?:\/\/(?:www\.youtube(?:-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*)?vi?=|vi?=|\?(?:.*)?vi?=)([^#?\n<>"']*)/i;
    var match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : false;
  }
  // 유튜브 url 이 id 로 바뀌 때 state
  const [youtubeId, setYoutubeId] = React.useState("");
  // 유튜브 url input
  const [urlIntput, setUrlIntput] = React.useState("");
  const handleUrlChange = (e) => {
    setUrlIntput(e.target.value);
  };
  const handleUrlSubmit = (e) => {
    e.preventDefault();
    // https://www.youtube.com/watch?v=I2EHKVCsKKk
    if (youtube_parser(urlIntput) === false) {
      alert("옳바른 주소를 입력해주세요");
    } else {
      setYoutubeId(youtube_parser(urlIntput));
      setIsYoutube(true);
    }
  };

  React.useEffect(() => {}, [youtubeId]);

  return (
    <Wrap>
      {isYoutube ? (
        <YouTube
          videoId={youtubeId}
          opts={opts}
          onReady={_onReady}
          ref={youtubeRef}
          onPlay={handlePlay}
          onPause={handlePause}
          onStateChange={(e) => console.log("상태변화 감지 필요없음", e)}
          onEnd={handleEnd}
        />
      ) : (
        <Empty width={fixedWidth} height={fixedWidth}>
          텅 비었습니다.
        </Empty>
      )}
      <form onSubmit={handleUrlSubmit}>
        <input
          type="text"
          onChange={handleUrlChange}
          required
          placeholder="유튜브 Url"
        />
        <button type="submit">유튜브 url 제출</button>
      </form>
    </Wrap>
  );
};

const Empty = styled.div`
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-top: 4px;
  margin-left: 4px; */
  /* width: 80vw;
  height: 45vw; */
`;

export default YoutubeVideo;
