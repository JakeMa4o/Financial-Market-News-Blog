import { Routes, Route, Link, renderMatches } from "react-router-dom";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Detail from "./components/Detail";

function App() {
  const [articles, setArticles] = useState([]);
  const articlesCollectionRef = collection(db, "articles");

  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(articlesCollectionRef);
      setArticles(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }

    getArticles();

  }, []);

  if (articles.length === 0) {
    return <div className="loading"><h1> loading... </h1></div>
  }

  // Создаю Артиклы (карточки) из массива данных
  const articlesCards = articles.map((article) => {
    return (
      <Article
        key={article.id}
        id={article.id}
        title={article.title}
        image={article.imageUrl}
      />
    )
  })

  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/">SHARETRADE.<span>COM</span></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Articles articles={articlesCards} />} />
        <Route path=":id" element={<Detail data={articles} />} />
      </Routes>
    </div>
  );
}

export default App;
