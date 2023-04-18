import { useDispatch } from "react-redux";

function Login() {
    const dispatch = useDispatch
    const user = {name: "Husen", age: 22, email: "husen@gmail.com"}
    return (
        <>
            <button>Login</button>
            <button>Logout</button>
        </>
    )
}

export default Login