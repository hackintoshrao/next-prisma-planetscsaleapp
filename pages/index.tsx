import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'> 
      <div className='text-2xl '>Which pokemon is rounder?</div>
      <div className='p-2'/>
      <div className='border rounded p-8 flex justify-between max-w-2xl items-center'>
        <div className='w-16 h-16 bg-red-200'></div>
        <div className='p-8'> vs </div>
        <div className="w-16 h-16 bg-red-200"></div>
      
      </div>

    </div>
    )
}

export default Home
