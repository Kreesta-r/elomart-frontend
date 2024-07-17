"use client"
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { FaHeart } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { useCartStore } from './context/CartStore';

interface Product {
  Name: string;
  Desc: string;
  Price: number;
  Vendor: string;
  CreatedAt: Date;
  ImageUrl: string;
}

export default function ProductCard({
  Name,
  Desc,
  Price,
  Vendor,
  CreatedAt,
  ImageUrl,
}: Product) {
  const { addToCart }: { addToCart: (name: string) => void } = useCartStore();

  const handleClick = () => {
    addToCart(Name);
  };

  return (
    <div>
      <Card className="w-[400px] mt-9">
        <CardContent className="w-full">
          <Image
            src={ImageUrl}
            alt={Name}
            width={10000}
            height={10000}
            className="w-full h-[300px] object-cover"
          />
        </CardContent>
        <CardHeader className="h-[240px]">
          <CardTitle>{Name}</CardTitle>
          <p className="line-clamp-3">{Desc}</p>
          <p>Price: ${Price}</p>
          <p>Vendor: {Vendor}</p>
        </CardHeader>

        <CardFooter className="flex justify-between">
          <HoverCard>
            <HoverCardTrigger>
              <FaHeart className="text-gray-300 hover:text-red-600 text-xl" />
            </HoverCardTrigger>
            <HoverCardContent>Add to Wishlist</HoverCardContent>
          </HoverCard>
          <Button className="bg-red-400 hover:bg-red-300" onClick={handleClick}>
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}