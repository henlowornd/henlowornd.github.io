"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
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

const leftList: NavbarItem[] = [
	{ name: blogName, url: "/" },
	{ name: "留言板", url: "/comments" },
	{ name: "友链", url: "/links" },
];

const rightList: NavbarItem[] = [
	{ name: "Blog", url: "/blog" }
];

export function Navbar() {
	return (
		<NavigationMenu className="z-10 nav-padding w-full max-w-none pt-1 flex justify-between fixed shadow-[var(--nav-drop-shadow)] backdrop-blur-xs overflow-hidden *:text-sm">
			<NavigationMenuList className="max-sm:gap-0 text-nowrap">
				{leftList.map(({ name, url }, i) => (
					<NavigationMenuItem key={i}>
						<NavigationMenuLink asChild>
							<Link href={url}>{name}</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>

			<div className="flex gap-1 items-center max-sm:hidden">
				<NavigationMenuList>
					{rightList.map(({ name, url, external }, i) => (
						<NavigationMenuItem key={i}>
							<NavigationMenuLink asChild>
								<Link href={url} target={external ? "_blank" : "_self"}>
									{name}
									{external && <ExternalLink />}
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</div>
		</NavigationMenu>
	);
}
