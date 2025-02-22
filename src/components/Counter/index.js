import {useState} from 'react'
import "./index.css"
const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        return setCount((prevState) => prevState + 1)
    }
    return(
        <div className="bg-container">
            <div className="card-container">
                <h1>The Button has been clicked <span>{count}</span> times</h1>
                <p>Click the button increase the count</p>
                <button onClick={increment}>Click</button>
            </div>
        </div>
    )
}

export default Counter