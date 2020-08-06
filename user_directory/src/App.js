import React from "react";
import Header from "./components/Header";
import Searchbar from './components/Searchbar';
import EmployeeTable from "./components/EmployeeTable";

function App() {
  return (
    <div>
      <Header />
      <Searchbar />
      <EmployeeTable />
    </div>
  );
}

export default App;
