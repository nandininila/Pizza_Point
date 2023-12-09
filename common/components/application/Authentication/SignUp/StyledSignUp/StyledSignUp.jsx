import { Check, Close, Visibility, VisibilityOff } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { frontendOrigin } from "../../../../../types/utils/const";

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
  const [error, setError] = useState("");
  const [resMessage, setResMessage] = useState("");

  // passwordValidation
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    minValueValidation: false,
    numberValidation: false,
    capitalLetterValidation: false,
    specialCharacterValidation: false,
  });

  let errorPassword = false;
  if (Object.values(errors).every((item) => item === true)) {
    errorPassword = false;
  } else if (password === "") {
    errorPassword = false;
  } else {
    errorPassword = true;
  }

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (password) => {
    setErrors({
      minValueValidation: password.length >= 8,
      numberValidation: /\d/.test(password),
      capitalLetterValidation: /[A-Z]/.test(password),
      specialCharacterValidation: /[^A-Za-z0-9]/.test(password),
    });
  };

  // Enable/Disable SignUp button
  let disableSignUp = false;
  if (isTrue === true && errorPassword === false) {
    disableSignUp = false;
  } else {
    disableSignUp = true;
  }

  // passwordValidation

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = new FormData(event.currentTarget);
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const name = `${firstName} ${lastName}`;
    const email = data.get("email").toString().toLowerCase();
    const password = data.get("password").toString();

    const user = { name, email, password };

    try {
      const url = `${frontendOrigin}/api/user`;
      const { data } = await axios.post(url, user);

      console.log(data);
      setError("");
      setResMessage("");
      setLoading(false);
      router.push("/login");
    } catch (error) {
      setLoading(false);
      const { data } = error?.response;
      if (data) {
        console.error(data);
        setError(data?.error);
        setResMessage(data?.message);
      } else {
        console.error(error);
      }
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
                  error={error === "EmailError" && true}
                  helperText={error === "EmailError" && resMessage}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  error={errorPassword}
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

                {Object.entries(errors).map(([key, value]) => (
                  <FormHelperText
                    key={key}
                    sx={{
                      color: value ? "success.main" : "error.main",
                      display: password === "" && "none",
                    }}
                  >
                    {value ? (
                      <IconButton
                        size="small"
                        color="success"
                        sx={{ pointerEvents: "none" }}
                      >
                        <Check />
                      </IconButton>
                    ) : (
                      <IconButton
                        size="small"
                        color="error"
                        sx={{ pointerEvents: "none" }}
                      >
                        <Close />
                      </IconButton>
                    )}

                    {key === "minValueValidation" &&
                      "Password must be at least 8 Characters"}
                    {key === "numberValidation" &&
                      "Password must have at least one Number"}
                    {key === "capitalLetterValidation" &&
                      "Password must have at least one Capital Letter"}
                    {key === "specialCharacterValidation" &&
                      "Password must have at least one Special Character"}
                  </FormHelperText>
                ))}
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
              disabled={disableSignUp}
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
