import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    
    let total = 0;
    
    for(const item of cart){
        
        total = total + item.CourseFee
    }
    return (
        <div className='cart'>
           <h1>Your Cart</h1> 
           <h4>Items Ordered: {cart.length}</h4>
           <ul>
               {
                   cart.map(item => <li>{item.name}</li>)
               }
               <li>Total: ৳{total}</li>
           </ul>
           <button className='btn'>Buy Now</button>
        </div>
    );
};

export default Cart;