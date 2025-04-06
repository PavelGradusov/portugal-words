import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import IrregularVerbsPage from "./pages/rules/irregular-verb-page";
import RegularVerbsPage from "./pages/rules/regular-verb-rules-page";
import RegularPage from "./pages/rules/regular-page";
import InterrogativePage from "./pages/rules/interrogative-page";
import { LanguageProvider } from "./context/language-context";
import HelloPage from "./pages/hello-page";
import IrregularVerbsCardsPage from "./pages/cards/irregular-verbs-cards-page";
import RegularVerbsCardsPage from "./pages/cards/regular-verbs-cards-page";
import InterrogativeWordCardsPage from "./pages/cards/interrogative-word-cards-page";

function App() {
  return (
    <BrowserRouter>
      <>
        <LanguageProvider>
          <Layout>
            <Routes>
              {/* Rules */}
              <Route path="/" element={<HelloPage />} />
              <Route path="/rules/irregular" element={<IrregularVerbsPage />} />
              <Route
                path="/rules/regular-rules"
                element={<RegularVerbsPage />}
              />
              <Route path="/rules/regular" element={<RegularPage />} />
              <Route
                path="/rules/interrogative"
                element={<InterrogativePage />}
              />

              {/* Cards */}
              <Route
                path="/cards/irregular"
                element={<IrregularVerbsCardsPage />}
              />
              <Route
                path="/cards/regular"
                element={<RegularVerbsCardsPage />}
              />
              <Route
                path="/cards/interrogatives"
                element={<InterrogativeWordCardsPage />}
              />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </LanguageProvider>
      </>
    </BrowserRouter>
  );
}

export default App;
