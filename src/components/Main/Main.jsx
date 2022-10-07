import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePageView = lazy(() =>
  import("../../views/HomePageView" /*webpackChunkName: "home-page" */)
);

const DragonPageView = lazy(() =>
  import("../../views/DragonPageView" /*webpackChunkName: "dragon-page" */)
);

const NotFoundPageView = lazy(() =>
  import("../../views/NotFoundPageView" /*webpackChunkName: "not-found-page" */)
);

const Main = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/dragon" element={<DragonPageView />} />
        <Route path="/dragon/:dragonId" element={<DragonPageView />} />
        <Route path="*" element={<NotFoundPageView />} />
      </Routes>
    </Suspense>
  );
};

export default Main;
