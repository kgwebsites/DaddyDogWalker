import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';

const HomePage = () => (
  <Layout>
    <Hero />
    <Services />
    <About />
  </Layout>
);

export default HomePage;
