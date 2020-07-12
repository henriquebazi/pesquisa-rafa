import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/pagetitle'

const Sobre = () => {
        return(
        <div>
            <PageTitle title='Sobre' />
            <h1>Página sobre</h1>
            <div>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </div>
        </div>
    )
}

export default Sobre