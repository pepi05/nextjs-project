import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import PostItem from "./PostItem";

const PostsList = ({ posts }) => {
  return (
    <div>
      <h1>Posts:</h1>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item md={4} key={post.title}>
            <PostItem post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PostsList;
