import { createContext, useContext, useEffect, useState } from "react";
import { readData } from "../helpers/firebase";

export const BlogContext = createContext();
export function useBlog() {
  return useContext(BlogContext);
}

const BlogContextProvider = (props) => {
  const [blogsInfo, setBlogsInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const [data, setData] = useState([])
  


  useEffect(() => {
      readData(setData);
    }, [])
    
    // console.log(data)


  return (
    <BlogContext.Provider value={{ blogsInfo, isLoading,data }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;

