import React, { Component } from 'react';

class RecipeItem extends Component {
  render() {
    let { recipe } = this.props;
    return (
      <div className="recipe-item">
        <div className="recipe-text">
          <a href={recipe.href}>
            <h4>{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
        {recipe.thumbnail ?
          <img className="recipe-img" src={recipe.thumbnail} alt={recipe.title} />
        :
          <span className="recipe-img-placeholder">&nbsp;</span>
        }
      </div>
    )
  }

}

export default RecipeItem;
