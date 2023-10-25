import { FigmaLogoIcon } from "@radix-ui/react-icons"

import { ThemeToggle } from "@/components/theme-toggle"

import { NavigationMenuDemo } from "./navigation-menu"
import { Icons } from "./icons"

export function SiteHeader() {
  return (
    <nav className="sticky left-0 top-0 z-50 flex h-14 w-full items-center justify-around border-b backdrop-blur-[30px] backdrop-saturate-[120%] ">
      <div className="flex items-center gap-5">
        <Icons.logo className="h-10 w-10" />
        <NavigationMenuDemo />
      </div>
      <ThemeToggle />
    </nav>
  )
}
