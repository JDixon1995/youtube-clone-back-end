import express from 'express';
import cookieParser from 'cookie-parser'


const app = express();

app.use(cookieParser())
app.use(express.json())
app.use('/api/video', videoRoutes)

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