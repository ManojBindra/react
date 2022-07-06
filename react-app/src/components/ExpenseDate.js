import "./ExpenseDate.css"
function ExpenseDate(props){
    const options = { month: 'long'};
    const month = new Intl.DateTimeFormat('en-US', options).format(props.date);
    return(
        <div className="expense-date">
        <div className="expense-date__date">{props.date.getDate()}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{props.date.getFullYear()}</div>
      </div>
    );
    
}

export default ExpenseDate;