import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import placeholder from "../assets/placeholder.png";
import AccountCircle from "@material-ui/icons/AccountCircle";
import moment from "moment";
import { useBlog } from "../context/BlogContextProvider";
import { useAuth } from "../context/AuthContextProvider";
import Button from "@material-ui/core/Button";
import { useNavigate, useParams } from "react-router-dom";
// import { toastSuccessNotify } from "../utils/ToastNotify";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    marginBottom: 20,
  },
  cardRoot: {
    minWidth: 250,
    width: "40vw",
    // maxWidth: 700,
  },
  media: {
    // minHeight: "30vh",
    height: "0",
    paddingTop: "56.25%", // 16:9
  },
  image: {
    padding: 3,
  },
  avatar: {
    marginBottom: "0.35em",
  },
  cardContent: {
    backgroundColor: "#efeefe",
    minHeight: "200px",
    textAlign: "left",
  },
  title: {
    fontFamily: "system-ui",
    textAlign: "left",
    margin: 20,
    color: "#2167bb",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20,
  },
  dataStyle: {
    textAlign: "left",
  },
});

const Detail = () => {
  const {id}= useParams()
  const classes = useStyles();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const { getOneBlog, deleteOneBlog } = useBlog();
  const result = getOneBlog(id);
  console.log("Result:",result);

  const deleteHandler = (id) => {
    deleteOneBlog(id);
    navigate("/");
    // toastSuccessNotify("Deleted successfully!");
  };

  const updateHandler = (id) => {
    navigate(`/updateBlog/${id}`);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4" noWrap>
        Details
      </Typography>
      {result?.length > 0 &&
        result?.map((item, index)=> {
          if(item.id === id){
            return (
            <div key={index}>
              <Card className={classes.cardRoot}>
                <div>
                  <CardMedia
                    className={classes.media}
                    image={item.image || placeholder}
                    title={item.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.dataStyle}
                    >
                      {moment(item.published_date).format("MMM DD, YYYY")}
                    </Typography>
                    <p>{item.content}</p>
                  </CardContent>
                </div>
                <CardActions>
                  <AccountCircle className={classes.avatar} />
                  <Typography gutterBottom variant="h6" component="h2">
                    {item.author}
                  </Typography>
                </CardActions>
                <CardActions>
                  <IconButton
                    aria-label="add to favorites"
                    className={classes.image}
                  >
                    <FavoriteIcon
                      color={item.get_like_count > 0 ? "secondary" : "disabled"}
                    />
                  </IconButton>
                  <Typography variant="body2" color="textSecondary">
                    {item.get_like_count}
                  </Typography>
                  <IconButton
                    aria-label="comment count"
                    className={classes.image}
                  >
                    <ChatBubbleOutlineIcon />
                  </IconButton>
                  <Typography variant="body2" color="textSecondary">
                    {item.get_comment_count}
                  </Typography>
                </CardActions>
              </Card>
              {item.author === currentUser?.email && (
                <div className={classes.buttonGroup}>
                  <Button
                    variant="contained"
                    color="primary" 
                    onClick={() => updateHandler(item.id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteHandler(item.id)}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </div>
            )
            
          }
             return item    
        }
         
        )}
    </div>
  );
};

export default Detail;
