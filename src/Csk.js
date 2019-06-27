import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Csk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csk : []
    };
  }

  componentDidMount(){
    this.getCsk();
  }

  getCsk() {
    var request = require('request');
    console.log(this);
    request('http://demo4196830.mockable.io/CSK', function(error, response, data) {
      console.log(this);
      if(!error && response.statusCode === 200){
        var obj = JSON.parse(data);
        this.setState({csk: obj });
      } else {
        console.log("Error occured ..");
      }
    }.bind(this));
  }
  render() {
  return (
    <div className="col">
      {
        this.state.csk.map(item => {
          return <h5>{item.name}</h5>
        })
      }
    </div>
  );}
}




export default Csk;
