import React from 'react';
import Recipe from '../recipe';
import './style.css';

  const Main = ({recipes}) => {
    return (
        <main className="main-content">
        <article className="flex-article">
            {recipes !== [] && recipes.map((recipe,index) => <Recipe recipe={recipe} showCommentsId={index+1}/>)}
        </article>
    </main>
)
}
export default Main;
