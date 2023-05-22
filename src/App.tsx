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

  //Lesson041
  const [tags, setTags] = useState(['happy', 'cheerful'])
  //When updating arrays, we have to create new array with Spread Operator
  const handleClickL41a = () => {
    //Add element to array
    setTags([...tags, 'exicting'])
    console.log(tags);
  }
  const handleClickL41b = () => {
    //Remove element from array
    setTags([tags.filter(tag => tag !== 'happy')])
    console.log(tags);
  }
  const handleClickL41c = () => {
    //Update array
    setTags(tags.map(tag => tag === 'happy' ? 'HAPPINNES' : tag))
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
      <div>
      //Lesson039
        <button onClick={handleClickL39}>Update Object</button> Drink Price: {drink.price}
      </div>
      <div>
      //Lesson040
        <button onClick={handleClickL40}>Update Nested Object</button> ZipCode: {customer.address.zipCode}
      </div>
      <div>
      //Lesson041
        <button onClick={handleClickL41a}>Update Array ADD</button> {tags}
        <button onClick={handleClickL41b}>Update Array REMOVE</button> {tags}
        <button onClick={handleClickL41c}>Update Array UPDATE</button> {tags}
      </div>
    </div>
  );
}

export default App;
