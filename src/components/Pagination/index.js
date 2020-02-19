import React from 'react';
import { Button, Box } from '@chakra-ui/core';

const Pagination = ({ next, prev, onNext, onPrev, pages }) => (
  <Box mt="20px" mb="20px">
    {prev && (
      <Button leftIcon="arrow-back" onClick={onPrev}>
        {prev}
      </Button>
    )}
    <Button disabled>{prev ? prev + 1 : next - 1}</Button>
    {next && (
      <Button rightIcon="arrow-forward" onClick={onNext}>
        {next}
      </Button>
    )}
    {/* {`${pages} pages...`} */}
  </Box>
);

export default Pagination;
