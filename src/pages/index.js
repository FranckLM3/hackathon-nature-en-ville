import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">🌿 Hackathon Nature en Ville</h1>
        <p className="hero__subtitle">Marseille • 23-24-25 janvier 2026</p>
        <p className="hero__subtitle">
          Mobiliser habitants, experts et élus autour de la renaturation citoyenne
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">  {/* ← Changé ici : juste /docs */}
            Découvrir le projet →
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>🎯 Le projet</h3>
              <p>
                Mobiliser les habitants, experts et élus autour de la renaturation 
                citoyenne et la gestion des espaces de nature en ville.
              </p>
              <Link to="/docs">  {/* ← Changé ici */}
                En savoir plus →
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>📜 Manifeste des Friches</h3>
              <p>
                4 ans de travail sur les friches marseillaises. Préservation 
                et gestion écologique des espaces naturels urbains.
              </p>
              <Link to="/docs">  {/* ← Changé ici */}
                Lire le manifeste →
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>👥 Participer</h3>
              <p>
                Vous êtes citoyen, agent, élu, expert ? Rejoignez-nous 
                pour co-construire la ville nature de demain.
              </p>
              <Link to="/docs">  {/* ← Changé ici */}
                Je participe →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Hackathon Nature en Ville - Marseille 2026">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
