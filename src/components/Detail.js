import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Cardheader from "./Cardheader";
import LikeComment from "./LikeComment";
import CommentContents from "./CommentContents";
import Grid from "../elements/Grid";
import Img from "./Img";
import CommentBox from "./CommentBox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height: 740,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  display: "flex",
  padding: 0,
};

export default function Detail(props) {
  return (
    <div>
      <Box sx={style}>
        <div style={{ width: "800px", height: "450px" }}>
          <Img img="true" setHeight={"740px"} />
        </div>

        <Grid width="400px">
          <Cardheader>
            <span>ㅁㄴㅇㄹ</span>
          </Cardheader>
          <hr></hr>

          <CommentContents />

          <Grid position="absolute" bottom="0px" width="400px">
            <hr></hr>
            <LikeComment modal={false} />
            <Grid margin_top="10px" margin_left="16px">
              <Typography
                variant="body2"
                color="text.secondary"
                align="justify"
                margin-top="10px"
              >
                1일전
              </Typography>
            </Grid>
            <hr></hr>
            <CommentBox />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
