import NextLink from "next/link";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const PostItem = ({ post }) => {
  return (
    <Card>
      <NextLink href={`/post/${post.id}`} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`https://picsum.photos/150/200?random=${post.id}`}
            title={post.title}
          ></CardMedia>
          <CardContent>
            <Typography variant="h2">{post.title}</Typography>
            <Typography variant="h6">{post.body}</Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Typography>{post.id}</Typography>
        <Button size="small" color="primary">
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostItem;
