import styled from "styled-components";
import {largeDesktop, mobile} from "../../styles/responsive";


type CategoryItemProps = {
    backgroundColor: string;
}

export const CategoryContainer = styled.div<{viewAll: boolean}>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100vw;
    max-width: 100%;
      :after {
        content: "";
        width: ${props => props.viewAll ? '679px' : '449px'};
      }
    ${mobile({ padding: "20px 20px"})};
    ${largeDesktop({ padding: "20px 43px"})};
`

export const CategoryItem = styled.div<CategoryItemProps>`
    flex: 0 0 206px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: ${props => props.backgroundColor};
    cursor: pointer;
    &:hover {
      transition: all .9s;
      background: ${props => props.theme.palette.lightWhite};
      border: 1px solid ${props => props.backgroundColor};
      span {
        color: ${props => props.backgroundColor};
      }
    }
  ${mobile({ flex: '0 0 106px', height: '30px', margin: '5px'})};

  position: relative;
`

export const Title = styled.span`
    color: ${props => props.theme.palette.lightWhite};
    font-weight: 600;
    font-size: 14px;
    text-transform:uppercase;
    ${mobile({ fontSize: '7px'})};
`

export const ViewAllCategoryItem = styled(CategoryItem)`
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
`

export const ViewAllIcon = styled.img<{rotates: boolean}>`
    position: absolute;
    right: 1em;
    transform: rotate(${props => props.rotates ? '180deg' : '0'});
  ${mobile({
    width: '6px', right: '7px'})};
`