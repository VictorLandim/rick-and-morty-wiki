import React, { useState } from 'react';
import {
  Box,
  Select,
  SimpleGrid,
  Input,
  Button,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/core';

const Filter = ({ setFilter }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');

  const onSubmit = () => {
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

  const defaultFilter = () => (
    <Box border="0px solid gray" borderRadius={5} mt="20px" mb="20px">
      <SimpleGrid columns={{ md: 6, xs: 1 }} spacing="15px">
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

  const mobileFilter = () => (
    <Accordion allowToggle defaultIndex={[-1]}>
      <AccordionItem>
        <AccordionHeader>
          <Box flex="1" textAlign="left">
            Filters
          </Box>
          <AccordionIcon />
        </AccordionHeader>
        <AccordionPanel pb={4}>{defaultFilter()}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );

  return (
    <>
      <Box display={{ lg: 'none', md: 'none', sm: 'block', xs: 'block' }}>{mobileFilter()}</Box>
      <Box display={{ lg: 'block', md: 'block', sm: 'none', xs: 'none' }}>{defaultFilter()}</Box>
    </>
  );
};

export default Filter;
