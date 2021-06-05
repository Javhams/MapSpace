import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


function Home() {
    return(
        <div className="container">
        <div className="row">
            <div className="col">
                <h2>Welcome to MapSpace</h2>
                <hr />
            </div>
        </div>  
    </div>
    )
}

/*function RenderCard({item}){
    return(
        <Card>
        <CardImg src={item.image} alt={item.name} />
        <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardText>{item.description}</CardText>
        </CardBody>
    </Card>
    )
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.desk} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.partner} />
                </div>
            </div>
        </div>
    );
}
*/
export default Home;   