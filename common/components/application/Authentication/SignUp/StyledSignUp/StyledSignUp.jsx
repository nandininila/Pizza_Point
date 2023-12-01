import { frontendOrigin } from "@/common/types/utils/const";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Main = styled("div")(({ theme }) => theme.unstable_sx({}));

const StyledSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const router = useRouter();

  // Validation
  let existEmail = "No match";
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = new FormData(event.currentTarget);
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const name = `${firstName} ${lastName}`;
    const email = data.get("email").toString().toLowerCase();
    const password = data.get("password").toString();

    try {
      const url = `${frontendOrigin}/api/user/`;
      const res = await fetch(url);

      if (!res.ok) {
        setLoading(false);
        return new Error();
      }

      const data = await res.json();
      const users = data;
      const query = users.find((user) => user?.email === email);
      const duplicateEmail = query?.email;

      existEmail = duplicateEmail;

      if (existEmail === email) {
        setEmailError(true);
        setLoading(false);
        return;
      } else {
        setEmailError(false);
      }
    } catch (error) {
      console.error(error);
    }

    const user = { name, email, password };

    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    try {
      const url = `${frontendOrigin}/api/user/`;
      const res = await fetch(url, config);

      const data = await res.json();
      setLoading(false);
      console.log(data);
      if (res.ok) {
        router.push("/login");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <Main>
      <Container component="div" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "xs",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            // noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputProps={{ style: { textTransform: "lowercase" } }}
                  size="small"
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={emailError}
                  helperText={emailError ? "Email already in exits" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isTrue}
                      onChange={(e) => {
                        setIsTrue(e.target.checked);
                      }}
                      value="allowAgree"
                      color="primary"
                    />
                  }
                  label="By clicking “SIGN UP”, I agree to PizzaPoint's Terms of Use and Privacy Policy"
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              loading={loading}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!isTrue}
            >
              Sign Up
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Already have an account? login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Main>
  );
};

export default StyledSignUp;
