import { Input, Pagination, Table } from "antd";
import React, { useEffect, useState } from "react";
import { getUserOrdersState, updateBasket,deleteBasket } from "../../redux/reducer/orders";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { Block } from "./style";

import Basket from "./basket";

function Order() {
  // const [state, setState]= useState([]);

  // const toggle = (index)=>{
  //   setState(prev => {
  //     const nextState = [...prev];
  //     nextState[index] = true;
  //     return nextState;
  //   });
  // }
  const dispatch = useDispatch();
  const { orders, basket } = useSelector((state) => state.orders);
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(getUserOrdersState()); 
  }, []);

  const basketremove = id => {
   dispatch(deleteBasket(id))
  }
  

  const setBasket = item => {
    dispatch(updateBasket(item));
  }

  console.log(orders);
  return (
    <Block>
       <div className="FirstLine">
         <h2>Order</h2>
         <Input type={"date"} />
       </div>
       <div className="SecondLine">
        <input placeholder="select a category" type="number" />
        <button onClick={() => navigate('/basket')}>Basket {basket.length}</button>
       </div>

     <div className="dad-table">
     <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>img</th>
            <th>name</th>
            <th>amount</th>
            <th>price</th>
            <th>date</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td> <img src={item.img ? item.img : '/img/no_Image.png'} width='100' alt="4"/></td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.price}</td>
              <td>{item.date}</td>
              <td  className="icon">
              {basket.some(e => e.id === item.id) ? 
                <button onClick={() => basketremove(item.id)}>        
                  <i className='check bi bi-check'/>
                </button> :
                <button  onClick={() => setBasket(item)}>        
                  <i className='bi bi-cart-fill'/>
                </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </Block>
  );
}

export default Order;
