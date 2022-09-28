import {Container, Description, DescriptionWrapper, Icon, Title, Wrapper} from "./footer.styles";
import Image from "../../assets/icons/path-copy-2.png"

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Title>GOT JOKES? GET PAID<br/> FOR SUBMITTING!</Title>
                <DescriptionWrapper>
                    <Description>SUBMIT JOKE</Description>
                    <Icon src={Image}/>
                </DescriptionWrapper>
            </Wrapper>
        </Container>
    )
}

export default Footer;