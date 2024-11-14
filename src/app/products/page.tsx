interface User{
    id:number,
    name:string,
}
const  Product=async()=>{

    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const data:User[]=await res.json()
    console.log(data)

    return (
        <div>
            <h1>UsersPage</h1>
            <ol type="1">
                {data.map(each => <li key={each.id}>{each.name}</li>)}
            </ol>
        </div>
    )
}


export default Product
