import React from 'react'
import styles from '../style.module.css'
import Link from 'next/link'

const Header =() => {
    return(
        <React.Fragment>
        <div className= {styles.wrapper}>
            <div className= 'container mx-auto'>
                <Link href='/'>
                <a><img className= 'mx-auto h-64' src='/rafa-doces.jpg' /></a>
                </Link>
            </div>
        </div>
        <div className= 'bg-gray-300 shadow-md text-center'>
        <Link href='/sobre'>
                        <a className= 'px-4 hover:underline'>Sobre</a>
                    </Link>
                    <Link href='/contato'>
                        <a className= 'px-4 hover:underline'>Contato</a>
                    </Link>
                    <Link href='/pesquisa'>
                        <a className= 'px-4 hover:underline'>Pesquisa</a>
                    </Link>
        </div>
        </React.Fragment>
    )
}
export default Header