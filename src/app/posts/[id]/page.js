export default async function Page({params}) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const result = await response.json()

    return (
        <div>
            <h1>post {result.id}</h1>
            <h2>{result.title}</h2>
            <p>{result.body}</p>
        </div>
    )

} 