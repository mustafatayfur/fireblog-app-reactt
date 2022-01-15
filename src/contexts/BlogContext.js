import { createContext, useContext, useEffect, useState } from "react";
import { readData } from "../helpers/firebase";

export const BlogContext = createContext();
export function useBlog() {
  return useContext(BlogContext);
}

const BlogContextProvider = (props) => {
 
  const [data, setData] = useState({})
  const [title, setTitle] = useState("")
  
  useEffect(() => {
      readData(setData);
    }, [])
  
    
    console.log(data)
   
     const getData= ()=> {
      data.map((doc)=>{
        const { _document } = doc
        // console.log("doc",doc)
      
        const items = _document.data.value.mapValue.fields 
        // console.log(items)
        const { content, get_like_count, image, published_date, title} = items
        setTitle(title)
        const slicedDate = published_date.timestampValue.slice(0,10)
       
      })
     } 
     
     getData()
   console.log(title)


  return (
    <BlogContext.Provider value={{ data, title }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;

