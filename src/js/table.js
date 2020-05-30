window.addEventListener('updateContentTable', () => {
    const account = getSelectedAccount();
    dispatch('clearTable')
    addHeader()
    account.transactions.forEach(transaction => {
        addRow({
            date: transaction.getDate(),
            operatorInitials: transaction.operator.initials,
            nroDoc: transaction.nroDoc,
            description: transaction.description,
            value: transaction.value.toFixed(2)
        })
    })

    getTotalAmountLabel().innerHTML = account.getTotalAmount().toFixed(2);
})

window.addEventListener('clearTable', () => {
    const table = contentTable();
    if (table.firstElementChild) {
        table.firstElementChild.innerHTML = "";
    }
})


const getTotalAmountLabel = () => {
    return document.getElementById('totalAmount');
}

const contentTable = () => {
    return document.getElementById('content-table');
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

const addHeader = () => {
    const table = contentTable();
    const row = table.insertRow(-1);
    const headings = ['Data', 'Operador', 'NroDoc',	'Descrição', 'Valor'];
    headings.forEach((head, index) => {
        const headerCell = document.createElement("th");
        headerCell.innerHTML = head;
        if (index === 3) headerCell.setAttribute('colspan', 3);
        row.appendChild(headerCell);
    })

}
const addRow = ({ date, operatorInitials, nroDoc, description, value }) => {
    const table = contentTable();
    const row = table.insertRow(table.rows.length);

    buildCell(row, 0, date)
    buildCell(row, 1, operatorInitials)
    buildCell(row, 2, nroDoc)
    buildCell(row, 3, description, 3)
    buildCell(row, 4, value)
}