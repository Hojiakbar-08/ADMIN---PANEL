import styled from "styled-components";

export const Block = styled.div`
width: 100%;
height: 87.5vh;
background-color: #F3F3F3;
@media (max-width: 420px) {
       height: auto !important;
       margin-bottom: 30px;
    }
overflow: scroll;
::-webkit-scrollbar{
    width: 0;
}

.line{
    display: flex;
    padding: 15px 30px;
    justify-content: space-between;
    align-self: start;
    align-items: center;
   
    
    input{
        width: 200px;
    }
}
.cards{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 31px;
    justify-content: center;
     @media (max-width: 420px) {
       margin-bottom: 20px;
    }
    
}
.card{
    @media (max-width: 420px) {
       width: 90%;
    }
    height: 400px;
    width: 30%;
    box-shadow: 0px 0px 5px gray;
    margin-top: 10px;
    border-radius: 20px;
    text-align: center;
    overflow: hidden;
    
    .nav{
        width: 100%;
        height: 35%;
        background-color: #6CAEF3;
        .times{
            width:86%;
            margin: auto;
            height: 35px;
            
            display: flex;
            align-items: center;
            
            justify-content: space-between;
            .date{
                height: 100%;
                width: 45%;
                background-color:white ;
                border-radius: 5px;
                
                i{
                    font-size: 20px;
                    color: blue;
                    margin-left:10px;
                }
            }
            .time{
                height: 100%;
                width: 45%;
                background-color:white ;
                border-radius: 5px;
               
                i{
                    font-size: 20px;
                    color: blue;
                    margin-left:10px;
                    
                }
            }
        }
        i{
            font-size: 60px;
            color: white;
            margin: auto;
        }
    }
    .tab{
      overflow: scroll;
      height: 70%;
      
    }
}
`