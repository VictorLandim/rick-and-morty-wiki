import React from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import theme from './theme';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {children}
  </ThemeProvider>
);

export default Layout;
