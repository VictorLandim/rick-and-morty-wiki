import React from 'react';
import { Box, Link, PseudoBox, Heading } from '@chakra-ui/core';
import { FaRadiationAlt, FaGithub } from 'react-icons/fa';

const Navbar = () => (
  <PseudoBox
    pl="50px"
    pr="50px"
    pt="30px"
    pb="30px"
    borderBottom="1px solid blue.500"
    borderColor="blue.300"
    shadow="md"
  >
    <Box d="flex" alignItems="center" justifyContent="space-between" flexDir="row">
      <Link href="/">
        <Box d="flex" alignItems="center" flexDir="row">
          <Box as={FaRadiationAlt} mr="10px" />
          <Heading fontSize="sm">Rick and Morty Wiki</Heading>
        </Box>
      </Link>
      <Link href="https://github.com/VictorLandim/rick-and-morty-wiki">
        <Box as={FaGithub} />
      </Link>
    </Box>
  </PseudoBox>
);

export default Navbar;
