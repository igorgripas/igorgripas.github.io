const MAX_RADIUS = 300;
const MIN_RADIUS = 5;
const INCREASE_FACTOR = 1.3;

let CIRCLE_STYLES = {
  borderRadius: '50%',
  background: 'blue',
  position: 'absolute',
  transition: 'all 0.2s linear',
  WebkitTransition: 'all 0.2s linear',

};


const Clicker = React.createClass({
  getInitialState() {
    return {
      radius: MIN_RADIUS
    }
  },

  handleCircleClick() {
    let radius = this.state.radius * INCREASE_FACTOR > MAX_RADIUS ? MIN_RADIUS : this.state.radius * INCREASE_FACTOR;

    this.setState({radius});
  },

  render() {
    const {radius} = this.state;
    let circleStyles = {...CIRCLE_STYLES};
    circleStyles.height = 2 * radius;
    circleStyles.width = 2 * radius;

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