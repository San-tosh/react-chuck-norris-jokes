import Category from "../components/category/category.component";
import {Container} from "./home.styles";
import Joke from "../components/joke/joke.component";
import {useState} from "react";

const Home = () => {
    const [search, setSearchTerm] = useState('');
    const setSearchTermHandler = (term: string) => {
        setSearchTerm(term);
    }
    return (
        <Container>
            <Category handler={setSearchTermHandler}/>
            <Joke search={search}/>
        </Container>
    )
}

export default Home;