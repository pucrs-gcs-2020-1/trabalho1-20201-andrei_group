window.addEventListener('updateContentTable', () => {
    ACCOUNTS.forEach(ac => addRow({
        date: ac.getDate(),
        operatorInitials: ac.createdBy.initials,
        nroDoc: ac.id,
        description: 'sei la',
        value: ac.totalCash
    }))
})


const contentTable = () => {
    return document.getElementById('content-table');
}

const buildCell = (row, index, value) => {
    const cell = row.insertCell(index);
    cell.innerHTML = value;
    return cell;
}

const addRow = ({ date, operatorInitials, nroDoc, description, value }) => {
    const table = contentTable();
    const row = table.insertRow(table.rows.length);

    buildCell(row, 0, date)
    buildCell(row, 1, operatorInitials)
    buildCell(row, 2, nroDoc)
    buildCell(row, 3, description)
    buildCell(row, 4, value)
}