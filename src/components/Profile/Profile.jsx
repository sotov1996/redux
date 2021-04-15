import React from 'react'
import { useSelector } from 'react-redux'

export const Profile = () => {
    const { profile } = useSelector((state) => state.profile)

    return (
        <div>
            <h1>{profile ? profile.name : 'not name'} {profile ? profile.lastname : 'not lastname'}</h1>
        </div>
    )
}