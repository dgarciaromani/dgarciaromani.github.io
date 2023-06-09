import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from "@mui/material/styles";
import './App.css';

import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import ScrollButton from './components/ScrollButton';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#222629', // NavBar background color
      contrastText: '#fff', // NavBar text color
    },
    secondary: {
      main: '#86c232', // Secondary color - vermillion
      contrastText: '#fff', // Text color for elements using the secondary color
    },
    text: {
      primary: '#F5F5F5', // Default primary text color - Dark Steel Gray: 43464B- White: F5F5F5
      secondary: '#F5F5F5', // Default secondary text color
    },
    background: {
      default: '#222629', // Default background color - white/grey  f5f5f5
      paper: '#F5F5F5', // Background color for paper/card-like elements
    },
    customColor: {
      main: '#222629', // Footer background color - Dark Steel Gray
      contrastText: 'white', // Text color for elements using the custom color
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: '10px',
          backgroundColor: (theme) => theme.palette.secondary.main, // Button color
          textTransform: 'none',
          fontFamily: 'Barlow',
          fontWeight: 'bold',
          color: '#222629',
          '&:hover': {
            backgroundColor: (theme) => theme.palette.primary.main, 
            color: '#F5F5F5',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: '#F5F5F5',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#F5F5F5', 
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: '#F5F5F5',
          backgroundColor: '#383B3E',
        },
        filled: {
          color: '#222629',
          borderColor: '#222629',
          backgroundColor: '#86c232',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />}/>         
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <ScrollButton />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
