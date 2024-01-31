import { Request,Response} from 'express'
import User,{ IUser } from '../model/user'
import jwt from 'jsonwebtoken'
import config from '../../../config/config'

function createToken(user:IUser) {
    return  jwt.sign({id:user.id,email:user.email}, config.jwtSecret,{
        expiresIn:86400
    })
}

export const signUp = async (req:Request,res:Response) : Promise<Response> => {
        console.log(req.body) 
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({msg:'Por favor.Envie su contraseña y email '})
    }

    const user = await User.findOne({email:req.body.email});
    if (user) {
        return res.status(400).json({msg: 'usuario existente'})
    }
    const newUser = new User(req.body)
    await newUser.save()

    console.log(newUser) 
    return res.status(201).json(newUser);

}

export const signIn = async (req: Request, res: Response) : Promise<Response>  => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ msg: 'Por favor, envíe su contraseña y email' });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ msg: 'No existe el usuario' });
    }

   const isMach = await user.comparePassword(req.body.password)
   if(isMach) {
    console.log(user)
    return res.status(200).json({token: createToken(user)})
   }
    
   return res.status(400).json({
    msg:'El email o contraseña son incorrectos'
   })
}