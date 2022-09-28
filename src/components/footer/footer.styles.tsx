import styled from "styled-components";
import {desktop, mediumDesktop, mobile, tablet} from "../../styles/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image:url('/bitmap_2@2x.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  max-width: 100%;
  padding: 20px;
  ${mobile({ height: '100px'})};
  ${mediumDesktop({ height: '200px'})};
  ${desktop({ height: '200px'})};
  ${tablet({ height: '150px'})};
`

export const Wrapper = styled.div`
  ${tablet({ width: '60%'})};
  ${desktop({ width: '67%'})};
  ${mediumDesktop({ width: '75%'})};
`

export const Title = styled.h2`
  color: white;
  font-weight: 400;
  font-size: 23px;
  ${mobile({ fontSize: '15px'})};
  ${tablet({ fontSize: '15px'})};
`

export const DescriptionWrapper = styled.div`
  margin-top: 5px;
  position: relative;
  display: flex;
  align-items: center;
`


export const Description = styled.span`
  font-weight: 400;
  color: ${props => props.theme.palette.primary};
  ${mobile({ fontSize: '12px'})};
  ${tablet({ fontSize: '12px'})};
`

export const Icon = styled.img`
    position: absolute;
    width: 15px;
    ${tablet({ left: '90px',right:     0})};
    ${mobile({ left: '90px',right:     0})};
    ${desktop({ left: '115px',right:     0})};
`