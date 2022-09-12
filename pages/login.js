import styles from '../styles/Home.module.css'
import logo from './../public/png/Logo.png'
import Image from 'next/image'
import {GoKey} from 'react-icons/go'

export default function Login() {
  return (
    <div align='center'>
      <div className='m-6'>
        <Image src={logo} 
             width="359x"
             height="263px"
             quality="100">
        </Image>
      </div>
      <div align='center' className='w-1/4 bg-teal-100 p-3.5 rounded-lg'>
        <h1 className='text-xl text-blue-900 font-light'>¡Inicie sesión para comprar y vender!</h1>
        <input className='text-center text-blue-900 m-3 w-80 h-10 rounded-full border-2 border-blue-900 placeholder-blue-900 placeholder-opacity-50' placeholder='Ingrese correo electrónico de empresa'></input>
        <br></br>
        <input type='password' className='text-center text-blue-900 m-3 w-80 h-10 rounded-full border-2 border-blue-900 placeholder-blue-900 placeholder-opacity-50' placeholder='Ingrese contraseña'></input>
        <br></br>
        <div className='ml-6 text-left'>
            <input className="rounded border-2 border-blue-900" type="checkbox"></input>
            <label className='m-x-3 font-light text-sm text-blue-900'> Recordarme</label>
        </div>
        <button className='m-3 font-medium rounded-full text-xl w-80 h-10 bg-teal-700 text-neutral-50 hover:bg-teal-500 cursor-pointer'>Ingresar</button>
        <div className='ml-6 text-left flex justify-beetween'>
            <GoKey color="#1e3a8a" size="25px"></GoKey>    
            <p className='mr-6 font-light text-sm text-blue-900'><a className='cursor-pointer'>¿Olvidaste tu contraseña?</a></p>
        </div>
      </div>
    </div>
  )
}