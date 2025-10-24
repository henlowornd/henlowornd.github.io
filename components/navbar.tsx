"use client";

import Link from "next/link";
import { Rss } from "lucide-react";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList
} from "./ui/navigation-menu";
import { blogName } from "@/lib/global";

interface NavbarItem {
	name: string
	url: string
	external?: boolean
}

const navList: NavbarItem[] = [
	{ name: blogName, url: "/" },
	{ name: "Blog", url: "/blog" },
	{ name: "Comments", url: "/comments" },
	{ name: "Links", url: "/links" },
];

export function Navbar() {
	return (
		<NavigationMenu className="z-10 nav-padding w-full max-w-none pt-1 flex justify-between fixed shadow-[var(--nav-drop-shadow)] backdrop-blur-xs overflow-hidden *:text-sm">
			<NavigationMenuList className="max-sm:gap-0 text-nowrap">
				{navList.map(({ name, url }, i) => (
					<NavigationMenuItem key={i}>
						<NavigationMenuLink asChild>
							<Link href={url}>{name}</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>

			<div className="flex gap-3 items-center max-sm:hidden">
				<Link href="/rss/feed.json" title="订阅 RSS">
					<Rss size={18}/>
				</Link>
			</div>
		</NavigationMenu>
	);
}
