const buildAccount = (operator, transactions) => {

    return {
        id: intID(),
        createdAt: new Date(),
        createdBy: operator,
        transactions: transactions || [],
        getCurrentAmount(){
            return calcTotalCash(this.transactions);
        },
        getDate() {
            const date = this.createdAt;
            const month = date.getMonth()+1
            return `${date.getDate()}/${month  >= 10 ? month : `0${month}`}/${date.getFullYear()}`;
        }
    }
}

const calcTotalCash = (transactions) => {
    return transactions.reduce((total, transaction) => {
        return total+ transaction.value;
    }, 0)
}

const intID = () => parseInt(Math.random() * (9999 - 1000) + 1000);

const getAccountMessage = () => {
    return document.getElementById('accountMessage');
}

const getSelectedAccount = () => {
   const id = document.getElementById('accountSelection').value;
   return ACCOUNTS.find(ac => ac.id === parseInt(id));
}

const addAccount = () => {
    const operator = getOperator();
    const account = buildAccount(operator);
    window.alert(`Conta criada com sucesso!\nCod Conta: ${account.id}`);
    ACCOUNTS.push(account);
    addToDropdown('accountSelection', account, () => `Cod: ${account.id} - Criado por: ${account.createdBy.name}`);
    addToDropdown('receiverAcc', account, () => `Cod: ${account.id}`);
    
    dispatch('updateInformTable');
}

window.addEventListener('addAccount', () => {
    addAccount()
})

const updateAccountSelection = () => {

}