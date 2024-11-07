import { Button, Container, Stack } from '@mui/material';
import React from 'react';
import { useGetPhonesQuery } from '../../redux/service/phone';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/reducer/product-reducer';

export const PhoneItem = () => {
  const { data} = useGetPhonesQuery();
  const dispatch = useDispatch()

  const AddItem = (item) => {
    dispatch(setProducts(item))
  }

  return (
    <Container>
      <Stack>
        {data?.map((item) => (
          <Stack key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.color}</p>
              <p>{item.brand}</p>
              <p>{item.price}</p>
              <Button onClick={() => AddItem(item)} variant='contained'>Buy</Button>
          </Stack>
        ))}
      </Stack>

    </Container>
  );
};
