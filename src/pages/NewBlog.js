import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import blogPng from "../assets/blok.png";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../context/BlogContextProvider";
import { useAuth } from "../context/AuthContextProvider";
// import { toastSuccessNotify, toastErrorNotify } from "../utils/ToastNotify";
import BlogForm from "../components/BlogForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    padding: theme.spacing(13),
    backgroundColor: "#2167bb",
  },
  blogImg: {
    width: 200,
  },

  title: {
    fontSize: 35,
    fontFamily: "system-ui",
    color: "#2167bb",
  },
}));

const NewBlog = () => {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const { addBlog } = useBlog();
  const navigate = useNavigate();

  const handler = (newBlog) => {
    try {
      addBlog(newBlog);
      navigate("/");
      // toastSuccessNotify("Blog added");
    } catch (error) {
      // toastErrorNotify("Blog can not be added");
    }
  };

  const blog = {
    author: currentUser.email,
    title: "",
    content: "",
    get_comment_count: 0,
    get_like_count: 0,
    image: "",
    published_date: Date.now(),
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={blogPng} alt="blog" className={classes.blogImg} />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.title}>
          New Blog
        </Typography>
      </div>
      <BlogForm blog={blog} handler={handler} />
    </Container>
  );
};

export default NewBlog;
