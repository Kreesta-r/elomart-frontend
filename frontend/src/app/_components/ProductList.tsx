
import React from 'react';
import { products } from './constants';
import ProductCard from './ProductCard';
import Link from 'next/link';

interface Product {
  Name: string;
  Desc: string;
  Price: number;
  Vendor: string;
  CreatedAt: Date;
  ImageUrl: string;
}

export default function ProductList() {
  return (
    <div className="flex flex-wrap justify-around">
      {products.map((product, index) => (
        <Link key={product.Name} href={`/listings/${product.id}`}>
          <ProductCard key={index} {...product} />
        </Link>
      ))}
    </div>
  );
}
