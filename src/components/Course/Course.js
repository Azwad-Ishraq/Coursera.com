import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Course.css'
const Course = (props) => {
    const {CourseFee,by,length,name,img} = props.course;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='course'>
            <img src={img} alt=""/>
           <footer>
           <div className="text">
           <h1>{name}</h1>
            <h2>{CourseFee}৳</h2>
            <h5>By: {by}</h5>
            <h4>Course: {length}H</h4>
            <button onClick={()=> props.handleAddToCart(props.course)} className='btn'>{cartIcon}  Add To Cart</button>
           </div>
           </footer>
        </div>
    );
};

export default Course;