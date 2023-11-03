import { ThemeContext } from "@/common/contexts/ThemeModeProvider";
import { East } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  OutlinedInput,
  Paper,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoFacebookCircle, BiLogoInstagramAlt } from "react-icons/bi";
import logo from "/common/content/logo/pizzaLogo.png";

// styles
const Main = styled("div")(({ theme }) => theme.unstable_sx({}));

const Container = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "lg",
    margin: "0 auto",
    px: { xs: 2, sm: 3, md: 5 },
    pt: 2,
  })
);

const Item = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", tablet: "initial" },
  })
);

const Title = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    alignItems: "center",
    typography: { xs: "h6", tablet: "h5" },

    "span:first-of-type": {
      fontWeight: "700",
    },

    "span:last-of-type": {
      color: "text.2",
    },
  })
);

const StyledFooter = () => {
  const { allData, selectedCategory, setSelectedCategory } =
    useContext(ThemeContext);

  const categories = allData.map((x) => x.category);
  const uniqueCategories = [...new Set(categories)];
  const items = uniqueCategories.map((c) => c);

  const footerData = [
    {
      title: "Menu",
      items: items,
    },
    {
      title: "Restaurant",
      items: ["About us", "Menu", "Specials & Coupons"],
    },
    {
      title: "Support",
      items: ["How to order", "Where we deliver", "FAQs", "Contact us"],
    },
    {
      title: "Opening Hours",
      items: [
        "Week Days: 10:30 am - 9:00 pm",
        "Saturday: 11:30 am - 10:30 pm",
        "Sunday: 11:30 am - 10:00 pm",
      ],
    },
    {
      title: "Newsletter",
      items: [],
    },
  ];

  const theme = useTheme();
  let resGridCol;
  if (useMediaQuery(theme.breakpoints.down("tablet"))) {
    resGridCol = 12;
  }

  return (
    <Main>
      <Paper>
        <Container>
          <Box
            pt={{ xs: 2, tablet: 6 }}
            display={"flex"}
            flexDirection={"column"}
            gap={{ xs: 6, tablet: 8 }}
          >
            <Grid
              container
              justifyContent={{ xs: "center", tablet: "space-between" }}
              alignItems={"center"}
              flexDirection={{ xs: "column", tablet: "row" }}
              gap={3}
            >
              <Grid item>
                <Title>
                  <Box width={{ xs: 32, tablet: 40 }} pr={0.5}>
                    <Image src={logo} alt="logo" />
                  </Box>
                  <span>Pizza</span>
                  <span>Point</span>
                </Title>
              </Grid>
              <Grid item>
                <FormControl variant="standard" focused sx={{ width: 220 }}>
                  <Input
                    sx={{ typography: "body2" }}
                    placeholder="Enter your email"
                    color="warning"
                    type="email"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton color="warning">
                          <East />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid
              container
              gap={{ xs: 3, tablet: 0 }}
              justifyContent={{ xs: "space-around", tablet: "space-between" }}
            >
              {footerData?.map((data, i) => (
                <Grid item key={i} xs={i === 4 && resGridCol}>
                  <Item>
                    <Typography variant="subtitle2" paragraph>
                      {data?.title}
                    </Typography>

                    {data?.items?.map((item, i) => (
                      <Typography variant="caption" gutterBottom key={i}>
                        {item}
                      </Typography>
                    ))}

                    {i === 4 && (
                      <>
                        <FormControl size="small" focused sx={{ width: 220 }}>
                          <OutlinedInput
                            sx={{
                              borderRadius: 5,
                              pr: 0,
                            }}
                            inputProps={{
                              sx: {
                                pl: 2.5,
                                typography: "body2",
                              },
                            }}
                            placeholder="Email"
                            color="warning"
                            type="email"
                            endAdornment={
                              <InputAdornment position="end">
                                <Button
                                  label="Join Us"
                                  color="warning"
                                  variant="contained"
                                  size="large"
                                  sx={{
                                    borderRadius: 5,
                                    textTransform: "capitalize",
                                    typography: "caption",
                                    px: 1.5,
                                  }}
                                >
                                  Join Us
                                </Button>
                              </InputAdornment>
                            }
                          />
                        </FormControl>

                        <Box display="flex" pt={1}>
                          <Link
                            target="_blank"
                            passHref
                            href={"https://www.facebook.com"}
                          >
                            <IconButton color="warning" size="small">
                              <BiLogoFacebookCircle />
                            </IconButton>
                          </Link>

                          <Link
                            target="_blank"
                            passHref
                            href={"https://www.instagram.com"}
                          >
                            <IconButton color="warning" size="small">
                              <BiLogoInstagramAlt />
                            </IconButton>
                          </Link>

                          <Link
                            target="_blank"
                            passHref
                            href={"https://www.twitter.com"}
                          >
                            <IconButton color="warning" size="small">
                              <AiFillTwitterCircle />
                            </IconButton>
                          </Link>
                        </Box>
                      </>
                    )}
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Divider sx={{ pt: 5 }} />
          <Box py={2} display="flex" justifyContent="center">
            <Typography variant="caption">
              Copyright 2023, PizzaPoint. All Rights Reserved
            </Typography>
          </Box>
        </Container>
      </Paper>
    </Main>
  );
};

export default StyledFooter;
