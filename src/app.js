import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello, World!');
});