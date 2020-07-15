import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/pagetitle'

const Contato = () => {
    return (
        <div>
            <PageTitle title='Contato' />
            <p className='text-center p-4'>Acesse nosso Instagram e veja as nossas delicias!</p>
            <div className='text-center'>
                <a className='underline' href="https://instagram.com/rafabazi.doces/" passHref={true}>
                    @rafabazi.doces
                </a>
                <a className='underline' href="https://instagram.com/rafabazi.doces/" passHref={true}>
                    Whatsapp:+55 11 94235-8105
                </a>
            </div>
        </div>
    )
}

export default Contato