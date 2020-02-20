import React from 'react';
import { Box, Select, SimpleGrid, Input, Button } from '@chakra-ui/core';

const Filter = props => {
  const { filter, setFilter, onFilter } = props;

  return (
    <Box border="0px solid gray" borderRadius={5} mt="20px" mb="20px">
      <SimpleGrid columns={{ md: 6, xs: 1 }} spacing="15px">
        <Input
          placeholder="Name"
          value={filter.name}
          onChange={e => setFilter({ ...filter, name: e.target.value })}
        />
        <Select
          placeholder="Status"
          value={filter.status}
          onChange={e => setFilter({ ...filter, status: e.target.value })}
        >
          <option value="option2">Alive</option>
          <option value="option1">Dead</option>
          <option value="option3">unknown</option>
        </Select>
        <Input
          placeholder="Species"
          value={filter.species}
          onChange={e => setFilter({ ...filter, species: e.target.value })}
        />

        <Input
          placeholder="Type"
          value={filter.type}
          onChange={e => setFilter({ ...filter, type: e.target.value })}
        />

        <Select
          placeholder="Gender"
          value={filter.gender}
          onChange={e => setFilter({ ...filter, gender: e.target.value })}
        >
          <option value="option1">Male</option>
          <option value="option2">Female</option>
          <option value="option3">Genderless</option>
          <option value="option3">unknown</option>
        </Select>
        <Button variantColor="blue" onClick={onFilter}>
          Filter
        </Button>
      </SimpleGrid>
    </Box>
  );
};

export default Filter;
