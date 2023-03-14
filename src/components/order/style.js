import styled from "styled-components";

export const Block = styled.div`
background-color: #F3F3F3;
padding: 10px 40px;
@media (max-width: 420px) {
      padding: 10px 15px;
    }
 .FirstLine{
    width: 97%;
    margin: auto;
    height: 60px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
   
h2{
font-size:35px ;
}
input{
    width: 200px;
    height: 50px;
    background-color:#45A5FF;
    border-radius: 15px;
    color: white;
    font-size: 20px;
    @media (max-width: 420px) {
     width: 130px;
     font-size: 15px;
   }
}
 }
 .SecondLine{
    width: 97%;
    margin: auto;
    height: 60px;
   
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   input{
    width: 250px;
    height: 40px;
    border: 2px solid #DCDCDC;
    border-radius: 5px;
    color: #DCDCDC;
    @media (max-width: 420px) {
     width: 135px;
     font-size: 15px;
   }
   }
   button{
    height: 45px;
    width: 200px;
    color: white;
    font-weight: bold;
    background-color: #ED774D;
    border: none;
    border-radius: 10px;
    @media (max-width: 420px) {
     width: 130px;
     font-size: 15px;
   }
   }

 }
 .dad-table{
   overflow: scroll;
   margin-top: 50px;
 }
 table{
   
   th{
      @media (max-width: 420px) {
    font-size: 10px;
      }
    }
    td{
      @media (max-width: 420px) {
    font-size: 10px;
      }
    }
   

   .icon{
   width: 50px;
   height: 50px;
   
      i{
      color: #424242;
      /* margin-left: 5px; */

       }
       
   }
   img{
      border-radius:10px ;
      height: 70px;
      margin-left: -30px;
      @media (max-width: 420px) {
         border-radius: 3px;
       width: 60px;
       height: 40px;
   }
   button{
      border: none;
      border-radius:5px;
      height: 40px;
      width: 40px;
      background: #A5DEDE ;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   .check{
      margin-left: -2px;
      font-size: 30px;
      
   }
 }
 .btn1{
    background-color: orange;
    border: none;
    border-radius: 5px;
    font-weight: bold;
 }
 .btn2{
    background-color: red;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    margin-left: 20px;
 }

`