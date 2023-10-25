import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Text } from "@/components/text"

export default function Home() {
  return (
    <main className="mt-10 flex flex-col items-center justify-center gap-10">
      <div className="flex flex-wrap gap-4">
        <Link href={"/themes"}>
          <Button variant={"outline"}>Themes</Button>
        </Link>
        <Link href={"/landing-one"}>
          <Button variant={"outline"}>Landing one</Button>
        </Link>
        <Link href={"/library-cards"}>
          <Button variant={"outline"}>Cards library</Button>
        </Link>
      </div>

      <Text />
      <Text />
      <Image
        src={
          "https://images.unsplash.com/photo-1697723678949-5184d37f11ff?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt=""
        width={900}
        height={900}
      />
      <Text />
    </main>
  )
}
