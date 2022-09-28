import {
    Container,
    Description,
    SearchIcon,
    SearchInput,
    SearchWrapper,
    Title
} from "./search-section.styles";
import SearchImage from '../../assets/icons/search-copy.png'
import SearchImageBlack from '../../assets/icons/search-copy-black.png'
import {useState} from "react";
const SearchSection = () => {
    const [image, setImage] = useState(SearchImage);
    const focusHandler = () =>{
        setImage(SearchImageBlack);
    }

    const blurHandler = () =>{
        setImage(SearchImage);
    }
    return (
        <Container>
            <Title>The Joke Bible</Title>
            <Description>Daily Laughs for you and yours</Description>
            <SearchWrapper>
                <SearchInput placeholder='How can we make you laugh today?' onFocus={focusHandler} onBlur={blurHandler}/>
                <SearchIcon src={image}/>
            </SearchWrapper>
        </Container>
    )
}

export default SearchSection;