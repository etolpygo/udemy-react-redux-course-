import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newMeme } from '../actions';


class MemeItem extends Component {
  constructor() {
    super();

    this.state = {
      hovered: false
    }
  }

  postMeme() {
    console.log('this.props', this.props);
    const { text0, text1 } = this.props;
    const memeObject = {
      // template_id: this.props.meme.id,
      meme: this.props.meme,
      text0,
      text1
    }
    this.props.newMeme(memeObject);
  }

  render() {
    let { meme } = this.props;
    return(
      <div
        className="meme-item"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={() => this.postMeme()}>
        <img className={ this.state.hovered ? "meme-img darken-img" : "meme-img" }
          src={meme.url}
          alt={meme.name}
          />
        <p className={ this.state.hovered ? "meme-txt" : "no-txt" }>{meme.name}</p>
      </div>
    );
  }

}

export default connect(null, {newMeme})(MemeItem);
