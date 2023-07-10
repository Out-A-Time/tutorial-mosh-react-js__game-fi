import { BsFillCalendar2DateFill } from 'react-icons/bs';

import Button from './components/Button/Button';

import styles from './App.module.css'
import ButtonBTC from './components/ButtonBTC/ButtonBTC';
import { useState } from 'react';
import Message from './components/Message/Message';
import NavBar from './components/NavBar';
import Cart from './components/Cart';

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

  //Lesson042
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
    { id: 3, title: 'Bug 3', fixed: false }
  ]);

  const handleClick42 = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true } : bug))
    console.log(`You clicked handleclick42`, bugs[0].fixed);
  }

  //Lesson044
  const [cartItems, setCartItems] = useState(['Product 1', 'Product 2', 'Product 3']);

  //Lesson045a
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John"
    }
  })
  const handleClick45a = () => {
    console.log("you click the button lesson 045");
    setGame({ ...game, player: { ...game.player, name: "Bob" } })
    //We are creating a new object because spread operator is shallow and don't copy player properties
    //  setGame({ ...game, player: { player.name: "Bob" } })
    // That's why  player.name="Bob " won't work.
    // Used solution is more 'future-proof', that's why we use spread operator twice, to copy twice and reach deeper.
  }

  // Lesson045b
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ['Mushroom']
  })
  const handleClick045b = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, 'new spicy ingriednt'] })
    //Spread operator is shallow. That's why we spread twice.

  }

  // Lesson045c
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product1', quantity: 1 },
      { id: 4, title: 'Product1', quantity: 3 }
    ]
  })
  const handleClick045c = () => {
    setCart({ ...cart, items: cart.items.map(item => item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item) })
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
      //Lesson042
      <div >
        <p>Update Array of Objects</p>
        <button onClick={handleClick42}>Update Array of Objects</button>
        <p>Bugs.id: {bugs[0].id}, Bugs.title: {bugs[0].title}, Bugs.fixed: {bugs[0].fixed}</p>
        <p>Bugs.id: {bugs[1].id}, Bugs.title: {bugs[1].title}, Bugs.fixed: {bugs[1].fixed}</p>
        <p>Bugs.id: {bugs[2].id}, Bugs.title: {bugs[2].title}, Bugs.fixed: {bugs[2].fixed}</p>
      </div>
      //Lesson043 - Sharing state between components
      <div>
        <NavBar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>
      //Lesson045
      <div>
        Lesson045a:
        <p>Player ID: {game.id}</p>
        <p>Player Name: {game.player.name}</p>
        <button onClick={handleClick45a}>Changes player name to Bob</button>
      </div>
      <div>
        Lesson045b:
        <p>Pizza name: {pizza.name}</p>
        <p>Pizza ingridients: {pizza.toppings}</p>
        <button onClick={handleClick045b}>Add new ingriendt to the pizza toppings</button>
      </div>
      <div>
        Lesson045c:
        <p>Products:</p>
        <p>Cart items: {cart.map(cart.items)}</p>
        <button onClick={handleClick045c}>Add 1 to quantity</button>
      </div>
    </div>
  );
}

export default App;
