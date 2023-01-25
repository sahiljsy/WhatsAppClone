

import {Dialog, Box, styled} from '@mui/material'
import EmptyChat from './Chat/emptyChat';
import ChatList from './ContactChat/chatlist';

const dialogStyle = {
    height: '95%',
    width:'100%',
    maxWidth:"100%",
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden',
    margin:'15px',

 };

 const Component = styled(Box)`
    display:flex;
`;

const ChatListSection = styled(Box)`
    min-width:350px;
`

const ChatSection = styled(Box)`
    width:73%;
    min-width:300px;
    height:100%;
    border-left:1px solid rgba(0,0,0,.23);
`

const ChatDialog = () => {
    return (
        <Dialog
            open={true}
            PaperProps = { {sx: dialogStyle}}
            hideBackdrop = {true}
            maxWidth={'md'}
        >
            <Component>
                <ChatListSection>
                    <ChatList/>
                </ChatListSection>
                <ChatSection>
                    <EmptyChat />
                </ChatSection>
            </Component>
        </Dialog>
    )
}

export default ChatDialog;