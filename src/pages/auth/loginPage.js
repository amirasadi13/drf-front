import React, {useState} from 'react';
import {AccountCircle} from "@mui/icons-material";
import {
    Box, Button, Stack,
    TextField
} from "@mui/material";
import {login} from "../../services/userService";
import {useHistory} from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';


const LoginPage = () => {

    const history = useHistory();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const onSubmit = async ({e}) => {

        if (username && password) {
            const user = {
                "username": username,
                "password": password
            }
            console.warn(user)
            try {
                const {status, data} = await login(user);
                if (status === 200) {
                    console.warn(data)
                    localStorage.setItem('token', data.key);
                    history.replace('/app/home')
                } else {
                    alert('server error')
                }
            } catch (ex) {
                // toast.error('مشکلی پیش آمده', {position: 'top-right'});
            }
        } else {
            alert('please enter username and password')
        }

    }


    return (
        <Box>

            <Box sx={{display: 'grid', alignItems: 'flex-end', marginTop: 4}}>
                <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                <TextField id="input-with-sx" label="Username" variant="standard"
                           onChange={(e) => setUsername(e.target.value)}/>
            </Box>

            <Box sx={{display: 'grid', alignItems: 'flex-end', marginTop: 4}}>
                <LockIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                <TextField id="input-with-sx" label="Password" variant="standard"
                           onChange={(e) => setPassword(e.target.value)}/>
            </Box>


            <Stack spacing={2} direction="row">
                <Button variant="contained" style={{marginTop: 30}} onClick={onSubmit}>Login</Button>
                <Button style={{marginTop: 30}}  onClick={() => history.push('/auth/register')}>Register</Button>
            </Stack>


        </Box>
    );
};

export default LoginPage;
