import { useEffect } from "react"
import {useState} from "react"

// create your App component here
function App()
{
    const [dog, setDog] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() =>
    {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then (resp => resp.json())
        .then ((data) =>
        {
            setDog(data.message)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <p>Loading....</p>

    return(
        <div>
            <img src={dog} alt="A Random Dog"></img>
        </div>
    )
}
export default App