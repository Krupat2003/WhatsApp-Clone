import { useContext } from "react";

import { Box, Typography, styled } from "@mui/material";
import GetAppIcon from '@mui/icons-material/GetApp';

import { formatDate, downloadMedia } from "../../../utils/comman-utils";

import { AccountContext } from "../../../context/AccountProvider";
import { iconPDF } from "../../../constants/data";

// styled
const Wrapper = styled(Box)`
    background: #FFFFFF;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Own = styled(Box)`
    background: #dcf8c6;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    margin-left: auto;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`;

export const Message = ({ message }) => {

    const { account } = useContext(AccountContext);

    return (
        <>
            {
                account.sub === message.senderId ?

                    <Own>
                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TaxtMessage message={message} />
                        }

                    </Own>
                    :
                    <Wrapper>
                        {/* <Text> {message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time> */}

                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TaxtMessage message={message} />
                        }
                    </Wrapper>
            }
        </>
    )
}

const ImageMessage = ({ message }) => {
    return (
        <Box style={{ position: 'relative' }}>
            {
                message?.text?.includes('.pdf') ?
                    <Box style={{ display: 'flex' }}>
                        <img src={iconPDF} alt="pdf" style={{ width: 80 }} />
                        <Typography style={{ fontSize: 14 }}  >{message.text.split("/").pop()}</Typography>
                    </Box>
                    :
                    <img style={{ width: 300, height: '100%', objectFit: 'cover' }} src={message.text} alt={message.text} />
            }
            <Time style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <GetAppIcon
                     onClick={(e) => downloadMedia(e, message.text)} 
                    style={{ marginRight: 10, border: '1px solid grey', borderRadius: '50%' }}
                    fontSize='small'
                />
                {formatDate(message.createdAt)}
            </Time>
        </Box>
    )
}

const TaxtMessage = ({ message }) => {
    return (
        <>
            <Text> {message.text}</Text>
            <Time>{formatDate(message.createdAt)}</Time>
        </>
    )
}

export default Message;