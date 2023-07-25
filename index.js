import express from 'express';


const app = express();

app.use(express.json())

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