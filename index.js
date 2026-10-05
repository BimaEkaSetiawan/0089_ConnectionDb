import express from 'express'
import pg from 'pg'

const app = express()
const port = 3000

app.use(express.json())
app.use(
    express.urlencoded({ extended: true })
)

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: '123',
    port: 5432,
})

