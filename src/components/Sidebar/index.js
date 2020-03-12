import React,{useState,useEffect} from 'react';
import './style.css'
import Card from './../UI/Card/index';
import data from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  const [posts,setPosts] = useState([]);
  
  useEffect(()=>{
    const posts = data.data;
    setPosts(posts);
    },posts);

  return(
    <div className="sidebarContainer">
      <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img src="https://file.instiz.net/data/file/20130112/d/9/8/d98f533e68b6bc642456603640379174"alt=" "/>
        </div>
        <div className="cardBody">
          <p className="personalBio">My name is Ji Woon Jung.</p> 
          <p className="personalBio">I am a software developer specialization in Frond end development</p>
        </div>
      </Card>
     
      <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
        <div className="cardBody">
          <p></p>
        </div>
      </Card>
      

      <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>

      <div className="cardHeader">
         <span>Recent Posts</span>
        </div>
        <div className="recentPosts">
          {
            posts.map(post=>{
              return (
                <NavLink to={`/post/${post.id}`}> 
                  <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                  </div>
                </NavLink>
              );
            })
          }
        </div>
      </Card>
    </div>
    )
 }

export default Sidebar;