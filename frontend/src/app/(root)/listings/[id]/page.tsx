"use client"
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { products } from '../../../_components/constants';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCartStore } from '../../../_components/context/CartStore';

const ProductPage = () => {
  const { addToCart }: { addToCart: (name: string) => void } = useCartStore();
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const router = useRouter();
  const product = products.find((product) => product.id === productId);

  if (!product) return <p>Product not found</p>;

  const handleClick = () => {
    addToCart(product.Name);
    router.push('/cart');
  };

  return (
    <div className='p-[50px]'>
      <div className='flex px-[50px] py-[50px] flex flex-col sm:flex-row gap-[50px]'>
      <div className='w-1/2 h-[600px] '>
        <Image src={product.ImageUrl} 
        alt={product.Name} 
        width={10000}
        height={10000}
        className='object-fit '
        />
      </div>
      <div className='text-gray-700 gap-6 flex flex-col'>
        <h1 className='text-xl font-bold'>{product.Name}</h1>

        <p><b>Description:</b><br/> {product.Desc}</p>
        <p><b>Price: </b>${product.Price}</p>
        <p className='text-gray-500'><b>Vendor: </b>{product.Vendor}</p>
        <Button
        className='bg-red-400 hover:bg-red-300'
        onClick={handleClick}
        >Add to cart</Button>
      </div>
      </div>
     
    </div>
  );
};

export default ProductPage;
