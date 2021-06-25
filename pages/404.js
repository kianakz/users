import Link from "next/link"
import {useEffect} from "react"
import {useRouter} from "next/router"

const NotFound =() =>
{   
    const router = useRouter()
    
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        }, 3000)

    }, []) //It accepts 2 inputs the first one is a function, it means that it runs the function when the 
    // component is mounted first and I'm guessing the second arguement is empty means that it only runs the function once

    
    return(
        <div className="not-found">
            <h1>Ooops</h1>
            <h2>Page Not Found</h2>
            <Link href="/home">Home page</Link>
        </div>


    )


}
export default NotFound