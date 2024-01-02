import { useEffect, useState, useContext } from "react";

import { Box, styled, Divider } from "@mui/material";

import { getUsers } from "../../../service/api";
import { AccountContext } from '../../../context/AccountProvider';

// component 
import Conversation from "./Conversation";

const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;

`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;



const Conversations = ({text}) => {

    const [users, setUsers] = useState([]);

    const { account, socket, setAvtiveUsers } = useContext(AccountContext);

    useEffect(() => {
        const featchData = async () => {
            let response = await getUsers();
            const filterdData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filterdData);
        }
        featchData();
    }, [text]);

    useEffect(() => {
        socket.current.emit('addUsers', account);
        socket.current.on("getUsers", users => {
            setAvtiveUsers(users);
        });
    }, [account]);


    return (
        <Component>
            {
                users.map(user => (
                    user.sub !== account.sub && //admin user display hide
                    <>
                        <Conversation user={user} />
                        <StyledDivider />
                    </>
                ))
            }
        </Component>
    )
}

export default Conversations;
