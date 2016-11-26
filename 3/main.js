const Cart = React.createClass({
  getInitialState() {
    return {
      frontSide: true
    };
  },

  handleCartClick() {
    this.setState({frontSide: !this.state.frontSide});
  },

  render() {
    let containerClassName = 'flip-container';
    if (!this.state.frontSide) {
      containerClassName += ' backSide';
    }
    return (
        <div className={containerClassName} onClick={this.handleCartClick}>
          <div className="flipper">
            <div className="front"/>
            <div className="back"/>
          </div>
        </div>
    );
  }
});

ReactDOM.render(
    <Cart />,
    document.getElementById('root')
);
