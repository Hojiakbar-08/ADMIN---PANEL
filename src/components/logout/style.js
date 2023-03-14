import styled from "styled-components";

export const Block = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #3479BD;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 420px) {
    width: 100%;
    flex-wrap: wrap;
      }
      .bari{
        margin-bottom: 130px;
      }
    .Man{

        @media (max-width: 420px) {
        width: 100%;
      }
        i{
            position: absolute;
            top: 150px;
            left: 717px;
            font-size: 75px;
            color: #EAE9E9;
            @media (max-width: 420px) {
               margin-left: -580px;
            }
        }
    }
    input{
        border: none;
        border-radius: 5px;
        background-color: #CBD2EC;
        width: 300px;
        height: 45px;
        margin-top: 10px;
        padding: 1px 29px;
    }
    button{
        width: 300px;
        border: none;
        border-radius: 5px;
        height: 45px;
        margin-top: 10px;
        background-color: #0A6CB3;
        color: white;
    }
    i{
        position: absolute;
        margin-top: 15px;
        font-size: 22px;
        margin-left: 6px;

    }
 
 `