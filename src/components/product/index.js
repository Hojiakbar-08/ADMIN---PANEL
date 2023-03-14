import { Input, Pagination, Table } from "antd";
import React, { useEffect, useState } from "react";
import { getProductState,deleteProduct,editProduct } from "../../redux/reducer/products";
import { useDispatch, useSelector } from "react-redux";
import { Block } from "./style";
import { useNavigate } from "react-router-dom";
import {  Modal,} from 'antd';
import 'antd/dist/antd.css';

import FileBase64 from 'react-file-base64';


function Product() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState("")
  const [value, setValue] = useState('')
  const [editImage, setEditImage] = useState('')
  const startEdit = (data) => {
    setOpen(true);
    setValue({id: data.id, name:data.name, img:data.img, price:data.price, amount:data.amount, date:data.date})
    console.log(value);
  };
  const hideModal = () => {
    setOpen(false);
  };
 
  function Submit() {
    dispatch(editProduct({...value, img:editImage}))
    setOpen(false);
  }

  useEffect(() => {
    dispatch(getProductState());
  }, []);
 
  const uploadImage = ({base64}) => {
    setEditImage(base64)   
}
function foo(e) {
  console.log(e.target);
}

  console.log(product);
  return (
    <Block>
      <div className="FirstLine">
         <h2>Product</h2>
         <Input type={"date"} />
      </div>
      <div className="SecondLine">
        <input placeholder="select a person" type="text" />
        <button 
          onClick={() => 
          navigate('/create')}>
          + Add Product
        </button>
       </div>


       <>
      
      <Modal
        className="mODAL"
        title="Modal"
        open={open}
        onOk={Submit}
        onCancel={hideModal}
        okText="Edit"
        cancelText="Cencel"
      >
       
        <div className="ryad1">
           <input placeholder="name" value={value.name} type="text" onChange={(e)=> setValue((prev)=> ({...prev, name: e.target.value }))} />
           <input className="input01" value={value.price} placeholder="price" type="number" onChange={(e)=> setValue((prev)=> ({...prev, price: e.target.value }))} />
        </div>
        <div className="ryad2">
           <input placeholder="amount" type="number" value={value.amount} onChange={(e)=> setValue((prev)=> ({...prev, amount: e.target.value }))} /><br/>
           <label className="uploadImage" htmlFor="uploadImage" style={{ width: '100%', height: '58%'}}>
          
          <FileBase64 id='uploadImage'  onDone={uploadImage}/>
          {setEditImage && <img className="rasm" src={editImage} width='350' alt='#'/>}
        </label>
        </div>
      </Modal>
    </>

    <div className="tab-dad">
    <table class="table">
        <thead>
          <tr>
            <th>N</th>
            <th>Img</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><img src={item.img ? item.img : '/img/no_Image.png'} width='100' alt="4"/></td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.price}</td>
              <td>{item.date}</td>
              <td>
                <button className="btn1" onClick={()=> startEdit(item)}> <i className='bi bi-pen' /> </button>
                <button className="btn2" onClick={()=> dispatch(deleteProduct(item.id))}> <i className='bi bi-x' /> </button>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
     
    </Block>
  );
  
}

export default Product;
