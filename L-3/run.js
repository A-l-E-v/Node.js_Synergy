// Напишите программу в которой каждые 3 секунды в вечном цикле будет выводиться
// текущая дата и случайная фраза из массива с пожеланиями пользователю


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

(async () => {
    while (true){
        await sleep(3000)
        console.log('Hello User!');
    }
})