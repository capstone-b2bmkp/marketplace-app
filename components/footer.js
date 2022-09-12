import styles from './../styles/Home.module.css'
import logo from './../public/Logo.png'
import Image from 'next/image'

function Footer() {
    return (
        <div className='flex justify-center bg-teal-50'>
            <div className='grid grid-rows-1 grid-cols-3 gap-x-32 p-3'>
                <div align='center'>
                    <Image src={logo} width="120px" height="90px" quality={100}></Image>
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
                </div>
            </div>
        </div>
    )
}

export default Footer;