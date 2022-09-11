import styles from './../styles/Home.module.css'
import logo from './../public/Logo.png'
import Image from 'next/image'

function Header() {
    return(
        <div>
        <nav class="bg-white border-gray-200 bg-teal-50">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                <a href="https://www.google.cl/" class="flex items-center">
                    <Image src={logo} width="120px" height="90px" quality={100} class="mr-3 h-6 sm:h-9" alt="Logo" />
                </a>
                <div class="flex items-center">
                    <a href="tel:5541251234" class="mr-6 text-sm font-medium text-blue-900 hover:text-teal-400 cursor-pointer">+569 1111 2222</a>
                    <a href="#" class="text-sm font-medium text-blue-900 hover:text-teal-400 cursor-pointer">INICIAR SESIÓN</a>
                </div>
            </div>
        </nav>
        <nav class="bg-teal-100">
        <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
            <div class="flex items-center">
                <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-sm font-medium text-teal-700 hover:text-teal-400 cursor-pointer" aria-current="page">DESTACADOS</a>
                    </li>

                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-sm font-light text-blue-900 hover:text-teal-400 cursor-pointer">HOMBRE</a>
                    </li>
                  
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-sm font-light text-blue-900 hover:text-teal-400 cursor-pointer">MUJER</a>
                    </li>

                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-sm font-light text-blue-900 hover:text-teal-400 cursor-pointer">KIDS</a>
                    </li>

                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-sm font-light text-blue-900 hover:text-teal-400 cursor-pointer">CALZADO</a>
                    </li>

                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-sm font-light text-blue-900 hover:text-teal-400 cursor-pointer">ACCESORIOS</a>
                    </li>

                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-sm font-light text-blue-900 hover:text-teal-400 cursor-pointer">EQUIPAMIENTO</a>
                    </li>

                    <li>
                    <div class="hidden relative md:block">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-teal-100" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" class="block p-2 pl-10 w-full text-neutral-50 bg-teal-900 rounded-lg border border-teal-500 sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Buscar producto..."/>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        </div>

)    
}

export default Header;