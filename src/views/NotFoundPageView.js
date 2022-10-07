import { useLocation } from "react-router-dom";

import Button from "../components/Button";
import NotFound from "../components/NotFound";

export default function NotFoundPage() {
  const location = useLocation();

  const goToMain = location?.state?.from ?? "/";

  return (
    <main>
      <Button goToMain={goToMain} />
      <NotFound />
    </main>
  );
}
