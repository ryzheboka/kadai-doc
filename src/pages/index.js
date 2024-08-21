import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Hero from '../components/Hero/Hero';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`KADAI Documentation`}
      description="KADAI Documentation">
      <Hero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
