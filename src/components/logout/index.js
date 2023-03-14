
import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import { Block } from "./style";
import { checkLogin } from "../../redux/reducer/login";


function Logout() {
  const {login} = useSelector(state => state.Login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState({});

  const sign = () => {
    const {email, password} = value;
    if (email === login?.email && password === login?.password) {
      navigate("/");
    } else {
      alert("Login yoki parol xato")
    }
  }

  useEffect(() => {
    dispatch(checkLogin());
  }, []);

  const changeInput = (e) => {
    setValue(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  return (
    <Block>
      <div className="Man">
      <i className="Man" class="bi bi-people-fill"></i>
      </div>
      {login?.id ?
      
      <div className="bari">
        <i class="bi bi-lock-fill"></i>
        <input name="email" onChange={changeInput}  placeholder="  user@gmail.com"/> <br/>
        <i class="bi bi-person-fill"></i>
        <input name="password" onChange={changeInput} placeholder=" 12345"/> <br/>
        <button onClick={sign}>LOGIN </button>
      </div> : <h1> Loading . . .  </h1> }
    </Block>
  );
}

export default Logout;
