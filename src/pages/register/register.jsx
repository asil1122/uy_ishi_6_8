import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCreateUserMutation } from '../../redux/service/register'
import { saveState } from '../../config/storege'
import { createUser } from '../../redux/reducer/user-reducer'
import { useDispatch } from 'react-redux'

export const Register = () => {
    const { handleSubmit, register, reset } = useForm()
    const navigate = useNavigate()
    const [createMutationFn] = useCreateUserMutation()
    const dispatch = useDispatch()

    const submit = (data) => {
        createMutationFn(data)
        .unwrap()
        .then((res) => {
        dispatch(createUser(res));
        reset()
        navigate('/app', { replace: true });

        })
    }
    return (
        <Container>
            <Stack>
                <form onSubmit={handleSubmit(submit)}>
                    <Stack>
                        <TextField type='text' placeholder='Name' {...register('name')} />
                        <TextField type='email' placeholder='Email' {...register('email')} />
                        <TextField type='password' placeholder='Password' {...register('password')} />
                    </Stack>
                    <Button variant='contained' type='submit'>Send</Button>
                </form>
            </Stack>
        </Container>
    )
}
