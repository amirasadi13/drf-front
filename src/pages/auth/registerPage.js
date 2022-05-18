import React, {useState} from 'react';
import {Box, Button, Stack, TextField} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {useHistory} from "react-router-dom";
import {login, register} from "../../services/userService";
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const RegisterPage = () => {


    const history = useHistory();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password1, setPassword1] = useState();
    const [password2, setPassword2] = useState();


    const onSubmit = async ({e}) => {

        if (username && password1 && password2) {
            const user = {
                "username": username,
                "email":email,
                "password1":password1,
                "password2": password2
            }
            console.warn(user)
            try {
                const {status, data} = await register(user);
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
                <AlternateEmailIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                <TextField id="input-with-sx" label="Email" variant="standard"
                           onChange={(e) => setEmail(e.target.value)}/>
            </Box>


            <Box sx={{display: 'grid', alignItems: 'flex-end', marginTop: 4}}>
                <LockIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                <TextField id="input-with-sx" label="Password" variant="standard"
                           onChange={(e) => setPassword1(e.target.value)}/>
            </Box>


            <Box sx={{display: 'grid', alignItems: 'flex-end', marginTop: 4}}>
                <LockIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                <TextField id="input-with-sx" label="Password Confirm" variant="standard"
                           onChange={(e) => setPassword2(e.target.value)}/>
            </Box>


            <Stack spacing={2} direction="row" >
                <Button variant="contained" style={{marginTop: 30}} onClick={onSubmit}>Register</Button>
                <Button style={{marginTop: 30}} onClick={() => history.push('/auth/login')}>Login</Button>
            </Stack>


        </Box>
    );
};

export default RegisterPage;
