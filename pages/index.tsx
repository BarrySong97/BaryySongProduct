import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Type from "../components/Type";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const ProductList = [
  {
    name: "Butter",
    description: "一个简洁，可以从全局俯瞰的习惯追踪App",
  },
  {
    name: "Light",
    description: "一个简洁，强大，记录健身训练日志与数据App",
  },
  {
    name: "MoreThanRich",
    description: "一个简洁，强大，直观清晰的记账app，支持多端Web，ios，Android",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>觉知 - awaerness</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>觉知 / Awareness</div>
          <div>By BarrySong</div>
        </div>

        <div className={styles.center}>
          <Type />
        </div>

        <div className={styles.grid}>
          {ProductList.map((v) => (
            <Link
              key={v.name}
              href="/butter"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                {v.name} <span>-&gt;</span>
              </h2>
              <p className={inter.className}>{v.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
