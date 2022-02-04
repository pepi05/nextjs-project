import {
  Button,
  Container,
  TextField,
  FormGroup,
  FormLabel,
  Input,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

export default function CreatePost({ fetchedPosts, setFetchedPosts }) {
  const [form, setForm] = useState({
    userId: 1,
    id: new Date().getUTCMilliseconds(),
    title: "",
    body: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFetchedPosts([...fetchedPosts, { ...form }]);
    setForm({
      userId: 1,
      id: new Date().getUTCMilliseconds(),
      title: "",
      body: "",
    });
  };

  const handleChange = (event) => {
    setForm((state) => {
      return {
        ...state,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <Container>
        <div className="postForm">
          <FormGroup>
            <FormLabel>Post Title</FormLabel>
            <TextField
              type="text"
              placeholder="Enter title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Post Body</FormLabel>
            <TextField
              type="text"
              placeholder="enter post body"
              name="body"
              value={form.body}
              onChange={handleChange}
            />
          </FormGroup>
        </div>
        <Button type="submit">Add</Button>
      </Container>
    </form>
  );
}
