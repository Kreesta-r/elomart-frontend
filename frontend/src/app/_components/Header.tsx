"use client"
import { Button } from "@/components/ui/button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { useCartStore } from './context/CartStore';
import useTabStore from "./context/TabStore";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { setCurrentTab } = useTabStore();
  const { getTotalCartQuantity } = useCartStore();

  const handleClickSignIn = () => setCurrentTab('sign-in');
  const handleClickSignUp = () => setCurrentTab('sign-up');

  const cartQuantity = getTotalCartQuantity();

  return (
    <>
      <div className="flex py-2 px-[70px] bg-blue-200 justify-between">
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/sign-up">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Get started</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Help</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex gap-[10px]">
          <Link href="/auth">
            <Button className="bg-blue-500" onClick={handleClickSignIn}>Sign In</Button>
          </Link>
          <Link href="/auth">
            <Button className="bg-secondary text-foreground hover:text-white hover:bg-orange-200" onClick={handleClickSignUp}>
              Sign Up
            </Button>
          </Link>
        </div>
      </div>

      {/* BOTTOM HEADER */}
      <div className="p-6 bg-blue-50 flex justify-between">
        <Image src="/elomart_logo.png" alt="logo" width={190} height={1} />
        <div className="flex">
          <Input className="w-[500px]" />
          <Button className="bg-blue-600 text-white">Search</Button>
        </div>
        <div className="flex flex-col justify-center">
          <AiOutlineShoppingCart className="h-6 w-6 text-grey m-auto" />
          <span className="ml-2 text-grey">Cart ({cartQuantity})</span>
        </div>
      </div>
    </>
  );
}
