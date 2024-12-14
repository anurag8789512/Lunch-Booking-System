import React from "react";
import { EmployeeProvider } from "./contexts/EmployeeContext";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  return (
    <EmployeeProvider>
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    </EmployeeProvider>
  );
}

export default App;
