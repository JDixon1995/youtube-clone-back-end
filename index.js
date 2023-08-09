import express from 'express';
import cookieParser from 'cookie-parser'
import videoRoutes from './routes/videos.js'
import commentRoutes from './routes/comments.js'
import userRoutes from './routes/users.js'

const app = express();

app.use(cookieParser())
app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/video', videoRoutes)
app.use('/api/comments', commentRoutes) 


app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "Something went wrong!"

    return res.status(status).json({
        success: false,
        status,
        message,
    })
})

app.listen(8800, () => {
    console.log("Connected to server...")
})