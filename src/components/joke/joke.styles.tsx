import styled from "styled-components";
import {desktop, mediumDesktop, mobile, tablet} from "../../styles/responsive";


export const Container = styled.div`
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      width: 85%;
      padding-bottom: 0;
      ${mobile({ marginTop: "0px"})};
      ${mediumDesktop({ width: '73vw'})};
      
`

export const Line = styled.hr`
      width: 100%;
      margin-left: 10px;
      height: 1px;
      border: none;
      ${mobile({ marginLeft: '0'})}
  
`

export const Capsule = styled.span`
      padding: 3px 10px;
      border-radius: 10px;
      background-color: #58e28f;
      text-transform: uppercase;
      position: absolute; 
      color: ${props => props.theme.palette.lightWhite};
      font-size: 13px;
      left: 10px;
      top: 2px;
      
      ${mobile({ fontSize: '7px', left: '1px'})};
`


export const Wrapper = styled.div`
      margin-left: 10px;
      margin-top: 40px;
      display: grid;
      align-items: center;
      grid-template-columns: repeat(3,minmax(240px,1fr));
      grid-auto-columns: 200px;
      gap: 1rem;
      ${mobile({ gridTemplateColumns: 'repeat(1,242px)', marginLeft: '0px'})};
      ${tablet({ gridTemplateColumns: 'repeat(2,210px)', marginLeft: '0px'})};
      ${desktop({ gridTemplateColumns: 'repeat(3,215px)', marginLeft: '0px'})};
      ${mediumDesktop({ gridTemplateColumns: 'repeat(3,360px)', marginLeft: '0px'})};
      
`

export const Box = styled.div`
      border:1px solid ${props => props.theme.palette.white2};
      padding: 16px;
      //height: 254px;
      background: white;
      display: flex;
      flex-direction: column;
      ${mobile({ height: '160px', fontSize: '7px'})};
      ${tablet({ height: '200px', fontSize: '7px'})};
      ${desktop({ height: '200px', fontSize: '7px'})};
      ${mediumDesktop({ height: '260px', fontSize: '7px'})};
`

export const Description = styled.div`
      margin: 6px 0 32px;
      font-size: 14px;
      font-weight: 400;
      height: 154px;
      width: 328px;
      color: ${props => props.theme.palette.gray};
      line-height: 1.57;
      ${mobile({ width: '190px',fontSize: '7px', lineHeight: '1.4'})};
      ${tablet({ width: '180px',fontSize: '10px', lineHeight: '1.4'})};
      ${desktop({ width: '180px',fontSize: '10px', lineHeight: '1.4'})};
      ${mediumDesktop({ width: '328px',height: '154px',fontSize: '14px', lineHeight: '1.57'})};
      overflow: hidden;
`

export const TitleWrapper = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
`

export const Title = styled.h2`
      font-size: 16px;
      font-weight: 600;
      color: ${props => props.theme.palette.gray};
      line-height: 1.25;
      text-transform: uppercase;
      ${mobile({ fontSize: '10px'})};
      ${tablet({ fontSize: '12px'})};
      ${desktop({ fontSize: '12px'})};
      ${mediumDesktop({ fontSize: '16px'})};
`

export const Icon = styled.img`
      width: 9px;
      height: 14px;
      margin-right: 5px;
      ${mobile({ width: '6px',height: '10px', marginRight: '3px'})};
`

export const StatLink = styled.span`
      font-size: 14px;
      font-weight: 600;
      color: ${props => props.theme.palette.primary};
      ${mobile({ fontSize: '10px'})};
`

export const ButtonTitle = styled.span`
    color: ${props => props.theme.palette.lightWhite};
    font-weight: 600;
    font-size: 14px;
    text-transform:uppercase;
    ${mobile({ fontSize: '7px'})};
`

export const ViewAllJokes = styled.div<{backgroundColor: string}>`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      background: ${props => props.backgroundColor};
      cursor: pointer;
      position: relative;
      &:hover {
            transition: all .9s;
            background: ${props => props.theme.palette.lightWhite};
            border: 1px solid ${props => props.backgroundColor};
            span {
                  color: ${props => props.backgroundColor};
            }
      }
    border: 1px solid ${props => props.theme.palette.primary};
      &:hover {
        span {
          color: ${props => props.theme.palette.lightWhite};
        }
        background: ${props => props.theme.palette.primary};
      }
    
    span {
      color: ${props => props.theme.palette.primary};
    }
      ${mobile({ 
            width: '106px', height: '30px', margin: '5px'})};
      ${tablet({
            width: '206px', height: '50px', margin: '5px'})};
      ${desktop({
            width: '206px', height: '50px', margin: '5px'})};
`

export const ViewAllIcon = styled.img<{rotates: boolean}>`
    position: absolute;
    right: 1em;
    transform: rotate(${props => props.rotates ? '180deg' : '0'});
      ${mobile({ 
            width: '6px', right: '7px'})};
`

export const ButtonContainer = styled.div`
    display: flex;
      justify-content: center;
      align-items: center;
      margin: 1em;
`

