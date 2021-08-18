import React from 'react'
import { Container, Copyright, List, ListItem, Wrapper } from './Footer.styles'

const Footer = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <List>
                        <ListItem>Guide</ListItem>
                        <ListItem>Support</ListItem>
                        <ListItem>API</ListItem>
                        <ListItem>Community</ListItem>
                    </List>
                    <Copyright>© 2021 Ozkan Selcuk</Copyright>
                </Wrapper>
            </Container>
        </>
    )
}

export default Footer
