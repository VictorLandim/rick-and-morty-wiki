import React from 'react';
import { CSSReset, ThemeProvider, ColorModeProvider, Box } from '@chakra-ui/core';
import theme from './theme';
import Navbar from '../components/layout/Navbar';
import Head from 'next/head';
import Footer from '../components/layout/Footer';

const Layout = ({ children, title }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Rick and Morty Wiki built with React, Next, Chakra UI, Apollo and GraphQL."
        />
      </Head>

      <Box position="relative" minHeight="100vh">
        <Navbar />
        {children}
        <Footer />
      </Box>
    </ColorModeProvider>
  </ThemeProvider>
);

export default Layout;
