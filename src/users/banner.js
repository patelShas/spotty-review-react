import {useSelector} from "react-redux";

const NameBanner = () => {
    const details = useSelector(state => state.user)
    const username = details.user.username

    return (
        <div>
            <h1>Hello, {username}!</h1>
        </div>
    )
}

export default NameBanner;