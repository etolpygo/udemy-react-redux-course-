import React, { Component } from 'react';

class MemeItem extends Component {
  constructor() {
    super();

    this.state = {
      hovered: false
    }
  }

  render() {
    let { meme } = this.props;
    return(
      <div
        className="meme-item"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}>
        <img className={ this.state.hovered ? "meme-img darken-img" : "meme-img" }
          src={meme.url}
          alt={meme.name}
          />
        <p className={ this.state.hovered ? "meme-txt" : "no-txt" }>{meme.name}</p>
      </div>
    );
  }

}

export default MemeItem;
