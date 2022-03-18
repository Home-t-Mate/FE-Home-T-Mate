import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/store";
import Home from "./pages/Home";
import Login from "./pages/Login";
import KakaoOauth from "./components/KakaoOauth";
import LiveNow from "./pages/LiveNow";
import { actionCreators as userActions } from "./redux/modules/userReducer";
import { actionCreators as postActions } from "./redux/modules/postReducer";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Mypage from "./pages/Mypage";
import styled from "@emotion/styled";
import Story from "./pages/Story";
import VideoChatRoom from "./pages/VideoChatRoom";
import CheckVideo from "./pages/CheckVideo";
import Logout from "./pages/Logout";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (document.cookie) {
      dispatch(userActions.userinfoDB());
    }
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <NavBar />
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/mypage" exact component={Mypage} />
            <Route path="/user/kakao/callback/" exact component={KakaoOauth} />
            <Route path="/story" exact component={Story} />
            <Route path="/livenow" exact component={LiveNow} />
            <Route path="/checkvideo" exact component={CheckVideo} />
            <Route
              path="/livenow/chat/:roomId"
              exact
              component={VideoChatRoom}
            />
            <Route path="/logout" exact component={Logout} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </ConnectedRouter>
      </div>
    </>
  );
};

const WrapMedium = styled.div`
  margin: auto;
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapWide = styled.div`
  margin: auto;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
