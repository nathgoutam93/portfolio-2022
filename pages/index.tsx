import { MouseEventHandler, useEffect, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useCursor from "../hooks/useCursor";
import { FaRegEnvelope, FaLinkedinIn, FaArrowRight } from "react-icons/fa";

import profile_img from "../assets/images/goutam-crop.png";
import connect_img from "../assets/images/connect.jpg";
import Arrow from "../assets/svgs/arrow-right";
import styles from "../styles/Home.module.css";
import useMediaQuery from "../hooks/useMediaQuery";
// import MomentumScroll from "../components/momentumScroll";

const Home: NextPage = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const cursorRef = useCursor();
  const imgOverlayRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    setTimeout(() => {
      if (imgOverlayRef.current == null) return;
      imgOverlayRef.current.style.width = "0%";
    }, 500);
  }, []);

  useEffect(() => {
    if (matches) {
      cursorRef.current?.classList.remove("hidden");
    } else {
      cursorRef.current?.classList.add("hidden");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches]);

  return (
    <>
      <Head>
        <title>Goutam nath — portfolio</title>
        <meta name="description" content="goutam nath's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={cursorRef} className="cursor"></div>
      <header className={styles.header}>
        <span>/folio_2k22</span>
        <nav>
          <ul>
            <li>
              <a
                href="#home"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#work"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* <MomentumScroll> */}
      <main className={styles.main}>
        <section id="home" className={styles.home}>
          <h1>
            <span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={styles.name}
            >
              Goutam Nath
            </span>{" "}
            is a creative developer, hobbyist game maker and lover of{" "}
            <span>space & time travel movies</span>.
          </h1>
          <div className={styles.about}>
            <p>
              freelance, full-stack development, UI/UX, passionate about
              creating memorable experiences.
            </p>
            <div className={styles.imgcard}>
              <Image
                src={profile_img.src}
                alt="goutam's photograph"
                width={profile_img.width}
                height={profile_img.height}
                objectFit="cover"
              />
              <div ref={imgOverlayRef} className={styles.overlay}></div>
            </div>
          </div>
        </section>
        <section id="work" className={styles.work}>
          <h2>recent work</h2>
          <ul>
            <li>
              <a
                href="https://blogbuddy.netlify.app"
                rel="noreferrer"
                target="_blank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                BlogBuddy
                <span>
                  <FaArrowRight />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://linkpile-bffd7.web.app"
                rel="noreferrer"
                target="_blank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Linkpile
                <span>
                  <FaArrowRight />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nathgoutam93/personatube"
                rel="noreferrer"
                target="_blank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Personatube
                <span>
                  <FaArrowRight />
                </span>
              </a>
            </li>
          </ul>
        </section>
        <section id="contact" className={styles.contact}>
          <h2>
            <span>
              get in
              <span className={styles.img}>
                <Image
                  src={connect_img.src}
                  width={connect_img.width}
                  height={connect_img.height}
                  objectFit="cover"
                  alt="connecting fingers"
                />
              </span>
            </span>
            <span className={styles.indent}>touch</span>
          </h2>
          <span className={styles.mail}>
            <Arrow />
            <a
              className={styles.link}
              href="mailto:nathgoutam93@gmail.com"
              rel="noreferrer"
              target="_blank"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <FaRegEnvelope />
            </a>
          </span>
          {/* <a
            className={styles.link}
            href="https://www.linkedin.com/in/nathgoutam93/"
            rel="noreferrer"
            target="_blank"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaLinkedinIn stroke="1" />
          </a> */}
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.divider}></div>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/nathgoutam93/"
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
              href="https://twitter.com/nathgoutam93"
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
        <span>©2022 Goutam nath. all rights reserved.</span>
      </footer>
      {/* </MomentumScroll> */}
    </>
  );
};

export default Home;
