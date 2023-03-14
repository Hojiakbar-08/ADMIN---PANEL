import styled from "styled-components";

export const Box = styled.div`
   width: 100%;
   height: 90vh;
   background-color: #F3F3F3;
   @media (max-width: 420px) {
     height: auto;
   }
   
   h1{
    margin-left: 30px;
   }
   .Our{
    width: 95%;
    height: 500px;
    
    margin: auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 420px) {
    flex-wrap: wrap;
    height: auto;
   }
    .Box1{
      
        width: 70%;
        height: 100%;
        border: 2px solid #C0C0C0;
        background: white;
        border-radius: 10px;
        padding: 10px 10px;
        overflow: scroll;
        @media (max-width: 420px) {
     width: 100%;
     font-size: 15px;
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
    img{
      border-radius:10px;
      height: 70px;
      @media (max-width: 420px) {
         border-radius: 3px;
       width: 60px;
       height: 40px;
      }
    }
            img{
                border-radius: 5px;
            }
           tbody{
            i{
                font-size: 30px;
                color: red;
                @media (max-width: 420px) {
                     font-size: 20px;
                 }
                
            }
           }
        }
    }
    .Box2{
        width: 28%;
        height: 300px;
        background: white;
        border: 2px solid #C0C0C0;
        border-radius: 10px;
        @media (max-width: 420px) {
          width: 100%;
          margin-top: 30px;
        }
        
        .totle{
            margin-left: 20px;
        }

        h3{
            margin-left: 20px;
        }

        .btn1{
            width: 120px;
            border: 2px solid red;
            border-radius: 3px;
            margin-top: 30px;
            margin-left: 20px;
            color: red;
            background: white;
        }
        .btn2{
            width: 120px;
            border: 2px solid #89B0D8;
            border-radius: 3px;
            margin-left: 60px;
            color: #89B0D8;
            background: white;
        }
    }
   }
 `