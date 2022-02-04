import {
  CardMedia,
  CircularProgress,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";

const PostScreen = ({ post }) => {
  // const [fetchedData, setFetchedData] = useState(null);
  // const [errorFetchingData, setErrorFetchingData] = useState(null);
  // const router = useRouter();
  // const { id } = router.query;

  // console.log(fetchedData);

  // useEffect(() => {
  //   if (id) {
  //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //       .then((response) => response.json())
  //       .then((data) => setFetchedData(data))
  //       .catch((error) => setErrorFetchingData(error));
  //   }
  // }, [id]);

  return (
    <>
      <Layout title={post.title}>
        <div>
          <Link href="/">Back to posts</Link>
          <hr />
        </div>

        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <CardMedia
              component="img"
              image={`https://picsum.photos/150/200?random=${post.id}`}
              title={post.title}
              width={600}
              height={600}
            ></CardMedia>
          </Grid>
          <Grid item md={3} xs={12}>
            <List>
              <ListItem>
                <Typography variant="h5">Title: {post.title}</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h5">Body: {post.body}</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h5">
                  Created by (user id): {post.userId}
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const post = await result.json();

  return {
    props: {
      post,
    },
  };
};

export default PostScreen;
