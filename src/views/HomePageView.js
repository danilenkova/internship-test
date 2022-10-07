import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { dragonsOperations, dragonsSelectors } from "../redux/dragons";
import { NOT_ALERTS, myAlert } from "../service/alerts";
import DragonsList from "../components/DragonsList";
import Loader from "../components/Loader";

export default function HomeView() {
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const dragons = useSelector(dragonsSelectors.getDragons);

  useEffect(() => {
    const getDragonsList = async () => {
      setLoader(true);
      try {
        await dispatch(dragonsOperations.getDragons());
      } catch (error) {
        myAlert(NOT_ALERTS.FETCH_ERROR);
      } finally {
        setLoader(false);
      }
    };
    getDragonsList();
  }, [dispatch]);

  return (
    <main>
      <h1>All Dragons</h1>
      {loader ? (
        <Loader />
      ) : (
        <DragonsList dragons={dragons} location={location} />
      )}
    </main>
  );
}
