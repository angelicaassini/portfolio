import { Container } from '@/styles/Global'
import { Text } from '@/styles/Text'
import { Button } from '@/styles/Buttons'
import { Footer as FooterWrapper } from './style'
import { FaAngleDoubleUp, FaAngleDown } from 'react-icons/fa'

export const Footer = (): JSX.Element =>{
    return (
        <FooterWrapper>
            <Container>
                <Button onClick={() => { window.scrollTo(0,0) }} aria-label="Voltar para o topo do site" type="circle"><FaAngleDoubleUp/></Button>
                <Text type="body1" color="grey5">✋ Aguardo seu contato!</Text>
            </Container>
        </FooterWrapper>
    )
}