import { Button } from "@/components/ui/button";
import { Bell, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { navigation } from "@/config/navConfig";



const Navbar = () => {
    return (
        <header className="border-b bg-gray-900 container mx-auto">
            <div className="flex h-16 items-center px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-lg font-bold text-white tracking-[7px]">
                        <span className="text-teal-500">H</span>OURS
                    </span>
                </Link>
                <nav className="ml-20 hidden md:flex md:items-center md:gap-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm ${item.current ? "text-white underline decoration-teal-500 underline-offset-4" : "text-gray-300 hover:text-white"}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="ml-auto flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="text-gray-300">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="pl-2 text-white">
                                <Avatar className="size-7">
                                    <AvatarImage src="https://github.com/faisal004.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span className="ml-2">Faisal</span>
                                <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Sign out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Sheet>
                        <SheetTrigger>
                            <Menu className="text-white md:hidden flex" />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle><span className="text-lg font-bold text-black tracking-[7px]">
                        <span className="text-teal-500">H</span>OURS
                    </span></SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4 mt-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`text-lg ${item.current ? "text-teal-500 font-semibold" : "text-gray-700 hover:text-teal-500"}`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
