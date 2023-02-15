import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { getSearchResult, setIsLoading } from "../store/actions";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsLoading());
    dispatch(getSearchResult());
  }, []);
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}

export default Home;
