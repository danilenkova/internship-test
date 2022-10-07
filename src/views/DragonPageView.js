import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { dragonsOperations, dragonsSelectors } from "../redux/dragons";

import DragonInfo from "../components/DragonInfo";
import Button from "../components/Button";
import Loader from "../components/Loader";
import { NOT_ALERTS, myAlert } from "../service/alerts";
import NotFound from "../components/NotFound";

export default function DragonView() {
  const { dragonId } = useParams();
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const dragon = useSelector(dragonsSelectors.getDragon);

  const goToMain = location?.state?.from ?? "/";

  useEffect(() => {
    const getDragon = async () => {
      setLoader(true);
      try {
        await dispatch(dragonsOperations.getDragon(dragonId));
      } catch (error) {
        myAlert(NOT_ALERTS.FETCH_ERROR);
      } finally {
        setLoader(false);
      }
    };
    getDragon();
  }, [dispatch, dragonId]);

  return (
    <main>
      <Button goToMain={goToMain} />
      {loader && <Loader />}
      {dragon ? (
        <DragonInfo dragon={dragon} dragonId={dragonId} />
      ) : (
        <NotFound />
      )}
    </main>
  );
}
