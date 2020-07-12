import React, { useState } from 'react'
import PageTitle from '../components/pagetitle'

const Pesquisa = () => {
    const [form, setForm ] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0
    })
    const notas= [0,1,2,3,4,5]
    const [sucess, setSucess ]= useState (false)
    const [retorno, setRetorno ]=useState({})
    const save = async () => {
        try{
        const response = await fetch('/api/save',{
            method: 'POST',
            body: JSON.stringify(form)
        })
        const data= await response.json()
        setSucess(true)
        setRetorno(data)
            }catch (err) {

            }
    }
    const onChange = evt =>{
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return(
        <div className='pt-6'>
            <PageTitle title= 'Pesquisa' />          
            <h1 className= 'text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
            <p className= 'text-center mb-6'>Aqui jás um texto</p>
            { !sucess && <div className='w-48 mx-auto'>
                <label className='font-bold'>Nome:</label>   
                <input type='text' className='p-4 block shadow bg-blue-100 m-2 rounded' placeholder='Nome' onChange = {onChange} name='Nome' value={form.Nome} />
                <label className='font-bold'>E-mail:</label> 
                <input type='text' className='p-4 block shadow bg-blue-100 m-2 rounded' placeholder='Email' onChange = {onChange} name='Email' value={form.Email} />
                <label className='font-bold'>Whatsapp:</label> 
                <input type='text' className='p-4 block shadow bg-blue-100 m-2 rounded' placeholder='Whatsapp' onChange = {onChange} name='Whatsapp' value= {form.Whatsapp} />
                <label className='font-bold'>Nota:</label> 
                <div className='flex py-4'>
                { notas.map(nota => {
                    return (
                    <label className='block w-1/6 text-center'>
                        {nota}<br />
                        <input type='radio' name='Nota' value={nota} onChange= {onChange}/>
                        </label>
                        )
                    })
                }
                </div>
                <button className='bg-blue-400 py-4 px-6 font-bold rounded-lg shadow-lg hover:shadow ' onClick={save}>Salvar</button>
            </div>}
            { sucess && <div className='w-48 mx-auto'>
                <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com seu comentário</p>
                {
                retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                    Seu desconto: <br />
                    <span className='font-bold text-2xl'>{retorno.Cupom}</span></div>
                }
                {
                retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                    <span className='font-bold block-mb-2'>{retorno.Produto}</span>
                    <br />
                    <span className='italic'>Tire um print e mostre para nós!</span>
                    </div>
                }
                </div>}
        </div>
    )
}

export default Pesquisa