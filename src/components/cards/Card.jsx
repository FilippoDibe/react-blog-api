import cardStyle from "./Card.module.css";
import CardText from "./CardText";
import CardImg from "./CardImg";
const Card = ({post}) => {
    return(
        <div className={cardStyle.container}>
            <CardImg imageUrl={post.image} />
            <CardText title={post.title} content={post.content} />

        </div>
    );
};

export default Card;