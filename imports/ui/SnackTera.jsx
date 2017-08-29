import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

export default class SnackTera extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
      // open: false,
    // };
  }

  // statics:{
	//  handleTouchTap = () => {
	// handleTouchTap: function(){
		// this.setState({
			// open: true,
		// });
	// };
  // }
  
  // handleRequestClose = () => {
    // this.setState({
      // open: false,
    // });
  // };

  render() {
    return (
      // <div>
        // <RaisedButton
          // onClick={this.handleTouchTap}
          // label="Add to my calendar"
        // />
        <Snackbar
          open={this.props.open}
          message={this.props.message}
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
		  /*bodyStyle={{ backgroundColor: 'teal', color: 'coral' }}*/
        />
      // </div>
    );
  }
}

// SnackTera.propTypes = {
	// message: PropTypes.object.isRequired,
// };