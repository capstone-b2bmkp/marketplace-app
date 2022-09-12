import styles from './../styles/Home.module.css';
import React from 'react';
import Image from 'next/image'

const Product = (props) => (
    <div>
        <div className='w-60 rounded-3xl border-2 border-solid border-teal-800 hover:border-dashed'>
            <Image className='rounded-3xl' 
            layout='responsive' 
            width={100}
            height={100}
            quality={100}
            src={props.src}/>
        </div>
        <h2 className='my-2 text-2xl font-semibold text-blue-900'><a className='cursor-pointer'>{props.productName}</a></h2>
        <h3 className='my-px text-lg font-light text-blue-900'>{props.company}</h3>
        <h2 className='my-px text-xl font-medium text-blue-900'>${props.price}</h2>
    </div>
  );
  
  export default Product;