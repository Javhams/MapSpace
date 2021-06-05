import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function About(props) {

    const partners = props.partners.map(partner => {
        return (
            <Media tag="li" key={partner.id}>
                <RenderPartner partner={partner}/>
            </Media>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>  
        </div>
    );
}

function RenderPartner({partner}){

    if({partner}){
        return (
            <React.Fragment>
                <Media object={true} src={partner.image} alt={partner.name} width='150' />
                
                <Media body={true} className={'ml-5 mb-4'}>
                    <Media heading={true} > 
                       {partner.name} 
                    </Media>
                       {partner.description}
                </Media>
            </React.Fragment>
        )
    }else {
        return (
            <div></div>
        );
    }

}

export default About;