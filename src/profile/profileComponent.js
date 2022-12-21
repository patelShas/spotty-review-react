import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router";
import ProfileContent from "./profileContent";
import {findSubjectUserThunk} from "./subject-user/subject-thunk";
import {Navigate} from "react-router-dom";

const ProfileComponent = () => {
    const subject_name = useParams().subject
    const viewer = useSelector((state) => state.user.user)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findSubjectUserThunk(subject_name))
    }, [dispatch, subject_name])

    const subject = useSelector((state) => state.subject)
    const subjectUser = subject.user
    const failedStatus = subject.failed

    if (subject_name === viewer.username) {
        return <Navigate to={'/profile'}/>
    }

    return (
        subject_name ? (failedStatus ? (
            <div>Sorry, no matching users were found</div>
        ) : (
            <ProfileContent subjectUser={subjectUser}/>
        )) : (<ProfileContent subjectUser={viewer}/>)


    )


}

export default ProfileComponent;