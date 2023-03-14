import styled from "styled-components";

export const Block = styled.div`
padding: 10px 40px;
background-color: #F3F3F3;

@media (max-width: 420px) {
       width: 100%;
       padding: 10px 10px;
       height: auto;
      
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
   @media (max-width: 420px) {
     
     font-size: 35px;

   }
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
     width: 130px;
     font-size: 15px;
   }
   }
   button{
    height: 45px;
    width: 250px;
    color: white;
    font-weight: bold;
    background-color:#45A5FF;
    border: none;
    border-radius: 10px;
    @media (max-width: 420px) {
     width: 130px;
     font-size: 15px;
   }
   }
   
    
   

 }
 .tab-dad{
   
   overflow: scroll;
   @media (max-width: 420px) {
     
       width: 100%;
       .btn1{
         height: 30px;
         width: 30px;
         font-size: 10px;
       }
       .btn2{
         height: 30px;
         width: 30px;
         font-size: 10px;
        
       }
    }
 }
 table{
    margin-top: 50px;
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
    img{
      border-radius:10px;
      height: 70px;
      @media (max-width: 420px) {
         border-radius: 3px;
       width: 60px;
       height: 40px;
      }
    }
 }
 .btn1{
    height: 50px;
    width: 50px;
    background-color: orange;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 28px;
    color: white;
 }
 .btn2{
    height: 50px;
    width: 50px; 
    background-color: red;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 28px;
    margin-left: 20px;
    color: white;
    
 }

`