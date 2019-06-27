import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Mi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mi : []
    };
  }

  componentDidMount(){
    this.getMI();
  }

  getMI() {
    var playerMI;
    var request = require('request');
    console.log(this);
    request('http://demo4196830.mockable.io/MI', function(error, response, data) {
      console.log(this);
      if(!error && response.statusCode === 200){
        var obj = JSON.parse(data);
        this.setState({mi: obj });
      } else {
        console.log("Error occured ..");
      }
    }.bind(this));
  }
  render() {
  return (
    <div className="col">
      {
        this.state.mi.map(item => {
          return <h5>{item.name}</h5>
        })
      }
    </div>
  );}
}


export default Mi;
