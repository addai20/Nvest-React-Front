import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
class AccountHeader extends Component {

  render(){
    return(
      <Row>
        <Col> SYMBOL </Col>
        <Col> QTY </Col>
        <Col> MARKET VALUE </Col>
        <Col> UNIT COST</Col>
        <Col> TOTAL COST </Col>
        <Col> EQUITY </Col>
        <Col> BUY/SELL </Col>
      </Row>
    )
  }
}

export default AccountHeader
