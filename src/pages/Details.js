/** @format */

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  cardActionsClasses,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../contexts/BlogContextProvider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextProvider";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("deatails id:",id)
  const { data } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);

  console.log("details data:", data);

  return (
    <div className='details'>
      {!currentUser ? (
        navigate("/login")
      ) : (
        <div>
          {data.map((doc, index) => {
            console.log("details doc.id:", doc.id)
            if (doc.id === id) {
              // console.log(doc);
              const { _document } = doc;

              const items = _document.data.value.mapValue.fields;
              // console.log(items)
              const {
                author,
                comments,
                content,
                get_like_count,
                image,
                published_date,
                title,
              } = items;

              const slicedDate = published_date.timestampValue.slice(0, 10);
              return (
                  <div key={index}>
                  <Card sx={{ maxWidth: 845 }} className='card'>
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        height='540'
                        image={image.stringValue}
                        alt='blog image'
                      />
                      <CardContent sx={{ background: "#EFEEFE", height: "auto" }}>
                        <Typography gutterBottom variant='h5' component='div'>
                          {title.stringValue}
                        </Typography>
                        <Typography>{slicedDate}</Typography>
                        <Typography variant='body2' color='text.secondary'>
                          {content.stringValue}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <Typography gutterBottom variant='h6' component='div'>
                      <AccountCircleIcon
                        sx={{ mr: "10px", mb: "-5px", ml: "0px" }}
                      />
                      <span>{author.stringValue}</span>
                    </Typography>
                    <CardActions>
                      <Button>
                        <FavoriteBorderIcon />
                        <span>{get_like_count.integerValue}</span>
                      </Button>
                      <Button>
                        <ChatBubbleOutlineIcon />
                        <span>
                          {comments.mapValue.fields.commemt_count.integerValue}
                        </span>
                      </Button>
                      <div className='detail-button'>
                        <button
                          onClick={() =>
                            navigate(`/updateBlog/${id}`, { state: { doc } })
                          }>
                          Update
                        </button>
                        <button
                        // onClick={() => editInfo(result.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </CardActions>
                  </Card>
                  </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Details;
