import cardStyle from "./Card.module.css";
import { FaTrash, FaEdit } from 'react-icons/fa';

const CardText = ({title, content}) => {
    return (
        <div>
             <h4 className={cardStyle.title}><strong>{title}</strong></h4>
             <p className={cardStyle.text}>{content}</p>
            <button className={cardStyle.button} >Leggi di piu</button>
            <button className={cardStyle.edit}>
                <FaEdit />
              </button>
              <button className={cardStyle.trash}>
                <FaTrash />
              </button>
        </div>
    );
}

export default CardText;