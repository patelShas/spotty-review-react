import {useDispatch, useSelector} from "react-redux";
import {logInUserThunk, logOutUserThunk} from "../users/processing/user-thunks";
import React from "react";

function LoginComponent() {

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.user)

    let state = {
        username: '',
        password: '',
    }

    const login = () => {
        dispatch(logInUserThunk(state))
        document.getElementById("loginInfo").reset()
    }
    const logoutHandler = () => {
        dispatch(logOutUserThunk())
    }

    const setUsername = (state, username) =>
        state.username = username


    const setPassword = (state, password) =>
        state.password = password

    const loggedIn = (userDetails.user.type !== "ANON")

    return (
        <div>
            <div className={"d-flex flex-row justify-content-between"}>
                <h1>Login/Logout</h1>
                {loggedIn ? (
                    <button
                        onClick={logoutHandler}
                        className={'btn btn-primary btn-block m-2'}>
                        Log out
                    </button>
                ) : (
                    <button
                        onClick={login}
                        className={'btn btn-primary btn-block m-2'}>
                        Log in
                    </button>
                )}
            </div>
            <h2>You are {loggedIn ? "" : "not "}logged in.</h2>
            {!loggedIn ? (
                <div className={"list-group"}>
                    <form id={'loginInfo'}>
                        <div className={"list-group-item p-3 rounded-top"}>
                            <input
                                id={'logUsername'}
                                onChange={(e) => setUsername(state, e.target.value)}
                                className={'form-control'}
                                placeholder="username"/>
                        </div>
                        <div className={"list-group-item p-3 rounded-bottom"}>
                            <input
                                id={'logPassword'}
                                onChange={(e) => setPassword(state, e.target.value)}
                                className={'form-control'}
                                type="password"
                                placeholder="password"/>
                        </div>


                    </form>
                </div>
            ) : null}


        </div>

    );
}

export default LoginComponent;