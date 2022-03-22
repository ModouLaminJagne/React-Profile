import React from 'react'
import './Portfolio.css'
import BC from '../../Assets/BC.webp'
import ML from '../../Assets/ML.webp'
import MTVers from '../../Assets/MTVers.webp'
import DA from '../../Assets/DA.webp'
import Hacker from '../../Assets/Hacker.webp'
import chip from '../../Assets/chip.webp'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={BC} alt="bc" />
          </div>
          <h3>Am blocking the chains</h3>
          <div className=" portfolio__item-cta">
            <a
              href="https:/github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https:/github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ML} alt="bc" />
          </div>
          <h3>I learn like a machine</h3>

          <div className=" portfolio__item-cta">
            <a
              href="https:/github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https:/github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={MTVers} alt="bc" />
          </div>
          <h3>I'm a metaverse madee</h3>
          <div className=" portfolio__item-cta">
            <a
              href="https:/github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https:/github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={DA} alt="bc" />
          </div>
          <h3>Am a data analyst</h3>
          <div className=" portfolio__item-cta">
            <a
              href="https:/github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https:/github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Hacker} alt="bc" />
          </div>
          <h3>Hack Hack Hack</h3>
          <div className=" portfolio__item-cta">
            <a
              href="https:/github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https:/github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={chip} alt="bc" />
          </div>
          <h3>I like chips</h3>
          <div className=" portfolio__item-cta">
            <a
              href="https:/github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https:/github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio