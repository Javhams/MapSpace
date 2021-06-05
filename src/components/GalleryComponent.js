import React from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

import Card from "../shared/Card";
import '../css/cards.css';

import image1 from "../views/cuadrada.jpg";
import image2 from '../views/cuadrada2.jpg';
import image3 from '../views/md4.jpg';
import image4 from '../views/lg2.jpg';
import image5 from '../views/lg.jpg';
import image6 from '../views/lg3.jpg';
import image7 from '../views/md8.jpg';
import image8 from '../views/md9.jpg';
import image9 from '../views/md7.jpg';


const cards = [
  {
    id: 1,
    title: "Example",
    image: image1,
    url: "#",
  },
  {
    id: 2,
    title: "example2",
    image: image2,
    url: "#",
  },
  {
    id: 3,
    title: "example3",
    image: image3,
    url: "#",
  },
  {
    id: 4,
    title: "example3",
    image: image4,
    url: "#",
  },
  {
    id: 5,
    title: "example3",
    image: image5,
    url: "#",
  },
  {
    id: 6,
    title: "example3",
    image: image6,
    url: "#",
  },
  {
    id: 7,
    title: "example3",
    image: image7,
    url: "#",
  },
  {
    id: 8,
    title: "example3",
    image: image8,
    url: "#",
  },
  {
    id: 9,
    title: "example3",
    image: image9,
    url: "#",
  },
];

function Gallery() {
  return (
    <React.Fragment>
        <div className="container">
            <div className='row'>
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Gallery</BreadcrumbItem>
                    </Breadcrumb>
                <h2>Gallery</h2>
                </div>
            </div>
        </div>

        <div className="container d-flex justify-content-center align-items-center ">
          <div className="row">
              {cards.map(({ title, image, url, id }) => (
            <div className="col-lg4 col-sm-4 col-md-4" key={id}>
                <Card imageSource={image} title={title} url={url}  />
                <br/>
            </div>
        ))}
      </div>
    </div>
    </React.Fragment>
    
  );
}

export default Gallery;

