import { Navbar, Header } from "./containers";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <div className="gradient__bg">
        <Header />
      </div>
    </div>
    {/* <Services />
    <Transactions />
    <Footer /> */}
  </div>
);

export default App;
