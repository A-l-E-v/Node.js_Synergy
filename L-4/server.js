// 1)Создайте проект npm init, установите в него express и напишите простейший сервер,
// который будет отвечать на главной странице вашим именем.
// 2)Запустите на порту 3000 и проверьте что он работает.
// 3)Составьте краткий конспект по данной теме.


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.type('text/html');
    res.send('<h1>Привет, Алексей!</h1>')
})

app.listen(port, () => {
    console.log(`Server has been started on port: ${port}`)
})

