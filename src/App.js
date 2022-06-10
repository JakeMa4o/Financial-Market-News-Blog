import { Routes, Route, Link } from "react-router-dom";
import Articles from "./components/Articles";
import mockData from "./mockData";
import Article from "./components/Article";
import Detail from "./components/Detail";

// Создаю Артиклы (карточки) из массива данных
const articles = mockData.map((item) => {
  return (
    <Article
      key={item.id}
      id={item.id}
      title={item.title}
      image={item.imageUrl}
    />
  )
})

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/">SHARETRADE.com</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Articles articles={articles} />} />
        <Route path=":id" element={<Detail data={mockData} />} />
      </Routes>
    </div>
  );
}

export default App;
