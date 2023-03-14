import styled from "styled-components";

export const Block = styled.div`
  height: 87vh;
  width: 100%;
  background: #F3F3F3;
  padding: 30px;
  @media screen and (max-width: 768px) {
      height: auto;
      padding: 10px;
  }
  h3 {
    font-weight: bold;
    margin-top: -20px;
  }
  h5 {
    font-weight: bold;
    text-align: start;
    color: #5e5e5e;
    margin-top: 20px;
  }
  .Our {
    
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
  }
    .CreateDiv {
      height: 99.9%;
      width: 60%;
      background: #fff;
      border-radius: 15px;
      box-shadow: 0px 0px 10px #f0f0f0;
      text-align: center;
      padding: 20px;
      @media screen and (max-width: 768px) {
      width: 100%;
    }
      .NAME{
        height: 60px;
        border: 2px solid #ced4da;
        background-color: white;
        color: black;
      }
      .DESK{
        height: 60px;
        border: 2px solid #ced4da;
        background-color: white;
        color: black;
      }
      .rasm{
        position: absolute;
        left: 450px;
        top: 409px;
      }
      input {
        width: 100%;
        height: 99%;
        border: none;
        border: 2px dotted #ced4da;
        border-radius: 10px;
        font-size: 20px;
        font-weight: 100px;
        outline: none;
        background-color: #f3f5f8;
        color: #F3F5F8;
       
       
      }
      .Input {
        input {
          margin-top: -0px;
        }
      }
      .FileInput {
        width: 100%;
        display: flex;
        height: 300px;
        margin: 20px auto;
        border: 2px dotted #ced4da;
        border-radius: 10px;
        background-color: #f3f5f8;
        justify-content: center;
        
        img {
          width: 50%;
          height: 100%;
        }
        input {
          display: none;
        }
      }
      .imgInput{
        height: 300px;
      }
      
    }
    .AmountDiv {
      width: 35%;
      background-color: #fff;
      border-radius: 15px;
      box-shadow: 0px 0px 10px #f0f0f0;
      padding: 20px;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin-top: 25px;
       
       }
      input {
        width: 100%;
        height: 60px;
        border: none;
        border: 2px solid #ced4da;
        border-radius: 10px;
        font-size: 20px;
        font-weight: 100px;
        outline: none;
      }
      .input1{
        margin-top: 50px;
      }
      h4{
        margin-top: 20px;
      }
      .btn{
        width: 100%;
        height: 60px;
        border-radius: 10px;
        background-color: #4CA85E;
        border: none;
        font-size: 20px;
        font-weight: bold;
        color: white;
        margin-top: 50px;
        
      }
    }
   
  }
`;
