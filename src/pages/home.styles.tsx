import styled from "styled-components";
import {mobile} from "../styles/responsive";


export const Container = styled.div`
    background: #f9f9f9;
    display: flex;
    padding: 50px 110px;
    flex-direction: column;
    align-items:center ;
    justify-content: center;
    ${mobile({ padding: "10px 20px"})}
`