import styles from './../styles/Home.module.css'
import logo from './../public/png/Logo.png'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { SiLinkedin } from 'react-icons/si'

function Footer() {
    return (
        <div className='flex justify-center bg-teal-50'>
            <div className='grid grid-rows-1 grid-cols-3 gap-x-32 p-3'>
                <div align='center' className='my-3'>
                    <Image src={logo} width="100px" height="80px" quality={100}></Image>
                    <h3 className="font-light text-blue-900">2021 PinFlag Chile ®</h3>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-teal-700 my-2">Empresa</h2>
                    <h3 className="font-light text-blue-900 my-2"><a className='hover:text-teal-400 cursor-pointer'>Iniciar sesión</a></h3>
                    <h3 className="font-light text-blue-900 my-2"><a className='hover:text-teal-400 cursor-pointer'>¿Eres comprador?</a></h3>
                    <h3 className="font-light text-blue-900 my-2"><a className='hover:text-teal-400 cursor-pointer'>¿Eres vendedor?</a></h3>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-teal-700 my-2">Soporte</h2>
                    <h3 className="font-light text-blue-900 my-2"><a className='hover:text-teal-400 cursor-pointer my-3'>Políticas de privacidad</a></h3>
                    <h3 className="font-light text-blue-900 my-2"><a className='hover:text-teal-400 cursor-pointer my-3'>contacto@pinflag.cl</a></h3>
                    <div className='grid grid-cols-4'>
                        <div><a className='cursor-pointer'><FaFacebook onMouseOver={({target})=>target.style.color="#0891b2"} onMouseOut={({target})=>target.style.color="#0f766e"} color="#0f766e" size="30px"></FaFacebook></a></div>
                        <div><a className='cursor-pointer'><FaYoutube onMouseOver={({target})=>target.style.color="#0891b2"} onMouseOut={({target})=>target.style.color="#0f766e"} color="#0f766e" size="30px"></FaYoutube></a></div>
                        <div><a className='cursor-pointer'><AiFillInstagram onMouseOver={({target})=>target.style.color="#0891b2"} onMouseOut={({target})=>target.style.color="#0f766e"} color="#0f766e" size="30px"></AiFillInstagram></a></div>
                        <div><a className='cursor-pointer'><SiLinkedin onMouseOver={({target})=>target.style.color="#0891b2"} onMouseOut={({target})=>target.style.color="#0f766e"} color="#0f766e" size="30px"></SiLinkedin></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;