import React from 'react'
import styled from "styled-components"
import ChatInput from "./ChatInput"
import ChatMessage from "./ChatMessage"


function Chat() {
    return (
        <div>
            <Container>
                <Header>
                    <Channel>
                        <ChannelName>Name</ChannelName>
                        <ChannelInfo>Info</ChannelInfo>
                    </Channel>
                    <ChannelDetails>Details</ChannelDetails>
                </Header>
                <MessageContainer>
                    <ChatMessage></ChatMessage>
                </MessageContainer>
                <ChatInput></ChatInput>
            </Container>
        </div>
    )
}

export default Chat

const Container = styled.div `
    display:grid;
    grid-template-rows: 64px auto min-content;
    min-height: 0;
`

const Header = styled.div `
    padding-left: 20px;
    padding-right 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(83,39,.13);
    justify-content: space-between:
    `

const Channel = styled.div ``

const ChannelName = styled.div `
    font-weight: 700;
`

const ChannelInfo = styled.div `
    margin-left 10px;
`

const ChannelDetails = styled.div `
    display: flex;
    align items: center;
    color: #606060;
`

const MessageContainer = styled.div `
    display: flex;
    flex-direction: colum;
    overflow-y: scroll;
`
