import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href="/addform">addform</Link>
      <br />
      <Link href="/empList">emplist</Link>
    </div>
  )
}
