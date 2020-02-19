import React from 'react';
import { Box, Select, SimpleGrid } from '@chakra-ui/core';

const Filter = () => {
  return (
    <Box border="0px solid gray" borderRadius={5} mt="20px" mb="20px">
      <SimpleGrid columns={{ md: 3, xs: 1 }} spacing="15px">
        <Select placeholder="Select gender">
          <option value="option1">Male</option>
          <option value="option2">Female</option>
          <option value="option3">Genderless</option>
          <option value="option3">unknown</option>
        </Select>
        <Select placeholder="Select species">
          <option value="option1">Male</option>
          <option value="option2">Female</option>
          <option value="option3">Genderless</option>
          <option value="option3">unknown</option>
        </Select>
        <Select placeholder="Select status">
          <option value="option1">Male</option>
          <option value="option2">Female</option>
          <option value="option3">Genderless</option>
          <option value="option3">unknown</option>
        </Select>
      </SimpleGrid>
    </Box>
  );
};

export default Filter;
