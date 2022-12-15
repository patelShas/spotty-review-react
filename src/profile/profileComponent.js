import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProfileThunk, updateProfileThunk} from "../users/processing/user-thunks";
import ReviewsListUser from "../reviews/reviewsListUser";
import {useParams} from "react-router";
import ProfileContent from "./profileContent";
import {findSubjectUserThunk} from "./subject-user/subject-thunk";

const ProfileComponent = () => {
    const subject_name = useParams().subject

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findSubjectUserThunk(subject_name))
    }, [])

    const subject = useSelector((state) => state.subject)
    const subjectUser = subject.user
    const failedStatus = subject.failed


    return (
        failedStatus ? (
            <div>Sorry, no matching users were found</div>
        ) : (
            <ProfileContent subjectUser={subjectUser}/>
        )

    )


}

export default ProfileComponent;