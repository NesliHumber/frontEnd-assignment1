import { useState } from 'react';
import Navbar from '../components/navbar';
import styles from '@/styles/Contact.module.css';

const ContactForm = () => {
  const [email, setEmail] = useState(''); // state to store email input
  const [content, setContent] = useState(''); // state to store email content
  const [submitted, setSubmitted] = useState(false); // state to track form submission

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents default form submission behavior
    setSubmitted(true); // sets submitted state to true
    setEmail(''); // clears field
    setContent(''); // clears field
  };

  return (
    <div>
    {/* Below is conditional rendering based on submission state: */}
      {!submitted ? ( /* if `submitted` state variable is false -> nothing is submitted yet */
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} /* updates email state on input change -> when email address is entered */
            required
            className={styles.input}
          />
          <label htmlFor="content" className={styles.label}>
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)} /* updates content state on input change -> when content is entered */
            required
            className={styles.textarea}
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      ) : ( /* if `submitted` state is changed to true -> a submission is made */
        <p className={styles.successMessage}>
          Your email is received! Thank you for reaching out!
        </p>
      )}
    </div>
  );
};

export default function Contact() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>Contact Page</h1>
      <p className={styles.description}>Feel free to reach out!</p>
      <ContactForm />
    </div>
  );
}