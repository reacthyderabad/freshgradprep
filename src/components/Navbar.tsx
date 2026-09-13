import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navbarContent } from '../data/navbarContent';
import fgpLogo from '../assets/FGP_Logo_BGremoved.png';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: scrolled ? '1px solid' : 'none',
          borderColor: 'divider',
          transition: 'all 0.3s ease',
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
            <Box
              component="a"
              href="#"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                mr: 'auto',
              }}
            >
              <Box
                component="img"
                src={fgpLogo}
                alt="FreshGradPrep"
                sx={{ height: { xs: 43, md: 50 }, width: 'auto' }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                {navbarContent.brand}
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navbarContent.links.map((link) => (
                <Button
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    '&:hover': { color: 'primary.main', backgroundColor: 'transparent' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                variant="contained"
                href={navbarContent.ctaHref}
                sx={{
                  ml: 1,
                  backgroundColor: 'highlight.main',
                  '&:hover': {
                    backgroundColor: 'highlight.dark',
                    opacity: 0.9,
                  },
                }}
              >
                {navbarContent.ctaLabel}
              </Button>
            </Box>

            <IconButton
              aria-label="Open navigation menu"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: 280, pt: 2 },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 1 }}>
          <IconButton onClick={handleDrawerToggle} aria-label="Close navigation menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navbarContent.links.map((link) => (
            <ListItemButton
              key={link.label}
              component="a"
              href={link.href}
              onClick={handleNavClick}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ px: 2, mt: 2 }}>
          <Button
            variant="contained"
            fullWidth
            href={navbarContent.ctaHref}
            onClick={handleNavClick}
            sx={{
              backgroundColor: 'highlight.main',
              '&:hover': { backgroundColor: 'highlight.dark', opacity: 0.9 },
            }}
          >
            {navbarContent.ctaLabel}
          </Button>
        </Box>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }} />
    </>
  );
};

export default Navbar;
