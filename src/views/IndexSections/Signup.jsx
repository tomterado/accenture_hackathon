import React from "react";
import classnames from "classnames";

import net from 'net';
import Web3 from 'web3';
import web3 from 'web3';
import Tx from 'ethereumjs-tx';

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

// const web3 = new Web3('https://ropsten.infura.io/v3/aed47a6a98ac49a7a9e1243bd1b2f842', net);

// const privateKey = new Buffer('5C90EA75F5241212D17D6A4C226CEB78C28A02C8652BA130256B087AF9C1779F', 'hex');

var color = {
  color: 'white',
  paddingLeft: '20px'
};

var contractAddress = "0x782889b0116EB60F95d6686f253F793be63F5F3f";
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


window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
      let web3js;
      web3js = new Web3(web3.currentProvider);
      contract = web3.eth.contract(abi).at(contractAddress);
      console.log('WEB3JS: ',web3js)

  } else {
      console.log('No web3? You should consider trying MetaMask!')
  }  
});

class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      isStudent: '',
      age: '',
      transactionID: '',
      account: '',
    }
  }
  

  _getValue = () => {
    // var inputData = this.state.age;
    // console.log(inputData)
    alert("Your Centrelink has been approved. Gas cost: $0.49")
  //   contract.setId.call.then(function(error, result){
  //     if(!error){
  //         console.log('this works!!!!');
  //     }
  // });
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
                        placeholder="Last Name"
                        type="text"
                        onChange={(inputData) => this.setState({lastName: inputData.target.value})}
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
                        onChange={(inputData) => this.setState({age: inputData.target.value})}
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
                      onClick={this._getValue} 
                      className="btn-round"
                      color="primary" 
                      size="lg" >
                    Submit Application
                    </Button>
                  </Form>
{/*                   
                  <h4 style={{color: 'white'}}>{'First Name: ' + this.state.firstName}</h4>
                  <h4 style={{color: 'white'}}>{'Last Name: ' + this.state.lastName}</h4>
                  <h4 style={{color: 'white'}}>{'Age: ' + this.state.age}</h4>
                  <h4 style={{color: 'white'}}>{'Current Student: ' + this.state.address}</h4>                   */}
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
