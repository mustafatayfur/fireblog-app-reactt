import { createContext, useEffect, useState } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db, readData } from "../helpers/firebase";
import { onValue, ref } from "firebase/database";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [blogsInfo, setBlogsInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const [data, setData] = useState([])

  useEffect(() => {
      readData(setData);
  }, [])
  console.log(data)


// const getBlogs = ref(db, 'blogs/' + postId + '/starCount');
// onValue(getBlogs, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

//   const colRef = collection(db, "blogs");

//   const q = query(colRef)

//   const getBlogs = () => {
//     setIsLoading(true);
//     getDocs(q)
//       .then((snapshot) => {
//         let blogs = [];
//         snapshot.docs.forEach((doc) => {
//           blogs.push({ ...doc.data(), id: doc.id });
//         });
//         console.log(blogs);
//         setBlogsInfo(blogs);
//         setIsLoading(false);
//       })
//       .catch((err) => console.log(err.message));
//   };

  return (
    <BlogContext.Provider value={{ blogsInfo, isLoading }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
