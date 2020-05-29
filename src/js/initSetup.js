var OPERATORS = [
    { name: 'Augusto Almir', initials: 'AA' },
    { name: 'José Jair', initials: 'JJ' },
    { name: 'Yasmin Yagni', initials: 'YY' }
]

var ACCOUNTS = [
    {}
]

setTimeout(() => {
    var welcomeMessage = document.getElementById('welcome')
    welcomeMessage.innerHTML = `Bem vindo, ${OPERATORS[0].name}!`
}, 100)