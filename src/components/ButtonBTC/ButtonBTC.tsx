import styles from './ButtonBTC.module.css'
import { FaBitcoin } from 'react-icons/fa'

const ButtonBTC = () => {
    return (
        <div className={styles.buttonBTC} onClick={() => {
            console.log("To the moon!");
        }}><FaBitcoin /></div>
    )
}

export default ButtonBTC