"use client";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

function Sidebar() {
  // will give with sales page, products page ...
  const pathname = usePathname();

  return (
    <aside>
      {adminLinks.map((link) => {
        // if they match then this is active page
        const isActivePage = pathname === link.href;
        const variant = isActivePage ? "default" : "ghost";
        return (
          <Button
            key={link.href}
            asChild
            className="w-full mb-2 capitalize font-normal justify-start"
            variant={variant}
          >
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          </Button>
        );
      })}
    </aside>
  );
}
export default Sidebar;
