import React from "react";
import { Grid, Image } from "../elements";
import CloseIcon from "@mui/icons-material/Close";
import { actionCreators as commentActions } from "../redux/modules/commentReducer";
import { useDispatch } from "react-redux";
import { Text } from "../elements";

export default function CommentContents(props) {
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   return () => {};
  // }, [props]);

  const delComment = () => {
    dispatch(commentActions.delCommentDB(props.id, props.commentId));
  };

  return (
    <Grid is_flex flex_direction="column">
      <Grid
        is_flex
        flex_wrap="wrap"
        align_items="stretch"
        flex_direction="row"
        width="545px"
        padding_left="16px"
        margin="0px 0px 15px 0px"
      >
        <Grid
          margin="0px"
          height="50px"
          is_flex
          flex_direction="column"
          justify_content="start"
        >
          <Image margin="0" shape="circle" src={props.profileImg} size="35" />
        </Grid>

        <Grid width="450px" margin_left="16px">
          <Grid height="auto" is_flex>
            <Text margin="7px 10px 0px 0px" F_size="16px">
              <b width="auto" style={{marginRight:"10px"}}>
                {props.nickname}
              </b>
              {props.comment}
            </Text>
            <CloseIcon
              sx={{ color: "#757575", fontSize: "13px", cursor: "pointer" }}
              onClick={delComment}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
