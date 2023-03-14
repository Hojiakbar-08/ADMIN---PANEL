import styled from "styled-components";

export const LayOut = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
export const NavbarMobil = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-content: center;
  display: none;
  align-items: center;
  z-index: 9999999;
  @media screen and (max-width: 420px) {
    display: flex;
    background-color: white;
    font-size: 19px;

  }
`;
export const NavbarLeft = styled.div`
  height: 100vh;
  width: 230px;
  top: 0;
  left: 0;
  border-right: 1px solid #e1e1e1;

  @media screen and (max-width: 420px) {
    display: none;
  }
  .name {
    width: 100%;
    height: 70px;
    padding: 10px 30px;
    h1 {
      text-transform: uppercase;
      font-weight: bold;
    }
  }
  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    span {
      border-radius: 10px;
      width: 90%;
      padding: 15px;
      margin: 10px 0;
      font-size: 18px;
      font-weight: bold;
      color: grey;
      cursor: pointer;
      transition: 0.5s;
      i {
        margin: 0 5px;
      }
      &:hover {
        background: #e1e1e199;
      }
    }
  }
  .active {
    background: #ebf6fe;
    color: #2da5ff;
  }
  .foot {
    position: absolute;
    bottom: 30px;
    left: 10px;
    span {
      border-radius: 10px;
      width: 90%;
      padding: 15px;
      margin: 0 40px;
      font-size: 18px;
      font-weight: bold;
      color: grey;
      cursor: pointer;
      transition: 0.5s;
      i {
        margin: 0 5px;
      }
      &:hover {
        background: #e1e1e199;
      }
    }
  }
`;
export const Block = styled.div`
  width: calc(100% - 230px);
`;
export const NavbarTop = styled.div`
  height: 70px;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;

  div {
    width: 300px;
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
  }
  .user {
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;

    span {
      height: 50px;
      width: 50px;

      border-radius: 50%;
      margin: 0 10px;
      display: flex;
      align-items: center;
      background: yellow;
      justify-content: center;
      i {
        font-size: 50px;
      }
    }
  
    .title {
      padding: 8px 0;
      width: 120px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  } 
   @media screen and (max-width: 420px) {
   input {
    width: 80vw !important;
    /* border: 1px solid red; */
   }
      .user {
        display: none;
      }
    }
`;
export const Component = styled.div`
  overflow: scroll;
  height: calc(100vh - 90px);
  &::-webkit-scrollbar {
    background: #e3e3e3;
    width: 10px;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffffff;
  }
  @media (max-width: 420px) {
    width: 100vw;
  }
`;
