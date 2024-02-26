import Link from "next/link"
import Header from "@/components/Header"


export default function Home() {
  return (
    <main>
    <h1>hello world!!</h1>
    <Header />
    <Link href='/cats-vs-dogs'>Read more</Link>
   
    </main>
  )
}
