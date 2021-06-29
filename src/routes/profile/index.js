import React, { Fragment } from 'react';
import { 
    Row,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

import { Colxx, Separator } from 'Components/CustomBootstrap';
import BreadCrumbContainer from 'Components/BreadcrumbContainer';

const Profile = ({
    match
}) => {
     return (
        <Fragment> 
            <Row> 
                <Colxx> 
                    <h1> Meu Perfil </h1>
                   <Separator class="mb-12"/>
                </Colxx>
            </Row>
        </Fragment>
    )
}

export default Profile