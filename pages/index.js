import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Login.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>
    </div>
  );
}
