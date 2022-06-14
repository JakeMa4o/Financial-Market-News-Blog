import { Link } from "react-router-dom";

// props это каждый обьект из массива данных которые мы получаем от App.js
export default function Article(props) {
    return (
        <Link to={`/${props.id}`}>
            <div className="article">
                <div className="image-container">
                    <img src={props.image} alt="img" />
                </div>
                <h1 className="articles-header">{props.title}</h1>
            </div>
        </Link>
    )
}