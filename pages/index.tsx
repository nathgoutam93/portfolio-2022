import { MouseEventHandler, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useCursor from "../hooks/useCursor";

import styles from "../styles/Home.module.css";
import profile_img from "../assets/images/goutam-crop.png";

const Home: NextPage = () => {
  const cursorRef = useCursor();
  const imgRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter: MouseEventHandler = (e) => {
    e.preventDefault();
    if (cursorRef.current == null) return;
    cursorRef.current.classList.add("hover");
  };

  const handleMouseLeave: MouseEventHandler = (e) => {
    e.preventDefault();
    if (cursorRef.current == null) return;
    cursorRef.current.classList.remove("hover");
  };

  return (
    <div className={styles.container}>
      <div ref={cursorRef} className="cursor"></div>

      <Head>
        <title>portfolio</title>
        <meta name="description" content="goutam nath's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.home}>
          <div ref={imgRef} className={styles.imgcard}>
            <Image
              src={profile_img.src}
              alt="goutam's photograph"
              width={profile_img.width}
              height={profile_img.height}
            />
          </div>
          <h1 className={styles.hero}>
            <span
              onMouseEnter={(e) => {
                handleMouseEnter(e);
                if (imgRef.current == null) return;
                imgRef.current.style.opacity = "0.5";
              }}
              onMouseLeave={(e) => {
                handleMouseLeave(e);
                if (imgRef.current == null) return;
                imgRef.current.style.opacity = "0";
              }}
              className={styles.name}
            >
              Goutam Nath
            </span>{" "}
            is a web developer,
            <br />
            hobbyist game maker and lover of <br />{" "}
            <span>space & time travel movies</span>.
          </h1>
        </section>
        <section className={styles.work}></section>
        <section className={styles.contact}>
          <h2>Let&apos;s create something that matters!</h2>
          <a
            href="mailto:nathgoutam93@gmail.com"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            nathgoutam93@gmail.com
          </a>
          <div className={styles.divider}></div>
        </section>
      </main>
      <footer className={styles.footer}>
        <ul>
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              linkedin
            </a>
          </li>
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nathgoutam93"
              rel="noreferrer"
              target="_blank"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              github
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
