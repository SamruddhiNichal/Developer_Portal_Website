import React, { useState } from 'react';
import { Typography, Link, IconButton, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const navItems = ['Products', 'Resources', 'Guides', 'Community', 'About', 'Contact'];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav style={{ padding: '16px', backgroundColor: '#F3F3F3' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4" sx={{ color: '#2024A6', paddingLeft:'10rem' }}>
          Your Logo Here
        </Typography>
        {isMobile ? (
          <>
            <IconButton onClick={toggleDrawer} sx={{ color: '#2024A6' }}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <List>
                {navItems.map((item) => (
                  <ListItem button key={item} onClick={toggleDrawer}>
                    <ListItemText>
                      <Link
                        href={`#${item.toLowerCase()}`}
                        sx={{ color: '#2024A6', textDecoration: 'none', fontSize: '1.3rem' }}
                      >
                        {item}
                      </Link>
                    </ListItemText>
                  </ListItem>
                ))}
                <ListItem button onClick={toggleDrawer}>
                  <ListItemText>
                    <IconButton sx={{ color: '#2024A6' }}>
                      <SearchIcon />
                    </IconButton>
                  </ListItemText>
                </ListItem>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemText>
                    <Button variant="contained" color="success">
                      Sign In
                    </Button>
                  </ListItemText>
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                sx={{ color: '#2024A6', textDecoration: 'none', fontSize: '1.3rem' }}
              >
                {item}
              </Link>
            ))}
            <IconButton sx={{ color: '#2024A6' }}>
              <SearchIcon />
            </IconButton>
            <Button variant="contained" color="success">
              Sign In
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
