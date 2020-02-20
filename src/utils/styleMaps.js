import {
  FaRegDizzy,
  FaRegFlushed,
  FaRegGrin,
  FaGenderless,
  FaMars,
  FaVenus,
  FaTransgender
} from 'react-icons/fa';

export const statusMap = {
  Alive: {
    color: 'teal.500',
    icon: FaRegGrin,
    text: 'Alive'
  },
  Dead: {
    color: 'red.500',
    icon: FaRegDizzy,
    text: 'Dead'
  },
  unknown: {
    color: 'purple.500',
    icon: FaRegFlushed,
    text: 'Status unknown'
  }
};

export const genderMap = {
  Male: {
    color: 'blue.400',
    icon: FaMars,
    text: 'Male'
  },
  Female: {
    color: 'pink.400',
    icon: FaVenus,
    text: 'Female'
  },
  Genderless: {
    color: 'gray.500',
    icon: FaGenderless,
    text: 'Genderless'
  },
  unknown: {
    color: 'purple.400',
    icon: FaTransgender,
    text: 'Gender unknown'
  }
};
