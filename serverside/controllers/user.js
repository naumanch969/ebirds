import User from '../models/user.js'


export const register = async (req, res) => {
    const { email } = req.body;
    try {

        const user = await User.findOne({ email })
        if (user) return res.status(401).json({ message: 'email already exist!' })

        const data = await User.create(req.body);
        res.send({ data, message: "Successfully register", alert: true });

    }
    catch (error) {
        res.status(500).json({ message: 'register failed', error })
    }
}

export const login = async (req, res) => {

    const { email } = req.body
    try {
        const user = await User.findOne({ email: email })
        if (!user) return res.status(401).json({ message: 'wrong email!' })

        res.send({ data: user, message: "login successful!", alert: true })
    }
    catch (error) {
        res.status(500).json({ message: 'login failed', error })
    }
}