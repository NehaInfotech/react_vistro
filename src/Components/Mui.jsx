import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallIcon from '@mui/icons-material/Call';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { List, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import ListItem from '@mui/material/ListItem';
import { BorderAll, BorderAllRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function Mui() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src="https://vristo.sbthemes.com/assets/images/logo.svg" alt="Logo" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              VRISTO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {/* Navigation items can go here */}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              VRISTO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* Add navigation items here */}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Button sx={{ ml: 1, mr: 1 }} variant="contained">
                <ShoppingCartIcon sx={{ fontSize: 20, m: 0.5 }} />
                <Typography sx={{ display: { md: "none" } }}>Purchase Now</Typography>
              </Button>
              <Link to="/Documentation_page">
              
              <Button
                sx={{ ml: 1, mr: 1 }}
                variant="contained"
                
              >
                <SubdirectoryArrowRightIcon sx={{ fontSize: 20, m: 0.5 }} />
                Documentation
                
              </Button>
              </Link>

              <Button sx={{ ml: 1, mr: 1 }} variant="contained">
                <CallIcon sx={{ fontSize: 20, m: 0.5 }} />
                Contact Us
              </Button>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* User settings can go here */}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{
        backgroundImage: "url(https://vristo.sbthemes.com/assets/images/hero-bg.png)",
        backgroundSize: "cover",
        height: "90vh",
        overflow: "hidden",
      }}>
        < Container >
          <Box sx={{
            mt: 5,
            display: 'flex',
            // flexDirection: 'column',

          }}>
            <img src="https://vristo.sbthemes.com/assets/images/vristo-bg-banner2.png" width="300px" height="300px" sx={
              {
                width: "100px "

              }
            } alt="" />
            <Box sx={{
              textAlign: "center"
            }}>
              <Typography variant="h4" sx={{ color: "rgb(116 126 209)" }}>Vristo </Typography>
              <Typography variant='h4' sx={{ color: "rgb(71 190 125)" }}>Multipurpose Tailwind CSS Admin <br /> Template</Typography>
              <Typography
                sx={{
                  mt: 5,
                  color: "#bcbcbc",
                }}
              >Modern, light weight, developer friendly, Highly customizable Multipurpose Tailwind CSS Admin Template built with</Typography>
              <Typography sx={{ color: "rgb(116 126 209)", mt: 4 }}>NextJS, ReactJS, React + Laravel</Typography>
              <Button variant="contained" sx={{ mt: 10, bgcolor: "rgb(71 190 125)" }} className='hvr'>Contained</Button>

            </Box>
            <img src="https://vristo.sbthemes.com/assets/images/vristo-bg-banner1.png" width="300px" height="300px" alt="" />
          </Box>
          <List className='flex white-space  ' sx={{ color: "#bcbcbc" }}>
            <ListItem><AcUnitIcon /> Built with Tailwind css</ListItem>

            <ListItem><AcUnitIcon />I18n Multilingual Support</ListItem>

            <ListItem><AcUnitIcon />Lifetime Free Updates</ListItem>

            <ListItem><AcUnitIcon />Easy to use and Clean code</ListItem>

            <ListItem><AcUnitIcon />and many more...</ListItem>
          </List>
        </Container>

      </Box>
      <Container>
        <Typography sx={{
          textAlign: "center",
          fontSize: { lg: "35px", md: "25px", sm: "20px" },
          color: "rgb(71 190 125)",
          mt: 9

        }}>
          Vristo – Multipurpose Tailwind CSS Admin Template
        </Typography>
        <Typography sx={{
          textAlign: "center",
          // fontSize: { lg: "15px"},
          mt: 2

        }}>
          Vristo is an admin dashboard template built with Tailwind CSS, NextJS, ReactJS, React + Laravel.
        </Typography>
        <Typography sx={{
          textAlign: "center",
          // fontSize: { lg: "15px"},
          mt: 2

        }}>
          Design, Customize and Manage Your Web App with Ease - Vristo focuses on the ease of use and flexibility of the Multipurpose Tailwind CSS Admin Template. With its intuitive design, customizable components, and powerful management tools, this template makes it easy to create and manage complex web applications with minimal effort
        </Typography>
        <Box>
          <Typography sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
            <Button sx={{ ml: 1, mr: 1 }} variant="contained"><ShoppingCartIcon sx={{ fontSize: 20, m: 0.5 }} />
              <Typography
                sx={{ display: { md: "none" } }}
              >Purchase Now</Typography></Button>
            <Button sx={{ ml: 1, mr: 1 }} variant="contained">< SubdirectoryArrowRightIcon sx={{ fontSize: 20, m: 0.5 }} />Documentation</Button>
            <Button sx={{ ml: 1, mr: 1 }} variant="contained"><CallIcon sx={{ fontSize: 20, m: 0.5 }} />Contact Us</Button>
          </Typography>
          <Grid container spacing={2} sx={{ display: "flex-wrap ", mt: 6, mb: 6 }}>
            <Grid item xs={2}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/tailwindcss.svg" width="80px" alt="" />
                <Typography variant="body2" gutterBottom>
                  Tailwindcss
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/reactjs.svg" width="50px" alt="" />
                <Typography >
                  React
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/nextjs.svg" width="50px" alt="" />
                <Typography>
                  Next
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/reactjs+laravel.svg" alt="" />
                <Typography >
                  React + Laravel
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/typescript.svg" width="50px" alt="" />
                <Typography>
                  TypeScript
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/vitejs.svg" width="50px" alt="" />
                <Typography>
                  Vite
                </Typography>
              </Item>
            </Grid>
            {/* <Grid item xs={2}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/figma.svg" width="50px" alt="" />
                <Typography >
                  figma
                </Typography>
              </Item>
            </Grid> */}
          </Grid>
        </Box>
      </Container>
      <Box sx={{
        backgroundColor: "rgb(14 23 38 )",
        p: 5
      }}>
        <Box sx={{ flexGrow: 1, margin: '32px' }}>

          <Typography sx={{
            textAlign: "center",
            fontSize: { lg: "35px", md: "25px", sm: "20px" },
            mt: 9,
            color: "rgb(257,257,257)",

          }}>
            Vristo – Multipurpose Tailwind CSS Admin Template
          </Typography>
          <Typography sx={{
            textAlign: "center",
            // fontSize: { lg: "15px"},
            mt: 2,
            color: "rgb(200, 200, 200)",
            mb: 4
          }}>
            Vristo is an admin dashboard template built with Tailwind CSS, NextJS, ReactJS, React + Laravel.
          </Typography>
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img1.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img7.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img3.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img7.png"

                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px",
                  }}
                />
                <Box sx={{ mt: 20 }} class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img2.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img7.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img4.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img3.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img8.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img10.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img9.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img10.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img14.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img13.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img15.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img12.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item>
                <img src="https://vristo.sbthemes.com/assets/images/img14.png"
                  sx={{
                    backgroundImage: "cover",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    BorderAllRounded: "15px"
                  }}
                />
                <Box class="absolute left -bottomw-max -translate-x-1/2 space-x-2 text-center">
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(116 126 209)" }}>
                    LTR
                  </Button>
                  <Button variant="contained" sx={{ margin: '8px', background: "rgb(71 190 125)" }}>
                    RTL
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    Vertical Light Theme
                  </Typography>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Container>
        <Box sx={{
          display: 'flex', alignItems: 'center',
          flexDirection: 'column', marginTop: '50px'
        }}>

          <img src="https://vristo.sbthemes.com/assets/images/logo.svg" alt="" />
        </Box>
        <Typography
          sx={{
            fontSize: '35px',
            fontWeight: 'bold',
            color: 'rgb(71 190 125)',
            marginTop: '20px',
            textAlign: "center"
          }}
        >Save your time and money by  <br />choosing VRISTO for your website.</Typography>
      </Container>
      <Container>
        <Box sx={{
          display: 'flex', alignItems: 'center',
          flexDirection: 'column', marginTop: '50px'
        }}>
          <Grid sx={{ display: "flex" }}>
            <Grid lg={3} md={6} sm={12} sx={{
              border: "1px black dotted",
              borderRadius: "10px",
              m: 3,
              p: 3
            }}>
              <Typography sx={{ textAlign: "center", fontSize: "35px" }}>10+</Typography>
              <Typography variant='h6' sx={{ color: "rgb(71 190 125)" }}>Different Layouts </Typography>
            </Grid>
            <Grid lg={3} md={6} sm={12} sx={{
              border: "1px black dotted",
              borderRadius: "10px",
              p: 3,
              m: 3
            }}>
              <Typography sx={{ textAlign: "center", fontSize: "35px" }}>15+</Typography>
              <Typography variant='h6' sx={{ color: "rgb(71 190 125)" }}>Multi Languages </Typography>
            </Grid>
            <Grid lg={3} md={6} sm={12} sx={{
              border: "1px black dotted",
              m: 3,
              borderRadius: "10px",
              p: 3
            }}>
              <Typography sx={{ textAlign: "center", fontSize: "35px" }}>99+</Typography>
              <Typography variant='h6' sx={{ color: "rgb(71 190 125)" }}>Pages & Components</Typography>
            </Grid>
            <Grid lg={3} md={6} sm={12} sx={{
              border: "1px black dotted",
              borderRadius: "10px",
              p: 3, m: 3
            }}>
              <Typography sx={{ textAlign: "center", fontSize: "35px" }}>9+</Typography>
              <Typography variant='h6' sx={{ color: "rgb(71 190 125)" }}>Apps </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box>
        <Typography variant='h4' sx={{ textAlign: "center", mb: 10, color: "rgb(71 190 125)", fontWeight: "bold", marginTop: "50px" }}>
          Top 9+ Predefined Apps</Typography>

        <Box sx={{
          background: "#4361ee0d",
          p: 5
        }}>
          <Container>
            <Grid>
              <Grid lg={6} md={6} sm={12} sx={{ display: "flex" }}>
                <img src="https://vristo.sbthemes.com/assets/images/chat-light.png" alt="" />
                <Box sx={{
                  ml: 8,
                  mt: 15
                }}>
                  <Typography variant="h3" sx={{ color: " rgb(116 126 209) " }}>Chat</Typography>
                  <Typography sx={{ color: " rgb(116 126 209) " }}>Realtime Chat App - Instant messaging and communication platform for fast and secure data transmission</Typography>
                  <Typography sx={{ color: " rgb(116 126 209) ", mt: 2 }}>A dynamic tool that enables you two create Messaging, Calling and Video chat applications.</Typography>
                  <Button variant="contained" sx={{ color: "white", mt: 2, background: "rgb(116 126 209)" }}>View Demo</Button>
                </Box>
              </Grid>

            </Grid>
          </Container>
        </Box>
      </Box>

      <hr sx={
        {
          mt: 2, mb: 2,
        }
      } />
      <Container>
        <Typography sx={{ textAlign: "center", fontSize: "14px", mt: 2, mb: 2 }}>
          Copyright ©2024 All rights reserved by SBThemes.
        </Typography>
      </Container>
    </>
  );
}

export default Mui;
