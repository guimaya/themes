import Image from "next/image"
import Link from "next/link"
import { MayaIcon } from "@/assets/maya-icon"

import { HeaderNavigation } from "./header-navigation"
import { ThemeToggle } from "./theme-toggle"

export function HeaderOne() {
  return (
    <header className="sticky top-0 z-50 flex h-14 w-full items-center justify-around border-b bg-background/95 backdrop-blur backdrop-saturate-[120%] supports-[backdrop-filter]:bg-background/60 ">
      <Link href="/">
        <MayaIcon className="mr-4" />
      </Link>
      <HeaderNavigation />
      <ThemeToggle />
    </header>
  )
}
