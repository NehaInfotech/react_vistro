// import React from 'react'

import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallIcon from '@mui/icons-material/Call';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { Container, ListItemText } from '@mui/material';
import { } from '@mui/icons-material';

import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Devices, Dashboard, Code, SwapVert, TableChart,
  LibraryBooks, Build, Support, FlashOn, Speed, Widgets
} from '@mui/icons-material';
const PREFIX = 'Features';
const classes = {
  root: `${PREFIX}-root`,
  paper: `${PREFIX}-paper`,
  icon: `${PREFIX}-icon`,
  featureText: `${PREFIX}-featureText`,
};
const StyledContainer = styled(Container)(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(2),
  },
  [`& .${classes.paper}`]: {
    padding: theme.spacing(2),
    backgroundColor: '#f5f5f5',
  },
  [`& .${classes.icon}`]: {
    marginRight: theme.spacing(1),
  },
  [`& .${classes.featureText}`]: {
    display: 'flex',
    alignItems: 'center',
  },
}));
const features = [
  { icon: <Devices />, text: 'Fully Responsive' },
  { icon: <Dashboard />, text: 'Functional Dashboard' },
  { icon: <Code />, text: 'Coded with Tailwind CSS' },
  { icon: <SwapVert />, text: 'Drag n Drop Section' },
  { icon: <TableChart />, text: 'Custom DataTables' },
  { icon: <LibraryBooks />, text: 'Huge Number of Components' },
  { icon: <Build />, text: 'Easy to Customize' },
  { icon: <Support />, text: 'Fast & Dedicated Support' },
  { icon: <FlashOn />, text: 'Fast Performance' },
  { icon: <Speed />, text: 'Clean Code' },
  { icon: <Widgets />, text: 'Working Apps Section' },
  { icon: <LibraryBooks />, text: 'Useful Pages' },
  { icon: <Build />, text: 'Built-in Tools' },
  { icon: <Support />, text: 'Free Lifetime Updates' },
  { icon: <LibraryBooks />, text: 'Detailed Documentation' },
];
const secondMenuItems = [
  'Feature 1', 'Feature 2', 'Feature 3', 'Feature 4',
  'Feature 5', 'Feature 6', 'Feature 7', 'Feature 8', 'Feature 9'
];



const drawerWidth = 240;

function Getting_started() {
  return (
    <>
      <Container>
        <Typography sx={{ color: "rgb(116 126 209)" }} variant='h4'>Getting Started</Typography>
        <Box sx={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          p: 3
        }}>
          <Typography variant='h5' sx={{ color: "rgb(71 190 125) " }}>Introduction to Vristo</Typography>
          <Typography paragraph>
            The VRISTO Admin template is a responsive web application built with <a href="https://tailwindcss.com/" style={{ color: "green" }}>TailwindCSS</a>. It includes highly customizable UI kit, Components, Widgets, Modules, Charts, and Applications for you to design interfaces and powerful web applications.
          </Typography>
          <Typography paragraph>
            A glimpse of our product features are mentioned below. <a href="#" style={{ color: "green" }}>Click here</a>, to check our preview.
          </Typography>
        </Box>

        <StyledContainer className={classes.root} >
          <Typography variant="h4" gutterBottom style={{ color: 'rgb(71 190 125)' }}>
            Features
          </Typography>
          <Paper elevation={3} className={classes.paper} >
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Typography variant="body1" className={classes.featureText}>
                    <span className={classes.icon}>{feature.icon}</span>
                    {feature.text}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </StyledContainer>

        <Box sx={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          p: 3
        }}>
          <Typography variant='h5' sx={{ color: "rgb(71 190 125) " }}>Browser Compatibility</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
              <img src="https://vristo.sbthemes.com/assets/images/edge.png" width="40px" alt="" />
              <Typography sx={{ mt: 1, ml: 1 }}>Edge (Latest)</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
              <img src="https://vristo.sbthemes.com/assets/images/opera.png" width="40px" alt="" />
              <Typography sx={{ mt: 1, ml: 1 }}>Opera (Latest)</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
              <img src="https://vristo.sbthemes.com/assets/images/safari.png" width="40px" alt="" />
              <Typography sx={{ mt: 1, ml: 1 }}>Safari (Latest)</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
              <img src="https://vristo.sbthemes.com/assets/images/mozilla.png" width="40px" alt="" />
              <Typography sx={{ mt: 1, ml: 1 }}>Firefox (Latest)</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
              <img src="https://vristo.sbthemes.com/assets/images/chrome.png" width="40px" alt="" />
              <Typography sx={{ mt: 1, ml: 1 }}>Chrome (Latest)</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}


export default function PermanentDrawerLeft() {
    const [currentMenu, setCurrentMenu] = React.useState('first');
  
    const handleMenuSwitch = (menu) => {
      setCurrentMenu(menu);
    };
  
    const renderMenuItems = (menuItems) => {
      return menuItems.map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ));
    };
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          className='bgw'
          position="fixed"
          sx={{ color: "black", width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" noWrap component="div">
              Documentation
            </Typography>
            <Box>
              <Button sx={{ ml: 1, mr: 1 }} variant="contained">
                <ShoppingCartIcon sx={{ fontSize: 20, m: 0.5 }} />
                <Typography sx={{ display: { sm: "none", md: "block", lg: "block" } }}>
                  Purchase Now
                </Typography>
              </Button>
              <Button sx={{ ml: 1, mr: 1 }} variant="contained">
                <SubdirectoryArrowRightIcon sx={{ fontSize: 20, m: 0.5 }} />
                <Typography>Documentation</Typography>
              </Button>
              <Button sx={{ ml: 1, mr: 1 }} variant="contained">
                <CallIcon sx={{ fontSize: 20, m: 0.5 }} />
                <Typography>Contact Us</Typography>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >  <Box sx={{ display: "flex", mt: 2, ml: 2, mb: -7 }}>
            <img src="https://vristo.sbthemes.com/assets/images/logo.svg" width="40px" alt="" />
            <Typography variant='h5'>VISTRO</Typography>
          </Box>
          <Toolbar />
          <Divider />
          <List>
            {['Getting_started', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to={`/${text.replace(' ', '').toLowerCase()}`}>
                  {/* <ListItemIcon> */}
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  {/* </ListItemIcon> */}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to={`/${text.replace(' ', '').toLowerCase()}`}>
                  {/* <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon> */}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          {/* <Router>
  
            <Routes>
              <Route path="/Getting_started" element={<Getting_started />} />
              <Route path="/starred" element={<Starred />} />
              <Route path="/sendemail" element={<SendEmail />} />
              <Route path="/drafts" element={<Drafts />} />
              <Route path="/allmail" element={<AllMail />} />
              <Route path="/trash" element={<Trash />} />
              <Route path="/spam" element={<Spam />} />
            </Routes>
          </Router> */}
        </Box>
      </Box>
    );
  }
  