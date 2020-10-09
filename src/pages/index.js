import React from 'react';

import { SEO, Hero, WhoWeAre, WhatWeDo, HowWeCanHelp, References, HowDoesItWork, LetsGetStarted } from '../components';

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <HowWeCanHelp />
      <References />
      <HowDoesItWork />
      <LetsGetStarted />
    </>
  );
}
