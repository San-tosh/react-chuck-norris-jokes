import {
    Box,
    Capsule,
    Container,
    Description,
    Icon,
    Line,
    StatLink,
    Title,
    TitleWrapper,
    ViewAllJokes,
    Wrapper,
    ViewAllIcon,
    ButtonTitle, ButtonContainer,
} from "./joke.styles";
import GreenLightIcon from '../../assets/icons/orange-light.png';
import {useEffect, useState} from "react";
import {getJokesBySearchTerm} from "../../services/joke-service";
import axios from "axios";
import icon from "../../assets/icons/path-copy-7.png";
type JokeProps = {
    value: string;
}
const Joke = ({search}:{search: string})=>{
    const [jokes, setJokes] = useState<JokeProps[]>([]);
    const [viewAll, setViewAll] = useState(false);
    useEffect(()=>{
        const cancelToken = axios.CancelToken.source();
            search.length > 0 && getJokesBySearchTerm(search,cancelToken).then((res: any) => {
                setJokes(res.result);
            })
        return (()=>cancelToken.cancel());
    },[search]);

    return (
        <Container>
            <Line color='#cccccc'/>
            <Capsule>{search} Jokes</Capsule>
            <Wrapper>
                { jokes.map((joke,index)=> {
                    if(viewAll || index < 6) { return (
                    <Box>
                        <TitleWrapper>
                            <Icon src={GreenLightIcon}/>
                            <Title>{search} JOKE</Title>
                        </TitleWrapper>
                        <Description>
                            {
                                joke.value.length > 320 ?
                                    `${joke.value.substring(0, 320)}...` : joke.value
                            }
                        </Description>
                        <StatLink>
                            SEE STATS
                        </StatLink>
                    </Box>
                    )
                    } else {
                        return '';
                    }
                })}


            </Wrapper>
            {!viewAll && jokes.length > 6 && (<ButtonContainer onClick={()=> setViewAll(true)}>
                <ViewAllJokes backgroundColor={'#f9f9f9'}>
                    <ButtonTitle>VIEW MORE</ButtonTitle>
                    <ViewAllIcon src={icon} rotates={false}/>
                </ViewAllJokes>
            </ButtonContainer>)
            }

            {viewAll && (<ButtonContainer onClick={()=> setViewAll(false)}>
                <ViewAllJokes backgroundColor={'#f9f9f9'}>
                    <ButtonTitle>VIEW LESS</ButtonTitle>
                    <ViewAllIcon src={icon} rotates={true}/>
                </ViewAllJokes>
            </ButtonContainer>)
            }
        </Container>
    )
}

export default Joke;