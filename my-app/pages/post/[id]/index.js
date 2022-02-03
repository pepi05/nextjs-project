import { CircularProgress } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const PostScreen = ({ post }) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [errorFetchingData, setErrorFetchingData] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  console.log(fetchedData);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setFetchedData(data))
        .catch((error) => setErrorFetchingData(error));
    }
  }, [id]);

  return (
    <div>
      {fetchedData ? (
        <div>
          <h3> {fetchedData.title} </h3>
          <p>{fetchedData.body}</p>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

// export const getServerSideProps = async (context) => {
//   const result = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const post = await result.json();

//   return {
//     props: {
//       post,
//     },
//   };
// };

export default PostScreen;
