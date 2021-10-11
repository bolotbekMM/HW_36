import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Расходы за обучение',
      amount: 12000,
      date: new Date(2021, 9, 10),
    },
    {
      id: 'e2',
      title: 'Расходы на транспорт',
      amount: 3000,
      date: new Date(2021, 9, 2)
    },
    {
      id: 'e3',
      title: 'Расходы на продукты',
      amount: 5000,
      date: new Date(2021, 9, 1),
    },
    {
      id: 'e4',
      title: 'Расходы на жилье',
      amount: 20000,
      date: new Date(2021, 9, 5),
    },
  ];

  

  return (
    <div>
      {
          expenses.map((element, index) => {
            return <ExpenseItem 
            title={element.title}
            amount={element.amount}
            date={element.date}
             />
          })
}
</div>
  );
}
export default App;