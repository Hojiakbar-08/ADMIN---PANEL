import styled from "styled-components";

export const Block = styled.div`
height: auto;
background:#F3F3F3;
padding: 10px 8px;
.dad-dash{
  @media(min-width: 600px) and (max-width: 762px) {


    width: 100%;
     flex-wrap: wrap;
   }
}
h3{
    margin-left: 17px;
}
 .FirstLine{
    width: 97%;
    margin: auto;
    /* border: 1px solid red; */
    height: 160px;

    
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 762px) {
       flex-wrap: wrap;
       width: 100%;
         }
    .card1{
        height: 98%;
        width: 23%;
        background:white;
        border-radius:10px;
        @media (max-width: 762px) {
            width: 100% !important;    
         }
      .icon{
        width: 40px;
        height: 40px;
        background-color: #EDF6FF;
        display: flex;
        border-radius: 50%;
        align-items: center;
        margin-left: 18px;
        margin-top: 20px;

        i{
            width: 60px;
            font-size: 25px;
            color: #45A5FF;
            background-color: #EDF6FF;
            border-radius: 50%;
            margin-left: 9px;
        }
      }
      .icon2{
        width: 40px;
        height: 40px;
        background-color: #EFECFF;
        display: flex;
        border-radius: 50%;
        align-items: center;
        margin-left: 18px;
        margin-top: 20px;

        i{
            width: 60px;
            font-size: 25px;
            color: #5444FF;
            
            border-radius: 50%;
            margin-left: 9px;
        }
      }
      .icon3{
        width: 40px;
        height: 40px;
        background-color: #FAEBFF;
        display: flex;
        border-radius: 50%;
        align-items: center;
        margin-left: 18px;
        margin-top: 20px;

        i{
            width: 60px;
            font-size: 25px;
            color: #CA36FE;
            
            border-radius: 50%;
            margin-left: 9px;
        }
      }
      .icon4{
        width: 40px;
        height: 40px;
        background-color: #FFECF2;
        display: flex;
        border-radius: 50%;
        align-items: center;
        margin-left: 18px;
        margin-top: 20px;

        i{
            width: 60px;
            font-size: 25px;
            color: #FF3673;
           
            border-radius: 50%;
            margin-left: 9px;
        }
      }
      h4{
        font-weight: bold;
        margin-left: 20px;
        margin-top: 10px;
      }
      .tag{
        width: 90%;
        height: 34px;
        
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h6{
            font-weight: bold;
            margin-top: 5px;
        }

        .sale{
            color: black;
        }
        .icon2{
            width: 33px;
            height: 100%;
            border-radius: 50%;
            background-color: #EDF6FF   ;
            font-weight: bold;
            display: flex;
            align-items: center;
            margin-left: 70px;
            i{
                color: #04BF54;
                margin-left: 7px;
            }
        }
        h6{
            color:#04BF54 ;
        }
      }
    }
    
    
  @media(max-width: 762px) {
    gap: 10px; 
  }

    
  
 }


 table{
   
    img{
      border-radius:10px;
      height: 70px;
    }
 }
 .SecondLine{
      height: 350px;
      width: 97%;
      background-color: #F3F3F3;
      margin: auto;
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      @media (max-width: 420px) {       
           flex-wrap: wrap;
           width: 100%;
           margin-top: 510px;
       }
      .box1{
        width: 63%;
        height: 100%;
        background-color: white;
        border-radius: 10px;
        padding: 20px 20px;
        @media (max-width: 420px) {
         width: 100%;
       }
      
      }
      .box2{
        width: 35%;
        height: 100%;
        background-color: white;
        border-radius: 10px; 
        padding: 20px 20px;
        @media (max-width: 420px) {
         width: 100%;
         margin-top: 20px;
       }
      }
    }

 .ThirtLine{
      height: 350px;
      width: 97%;
      background-color: #F3F3F3;
      margin: auto;
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      @media (max-width: 420px) {       
           flex-wrap: wrap;
           width: 100%;
           margin-top: 390px;
       }
      .box1{
        width: 63%;
        height: 100%;
        background-color: white;
        border-radius: 10px;
        padding: 20px 20px;   
        overflow: hidden;
        overflow: scroll;
        @media (max-width: 420px) {
         width: 100%;
       }
       
      }
      .box2{
        width: 35%;
        height: 100%;
        background-color: white;
        border-radius: 10px; 
        padding: 20px 20px;
        @media (max-width: 420px) {
         width: 100%;
         margin-top: 20px;
       }
      }
      table{
        height: auto;
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
     
      @media (max-width: 420px) {
         border-radius: 3px;
       width: 60px;
       height: 40px;
   }
      }
    }

`