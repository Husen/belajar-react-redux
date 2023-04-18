import { useDispatch } from "react-redux";
import { login, logout } from "../feature/User";

function Login() {
    const dispatch = useDispatch()
    const user = {name: "Husen", age: 22, email: "husen@gmail.com"}
    return (
        <>
            <button type="" onClick={() => dispatch(login(user))}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </>
    )
}

export default Login