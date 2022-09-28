import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image:url('/bitmap@2x.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    max-width: 100%;
    height: 340px;
    z-index: 1;
    @media screen and (max-width: ${props => props.theme.mediaQueries.mobile}) {
      height: 200px;
    }
`
export const Title = styled.h2`
    text-align: center;
    font-size: 48px;
    font-weight: 400;
    color: ${props => props.theme.palette.primary};
    height: 72px;
    line-height: 1.5;
    margin-top:-59px;
      
    @media screen and (max-width: ${props => props.theme.mediaQueries.mobile}) {
          font-size: 28px;
          margin-top: -25px;
          height: 45px;
      } 
  
`

export const Description = styled.span`
    color: white;
    font-weight: 400;
    font-size: 23px;
    padding: 10px;
  
      @media screen and (max-width: ${props => props.theme.mediaQueries.mobile}) {
        font-size: 13px;
      }
`

export const SearchWrapper = styled.div`
  position: relative;
  top: 55px;
  @media screen and (max-width: ${props => props.theme.mediaQueries.mobile}) {
    top: 30px;
  }
  
`

export const SearchInput = styled.input`
    border: 1px solid white;
    border-radius: 5px;
    background: transparent;
    width: 460px;
    height: 45px;
    text-indent: 15px;
    color: darkgray;
    font-size:17px;

      @media screen and (max-width: ${props => props.theme.mediaQueries.mobile}) {
        width: 250px;
        font-size:7px;
        height: 35px;
      }

    ::placeholder { 
        font-size:17px;
        color: darkgray;
      @media screen and (max-width: ${props => props.theme.mediaQueries.mobile}) {
        font-size:11px;
      }
    }
    :focus {
      background: white;
      color: black;
      border: none;
    }
`

export const SearchIcon = styled.img`
    position: absolute;
    top: 25%;
    right: 1rem;

  @media screen and (max-width: ${props => props.theme.mediaQueries.mobile}) {
    width: 1em;
    right: .5rem;
  }
`