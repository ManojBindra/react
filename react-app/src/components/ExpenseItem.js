import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  const onClickHandler = () => {
    console.log(10);
  }
  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {Math.floor(props.amount)}</div>
      </div>
      <button onClick={onClickHandler()}>Click Me!!</button>
    </div>
  );
}

export default ExpenseItem;
