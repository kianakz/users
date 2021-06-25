import Link from 'next/link'
export const getStaticProps = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return {
        props: {bands: data}
    }
}

const band=({bands}) => {
    return(
        <div>
            <h1>Users</h1>
            {bands.map(band => ( 
                <Link href= {'/bands/' + band.id} key={band.id}>   
                <a>
                    <h3>{band.name}</h3>
                </a>
                </Link> 
            )
            )
            }
        </div>
    )
}

export default band