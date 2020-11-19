import React,{useEffect} from 'react';
import { withRouter,Link } from "react-router-dom";
import { connect } from 'react-redux';
import {actionSetId} from '../../store/actions/action'
import ShowComments from '../comments/showComments';
import './style.css'

const Recipe = ({recipe,id,showCommentsId,history}) => {

  const handleClick=()=>{
    actionSetId(showCommentsId)
   let url_label= recipe.recipe.label.split(/[ ,]+/).join('-')
    setTimeout(()=>{
      history.push({
        pathname: `/ingredients/${url_label}`,
        state: {recipe:{recipe:recipe.recipe},id:showCommentsId}
      })
    },3000)
  }
    const{label,image,url,ingredients}=recipe.recipe
    return (
        <div className="recipe">
           <h2>{label}</h2>
           <div className="recipe-image">
           <img src={image} alt={label}/>

           </div>
            <div className="recipe-details" >
            <p>
              {label} Italian  
            </p>
            <p>
        <small>Available:</small>9AM-10PM
            </p>
            <p>
              Open Now  
            </p>
            <p>
              Best Of benaglore  
            </p>
            </div>

<ShowComments showCommentsId={showCommentsId}/>
            <button onClick={handleClick
}>
                View Recipe
            </button>
        </div>
    )
}

const mapDispatchToProps = {
  actionSetId
};
export default withRouter(
  connect(null, mapDispatchToProps)(Recipe)
);

