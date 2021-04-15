import React from 'react'
import { useDispatch } from 'react-redux'
import { profileActions } from '../../store/profile/actions'

export const Form = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget

        const profile = {
            name: form['name'].value,
            lastname: form['lastname'].value
        }

        dispatch(profileActions.setProfile(profile))
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name'></input>
            <input type='text' name='lastname'></input>
            <input type='submit'></input>
        </form>
    ) 
}