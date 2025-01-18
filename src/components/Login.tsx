import { Button, Typography, Box } from '@mui/material';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(() => {
                navigate('/search');
            })
            .catch((error) => {
                console.error('Error during sign in:', error);
            });
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Login
            </Typography>
            <Button variant="contained" color="primary" onClick={signInWithGoogle}>
                Sign in with Google
            </Button>
        </Box>
    );
}

export default Login;

