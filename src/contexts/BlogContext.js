import { createContext, useContext, useEffect, useState } from "react";
import { readData } from "../helpers/firebase";

export const BlogContext = createContext();
export function useBlog() {
  return useContext(BlogContext);
}

const BlogContextProvider = (props) => {
 
  const [data, setData] = useState({})
  
  useEffect(() => {
      readData(setData);
    }, [])
  console.log("blogContext data:", data)

  return (
    <BlogContext.Provider value={{ data }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;

