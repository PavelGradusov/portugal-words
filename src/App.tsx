import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import IrregularVerbsPage from "./pages/irregular-verb-page";
import RegularVerbsPage from "./pages/regular-verb-rules-page";
import RegularPage from "./pages/regular-page";
import InterrogativePage from "./pages/interrogative-page";
import { LanguageProvider } from "./context/language-context";
import HelloPage from "./pages/hello-page";

function App() {
  return (
    <BrowserRouter>
      <>
        <LanguageProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HelloPage />} />
              <Route path="/irregular" element={<IrregularVerbsPage />} />
              <Route path="/regular-rules" element={<RegularVerbsPage />} />
              <Route path="/regular" element={<RegularPage />} />
              <Route path="/interrogative" element={<InterrogativePage />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </LanguageProvider>
      </>
    </BrowserRouter>
  );
}

export default App;
