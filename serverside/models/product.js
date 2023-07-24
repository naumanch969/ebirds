import { Schema, model } from 'mongoose'

const productSchema = Schema({
    name: String,
    category: String,
    image: String,
    price: String,
    description: String,
});

const productModel = model('Product', productSchema)
export default productModel