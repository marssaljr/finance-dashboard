'use client'
import { BellRing, Moon, SearchCode, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import type { ReactElement, ReactNode } from "react"
import { Button } from "../button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../dropdown-menu"

interface AppTopBarProps {
    children: ReactElement | ReactNode
}

const AppTopBar = ({ children }: AppTopBarProps) => {
    const { setTheme } = useTheme()
    return (
        <div className="w-full">
            <div className="h-16 flex px-4 py-2 gap-2 items-center border-b lg:justify-between">
                <div className="flex gap-2 items-center">
                    <img src="/woman.png" alt="woman" className="w-10 h-10 rounded-full" />
                    <div className="gap-1 hidden lg:flex flex-col ">
                        <h3 className="font-bold text-xs">Syarah Adela</h3>
                        <p className="text-xs">Hello, Welcome back!</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="flex items-center gap-2 border rounded-md px-2 bg-secondary">
                        <SearchCode className="text-sm text-muted-foreground" />
                        <input className="text-sm flex items-center justify-center h-full border-none bg-secondary" placeholder="Search" />
                    </div>
                    <Button className="flex" variant="outline">
                        <BellRing />
                        <span className="hidden lg:block bg-primary text-xs text-primary-foreground py-1 px-2 rounded-md">
                            2 New
                        </span>
                    </Button>
                </div>
            </div>
            {children}
        </div>
    )
}

export default AppTopBar