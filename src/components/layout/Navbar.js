import React from 'react';
import { Box, Link, PseudoBox, Heading, useColorMode, Image, IconButton } from '@chakra-ui/core';
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <PseudoBox
      borderBottom="1px solid blue.500"
      borderColor="blue.300"
      shadow="md"
      paddingTop="30px"
      paddingBottom="30px"
      paddingLeft={{ md: '50px', sm: '40px', xs: '20px' }}
      paddingRight={{ md: '50px', sm: '40px', xs: '20px' }}
    >
      <Box
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ md: 'row', sm: 'column', xs: 'column' }}
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/VictorLandim/rick-and-morty-wiki"
        >
          <Box size={28} as={FaGithub} />
        </Link>
        <Link href="/">
          <Box as="a" d="flex" alignItems="center" flexDir="row">
            <Image src="/rick.svg" w="32px" alt="Rick Sanchez" />
            <Heading
              marginLeft="15px"
              marginRight="15px"
              fontSize="24px"
              textAlign="center"
              marginBottom={{ md: 0, sm: '30px', xs: '30px' }}
              marginTop={{ md: 0, sm: '30px', xs: '30px' }}
            >
              Rick and Morty Wiki
            </Heading>
            <Image src="/morty.svg" w="32px" alt="Morty Smith" />
          </Box>
        </Link>
        <IconButton
          onClick={toggleColorMode}
          variant="ghost"
          variantColor="teal"
          aria-label="Call Sage"
          fontSize="20px"
          icon={colorMode === 'light' ? FaMoon : FaSun}
        />
      </Box>
    </PseudoBox>
  );
};

export default Navbar;
