import React, { useState } from 'react';
import { Box, Select, SimpleGrid, Input, Button, IconButton, Text } from '@chakra-ui/core';

const Label = ({ text }) => (
  <Text fontWeight="semibold" mb="5px">
    {text}
  </Text>
);

const Filter = props => {
  const { setFilter, onFilter } = props;

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');

  const onSubmit = () => {
    console.log({
      name: name === '' ? null : name,
      status: status === '' ? null : status,
      species: species === '' ? null : species,
      type: type === '' ? null : type,
      gender: gender === '' ? null : gender
    });
    setFilter({
      name: name === '' ? null : name,
      status: status === '' ? null : status,
      species: species === '' ? null : species,
      type: type === '' ? null : type,
      gender: gender === '' ? null : gender
    });
  };

  const onClear = () => {
    setName('');
    setStatus('');
    setSpecies('');
    setType('');
    setGender('');

    setFilter({
      name: null,
      status: null,
      species: null,
      type: null,
      gender: null
    });
  };

  return (
    <Box border="0px solid gray" borderRadius={5} mt="20px" mb="20px">
      <SimpleGrid columns={{ md: 6, xs: 1 }} spacing="15px" as="form" onSubmit={onFilter}>
        <Input placeholder="No name" value={name} onChange={e => setName(e.target.value)} />
        <Select placeholder="No status" value={status} onChange={e => setStatus(e.target.value)}>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">unknown</option>
        </Select>
        <Input
          placeholder="No species"
          value={species}
          onChange={e => setSpecies(e.target.value)}
        />

        <Input placeholder="No type" value={type} onChange={e => setType(e.target.value)} />

        <Select placeholder="No gender" value={gender} onChange={e => setGender(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </Select>
        <Box d="flex">
          <Button variantColor="blue" flex="1" marginRight="10px" onClick={onSubmit}>
            Filter
          </Button>
          <IconButton
            onClick={onClear}
            marginLeft="auto"
            variantColor="red"
            aria-label="Clear filters"
            icon="small-close"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Filter;
