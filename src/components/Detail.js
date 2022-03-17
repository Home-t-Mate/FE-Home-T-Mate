import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Cardheader from "./Cardheader";
import LikeComment from "./LikeComment";
import CommentContents from "./CommentContents";
import Grid from "../elements/Grid";
import Img from "./Img";
import CommentBox from "./CommentBox";
// import CardText from "./CardText";
import {useDispatch, useSelector} from "react-redux";
import { borderRadius } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1345,
  height: 800,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  padding: 0,
};

export default function Detail(props) {
  // id={props.id}

  const _post = useSelector(state=>state.postReducer);
  const thisPost = _post.list.reduce((x,v,i)=> v.id===props.id?v:x,"");
  console.log('postReducer확인용',_post);
  console.log('thispost확인용', thisPost);

  return (
    <div>
      <Box sx={style}>
        <div style={{width:"800px"}}>
          <Img postImg={thisPost.postImg} size="800px" border="20px"/>
        </div>

        <Grid width="545px">
        {/* id={props.id} username={props.nickname} userImg={props.userImgUrl} */}
        <Cardheader id={thisPost.id} username={thisPost.nickname} userImg={thisPost.userImg}/>

        <Typography variant="body2" color="black" align="justify" marginLeft={"16px"} >
          {thisPost.content}
        </Typography>

        {/* 댓글 구현예정 */}

          <Grid position="absolute" bottom="0px" width="545px">
            <hr></hr>
            <LikeComment modal={false} />
            <CommentBox />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
