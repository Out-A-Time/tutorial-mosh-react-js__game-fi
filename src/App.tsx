import { BsFillCalendar2DateFill } from 'react-icons/bs';

import Button from './components/Button/Button';

import styles from './App.module.css'
import ButtonBTC from './components/ButtonBTC/ButtonBTC';

function App() {

  return (
    <div className="App">
      <BsFillCalendar2DateFill color='red' size="40" />
      <button className={styles.buttonStyleOne}>Click Me!</button>
      <button className={[styles.buttonStyleOne, styles.container].join('')}>Click Me!</button>
      <button className={styles["buttonStyleTwo"]}>Click Me!</button>
      <Button onClick={() => { }}>New Button</Button>
      <ButtonBTC />
    </div>
  );
}

export default App;
