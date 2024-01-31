import express  from 'express';
import morgan from 'morgan';
import cors from 'cors' 
import authRoutes from './module/Users/routes/auth.routes'
import passport from 'passport';
import passportMiddleware from './middlewares/passport'

//inicial
const app = express()

//config
app.set('port',process.env.PORT || 4000)

// Configuración de cors
const corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};



//middlewares
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize())
passport.use(passportMiddleware)

//routes 
app.get('/',(req,res) => {
    res.send()
})

app.use(authRoutes)

export default app 
