import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'

const doc = new GoogleSpreadsheet (process.env.SHEET_DOC_ID)

export default async (req, res) => {
    try{
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY
            })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A2:B3')
       
        const mostrarPromocaoCell = sheetConfig.getCell(2, 0)
        const textoCell = sheetConfig.getCell(2, 1)

        let Cupom = ''
        let Produto = ''

        if(mostrarPromocaoCell.value === 'VERDADEIRO'){
            // ToDo: gerar cupom
            Cupom = 'temporario'
            Produto = textoCell.value
        }

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: parseInt(data.Nota),
            'Data Pesquisa': moment().format('DD/MM/YYYY HH:mm:ss'),
            Cupom,
            Produto
        })
        res.end(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Produto
        }))
    }catch(err) {
    console.log(err)
    res.end('error')
    }
}