import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { BookmarkPage } from "./pages/BookmarkPage";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ListPage />} />
        <Route path=":id" element={<DetailPage />} />
        <Route path="bookmark" element={<BookmarkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
