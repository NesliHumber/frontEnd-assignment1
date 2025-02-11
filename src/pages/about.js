import styles from "@/styles/About.module.css";
import Navbar from '../components/navbar';

export default function About() {
    return (
      <div className={styles.container}>
        <Navbar />
        <h1>About Page</h1>
        <ul>
          <p>This app is developed by using React.js and Next.js.</p>
          <p>It includes:</p>
          <li>a counter with increment/decrement functionality,</li>
          <li>a toggle message as an example of conditional rendering,</li>
          <li>and also event handlers are added in the counter and toggleMessage components that updates the state onClick;</li>
          <li>additionally, inside contact page: 
            <ul>
              <li>ContactForm component is created by using useState to manage email and content inputs from users,</li>
              <li>conditional rendering is applied to show submission is successful or not,</li>
              <li>onSubmit event is applied to prevent default behavior.</li>
            </ul>
          </li>
        </ul>

        {/* Explanation Section */}
        <div className={styles.explanation}>
          <h2>Project Structure</h2>
          <pre className={styles.codeBlock}>
{`src
  -> components folder
       -> counter.js
       -> navbar.js
       -> toggleMessage.js
  -> pages folder
       -> about.js
       -> contact.js
            -> ContactForm component
       -> index.js
            *** The components inside the component folder belong to Home page (index.js).
  -> styles folder`}
          </pre>
          <p>The application includes 3 pages: Home (index.js), About (about.js), and Contact (contact.js).</p>
        </div>
      </div>
    );
}