import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useLoginUserMutation } from '../../redux/service/login'
import { loadState, saveState } from '../../config/storege'
import { Link, replace, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from '../../hooks/useLocation'
import { createUser, removeUser } from '../../redux/reducer/user-reducer'

export const Login = () => {
    const { handleSubmit,register,reset } = useForm()
    const [ loginMutationFn ] = useLoginUserMutation();
    const { user } = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (data) => {
        loginMutationFn(data).unwrap().then((res) => {
            dispatch(createUser(res));
            reset()            
            navigate('/app', { replace: true });
        })
      };
  return (
    <Container>
        <form onSubmit={handleSubmit(submit)}>
            <Stack>
                <TextField placeholder='email' {...register('email')}/>
                <TextField placeholder='password' {...register('password')}/>
            </Stack>
            <Stack direction='row' justifyContent='space-between'>
                <Button variant='contained' type='submit'>Submit</Button>
                <Link to='/register'>
                    <Button variant='contained'>Register</Button>
                </Link>
            </Stack>
        </form>
    </Container>
)
}
