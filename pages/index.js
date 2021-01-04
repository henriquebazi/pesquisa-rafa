import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/pagetitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index =() => {
    const { data, error } = useSWR('/api/get-promo', fetcher )
    return (
        <div>
            <PageTitle title= 'Seja bem-vindo' />
            <p className= 'mt-12 text-center'>
                O Rafa Doces surgiu do carinho e amor pela confeitaria, pois é muito gratificante proporcionar felicidade as pessoas por meios dos nossos doces.
            </p>
            <div className= 'text-center my-12'>
                <Link href= '/pesquisa'>
                    <a className= 'bg-blue-400 py-4 px-6 font-bold rounded-lg shadow-lg hover:shadow'>Dar opnião ou sugestão</a>
                </Link>
            </div>
            { !data && <p>Carregando...</p>}
            { !error && data && data.showCoupon &&
            <p className= 'my-12 text-center'>
                {data.message}
            </p>
            }
        </div>
    )
}

export default Index
