import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator
} from "@/components/ui/sidebar"
import { Calendar, CircuitBoard, Crown, HelpCircle, Home, Inbox, PanelLeftClose, Search, Settings, TrendingUp } from "lucide-react"
import { Button } from "../button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card"

// Menu items.
const items = [
    {
        title: "Dasboard",
        url: "#",
        icon: Home,
    },
    {
        title: "Transactions",
        url: "#",
        icon: Inbox,
    },
    {
        title: "My Goals",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Investment",
        url: "#",
        icon: Search,
    },
    {
        title: "Bills and Payment",
        url: "#",
        icon: Settings,
    },
    {
        title: "Analytics and Reports",
        url: "#",
        icon: TrendingUp,
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="border-b h-16 flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col justify-center">
                        <div className="w-8 h-8 rounded-full bg-slate-500 items-center flex justify-center">x</div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold">Finomic</h1>
                        <p className="text-xs font-medium">Financial Assistant</p>
                    </div>
                    <div>
                    </div>
                </div>
                <div>
                    <PanelLeftClose />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>MENU</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator />
                <SidebarGroup>
                    <SidebarGroupLabel>SUPPORT</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <HelpCircle />
                                        <span>Helps</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <CircuitBoard />
                                        <span>Integration</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Settings />
                                        <span>Settings</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Become Pro Access
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        Try your experience for using more features
                    </CardContent>
                    <CardFooter>
                        <Button><Crown />Upgrade Pro</Button>
                    </CardFooter>
                </Card>
            </SidebarFooter>
        </Sidebar>
    )
}
