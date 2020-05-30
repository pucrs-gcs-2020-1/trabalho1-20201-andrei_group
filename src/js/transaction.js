const buildTransaction = ({ date, description, operator, value }) => {
   return {
        createdAt: date || new Date(),
        operator: operator,
        nroDoc: intID(),
        description: description,
        value: value || 0.00,
        getDate() {
            const date = this.createdAt;
            const month = date.getMonth()+1
            return `${date.getDate()}/${month  >= 10 ? month : `0${month}`}/${date.getFullYear()}`;
        }
    }
}