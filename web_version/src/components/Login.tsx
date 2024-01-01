import Box from "@mui/material/Box";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { AlternateEmail } from "@mui/icons-material";

function Login() {
  return (
    <>
      <Box className="login-box">
        <h1>Login</h1>
        <TextField label="Username" variant="outlined" />
        <TextField label="Password" variant="outlined" />
        <Link>Forgot your Password?</Link>
        <Button variant="contained" startIcon={<AlternateEmail />}>Login</Button>
      </Box>
    </>
  );
}

export default Login;