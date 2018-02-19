import React, { Fragment } from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

export default class App extends React.Component {
  state = {
    score: 0,
  };

  handleClick = () => {
    this.setState({
      score: this.state.score + 1,
    });
  };

  render() {
    return (
      <Fragment>
        <Typography variant="body1">You have {this.state.score}</Typography>
        <Button variant="raised" disableRipple onClick={this.handleClick}>Gain</Button>
      </Fragment>
    );
  }
};
