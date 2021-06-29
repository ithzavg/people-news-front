import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ id, image, title }) =>{
    return(
        <Link to={`/celebrity/${id}`}>
            <article className="card"
            style={{ 
                backgroundImage: `url(${image})`,
                backgroundSize:'cover'
            }}
            >
                <div className="card__footer">
                    <p className="card__footer__title" id="title">{title}</p>
                </div>
            </article>
        </Link>
    )
}

export default Card;