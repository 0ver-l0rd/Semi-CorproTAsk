import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Login = () => {
    const { data: session } = useSession();

    return (
        <Container maxWidth="sm" sx={{ padding: '2rem', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ marginBottom: '2rem', color: '#000' }}>
                Welcome to TaskMaster
            </Typography>
            {session ? (
                <Button variant="contained" onClick={() => signOut()}>Sign out</Button>
            ) : (
                <>
                    <Typography variant="h6" sx={{ marginBottom: '1rem', color: '#000' }}>
                        Please log in to continue
                    </Typography>
                    <Button variant="contained" onClick={() => signIn()}>Sign in</Button>
                </>
            )}
        </Container>
    );
}

export default Login;