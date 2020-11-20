import React from 'react'
import CommentBox from '../comments/CommentBox';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ShowComments from '../comments/showComments';
import ReactPlayer from 'react-player'
import './style.css';

const Ingredients = ({ recipe, location }) => {
    const { image, ingredients, label } = location.state.recipe.recipe
    return (
        <div className="container">
            <div>
                <h2>{label}</h2>
            </div>
            <div className="dish-image">
                <div>
                    <img src={image} alt="pizza" />
                </div>
                <div className="video-player">
                    <ReactPlayer url='https://www.youtube.com/watch?v=Lyj8wH2iTYg' />
                </div>
            </div>
            <div>
                <div>
                    <h2>INGREDIRNTS</h2>
                </div>
                <div className="ingrids">
                    {ingredients.map((item,index) => <div className="ingridients-card" key={index}>
                        <div className="ingredient-header">
                        <h3>{item.text}</h3>
                            </div>

                        <strong>Weight:<small>{item.weight.toFixed(2)} gms</small></strong></div>
                    )}
                </div>
            </div>
            <h2>Kindly leave your Comment below</h2>
            <CommentBox id={location.state.id} />
            <h2>Comments</h2>
            <div className="show-coments-container" >
                <ShowComments showCommentsId={location.state.id} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        comments: state.comments,
        id: state.id
    };
};

export default withRouter(
    connect(mapStateToProps, null)(Ingredients)
);