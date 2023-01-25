
import {Dialog, Box, Typography,List,ListItem, styled} from '@mui/material'
import { qrCodeImage } from '../../content/data'
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useContext } from 'react';
import {AccountContext } from '../../Context/AccountProvider'

 const Component = styled(Box)`
    display:flex;
 `;

 const Container = styled(Box)`
    padding:56px 0 56px 56px;
    max-width:50%;
 `;

 const Qr = styled('img')({
    height: 264,
    width:264,
    margin:'56px 0 0 56px',
 });

 const Title = styled(Typography)`
    font-size:26px;
    font-family:inherit;
    color:blue;
    margin-bottom:20px;
 `

 const StyledList = styled(List)`
     & > li {
        padding:0;
        margin-top:12px;
        line-height:18px;
        font-size:18px
     }
 `


 const dialogStyle = {
    height: '100%',
    width:'60%',
    marginTop:'12%',
    maxWidth:"100%",
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden',
 };

const LogIn = () => {

    const { setAccount } = useContext(AccountContext);

    const onLoginSucces = (res) => { 
        const decoded = jwtDecode(res.credential)
        setAccount(decoded);
        console.log(decoded)
    }

    const onLoginError = () => { 

    }

    return (
        <Dialog
            open={true}
            PaperProps = { {sx: dialogStyle}}
            hideBackdrop = {true}
        >
            <Component>
                <Container>
                    <Title>To use WhatsApp Web :</Title>
                    <StyledList>
                        <ListItem>1. Step 1</ListItem>
                        <ListItem>2. Step 2 </ListItem>
                        <ListItem>3. Step 3</ListItem>
                    </StyledList>
                </Container>
                <Box style={{position:'relative'}}>
                    <Qr src = {qrCodeImage} alt="Qr Code" />
                    <Box style={{position:'absolute',maxWidth:'200px', top:'50%', transform:'translateX(40%)'}}>
                    <GoogleLogin 
                        onSuccess={onLoginSucces}
                        onError = {onLoginError}
                    />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LogIn;