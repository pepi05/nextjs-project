import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
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

const Home = ({ posts }) => {
  return (
    <Layout>
      <div>
        <h1>Posts:</h1>
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item md={4} key={post.title}>
              <Card>
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
                <CardActions>
                  <Typography>{post.id}</Typography>
                  <Button size="small" color="primary">
                    Read more
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );
  const posts = await result.json();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
