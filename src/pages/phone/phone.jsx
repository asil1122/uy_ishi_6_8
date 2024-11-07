import { Container, Stack } from '@mui/material'
import React from 'react'
import { useGetPhonesQuery } from '../../redux/service/phone'

export const Phone = () => {
    const {data}  = useGetPhonesQuery()
    console.log(data);
    
  return (
    <Container>
        { data ?  (
            <Stack>
                <h1>{data.title}</h1>
                <p>{data.color}</p>
                <p>{data.brand}</p>
                <p>{data.price}</p>
            </Stack>
        ) : null} 
    </Container>
  )
}
