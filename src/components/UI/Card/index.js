import React from 'react';
import './style.css';

/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    <div className="card" {...props} style={{width:props.width ? props.width:'100%'}}>
        {props.children}
    </div>
   )

 }

export default Card;