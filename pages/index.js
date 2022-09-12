import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './../components/header'
import Footer from './../components/footer'
import inicio from './../public/png/Inicio.png'
import photo1 from './../public/png/chaquetaNiño.png'
import photo2 from './../public/png/calcetinesMujer.png'
import photo3 from './../public/png/poleraHombre.png'
import photo4 from './../public/png/calcetinesViajero.png'
import photo5 from './../public/png/poleraMujer.png'
import photo6 from './../public/png/chalecoMujer.png'
import photo7 from './../public/png/zapatillasNiño.png'
import photo8 from './../public/png/poleronHombre.png'
import photo9 from './../public/png/chaquetaHombre.png'
import Product from './../components/product'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div>
        <h1 className='text-blue-900 text-3xl font-semibold absolute z-20 top-60 left-9'>CONECTA TU E-COMMERCE A NUESTRA RED</h1>
        <div className='relative'>
          <Image src={inicio}
            width="100%"
            height="43px"
            layout="responsive"
            objectFit="contain"
            quality="100"
          />
        </div>
      </div>

      <div className='h-14 bg-gradient-to-r from-teal-200 to-teal-100'></div>

      <h2 className='m-9 text-4xl font-bold text-blue-900'>PRODUCTOS DESTACADOS</h2>
      <div className='mx-9 my-9 grid grid-rows-2 grid-cols-5 gap-y-12 gap-x-8'>
        <div><Product src={photo1} productName="Chaqueta Niño" company="Lippi" price="44.990"></Product></div>
        <div><Product src={photo2} productName="Calcetines Mujer" company="Haka Honu" price="10.990"></Product></div>
        <div><Product src={photo4} productName="Calcetines Viajero" company="Haka Honu" price="10.990"></Product></div>
        <div><Product src={photo5} productName="Polera Mujer" company="Lippi" price="9.990"></Product></div>
        <div><Product src={photo7} productName="Zapatilla Niño" company="Lippi" price="34.990"></Product></div>
        <div><Product src={photo3} productName="Polera Hombre" company="Geography" price="7.490"></Product></div>
        <div><Product src={photo6} productName="Chaleco Mujer" company="Haka Honu" price="32.990"></Product></div>
        <div><Product src={photo8} productName="Poleron Hombre" company="Geography" price="15.990"></Product></div>
        <div><Product src={photo9} productName="Chaqueta Hombre" company="Geography" price="37.990"></Product></div>
      </div>

      <div className='h-14 bg-gradient-to-r from-teal-200 to-teal-100'></div>
      <Footer></Footer>
    </div>
  )
}
