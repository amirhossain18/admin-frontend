import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pro1 from '../../images/amir.jpg'
import gfx2 from '../../images/gfx2.jpg'
import './Dev.css'
import { FaFacebookF } from "react-icons/fa";
const Desiner = () => {
    return (
     
         <div className='container mb-5'>
            <h2 className="text-center text-danger m-5 mb-5">Our Avaiable Developers </h2>
        <div className=" dev-main">
        <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={gfx2} />
      <Card.Body>
      <h4> Rahas Hossain </h4>
        <h6>jounior Desiner</h6>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Contact</Button>
       
      </Card.Body>
     
      <div className="social-icon">
    <a href="s"> <FaFacebookF/></a>
    <a href="s"> <FaFacebookF/></a>
    <a href="s"> <FaFacebookF/></a>
    <a href="s"> <FaFacebookF/></a>
      </div>
     
    </Card>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://st2.depositphotos.com/2208684/7606/i/950/depositphotos_76064113-stock-photo-professional-man-in-graphic-design.jpg" />
      <Card.Body>
      <h4> Robin Hossain </h4>
        <h6>Banar Desiner</h6>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Contact</Button>
       
      </Card.Body>
     
      <div className="social-icon">
    <a href="s"> <FaFacebookF/></a>
    <a href="s"> <FaFacebookF/></a>
    <a href="s"> <FaFacebookF/></a>
    <a href="s"> <FaFacebookF/></a>
      </div>
     
    </Card>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={pro1} />
      <Card.Body>
      <h4> Hasan Shanto</h4>
        <h6>Flayer Desiner</h6>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Contact</Button>
       
      </Card.Body>
     
      <div className="social-icon">
    <a href="s"> <FaFacebookF/></a>
    <a href="s"> <FaFacebookF/></a>
    <a href="s"> <FaFacebookF/></a>
    <a href="s"> <FaFacebookF/></a>
      </div>
     
    </Card>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={pro1} />
      <Card.Body>
      <h4> Amir Hossain </h4>
        <h6>jounior Developer</h6>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Contact</Button>
       
      </Card.Body>
     
      <div className="social-icon">
    <a href="s"> <FaFacebookF/></a>
    <a href="s"> <FaFacebookF/></a>
    <a href="s"> <FaFacebookF/></a>
    <a href="s"> <FaFacebookF/></a>
      </div>
     
    </Card>




        </div>
        <h4>Chooce Your person</h4>
        </div>
    );
};

export default Desiner;