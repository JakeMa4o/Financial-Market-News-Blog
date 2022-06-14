// props сборник артиклов уже в форме Article.js готовый размещению на сайте
export default function Articles(props) {
    return (
        <div className="articles">
            {props.articles}
        </div>
    )
}