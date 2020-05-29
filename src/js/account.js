const buildAccount = (operator) => {

    return {
        id: intID(),
        createdAt: new Date(),
        createdBy: operator,
        totalCash: 0.0,
        transactions: [],
        getDate() {
            const date = this.createdAt;
            const month = date.getMonth()+1
            return `${date.getDate()}/${month  >= 10 ? month : `0${month}`}/${date.getFullYear()}`;
        }
    }
}

const intID = () => parseInt(Math.random() * (9999 - 1000) + 1000);

const getAccountMessage = () => {
    return document.getElementById('accountMessage');
}

const getSelectedAccount = () => {
   const id = document.getElementById('accountSelection').value;
   return ACCOUNTS.find(ac => ac.id === parseInt(id));
}
const changeAccount = () => {
    const account = getSelectedAccount();
    const message = getAccountMessage();
    message.innerHTML = `Conta ${account.id}, criada por ${account.createdBy.name} (${account.createdBy.initials}) em ${account.getDate()}`
}