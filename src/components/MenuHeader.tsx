import { Menu } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./ThemeToggle";

export function MenuHeaderMobile({ navItems }: { navItems: any[] }) {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <header className="md:hidden flex flex-col fixed top-0 z-10 w-full py-2 px-3 backdrop-blur bg-background/35">
            <div className="flex justify-between items-center">
                <ModeToggle />
                <p className="font-semibold mr-2">manucode</p>
                <button
                    className="mr-3"
                    onClick={
                        () => {
                            setShowMenu(!showMenu)
                        }
                    }>
                    <Menu className="h-[1.2rem] w-[1.2rem]" />
                </button>
            </div>
            {showMenu ?
                <nav
                    className="flex flex-col items-center text-center w-full"
                >
                    <ol className="flex flex-col gap-4 w-full pt-4 pb-2">
                        {
                            navItems.map((link) => (
                                <li key={link.label}>
                                    <a
                                        className="relative block px-2 py-2 transition hover:text-green-600 dark:hover:text-[#00FF1A]"
                                        aria-label={link.label}
                                        href={link.url}
                                        onClick={() => { setShowMenu(false) }}
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ol>
                </nav>
                : null}
        </header>
    )
}