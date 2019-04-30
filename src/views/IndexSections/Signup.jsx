import React from "react";
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";


// const privateKey = new Buffer('5C90EA75F5241212D17D6A4C226CEB78C28A02C8652BA130256B087AF9C1779F', 'hex');

var color = {
  color: 'white',
  paddingLeft: '20px'
};

var contractAddress = "0x7FF18776D21Ca8120D26A671FA88f38a1829b285";
var contract;

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fName",
				"type": "string"
			},
			{
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setId",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getId",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

let Web3;

window.addEventListener('load', function(e) {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  console.log("Events:", e);
  if (typeof web3 !== 'undefined') {
      Web3 = window.web3;
      contract = Web3.eth.contract(abi).at(contractAddress);
      console.log(contract);

  } else {
      console.log('No web3? You should consider trying MetaMask!')
  }  
});

class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      age: '',
      transactionID: '',
      account: '',
    }
  }
  
  _sendData = () => {
    contract.setId(this.state.firstName, this.state.age, (err, res) => {
      console.log("Error:", err)
      console.log("Response:", res)
    })
  }
  
  
  render() {
    return (
      <div className="section section-signup index-page">
        <Container>
          <div className="squares square-1" />
          <div className="squares square-2" />
          <div className="squares square-3" />
          <div className="squares square-4" />
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h3 className="display-3 text-white">
                Koala {" "}
              </h3>
              <h5 className="text-white mb-3">
                <span> Upload your Centrelink documents.</span>  <br/> <br/>
                The Design System comes with four pre-built pages to help you
                get started faster. You can change the text and images and
                you're good to go. More importantly, looking at them will give
                you a picture of what you can built with this powerful Bootstrap
                4 Design System.
                <br/><br/> <br/>
                <p>Your account: {this.state.account}</p>
              </h5>
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <Card className="card-register">
                <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("assets/img/square-purple-1.png")}
                  />
                  <CardTitle tag="h4" style={color} >Upload</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">

                      </InputGroupAddon>
                      <Input
                        placeholder="First Name"
                        type="text"
                        onChange={(inputData) => this.setState({firstName: inputData.target.value})}
                      />
                    </InputGroup>


                    
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                      </InputGroupAddon>
                      <Input
                        placeholder="Age"
                        type="text"
                        onChange={(inputData) => this.setState({age: parseInt(inputData.target.value)})}
                      />
                    </InputGroup>

                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.passwordFocus
                      })}
                    >
                      <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.passwordFocus
                      })}
                  
                      ></InputGroup>
                      
                    


                    </InputGroup>
                    <Button 
                      onClick={this._sendData} 
                      className="btn-round"
                      color="primary" 
                      size="lg" >
                    Submit Application
                    </Button>
                  </Form>
                   
                  <h4 style={{color: 'white'}}>{'First Name: ' + this.state.firstName}</h4>
                  <h4 style={{color: 'white'}}>{'Age: ' + this.state.age}</h4>
                </CardBody>

              </Card>
            </Col>
          </Row>
        </Container>


      </div>
    );
  }
}

export default Signup;
