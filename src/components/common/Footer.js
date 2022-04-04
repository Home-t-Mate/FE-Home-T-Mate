import React from "react";
import { Divider } from "@mui/material";
import styled from "@emotion/styled";
import Logo from "../../assets/mainlogo.png";
import { useSelector } from "react-redux";
import useWindowSize from "../../hooks/useWindowSize";
import { history } from "../../redux/store";

const Footer = () => {
  let pathname = window.location.pathname;
  const routeUrl = useSelector((state) => state.router.location.pathname);
  const size = useWindowSize();
  const { width, height } = size;

  React.useEffect(() => {}, [pathname, routeUrl]);
  if (pathname.includes("checkvideo") || pathname.includes("/livenow/chat")) {
    return <div> </div>;
  }

  if (width < height) {
    return (
      <>
        <Divider />
        <MWrap width={width}>
          <FooterList>
            <img
              alt=""
              src={Logo}
              height={`${width * 0.045}px`}
              onClick={() => history.push("/")}
              style={{
                cursor: "pointer",
                marginRight: width * 0.03,
                marginBottom: 8,
              }}
            />
            <MTitleWrap
              onClick={() => history.push("/termsofuse")}
              width={width}
            >
              <h3>이용약관</h3>
            </MTitleWrap>
            <MTitleWrap onClick={() => history.push("/privacy")} width={width}>
              <h3>개인정보보호</h3>
            </MTitleWrap>
            <MTitleWrap
              onClick={() =>
                window.open("https://forms.gle/KjiKSmjvokFLQNPV9", "_black")
              }
              width={width}
            >
              <h3>오류제보</h3>
            </MTitleWrap>
            <MTitleWrap
              width={width}
              onClick={() =>
                window.open("https://forms.gle/w6vL5DUyokPE9PtR8", "_black")
              }
            >
              <h3>만족도 평가</h3>
            </MTitleWrap>
          </FooterList>
          <MCopyRight>
            <h3>Copyright ©2022 Hometmate. All rights reserved.</h3>
          </MCopyRight>
        </MWrap>
      </>
    );
  }
  return (
    <>
      <Divider />
      <Wrap>
        <FooterList>
          <img
            alt=""
            src={Logo}
            height="40px"
            onClick={() => history.push("/")}
            style={{ cursor: "pointer", marginRight: 30, marginBottom: 8 }}
          />
          <TitleWrap onClick={() => history.push("/termsofuse")}>
            <h3>이용약관</h3>
          </TitleWrap>
          <TitleWrap onClick={() => history.push("/privacy")}>
            <h3>개인정보보호</h3>
          </TitleWrap>
          <TitleWrap
            onClick={() =>
              window.open("https://forms.gle/KjiKSmjvokFLQNPV9", "_black")
            }
          >
            <h3>오류제보</h3>
          </TitleWrap>
          <TitleWrap
            onClick={() =>
              window.open("https://forms.gle/w6vL5DUyokPE9PtR8", "_black")
            }
          >
            <h3>만족도 평가</h3>
          </TitleWrap>
        </FooterList>
        <Divider sx={{ width: "70%" }} />
        <FooterList>
          <CopyRight>
            <h3>Copyright ©2022 Hometmate. All rights reserved.</h3>
          </CopyRight>
        </FooterList>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 240px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
`;

const MWrap = styled.div`
  width: 100%;
  height: ${(props) => props.width * 0.4}px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
`;

const FooterList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const MFooterList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const TitleWrap = styled.div`
  width: 130px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  h3 {
    font-size: 16px;
    font-family: "GmarketSansLight";
  }
`;

const MTitleWrap = styled.div`
  width: ${(props) => props.width * 0.16}px;
  height: ${(props) => props.width * 0.1}px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  h3 {
    font-size: ${(props) => props.width * 0.01}px;
    font-family: "GmarketSansLight";
  }
`;

const CopyRight = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 12px;
    font-family: "GmarketSansLight";
  }
`;

const MCopyRight = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 8px;
    font-family: "GmarketSansLight";
  }
`;

export default Footer;
