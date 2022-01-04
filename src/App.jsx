import { Navbar, Header, WhatPortfolioX, Feature, Possibilities, Services, Projects, Footer } from "./containers";
import { Brand, CTA } from "./components";

const App = () => (
  <div className="min-h-screen iphone rounded">
    <Navbar />
    <div className="gradient-bg-welcome">
      <div className="gradient__bg">
        <Header />
      </div>
    </div>
    <div className="gradient-bg-welcome">
      <Brand />
    </div>
    <div className="gradient__bg pt-5 rounded">
      <WhatPortfolioX />
    </div>
    <div className="gradient-bg-feature rounded">
      <Feature />
    </div>
    <div className="gradient-bg-welcome rounded">
      <Possibilities />
    </div>
    <div className="gradient__bg pt-5 pb-5 rounded">
      <CTA />
    </div>
    <Projects />
    <Services />
    <Footer />
  </div>
);

export default App;
