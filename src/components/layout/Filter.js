import React from 'react';
import { Box, Select, SimpleGrid, Input, Button } from '@chakra-ui/core';

const Filter = () => {
  return (
    <Box border="0px solid gray" borderRadius={5} mt="20px" mb="20px">
      <SimpleGrid columns={{ md: 6, xs: 1 }} spacing="15px">
        <Input placeholder="Name" />
        <Select placeholder="Status">
          <option value="option2">Alive</option>
          <option value="option1">Dead</option>
          <option value="option3">unknown</option>
        </Select>
        <Input placeholder="Species" />

        <Input placeholder="Type" />

        <Select placeholder="Gender">
          <option value="option1">Male</option>
          <option value="option2">Female</option>
          <option value="option3">Genderless</option>
          <option value="option3">unknown</option>
        </Select>
        <Button variantColor="blue">Filter</Button>
      </SimpleGrid>
    </Box>
  );
};

export default Filter;
