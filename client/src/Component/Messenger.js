import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LogIn from "./Account/LogInDialog";
import ChatDialog from "./Chat/ChatDialog";
import { useContext } from "react";
import { AccountContext } from "../Context/AccountProvider";

const Comp = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;

const Header = styled(AppBar)`
  height: 120px;
  background-color: black;
  box-shadow:none
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: black;
  box-shadow:none
`;

const Messenger = () => {
  const { Account } = useContext(AccountContext);
  console.log("account:", Account);
  return (
    <Comp>
      {Account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LogIn />
        </>
      )}
    </Comp>
  );
};

export default Messenger;
