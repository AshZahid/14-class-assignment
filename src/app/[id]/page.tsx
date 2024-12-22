

export default async function API(props:any) {
    const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.id}`)
    const res = await url.json()
    console.log(res)
    

    
    
    
    return (
        <div className="w-full h-auto text-center place-items-center text-slate-500">
            <h1 className="text-3xl text-center font-bold mt-5 text-pink-800">Fetching Data</h1>

             <div className="text-4xl rounded-3xl mt-4 bg-pink-800 w-1/2 py-4">Id:{props.params.id} 
                <h2> Userid: {res.userId} </h2> 
                <h2>Title: {res.title} </h2>
                
             </div>
             
             
        </div>
    )
}


