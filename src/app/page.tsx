import Link from "next/link"

export default async function Rendering() {
  
  const data = await fetch("https://jsonplaceholder.typicode.com/todos")
  const response = await data.json()
  console.log(response)


  return(
    <main>
       <h1 className="text-4xl my-5 text-pink-800 font-bold text-center">Dynamic ROUTING</h1>
     
      {
        response.map((res:any) =>(
             <div key={res.id} className="text-gray-600">
             
              <Link href={`${res.id}`}>
              
              <h1 className="text-2xl text-center">
                {res.id} &nbsp; {res.title}
              </h1>
              
              </Link>

              </div>

             ))
        }
    </main>
  );
};