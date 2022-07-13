import { Outlet } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";

const SharedLayout = ({page, setPage}) => {
  return (
    <>
      <Header page={page} setPage={setPage} />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;