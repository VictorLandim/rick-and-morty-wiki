import React from 'react';
import { CSSReset, ThemeProvider, Box } from '@chakra-ui/core';
import theme from './theme';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Navbar />
    {children}
  </ThemeProvider>
);

export default Layout;
