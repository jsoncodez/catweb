import { Routes, Route } from "react-router-dom";

const Home = () => <h2>Home</h2>;
// const News = () => <h2>News</h2>;
// const WarehouseFinds = () => <h2>WarehouseFinds</h2>;
// const Genres = () => <h2>Genres</h2>;
// const Releases = () => <h2>Releases</h2>;
// const EquipmentAndMore = () => <h2>Equipment & More</h2>;

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      {/* <Route path="/news" element={<News />} />
      <Route path="/warehouse-finds" element={<WarehouseFinds />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/releases" element={<Releases />} />
      <Route path="/equipment" element={<EquipmentAndMore />} /> */}
    </Routes>
  );
};

export default AppRoutes;