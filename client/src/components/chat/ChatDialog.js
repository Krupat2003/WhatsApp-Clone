import { useContext } from "react";

import { Dialog, Box, styled } from "@mui/material";

import { AccountContext } from "../../context/AccountProvider";

// component 
import Menu from './menu/Menu';
import EmptyChat from "./chat/EmptyChat";
// import ChatBox from "./chat/ChatBox";
import ChatBox from "./chat/ChatBox";

const Component = styled(Box)`
    display: flex;
`;

const LeftComponent = styled(Box)`
    min-width: 450px;

`;

const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;


const dialogStyle = {
  height: '95%',
  margin: '20px',
  width: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden',
  borderRadius: 0
}


const ChatDialog = () => {

  const { person } = useContext(AccountContext);

  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
      maxWidth={'md'}
    >

      <Component>
        {/* left part  */}
        <LeftComponent>
          <Menu />
        </LeftComponent>

        {/* right part  */}
        <RightComponent>
          {/* <EmptyChat /> */}
          {/* <ChatBox /> */}
          {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
        </RightComponent>
      </Component>

    </Dialog>
  )
}

export default ChatDialog;