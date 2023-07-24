import {Schema, model} from 'mongoose'

const userSchema = Schema({
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    confirmPassword: String,
    image: String,
  });

  
const userModel  =model('User', userSchema)
export default userModel