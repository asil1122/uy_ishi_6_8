import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { removeUser } from '../../redux/reducer/user-reducer'
import { useDispatch } from 'react-redux'
import { loadState, saveState } from '../../config/storege'
export const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const Exit = () => {
    const user = loadState("user");

    if (user) {
        saveState("user", null);
        dispatch(removeUser());
        navigate("/");
    }
};

  return (
      <Stack bgcolor={'blue'}>
        <Container>
          <Stack  direction='row' py={'40px'} justifyContent={'space-between'}>
          <Typography variant='h1'>Header</Typography>
          <Button onClick={Exit} variant='contained '>Log Out</Button>
          </Stack>
        </Container>
      </Stack>
  )
}
