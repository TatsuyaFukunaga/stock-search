import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { Box, Typography, CircularProgress } from '@mui/material';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            await auth.signOut();
            navigate('/login');
        };
        logout();
    }, [navigate]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Logging out...
            </Typography>
            <CircularProgress />
        </Box>
    );
}

export default Logout;

