import React, { useEffect } from "react";
import { actionCreators as userActions } from "../redux/modules/userReducer";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import LinearProgress from "@mui/material/LinearProgress";
import LoadingImage from "../assets/loading_image.png";
import { apis } from "../shared/api";
import { setCookie } from "../shared/Cookie";
import { KAKAO_AUTH_URL } from "../shared/OAuth";

const KakaoOauth = () => {
  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    const kakaoLogin = async () => {
      await apis.kakaoLogin(code).then((res) => {
        setCookie("token", res.headers.authorization);
        localStorage.setItem("userId", res.data);
        window.location.href = KAKAO_AUTH_URL;
      });
    };
    kakaoLogin();
  }, []);
  return (
    <Wrap>
      <img alt="" src={LoadingImage} width="300px" />
      <Text>잠시만 기다려주세요.</Text>
      <LinearProgress color="success" sx={{ width: "300px", mt: 5 }} />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: large;
  font-weight: bold;
`;

export default KakaoOauth;
