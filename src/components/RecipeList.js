import React, { Component } from 'react';
import { connect } from 'react-redux';


class RecipeList extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        {
          this.props.recipes.map((recipe, idx) => {
          return (
            <div key={idx}>
              <h4>{recipe.title}</h4>
            </div>
          )
        })
      }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null) (RecipeList);
