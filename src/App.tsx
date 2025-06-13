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
import SimpleWordsCardsPage from "./pages/cards/simple-words-cards-page";

import {
  words1,
  words2,
  words3,
  words4,
  words5,
  words6,
  words7,
  words8,
  words9,
  words10,
} from "./data/words";
import AllVerbsPage from "./pages/rules/all-verbs-page";

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
              <Route path="/rules/verbs-all" element={<AllVerbsPage />} />
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
              <Route
                path="/cards/words-1"
                element={<SimpleWordsCardsPage wordsCollection={words1} />}
              />
              <Route
                path="/cards/words-2"
                element={<SimpleWordsCardsPage wordsCollection={words2} />}
              />
              <Route
                path="/cards/words-3"
                element={<SimpleWordsCardsPage wordsCollection={words3} />}
              />
              <Route
                path="/cards/words-4"
                element={<SimpleWordsCardsPage wordsCollection={words4} />}
              />
              <Route
                path="/cards/words-5"
                element={<SimpleWordsCardsPage wordsCollection={words5} />}
              />
              <Route
                path="/cards/words-6"
                element={<SimpleWordsCardsPage wordsCollection={words6} />}
              />
              <Route
                path="/cards/words-7"
                element={<SimpleWordsCardsPage wordsCollection={words7} />}
              />
              <Route
                path="/cards/words-8"
                element={<SimpleWordsCardsPage wordsCollection={words8} />}
              />
              <Route
                path="/cards/words-9"
                element={<SimpleWordsCardsPage wordsCollection={words9} />}
              />
              <Route
                path="/cards/words-10"
                element={<SimpleWordsCardsPage wordsCollection={words10} />}
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
