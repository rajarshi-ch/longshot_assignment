import { NextPage } from "next";
import dynamic from "next/dynamic";
// import Dashboard from "../views/crud";

const Dashboard = dynamic(() => import("../views/crud"), {
  ssr: false,
});
const Crud: NextPage = () => {
  return <Dashboard />;
};

export default Crud;
