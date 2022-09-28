import styled from "styled-components";

type WrapperPropsType = {
    hamburgerOpen: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 57px;
  justify-content: flex-end;
  align-items: center;
  background-color: ${props => props.theme.palette.dark};
  position: relative;
  width: 100vw;
  max-width: 100%;
`
export const Wrapper = styled.ul<WrapperPropsType>`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin-right: 9em;

  @media screen and (max-width: 760px) {
    z-index: 1;
    margin-right: 0;
    display: ${props => props.hamburgerOpen ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    text-align: left;
    background-color: ${props => props.theme.palette.dark};
    color: black;
    margin-top: 0;
    padding: 2rem;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    
    li {
      margin: 10px;
    }
    
  }
  
  li {
    font-size: 13px;
    font-weight: 600;
    width: 200px;
    height: 57px;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    transition: all .9s;
    
    


    &:hover {
      background-color: ${props => props.theme.palette.primary};
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.palette.white};
    }
  }
  
  li:last-child{
    a{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    span {
      padding-left: 8px;
      padding-right: 25px;
    }
    padding: 0;

    @media screen and (max-width: 760px) {
        position: relative;
    }
    
  }
`

export const HamburgerContainer = styled.div`
  display: none;
  z-index: 6;

  @media screen and (max-width: 760px) {
    display: flex;
    margin-right: 1em;
    z-index: 6;
  }
`