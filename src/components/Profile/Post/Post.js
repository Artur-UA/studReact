import React from 'react';

const Post = (props) => {
    return (
        <>
            <div>
                <img className='avatar' src="https://russkaja-skazka.ru/wp-content/uploads/2018/12/vinni-puh.jpg" alt={props.name}/>{props.name}
            </div>
            <div className='likeSmall'>
                <span>Вподобайок</span> {props.like}
            </div>
        </>
    )
}

export default Post;