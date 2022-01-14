import { createContext, useEffect, useState } from "react";
import { getBlogWithId, readData } from "../helpers/firebase";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [blogsInfo, setBlogsInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const [data, setData] = useState([])
  const [id, setId] = useState()


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

