import React from 'react';
class CartItem extends React.Component{
    render(){
        return (
            <div className='cart-item'>
           <div className='left-block'>
               <img/>
           </div>
           <div className='right-block'>
               <div>Phone</div>
               <div>Rs 99</div>
               <div>Qty:1</div>
               <div className='cart-item-actions'>
                   {/* {buttons} */}
               </div>
           </div>
            </div>
        );
    }
}
export default CartItem;