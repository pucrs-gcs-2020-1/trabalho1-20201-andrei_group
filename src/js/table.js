window.addEventListener('updateTransactionsTable', () => {
    const account = getSelectedAccount();
    dispatch('clearTable', { table: transactionsTable() })
    const headings = ['Data', 'Operador', 'NroDoc',	'Descrição', 'Valor'];
    addHeader(transactionsTable(), headings)
    account.transactions.forEach(transaction => {
        addTransactionRow({
            date: transaction.getDate(),
            operatorInitials: transaction.operator.initials,
            nroDoc: transaction.nroDoc,
            description: transaction.description,
            value: transaction.value.toFixed(2)
        })
    })

    getCurrentAmountLabel().innerHTML = account.getCurrentAmount().toFixed(2);
})

window.addEventListener('updateInformTable', () => {
    dispatch('clearTable', { table: informTable() })

    const account = getSelectedAccount();
    const headings = ['NroConta', 'Data de Criação', 'Operador', 'Saldo'];

    addHeader(informTable(), headings)

    ACCOUNTS.forEach(account => addInformRow(account))

    getTotalAmountLabel().innerHTML = ACCOUNTS.reduce((total, account) => total + account.getCurrentAmount(), 0).toFixed(2);
})

window.addEventListener('clearTable', ({ detail }) => {
    const table = detail.table;
    if (table.firstElementChild) {
        table.firstElementChild.innerHTML = "";
    }
})


const getCurrentAmountLabel = () => {
    return document.getElementById('currentAmount');
}

const getTotalAmountLabel = () => {
    return document.getElementById('totalAmount');
}

const transactionsTable = () => {
    return document.getElementById('transactions-table');
}
const informTable = () => {
    return document.getElementById('inform-table');
}


const buildCell = (row, index, value, size) => {
    const cell = row.insertCell(index);
    if (value < 0) {
        cell.style.color = 'red';
    }
    cell.innerHTML = value;
    if (size) cell.setAttribute('colspan', String(size));
    return cell;
}

const addHeader = (table, headings) => {
    const row = table.insertRow(-1);
    headings.forEach((head, index) => {
        const headerCell = document.createElement("th");
        headerCell.innerHTML = head;
        if (index === 3) headerCell.setAttribute('colspan', 3);
        row.appendChild(headerCell);
    })

}
const addTransactionRow = ({ date, operatorInitials, nroDoc, description, value }) => {
    const table = transactionsTable();
    const row = table.insertRow(table.rows.length);

    buildCell(row, 0, date)
    buildCell(row, 1, operatorInitials)
    buildCell(row, 2, nroDoc)
    buildCell(row, 3, description, 3)
    buildCell(row, 4, value)
}

const addInformRow = (account) => {
    const table = informTable();
    const row = table.insertRow(table.rows.length);

    buildCell(row, 0, account.id)
    buildCell(row, 1, account.getDate())
    buildCell(row, 2, account.createdBy.name, 3)
    buildCell(row, 3, account.getCurrentAmount().toFixed(2))
}