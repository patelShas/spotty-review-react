import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {createUserThunk} from "../users/processing/user-thunks";
import {Navigate} from "react-router-dom";

function RegisterComponent() {


    let state = {
        _id: '',
        username: '',
        password: '',
        bio: '',
        type: 'USER'
    }

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.user)

    const register = (user) => {
        user.type = document.querySelector("#userType").value
        dispatch(createUserThunk(user))
    }

    const setUsername = (state, username) =>
        state.username = username

    const setPassword = (state, password) =>
        state.password = password

    const setBio = (state, bio) =>
        state.bio = bio

    const checkPasswords = (state) =>
        state.password === document.getElementById('registerVerifyPassword').value

    const clearInput = (target) =>
        target.value = ''

    if (userDetails.user.type !== "ANON") {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <div className={"d-flex flex-row justify-content-between"}>
                <h1>Register</h1>
                <button
                    onClick={
                        () => {
                            if (checkPasswords(state)) {
                                state._id = new Date().valueOf()
                                document.getElementById('noMatchMessage').hidden = true
                                register(state)
                            } else {
                                clearInput(document.getElementById('registerPassword'))
                                clearInput(document.getElementById('registerVerifyPassword'))
                                document.getElementById('noMatchMessage').hidden = false
                            }
                        }
                    }
                    className={'btn btn-primary btn-block m-2'}>
                    Register
                </button>
            </div>

            <span id={'noMatchMessage'} hidden={true}>The "password" and "verify password" fields do not match</span>
            <div className={"list-group"}>
                <div className={"list-group-item"}>
                    <input
                        id={'registerUsername'}
                        onChange={(e) => setUsername(state, e.target.value)}
                        className={'form-control'}
                        placeholder="username"/>
                </div>
                <div className={"list-group-item"}>
                    <input
                        id={'registerPassword'}
                        onChange={(e) => setPassword(state, e.target.value)}
                        className={'form-control'}
                        type="password"
                        placeholder="password"/>
                </div>
                <div className={"list-group-item"}>
                    <input
                        id={'registerVerifyPassword'}
                        className={'form-control'}
                        type="password"
                        placeholder="verify password"/>
                </div>
                <div className={"list-group-item"}>
                        <textarea
                            id={'registerBio'}
                            onChange={(e) => setBio(state, e.target.value)}
                            className={'form-control'}
                            placeholder="tell us about yourself"/>
                </div>
                <div className={"list-group-item"}>
                    <select className={"form-select"} id="userType" name="stars">
                        <option value={"USER"}>user</option>
                        <option value={"ADMIN"}>admin</option>
                    </select>
                </div>


            </div>

        </div>

    );
}

export default RegisterComponent;