import { Outlet } from "react-router-dom";
import Header from "../Header Components/Header/Header";


const Root = () => {
  return (
    <div className="px-6 md:px-10">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;