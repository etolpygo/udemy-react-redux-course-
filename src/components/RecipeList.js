import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';


class RecipeList extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        {
          this.props.recipes.map((recipe, idx) => {
          return (
            <RecipeItem key={idx} recipe={recipe} />
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
