import styled from "styled-components";

export const Container = styled.ul<{'isOpen': boolean}>`
        background-color: white;
        display: ${props => props.isOpen ? "flex" : "none"};
        position: absolute;
        flex-direction: column;
        top:63px;
        width: 200px;
        justify-content: center;
        align-items: flex-end;
        border-radius: 5px;
        padding-top: 10px;
        padding-left: 5px;
        padding-bottom: 5px;
        z-index: 10;

          @media screen and (max-width: ${props => props.theme.mediaQueries.mobile}) {
            position: absolute;
            
          }
        
  
        li{
          width: 190px;
          height: 20px;
          margin: 0 8px 7.5px;
          background-color: white;
          font-weight: 400;
          &:hover {
            background-color: white;
          }
          a {
            color: ${props => props.theme.palette.lightDark};
            &:hover {
              color: ${props => props.theme.palette.primary};
              background-color: white;
            }
          }
        }
        
`
export const MenuItem = styled.li`
`

export const Line = styled.hr`
      color:gray;
      width: 90%;
      margin: 0 13px 7.5px;
`

export const Image = styled.img`
      transform: rotate(180deg);
      position: absolute;
      top:-7px;
      right: 18px;
`

