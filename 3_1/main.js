const MAX_RADIUS = 300;
const MIN_RADIUS = 5;
const INCREASE_FACTOR = 1.3;
const Clicker = React.createClass({
  getInitialState() {
    return {
      radius: MIN_RADIUS
    }
  },

  handleCircleClick() {
    let radius = this.state.radius * INCREASE_FACTOR;
    if (radius > MAX_RADIUS) {
      radius = MIN_RADIUS;
    }
    this.setState({radius});
  },

  render() {
    const {radius} = this.state;
    const circleStyles = {
      height: 2*radius,
      width: 2*radius,
      marginLeft: -radius,
      marginTop: -radius,
      top: '50%',
      left: '50%',
      borderRadius: '50%',
      background: 'blue',
      position: 'absolute'
    };

    return (
        <div style={circleStyles} onClick={this.handleCircleClick}>
        </div>
    );
  }
});


ReactDOM.render(
    <Clicker />,
    document.getElementById('root')
);