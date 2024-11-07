import { Container, Stack } from '@mui/material';
import React from 'react';
import { useGetCompsQuery } from '../../redux/service/computer';

export const Computer = () => {
  const { data} = useGetCompsQuery();
  
  return (
    <Container>
      {data?.map((item) => (
        <Stack key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.color}</p>
            <p>{item.brand}</p>
            <p>{item.price}</p>
        </Stack>
      ))}
    </Container>
  );
};
