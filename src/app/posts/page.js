import Link from "next/link"

export default async function Page({searchParams}) {
    console.log("searchParams", searchParams)
    //get our data
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const result = await response.json()

    if (searchParams.sort === 'desc') {
        result.reverse()
    }
    
    return (
        <div>
            <h2>This is blog page</h2>
            <Link href="/posts?sort=asc">sort ascending</Link>
            <Link href="/posts?sort=desc">sort decending</Link>
            <ul>
            {result.map(post => (
                <li key={post.id}>
                  <a href={`/posts/${post.id}`}>{post.title}</a>
                    </li>
            
            ))}
            </ul>
        </div>
    )

}
