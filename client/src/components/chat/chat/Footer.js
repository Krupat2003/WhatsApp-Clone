
import { useEffect } from "react";

import { Box, InputBase, styled } from "@mui/material";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

import { uploadFile } from "../../../service/api";

const Container = styled(Box)`
    height: 56px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
    width: 100%;
`;

const ClipIcon = styled(AttachFileIcon)`
    transform: rotate(40deg);
`;


const Footer = ({ sendText, setValue, value, file, setFile, setImage}) => {

    useEffect(() => {
        const getImage = async () => {
            if(file){
                const data  = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                let response =  await uploadFile(data);
                console.log(response);
                setImage(response.data);
            }
        }
        getImage();
    }, [file]);

const onFileChange = (e) => {
    // console.log(e);
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
}

    return (
        <Container>
            <InsertEmoticonIcon />
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e) => onFileChange(e)}
            />
            <Search>
                <InputField
                    placeholder="Type a message"
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={value}
                />
            </Search>
            <KeyboardVoiceIcon />
        </Container>
    )
}

export default Footer;
