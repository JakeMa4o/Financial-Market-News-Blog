import { useParams } from "react-router-dom";


export default function Detail(props) {

    // props.data это массив данных 
    const data = props.data;

    // Получаем значение роута
    const params = useParams();

    // Сверяем значение айди карточки по который юзер кликнул и роута по которой он перешел. Если значения равны то показываем именно тот контент на которой кликнули
    const filteredData = data.filter(item => item.id === Number(params.id))

    // array.filter возвращает реузльтат в нутри еще одного массива
    const detail = filteredData[0];

    return (
        <div className="detail">
            <h1 className="detail-title">
                {detail.title}
            </h1>
            <img src={detail.imageUrl} alt="img" style={{height: "800px"}}/>
            <h4 className="detail-description">
                {detail.description}
            </h4>
            <div className="expert-comment">
                <h3>Experts Comment</h3>
                <p>{detail.expertComment}</p>
            </div>
        </div>
    )
}