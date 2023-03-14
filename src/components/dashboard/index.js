import { Input, Pagination, Table } from "antd";
import React, { useEffect,  } from "react";
import { getProductState, } from "../../redux/reducer/products";
import { useDispatch, useSelector } from "react-redux";
import { Block ,DemoColumn} from "./style";
import DemoColumnChart from "./colum";
import Line from './line';
import Bal from "./bal"
import orders from "../../redux/reducer/orders";



function Dashboard() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductState());
  }, []);

  console.log(product);
  return (
    <Block>
    <div className="dad-dash">
    <h3>Dashboard</h3>
      <div className="FirstLine">
         <div className="card1">
            <div className="icon">
            <i className='bi bi-tag-fill' />
            </div>
            <h4>$0</h4>
            <div className="tag">
              <h6 className="sale">Today Sales</h6>
             <div className="icon2">
             <i class="bi bi-arrow-up-right"></i>
             </div>
              <h6>+ 0%</h6>
            </div>
         </div>
         <div className="card1">
         <div className="icon2">
         <i class="bi bi-currency-dollar"></i>
            </div>
            <h4>$0</h4>
            <div className="tag">
              <h6 className="sale">Today Sales</h6>
             <div className="icon2">
             <i class="bi bi-arrow-down-right"></i>
             </div>
              <h6>-10%</h6>
            </div>
         </div>
         <div className="card1">
         <div className="icon3">
         <i class="bi bi-people-fill"></i>
            </div>
            <h4>$0</h4>
            <div className="tag">
              <h6 className="sale">Today Sales</h6>
             <div className="icon2">
             <i class="bi bi-arrow-up-right"></i>
             </div>
              <h6>+ 0%</h6>
            </div>
         </div>
         <div className="card1">
         <div className="icon4">
         <i class="bi bi-cart-fill"></i>
            </div>
            <h4>$0</h4>
            <div className="tag">
              <h6 className="sale">Today Sales</h6>
             <div className="icon2">
             <i class="bi bi-arrow-up-right"></i>
             </div>
              <h6>+ 0%</h6>
            </div>
         </div>
      </div>



    <div className="SecondLine">

      <div className="box1">
            <DemoColumnChart/>
      </div>

      <div className="box2">
        <Line/>
      </div>
          
    </div>  





    <div className="ThirtLine">

    <div className="box1">
    <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>img</th>
            <th>name</th>
            <th>amount</th>
            <th>price</th>
            <th>date</th>
            
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td> <img className="img" src={item.img ? item.img : '/img/no_Image.png'} width='100' alt="4"/></td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.price}</td>
              <td>{item.date}</td>
              <td className="icon">
             
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
  
        <div className="box2">
         <Bal/>
        </div>
          
    </div>  
    
    </div>
      
    </Block>
  );
}

export default Dashboard;
