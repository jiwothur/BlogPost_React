import React from 'react';
import './style.css';
import BlogPost from './../../components/BlogPost/index';
import Sidebar from '../../components/Sidebar';

/**
* @author
* @function Post
**/
const Post = (props) => {
  
  return(
    
  <section className="container">
    <BlogPost {...props}/>
    <Sidebar />
  </section>    
 )

 }

export default Post;