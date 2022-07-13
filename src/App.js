import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
const SharedLayout = lazy(() => import("./components/SharedLayout"))
const Home = lazy(() => import("./pages/Home"))
const Contact = lazy(() => import("./pages/Contact"))
const Error = lazy(() => import("./pages/Error"))

function App() {
  const [page, setPage] = useState("Ana Sayfa")

  useEffect(() => {
    document.title = `TÜBİTAK 4007 - ${page}`
  }, [page])

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<SharedLayout page={page} setPage={setPage} />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
