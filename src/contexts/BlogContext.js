import { createContext, useContext, useEffect, useState } from "react";
import { getBlogWithId, readData } from "../helpers/firebase";

export const BlogContext = createContext();
export function useBlog() {
  return useContext(BlogContext);
}

const BlogContextProvider = ({children}) => {
  const [currentBlogs, setCurrentBlogs] = useState();


  function getOneBlog(id) {
    const result = currentBlogs?.filter((item) => item.id === id);
    return result;
  }

  // function deleteOneBlog(id) {
  //   const contactRef = firebaseDB.ref("blogs").child(id);
  //   contactRef.remove();
  // }

  // function updateBlog(id, data) {
  //   const contactRef = firebaseDB.ref("blogs").child(id);
  //   contactRef.update(data);
  // }


  return (
    <BlogContext.Provider value={{ getOneBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;

