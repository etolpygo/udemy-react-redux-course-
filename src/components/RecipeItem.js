import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipe } from '../actions'

class RecipeItem extends Component {
  constructor() {
    super();
    this.state = {
      favorited: false
    }
  }

  favorite(recipe) {
    this.props.favoriteRecipe(recipe);
    this.setState({favorited: true});
  }


  render() {
    let { recipe } = this.props;
    return (
      <div className="recipe-item">
      {
        this.props.favoriteButton === true ?
          this.state.favorited ?
            <div className="star-favorite">&#9733;</div>
          :
            <div className="star-regular" onClick={() => this.favorite(recipe)}>&#9734;</div>
      :
        <div></div>
      }
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

export default connect(null, { favoriteRecipe })(RecipeItem);
