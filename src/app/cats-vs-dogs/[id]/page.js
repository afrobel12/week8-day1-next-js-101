import Link from "next/link";

export default function Page({params}) {
    return (
        <div>
        <h2>this is my dynamic route page: </h2>
        <Link href={`/cats-vs-dogs/${params.id}/names-of-warrior-cats`}>link to smt</Link>
        </div>
    )
}