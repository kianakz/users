export const getStaticPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(ninja=> {
        return {
            params: {id:ninja.id.toString()}
        }  
    })

    return{
        paths, 
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()
    return{
        props: {user: data}
    }
}


const Details=({user}) =>
{
    return (
        <div>
            <h1>
            {user.name}
            {user.email}
            {user.website}
            </h1>
        </div>

    )
}

export default Details