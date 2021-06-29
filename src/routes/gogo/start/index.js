import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

const start = ({
  match
}) => {
    console.log(match);

    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={'Início'}
              match={match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row> 
          <Colxx xxs="12"> 
              <CardTitle className="mb-4"> Teste card  </CardTitle>

              <Row className="icon-cards-row mb-12">
                  <Colxx xxs="12" sm="4" md="12" lg="12">
                    <Card className="mb-12">
                      <CardBody className="text-center"> 
                        <h1> teste avero avero aver </h1> 
                        </CardBody>
                    </Card>
                  </Colxx>
              </Row>
          </Colxx>
        </Row>
      </Fragment>
    );
}

export default start;