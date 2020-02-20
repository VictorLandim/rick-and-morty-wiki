import React from 'react';
import { Button, Box, Tag } from '@chakra-ui/core';

const Pagination = ({ next, prev, onNext, onPrev, pages }) => {
  const currentPage = () => {
    if (!prev && !next) return 1;
    return prev ? prev + 1 : next - 1;
  };

  return (
    <Box mt="20px" mb="10px" d="flex">
      {prev && (
        <Button size="sm" leftIcon="arrow-back" onClick={onPrev}>
          {prev}
        </Button>
      )}
      <Tag size="sm" marginLeft="5px" marginRight="5px">{`${currentPage()}/${pages}`}</Tag>
      {next && (
        <Button size="sm" rightIcon="arrow-forward" onClick={onNext}>
          {next}
        </Button>
      )}
    </Box>
  );
};

export default Pagination;
