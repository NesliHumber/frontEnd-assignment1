import { useState } from 'react';
import styles from '@/styles/Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0); //declaring state variable `count` and the function `setCount` to update it

  return (
    <div className={styles.counter}>
      <h2 className={styles.count}>Counter: {count}</h2> {/* to display the current value of `count` */}
      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={() => setCount(count + 1)}>Increment</button> {/* increments `count` by 1 when clicked */}
        <button className={styles.button} onClick={() => setCount(count - 1)}>Decrement</button> {/* decrements `count` by 1 when clicked */}
      </div>
    </div>
  );
};

export default Counter;