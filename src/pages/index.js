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
          DONUT et ses partenaires vous accueillent pour un grand événement d'intelligence collective
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--success button--lg"
            to="/docs/participer">
            S'inscrire au hackathon 🚀
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
              <h3>📖 Le Projet</h3>
              <p>
                Découvrez l'origine, la méthode et les convictions qui sous-tendent 
                cette initiative citoyenne d'intelligence collective.
              </p>
              <Link to="/docs/le-projet">
                En savoir plus →
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>🎟️ Participer</h3>
              <p>
                Vous êtes citoyen, agent, élu, expert ? Inscrivez-vous et 
                rejoignez-nous pour co-construire la ville nature de demain.
              </p>
              <Link to="/docs/participer">
                S'inscrire →
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>📦 Ressources</h3>
              <p>
                Programme, données, informations pratiques et tous les outils 
                pour bien préparer votre participation au hackathon.
              </p>
              <Link to="/docs/ressources-hackathon">
                Consulter →
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
