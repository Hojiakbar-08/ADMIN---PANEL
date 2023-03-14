import axios from "axios";
import { useState, useEffect } from "react";
import { Block } from "./style";
import {getProductState} from "./../../redux/reducer/products"
import { useDispatch, useSelector } from "react-redux";
import FileBase64 from 'react-file-base64';
import {useNavigate} from 'react-router-dom';
import moment from "moment";

function Create() {
  const dispatch = useDispatch()
  const {product} = useSelector((state)=> state.product)
  const [state, setstate] = useState({});
  const [img, setImage] = useState("");
  const [value, setValue] = useState({id: "",name: "", description: "",amount: "",price: "",});
  console.log(product);
  const navigate = useNavigate()

  useEffect(()=> {
    
    dispatch(getProductState())
  }, [])

  function sendProduct() {
    axios.post("http://localhost:8080/product", {...value, img, date: moment().format('L')}).then((res)=>{
      console.log(res);
      navigate('/products')
    })
    console.log(value);
  } 

  const uploadImage = ({base64}) => {
      // let file = new FormData();
      // file.append('image', item);
      // console.log(base64)
      setImage(base64)   
  }

  console.log(img)

  return (
    <Block>
      
      <h3>Create a new Product</h3>
      <div className="Our">
        <div className="CreateDiv">
          <input
            type="text"
            class="form-control"
            className="NAME"
            placeholder="Prouct Name"
            onChange={(e) => setValue(prev => ({ ...prev, name: e.target.value }))}
          />
          <h5>Description</h5>
          <div className="Input">
            <input
              type="text"
              class="form-control"
              className="DESK"
              placeholder="Write something awesome"
              onChange={(e) => setValue(prev => ({ ...prev, description: e.target.value }))} 
            />
          </div>
          <h5>Add Image</h5>
          <label className="uploadImage" htmlFor="uploadImage" style={{ width: '100%', height: '58%'}}>
          
            <FileBase64 id='uploadImage'  onDone={uploadImage}/>
            {img && <img className="rasm" src={img} width='350' alt='#'/>}
            {/* <input
              type="file"
              id="img"
              onChange={(e) => uploadImage(e.target.files[0])}
              // onChange={(e) =>
              //   setstate((p) => ({
              //     imgurl: URL.createObjectURL(e.target.files[0]),
              //   }))
              // }
            />
            <img src={state?.imgurl} alt="" /> */}
          </label>
        </div>
        <div className="AmountDiv"> 
          <input type="number"
           placeholder="Price" 
           onChange={(e) => setValue(prev => ({ ...prev, price: e.target.value }))} style={{paddingLeft: '10px'}}   />
           
           {/* <input type="number"placeholder="First" style={{paddingLeft: '10px'}} /> */}
          <input className="input1" type="number" style={{paddingLeft: '10px'}}
           placeholder="Amount" 
           onChange={(e) => setValue(prev => ({ ...prev, amount: e.target.value }))}  />
          
          <button className="btn" onClick={sendProduct}>Create Product</button>
        </div>
        
      </div>
    </Block>
  );
}

export default Create;
