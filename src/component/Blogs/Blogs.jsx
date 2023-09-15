import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddCoursename}) => {
const [blogs, setBlogs] =useState([]);
useEffect(()=>{
    fetch('course_data.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
},[])

    return (
        <div className="md:w-2/3 grid lg:grid-cols-3 ">
           
           {
            blogs.map(blog => <Blog
                 key={blog.ID}
                  blog={blog}
                   handleAddCoursename={handleAddCoursename}
                  ></Blog>)
           }
        </div>
    );
};
Blogs.propTypes = {
   
    handleAddCoursename:PropTypes.func
}

export default Blogs;