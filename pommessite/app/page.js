import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.centertitle}>
        <center>
          <a href="/">Secret1337' Page</a>
        </center>
      </div>
      <div className={styles.projects}>
        <center>
          <a>List of Projects i done:</a>
          <h1 className={styles.LawinServerV2}>
            <a href="https://pommesmitketchup.com">The 24/7 LawinServerV2</a>
            <br></br>
            <a className={styles.LawinServerV2SubInfo}>
              First i just wanted to host a LawinServerV2 for myself and then I
              <br></br>
              expanded created a NX-Proxy and made Fortnite on Nintendo Switch
              working everywhere without a Windows PC
            </a>
          </h1>
        </center>
      </div>
    </main>
  );
}
