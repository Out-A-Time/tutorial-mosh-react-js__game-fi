import { BsFillCalendar2DateFill } from 'react-icons/bs';

import Button from './components/Button/Button';

import styles from './App.module.css'
import ButtonBTC from './components/ButtonBTC/ButtonBTC';
import { useState } from 'react';
import Message from './components/Message/Message';

function App() {
  //1-Way
  const [firstName, setFirstName] = useState('Max')
  const [lastName, setLastName] = useState('Kolonko')
  const fullName = firstName + ' ' + lastName

  //2-Way
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
  })

  //Lesson039
  const [drink, setDrink] = useState({ title: 'Americano', price: 5 })
  //When updating object, we have to create new object
  const handleClickL39 = () => {
    const newDrink = { ...drink, price: 7 }
    setDrink(newDrink)
  }

  //Lesson040
  const [customer, setCustomer] = useState({ name: "John", address: { city: 'San Francisco', zipCode: '12345' } })
  const handleClickL40 = () => {
    setCustomer({ ...customer, address: { ...customer.address, zipCode: '77777' } })
  }

  return (
    <div className="App">
      <BsFillCalendar2DateFill color='red' size="40" />
      <button className={styles.buttonStyleOne}>Click Me!</button>
      <button className={[styles.buttonStyleOne, styles.container].join('')}>Click Me!</button>
      <button className={styles["buttonStyleTwo"]}>Click Me!</button>
      <Button onClick={() => { }}>New Button</Button>
      <ButtonBTC />

      {fullName}

      <Message />
      <Message />
      <Message />

      //Lesson039
      <button onClick={handleClickL39}>Update Object</button> Drink Price: {drink.price}
      //Lesson040
      <button onClick={handleClickL40}>Update Nested Object</button> ZipCode: {customer.address.zipCode}
    </div>
  );
}

export default App;
