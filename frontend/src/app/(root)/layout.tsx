import React from 'react'
import Header from '../_components/Header';


export default function SubRootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
    <Header/>
    <div className='bg-white'>
      {children}
    </div>
    </>
  )
}
