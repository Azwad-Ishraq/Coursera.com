import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses,setCourses] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])
    const handleAddToCart = (product) => {
        
        const newCart =[...cart, product]
        setCart(newCart);
    }
    return (
        <div className='container'>
          
          <div className="courses">
          {
              courses.map(course => <Course course={course} handleAddToCart={handleAddToCart}></Course>)
          }
          </div>
          <div className="cart-container">
              <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Courses;