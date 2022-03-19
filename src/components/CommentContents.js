import React from "react";
import { Grid, Input, Image, Text } from "../elements";
import { Typography } from "@mui/material";

export default function CommentContents(props) {
  return (
    <Grid
      is_flex
      flex_wrap="wrap"
      align_items="stretch"
      flex_direction="row"
      width="545px"
      padding_left="16px"
      margin="0px"
    >
      <Grid
        margin="0px"
        height="50px"
        is_flex
        flex_direction="column"
        justify_content="start"
      >
        <Image
          margin="0"
          shape="circle"
          src="https://3.bp.blogspot.com/-x4gLW4b7sB4/XHE3SYQbIpI/AAAAAAAA4nM/SFGGsj7HgyELAWCFQfanqqQwwBJfg30YACLcBGAs/s1600/01.jpg"
          size="35"
        />
      </Grid>

      <Grid width="460px" margin_left="16px">
        <Typography variant="body2" color="black" align="justify">
          <strong>yejin </strong>css...🔥🔥🔥🔥 안녕 말을 길게 쳐보자 말을 길게
          쳐보자말을 길게 쳐보자말을 길게 쳐보자말을 길게 쳐보자말을 길게
          쳐보자말을 길게 쳐보자말을 길게 쳐보자
        </Typography>

        <Grid margin_top="10px">
          <Typography
            variant="body2"
            color="text.secondary"
            align="justify"
            margin-top="10px"
          >
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
