import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import doggoPic from "../public/doggo.png";
import tigerPic from "../public/tiger.png";
import tortoisePic from "../public/tortoise.png";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const HomePage: NextPage = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const [markup1, setMarkup1] = useState("wow");
  const [title, setTitle] = useState("get fashion");

  useEffect(() => {
    let tl = gsap.timeline({});
    let tl2 = gsap.timeline({ delay: 15, repeat: -1 });
    let tl3 = gsap.timeline({ delay: 3, repeat: -1 });
    tl.to(text2.current, { top: "30vh", opacity: 1, duration: 1 })
      .to(text1.current, { right: "70%", opacity: 1, duration: 1 })
      .to(sectionRef.current, { marginTop: "20rem", opacity: 1, duration: 1 })
      .to(text1.current, { opacity: 0, right: "50%", duration: 2, delay: 10 });

    tl2
      .call(() => setMarkup1("brand"))
      .to(text1.current, { left: "-100%", duration: 0.1 })
      .to(text1.current, { opacity: 1, right: "60%", duration: 2 })

      .to(text1.current, { opacity: 0, right: "50%", duration: 2, delay: 10 })
      .call(() => setMarkup1("clothes"))
      .to(text1.current, { left: "-130%", duration: 0.1 })
      .to(text1.current, { opacity: 1, right: "60%", duration: 2 })

      .to(text1.current, { opacity: 0, right: "50%", duration: 2, delay: 10 })
      .call(() => setMarkup1("wow"))
      .to(text1.current, { left: "-60%", duration: 0.1 })
      .to(text1.current, { opacity: 1, right: "70%", duration: 2 })
      .to(text1.current, { opacity: 0, right: "50%", duration: 2, delay: 10 });

    tl3
      .to(titleRef.current, { translateY: "-110%", duration: 1, delay: 4 })
      .call(() => setTitle("be fancy"))
      .to(titleRef.current, { opacity: "0", duration: 0.1 })
      .to(titleRef.current, { translateY: "110%", duration: 0.1 })
      .to(titleRef.current, { opacity: "1", duration: 0.1 })
      .to(titleRef.current, { translateY: "0", duration: 1 })

      .to(titleRef.current, { translateY: "-110%", duration: 1, delay: 4 })
      .call(() => setTitle("new elegance"))
      .to(titleRef.current, { opacity: "0", duration: 0.1 })
      .to(titleRef.current, { translateY: "110%", duration: 0.1 })
      .to(titleRef.current, { opacity: "1", duration: 0.1 })
      .to(titleRef.current, { translateY: "0", duration: 1 })

      .to(titleRef.current, { translateY: "-110%", duration: 1, delay: 4 })
      .call(() => setTitle("get fashion"))
      .to(titleRef.current, { opacity: "0", duration: 0.1 })
      .to(titleRef.current, { translateY: "110%", duration: 0.1 })
      .to(titleRef.current, { opacity: "1", duration: 0.1 })
      .to(titleRef.current, { translateY: "0", duration: 1 });

    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>NextJs with GSAP</title>
        <meta
          property="og:title"
          content="NextJs with GSAP using Typescript"
          key="title"
        />
        <meta
          name="description"
          content="Intro website using NextJs and GSAP, intro for personal portfolio, hope you enjoy watching my website"
        />
        <meta
          name="keywords"
          content="nextjs react typescript gsap animation transitions landing page"
        />
        <meta name="author" content="Diego Mejia" />
        <link
          rel="canonical"
          href="https://nextjs-gsap-intro-page-1.vercel.app/"
        />
        <meta name="robots" content="follow" />
        <meta name="robots" content="index" />
        <meta
          name="og:url"
          content="https://nextjs-gsap-intro-page-1.vercel.app/"
        />
        <meta name="og:title" content="NextJs with GSAP using Typescript" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="NextJs with GSAP using Typescript"
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:updated_time" content="1666053922060" />
        <meta
          name="og:description"
          content="Intro website using NextJs and GSAP, intro for personal portfolio, hope you enjoy watching my website"
        />
           <meta
          name="og:image"
          content="https://res.cloudinary.com/purplesoda/image/upload/v1666053526/Personal%20Project/Nextjs%20Gsap%20Intro%201/doggo_preview.jpg"
        />
        <meta
          name="og:image:secure_url"
          content="https://res.cloudinary.com/purplesoda/image/upload/v1666053526/Personal%20Project/Nextjs%20Gsap%20Intro%201/doggo_preview.jpg"
        />
            <meta
          name="og:image:alt"
          content="A little dog preview image for my page"
        />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="853" />
        <meta property="og:image:type" content="image/jpeg" />
      </Head>
      <div className={styles.container}>
        <div ref={text1} className={styles.back_text}>
          <p>{markup1}</p>
        </div>
        <div ref={text2} className={styles.bg_text}>
          <p>all new</p>
        </div>
        <section ref={sectionRef} className={styles.main_content}>
          <div className={styles.text_hidden_wrapper}>
            <h1 ref={titleRef} className={styles.title}>
              {title}
            </h1>
          </div>
          <div className={styles.tiger}>
            <Image
              src={tigerPic}
              layout="fill"
              objectFit="cover"
              alt="Tiger picture that is really scary"
            />
            <div>
              <p>
                Sentiments two occasional affronting solicitude travelling and
                one contrasted. Fortune day out married parties. Happiness
                remainder joy but earnestly for off. Took sold add play may none
                him few. If as increasing contrasted entreaties be. Now summer
                who day looked our behind moment coming. Pain son rose more park
                way that. An stairs as be lovers uneasy.
              </p>
            </div>
          </div>
          <div className={styles.doggo}>
            <Image
              src={doggoPic}
              layout="fill"
              objectFit="cover"
              alt="Doggo picture that is really happy"
            />
            <div>
              <p>
                Sentiments two occasional affronting solicitude travelling and
                one contrasted. Fortune day out married parties. Happiness
                remainder joy but earnestly for off. Took sold add play may none
                him few. If as increasing contrasted entreaties be. Now summer
                who day looked our behind moment coming. Pain son rose more park
                way that. An stairs as be lovers uneasy.
              </p>
            </div>
          </div>
          <div className={styles.tortoise}>
            <Image
              src={tortoisePic}
              layout="fill"
              objectFit="cover"
              alt="Tortoise picture that is really calm"
            />
            <div>
              <p>Sentiments two occasional affronting solicitude.</p>
            </div>
          </div>
          <div className={styles.content}>
            <p className={styles.text_content}>
              SHOP THE NEW FALL COLLECTION OF WOW APPAREAL. THE HOTTEST TRENDS,
              THE LATEST VIBES, AND THE BEST ECO-FRIENDLY QUALITY.
            </p>
            <Link href="#">
              <div className={styles.link_wrapper}>
                <a className={styles.shop_link}>shop wow</a>
                <svg
                  style={{ cursor: "pointer" }}
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
    </>
  );
};

export default HomePage;
