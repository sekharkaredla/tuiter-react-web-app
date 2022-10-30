import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {updateProfile} from "../profile/profile-reducer";
import {Link} from "react-router-dom";

const EditProfile = () => {
    const profileData = useSelector((state) => state.profileReducer);
    const [profileState, setProfileState] = useState(profileData);
    const dispatch = useDispatch();

    const handleFieldChanges = (event) => {
        const fieldName = event.target.name;
        const changedValue = event.target.value;
        const newProfile = {
            ...profileData,
            [fieldName]: changedValue
        }
        setProfileState(newProfile);
    }

    const handleSubmitButton = () => {
        console.log(profileState);
        dispatch(updateProfile(profileState));
    }

    return (
        <>
            <label>Name : <input name="firstName" value={profileState.firstName} onChange={handleFieldChanges}/></label><br/>
            <label>Bio : <textarea name="bio" value={profileState.bio} onChange={handleFieldChanges}/></label><br/>
            <label>Location : <input name="location" value={profileState.location}
                                     onChange={handleFieldChanges}/></label><br/>
            <label>Website : <input name="website" value={profileState.website}
                                    onChange={handleFieldChanges}/></label><br/>
            <label>DOB : <input name="dateOfBirth" type="date" value={profileState.dateOfBirth}
                                onChange={handleFieldChanges}/></label><br/>
            <button onClick={handleSubmitButton}>Save</button><br/>
            <Link to="/tuiter/profile">Back</Link>
        </>
    );
}

export default EditProfile;