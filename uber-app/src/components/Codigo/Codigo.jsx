import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { GlobalStyles } from '@mui/material';

export const Codigo = ({ confirmationResult }) => {
    console.log(confirmationResult);
    const handleSubmit = (e) => {
        e.preventDefault();
        const code = e.target.codigo.value;
        confirmationResult.confirm(code).then((result) => {
            const user = result.user;
            console.log(user);

        }).catch((error) => {
        });
    }
    return (
        <Container component="main" maxWidth="xs" sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
        }}>
            <GlobalStyles styles={{ input: { color: 'white!important', textAlign: "center" } }} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: '#6100FF' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ color: 'white' }}>
                    Ingrese el código
                </Typography>
                <Box onSubmit={handleSubmit} component="form" sx={{ mt: 1 }}>
                    <TextField
                        id="codigo"
                        type="number"
                        placeholder="000000"
                        required
                        fullWidth
                        color="morado"
                        focused
                    />
                    <Button
                        id="register"
                        type="submit"
                        fullWidth
                        color="morado"
                        variant='contained'
                        sx={{
                            mt: 3,
                            mb: 2
                        }}
                    >
                        Continuar
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}
