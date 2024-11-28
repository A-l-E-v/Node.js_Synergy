// Напишите программу в которой каждые 3 секунды в вечном цикле будет выводиться
// текущая дата и случайная фраза из массива с пожеланиями пользователю

const Greetings = ['Hello', 'Hola', 'Bonjour', 'Hallo']

const showGreeting = () => Greetings[Math.floor(Math.random() * Greetings.length)]



const showDate = () => {
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = dd + '.' + mm + '.' + yyyy;
    console.log(today, showGreeting());
}

const sleep = ms => new Promise(r => setTimeout(r, ms));


(async () => {
    while (true) {
        showDate()
        await sleep(3000);
    }
})();

