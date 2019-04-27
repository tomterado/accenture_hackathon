
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { Link } from 'react-router-dom';

import {
  Button,
} from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">Koala.</h1>
            <h3 className="d-none d-sm-block">
              Your Portal to accessing your welfare.
            </h3>
            <Link to="/signup"> 
            <Button className="btn-round" color="neutral" size="lg" >
                    Login. 
            </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
