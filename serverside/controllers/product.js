import Product from '../models/product.js'


export const getProducts = async (req, res) => {

    try {
        const data = await productModel.find({})
        res.send(JSON.stringify(data))
    }
    catch (error) {
        res.status(500).json({ message: 'error in getProducts = \n', error })
    }
}

export const createProduct = async (req, res) => {
    try {
        console.log(req.body)
        const data = await Product(req.body)
        const datasave = await data.save()
        res.send({ message: "product created successfully" })
    }
    catch (error) {
        res.status(500).json({ message: 'error in createProduct = \n ', error })
    }
}