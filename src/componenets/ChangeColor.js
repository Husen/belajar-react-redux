import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeColor } from '../feature/theme'

function ChangeColor() {
    const [color, setColor] = useState("")
    const dispatch = useDispatch()
    return (
        <>
            <input type='text' name="" onChange={(e) => {setColor(e.target.value)}} />
            <button type="" onClick={() => dispatch(changeColor(color))}>Change color</button>
        </>
    )

}

export default ChangeColor