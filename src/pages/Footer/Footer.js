import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTiktok, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <Container fluid className='footer'>
        <Row>
          {/* line break */}
          <Col md={12}>
            <hr id='line-break' />
          </Col>

          <Col md={12}>
            <h3>Contact Us & Social Media</h3>
            <Link to='https://www.instagram.com/milopawprints/' className='icon' target='_blank'><FaTiktok /> </Link>
            <Link to='https://www.tiktok.com/@milopawprints' className='icon' target='_blank'><FaInstagram /></Link>
          </Col>

        </Row>
        <span>Milo Paw Prints</span> <span id='grayf'>All Rights Reserved Copyright &#169; {year}</span>
      </Container>
    </>
  )
}

export default Footer;