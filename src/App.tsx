/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Weddings from "./pages/Weddings";
import Corporate from "./pages/Corporate";
import PrivateEvents from "./pages/PrivateEvents";
import Spaces from "./pages/Spaces";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="weddings" element={<Weddings />} />
          <Route path="corporate" element={<Corporate />} />
          <Route path="private-events" element={<PrivateEvents />} />
          <Route path="spaces" element={<Spaces />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="booking" element={<Booking />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
