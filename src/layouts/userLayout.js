import React from 'react';
import {Box, Button, Card, CardContent, Stack, TextField, Typography} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";

const UserLayout = ({children}) => {
    return (
        <Box style={{backgroundColor: 'khaki', paddingTop: '30px', height: '100vh'}}>

            <Card sx={{maxWidth: 345}} style={{margin: '0 auto', padding: '50px 30px '}}>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Test Pro
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aperiam architecto dicta
                        dolorem, eligendi esse hic ipsam maiores officia omnis provident quisquam quod ratione
                        recusandae tempora! Error esse repellat <voluptatum className=""></voluptatum>
                    </Typography>

                    {children}

                </CardContent>
            </Card>


        </Box>
    );
};

export default UserLayout;
