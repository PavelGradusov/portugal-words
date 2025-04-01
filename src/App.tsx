import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import IrregularVerbsPage from "./pages/irregular-verb-page";
import RegularVerbsPage from "./pages/regular-verb-rules-page";
import RegularPage from "./pages/regular-page";

function App() {
  return (
    <BrowserRouter>
      <>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1 className="text-5xl font-bold tracking-wider p-10">
                    Bem-vindo!
                  </h1>
                </>
              }
            />
            <Route path="/irregular" element={<IrregularVerbsPage />} />
            <Route path="/regular-rules" element={<RegularVerbsPage />} />
            <Route path="/regular" element={<RegularPage />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </>
    </BrowserRouter>
  );
}

export default App;
