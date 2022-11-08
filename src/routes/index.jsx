import { Route, Routes } from "react-router";
import { Layout } from "../components/layout/layout";
import { WhereToFind } from "../pages/whereToFind";
import { CameraService } from "../pages/cameraService";
import { DrainCleaningService } from "../pages/drainCleaningService";
import { Home } from "../pages/home";
import { PipeService } from "../pages/pipeService";
import { PlumbingService } from "../pages/plumbingService";
import { NotFound } from "../pages/notFound";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<WhereToFind />} />
        <Route path="/services/plumbing" element={<PlumbingService />} />
        <Route
          path="/services/draingCleaning"
          element={<DrainCleaningService />}
        />
        <Route path="/services/pipeDescaling" element={<PipeService />} />
        <Route path="/services/cameraInspection" element={<CameraService />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;
