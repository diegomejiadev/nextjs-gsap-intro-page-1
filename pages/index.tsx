import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import doggoPic from "../public/doggo.png";
import tigerPic from "../public/tiger.png";
import tortoisePic from "../public/tortoise.png";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back_text}>wow</div>
      <div className={styles.bg_text}>brown</div>
      <section className={styles.main_content}>
        <h1 className={styles.title}>get fashion</h1>
        <div className={styles.tiger}>
        <Image  src={tigerPic} layout="fill" objectFit="cover" alt="Tiger picture that is really scary" />
        </div>
        <div className={styles.doggo}>
        <Image  src={doggoPic} layout="fill" objectFit="cover" alt="Doggo picture that is really happy" />
        </div>
        <div className={styles.tortoise} >
        <Image src={tortoisePic} layout="fill" objectFit="cover" alt="Tortoise picture that is really calm" />
        </div>
        <div className={styles.content}>
          <p className={styles.text_content}>
            SHOP THE NEW FALL COLLECTION OF WOW APPAREAL. THE HOTTEST TRENDS,
            THE LATEST VIBES, AND THE BEST ECO-FRIENDLY QUALITY.
          </p>
          <Link href="#">
            <div className={styles.link_wrapper}>
              <a className={styles.shop_link}>shop wow</a>
              <svg style={{cursor: 'pointer'}}
                width="258"
                height="8"
                viewBox="0 0 258 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M257.354 4.35355C257.549 4.15829 257.549 3.84171 257.354 3.64645L254.172 0.464466C253.976 0.269204 253.66 0.269204 253.464 0.464466C253.269 0.659728 253.269 0.976311 253.464 1.17157L256.293 4L253.464 6.82843C253.269 7.02369 253.269 7.34027 253.464 7.53553C253.66 7.7308 253.976 7.7308 254.172 7.53553L257.354 4.35355ZM0 4.5H257V3.5H0V4.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
