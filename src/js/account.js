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
    
}

const addAccount = () => {
    const operator = getOperator();
    const account = buildAccount(operator);
    window.alert(`Conta criada com sucesso!\nCod Conta: ${account.id}`);
    ACCOUNTS.push(account);
    dispatch('updateAccount');
}

window.addEventListener('addAccount', () => {
    addAccount()
})

const updateAccountSelection = () => {

}