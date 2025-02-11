import { useState } from 'react';
import styles from '@/styles/ToggleMessage.module.css';

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false); // declaring and initializing `isVisible` state variable to false

  return (
    <div className={styles.toggleMessage}>
      <button className={styles.button} onClick={() => setIsVisible(!isVisible)}> {/* sets up an onClick event handler -> when the button is clicked, it toggles the `isVisible` state variable by setting it to the opposite of its current value -> !isVisible. */}
        {isVisible ? 'Hide Message' : 'Show Message'} {/* changes the button text based on the `isVisible` -> is `isVisible` is true, it shows "Hide Message"; otherwise, it shows "Show Message" */}
      </button>
      {isVisible && <p className={styles.message}>Everyday is a new beginning!</p>} {/* -> conditional rendering of the message -> if isVisible is true, message is rendered -> if isVisible is false, nothing is rendered */}
    </div>
  );
};

export default ToggleMessage;