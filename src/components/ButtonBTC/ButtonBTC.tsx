import { useState } from 'react';
import styles from './ButtonBTC.module.css'
import { FaBitcoin } from 'react-icons/fa'

const ButtonBTC = () => {
    const colors = ['blue', 'green', 'red', 'yellow', 'orange'];

    const [color, setColor] = useState(colors[0])

    const handleClick = () => {


    }
    return (
        <button className={styles.buttonBTC} onClick={() => {
            handleClick()
            console.log("To the moon!");
        }}><FaBitcoin color={color} size={120} /></button>
    )
}

export default ButtonBTC