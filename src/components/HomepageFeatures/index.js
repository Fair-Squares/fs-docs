import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Pooled Housing Cooperative Explained',
    description: (
      <>
        Explore how Fair Squares bundles validated properties into a shared NAV pool where investors hold fungible units, while accredited housing corporations handle on-the-ground tenancy.
      </>
    ),
  },
  {
    title: 'Governance & Safeguards with OpenGov',
    description: (
      <>
        Follow the intake lifecycle—from proposal and multi-appraisal valuation to legal finalization and OpenGov asset admission tracks—plus learn how metrics feeds keep capital allocation and risk controls transparent.
      </>
    ),
  },
  {
    title: 'Build with the Fair Squares Toolkit',
    description: (
      <>
        Jump into guides, architecture notes, and design references to prototype integrations, understand pallet APIs, or onboard stakeholders with ready-to-share visual narratives and Mermaid diagrams.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
