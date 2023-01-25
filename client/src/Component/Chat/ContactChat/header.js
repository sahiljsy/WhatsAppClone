import { useContext } from "react";
import { AccountContext } from "../../../Context/AccountProvider";
import { Box, styled } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
`;

const Image = styled("img")({
  height: "40px",
  width: "40px",
  borderRadius: "50%",
});

const Header = () => {
  const { Account } = useContext(AccountContext);

  return (
    <>
      <Component>
        <Image src={Account.picture} alt="dp" />
        <Box>
          <ChatIcon />
          <MoreVertIcon/>
        </Box>
      </Component>
    </>
  );
};

export default Header;
