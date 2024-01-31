export default {
    jwtSecret:process.env.JWT_SECRET || 'somesecrettoken',
    DB: {
        URI:process.env.MONGODB_URI ||'mongodb+srv://ariass:43354316@cluster0.resfzpb.mongodb.net/NetflixretryWrites=true&w=majority',
        USER:process.env.MONGODB_USER,
        PASSWORD:process.env.MONGODB_PASSWORD 

    }
}