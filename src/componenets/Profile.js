import { useSelector } from "react-redux"

const Profile = () => {
    const user = useSelector((state) => state.user.value)
    return (
        <>
            <h1>Profile Page</h1>
            <p>Name : {user.name}</p>
            <p>Age : {user.age}</p>
            <p>EMail : {user.email}</p>
        </>
    )
}

export default Profile