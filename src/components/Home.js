import { useNavigate } from "react-router-dom"
export const Home = () => {
    const navigate=useNavigate()
    return (
        <div>
           <h2> Home page</h2>
            <br/>
          <br/>
            <button onClick={()=>{navigate("order-cofirmed")}}>click to confirm</button>
        </div>
    )
}
