import React, { Component } from 'react';

class MemeItem extends Component {
  render() {
    let { meme } = this.props;
    return(
      <div className="meme-item">
        <img className="meme-img"
          src={meme.url}
          alt={meme.name}
          />
        <p className="meme-txt">{meme.name}</p>
      </div>
    );
  }

}

export default MemeItem;
