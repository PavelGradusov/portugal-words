import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";

function App() {
  return (
    <BrowserRouter>
      <>
        <Layout>
          <Routes>
            <Route path="/" element={<h1>Выбирай чо хошь</h1>} />
            <Route path="/one" element={<h1>ONE</h1>} />
            <Route path="/two" element={<h1>TWO</h1>} />
            <Route path="/three" element={<h1>THREE</h1>} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </>
    </BrowserRouter>
  );
}

export default App;
