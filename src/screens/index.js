import React, { Component, Text } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
  Container,
  Overlay,
  Jumbotron,
  Row,
  Col,
  Card,
  ResponsiveEmbed,
  Dropdown
} from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import ReactPlayer from "react-player";
import Slider from "react-slideview";
import ReactSlider from "react-slider";

import SpecialOffers from "../components/specialOffers";
import ContinuousSlider from "../components/continuousSlider";

import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTwitter,
  faFacebookF,
  faLinkedInIn,
  faPinterest,
  faInstagram
} from "@fortawesome/free-solid-svg-icons";

import img from "../assets/homepage-desktop.jpeg";
import backgroundPhone from "../assets/hero_img_lrg-2.png";
import logo from "../assets/logo.gif";
// const bg = require("./assets/homepage-desktop.jpeg");

const style = {
  body: {
    fontFamily:
      '"Circular","HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,sans-serif',
    backgroundColor: "#f3eaff"
  },
  button: {
    backgroundColor: "#21cf93",
    border: "1px solid #21cf93",
    margin: "10px",
    borderRadius: "30px",
    fontSize: "1em",
    fontWeight: "bold"
  },
  button2: {
    backgroundColor: "#21cf93",
    border: "1px solid #21cf93",
    margin: "10px",
    borderRadius: "30px",
    fontSize: "1em",
    fontWeight: "bold",
    paddingLeft: "30px",
    paddingRight: "30px"
  },
  firstRowCard: {
    marginBottom: "15px"
  }
};
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", event => {
      this.setState({
        scrolling: true
      });
    });
  }
  render() {
    // var imgSrc = './image/image1.jpg';
    const target = React.createRef();
    const items = [];
    let baseUrl = "http://falconhl.com.au/wp-content/uploads/2016/02/scroller-";
    let comps = [];
    let comps2 = [];
    for (let i = 1; i < 32; i++) {
      if (i < 10) items.push(baseUrl + "0" + i + ".gif");
      else items.push(baseUrl + i + ".gif");
    }
    for (let i = 0; i < 32; i = i + 6) {
      let index = i;
      let cols = [];
      for (let j = i; j < i + 6; j++) {
        cols.push(
          // <Row fluid>
          <Col sm={2}>
            <img src={items[j]} />
          </Col>
          // </Row>
        );
      }
      comps = [...comps, <Row fluid>{cols.map(e => e)}</Row>];
      cols = [];
    }
    for (let i = 0; i < comps.length; i = i + 2) {
      comps2.push(
        <Row fluid>
          {comps[i]}
          {comps[i + 1]}
        </Row>
      );
      console.log("finished");
    }
    return (
      <div style={style.body}>
        <Navbar
          bg="*"
          expand="lg"
          fixed="top"
          style={{
            backgroundColor: !this.state.scrolling
              ? "rgba(255, 255, 255, 0.15)"
              : "rgb(255, 255, 255)",
            color: "#766f9b"
          }}
        >
          <Navbar.Brand href="#home">
            <Image src={logo} thumbnail width="100"></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                style={{
                  color: "#766f9b",
                  fontSize: "16px",
                  fontWeight: "bold"
                }}
                href="#home"
              >
                First Home Buyers
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "#766f9b",
                  fontSize: "16px",
                  fontWeight: "bold"
                }}
                href="#link"
              >
                Refinancing Home Loans
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "#766f9b",
                  fontSize: "16px",
                  fontWeight: "bold"
                }}
                href="#link"
              >
                Debt Consolidation
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "#766f9b",
                  fontSize: "16px",
                  fontWeight: "bold"
                }}
                href="#link"
              >
                Calculators
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "#766f9b",
                  fontSize: "16px",
                  fontWeight: "bold"
                }}
                href="#link"
              >
                About Us
              </Nav.Link>
              {/* <NavDropdown style={{ color: '#766f9b', fontSize: '16px', fontWeight: 'bold' }} title="Special Offers" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Form inline>
              {/* <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              /> */}
              <Button
                variant="outline-success"
                style={{ borderRadius: "30px", marginRight: "10px" }}
              >
                Engage with an expert
              </Button>

              <Button
                variant="outline-success"
                style={{ borderRadius: "30px" }}
              >
                Log In / Sign Up
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <SpecialOffers />
        <div>
          <Jumbotron
            fluid
            style={{
              // paddingTop: "30%",
              // marginLeft: "-30%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `URL(${img})`,
              backgroundSize: "110%",
              backgroundColor: "#f3eaff"
            }}
          >
            <Container style={{ marginTop: "20%" }}>
              {/* <div
                style={{ display: "block", width: "70%", paddingLeft: "15%" }}
              ></div> */}
              <Row>
                <Col sm={12} md={8} lg={7}>
                  <h2
                    style={{
                      fontWeight: "600",
                      color: "#231841",
                      fontSize: "32px"
                    }}
                  >
                    Welcome to a better way to borrow.
                  </h2>
                  <p
                    style={{
                      color: "#766f9b",
                      fontWeight: "300",
                      fontSize: "16px"
                    }}
                  >
                    We’re experts in packaging your needs and obtaining the
                    desired home loan for you
                  </p>
                </Col>
              </Row>
            </Container>
            <Container style={{ transform: `translate(${0}%, ${0}%)` }}>
              <Row
                style={{
                  textAlign: "center",
                  fontFamily: "'Courgette', cursive"
                }}
              >
                <Col sm={12}>
                  <h2
                    style={{
                      fontWeight: "600",
                      color: "#231841",
                      fontSize: "32px"
                    }}
                  >
                    4 Simple Steps
                  </h2>
                  <p
                    style={{
                      color: "#766f9b",
                      fontWeight: "300",
                      fontSize: "16px"
                    }}
                  >
                    To Obtain a Mortgage
                  </p>
                </Col>
              </Row>
              <Row style={{ textAlign: "center" }} className="card-deck">
                <Col sm={12} md={6} lg={3} className="d-flex">
                  <Card style={style.firstRowCard}>
                    <Card.Body>
                      <Card.Title
                        style={{ fontWeight: "600", color: "#2d1659" }}
                      >
                        Application Process
                      </Card.Title>
                      <Card.Text style={{ color: "#766f9b" }}>
                        You can apply online, over the phone or make an
                        appointment for your home loan.
                      </Card.Text>
                    </Card.Body>
                    <Button style={style.button} size="lg">
                      Start Process
                    </Button>
                  </Card>
                </Col>
                <Col sm={12} md={6} lg={3} className="d-flex">
                  <Card style={style.firstRowCard}>
                    <Card.Body>
                      <Card.Title
                        style={{ fontWeight: "600", color: "#2d1659" }}
                      >
                        Conditional Approval
                      </Card.Title>
                      <Card.Text style={{ color: "#766f9b" }}>
                        An indication of approval is subject to verification of
                        the information you provided on your application.
                      </Card.Text>
                    </Card.Body>
                    <Button style={style.button} size="lg">
                      More Info
                    </Button>
                  </Card>
                </Col>
                <Col sm={12} md={6} lg={3} className="d-flex">
                  <Card style={style.firstRowCard}>
                    <Card.Body>
                      <Card.Title
                        style={{ fontWeight: "600", color: "#2d1659" }}
                      >
                        Unconditional Approval
                      </Card.Title>
                      <Card.Text style={{ color: "#766f9b" }}>
                        Once your loan is approved, we will make you an offer by
                        providing you with your loan documents.
                      </Card.Text>
                    </Card.Body>
                    <Button style={style.button} size="lg">
                      More Info
                    </Button>
                  </Card>
                </Col>
                <Col sm={12} md={6} lg={3} className="d-flex">
                  <Card style={style.firstRowCard}>
                    <Card.Body>
                      <Card.Title
                        style={{ fontWeight: "600", color: "#2d1659" }}
                      >
                        Settlement
                      </Card.Title>
                      <Card.Text style={{ color: "#766f9b" }}>
                        The settlement process is when we meet with the seller's
                        and your legal and banking representatives.
                      </Card.Text>
                    </Card.Body>
                    <Button style={style.button} size="lg">
                      More Info
                    </Button>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
          <Container>
            <Row>
              <Col
                sm={12}
                style={{
                  backgroundRepeat: "no-repeat",
                  // backgroundImage: `URL(${backgroundPhone})`,
                  backgroundSize: "100%"
                  // marginRight: "-100px"
                }}
              >
                <Row style={{ paddingBottom: "75px" }}>
                  <Col xs={12} md={{ span: 5, offset: 1 }}>
                    <h2>
                      We’re making lending more fair, transparent, and
                      customized.
                    </h2>
                    <p>
                      We at Falcon Home Loans are committed to optimizing your
                      borrowing potential & minimizing the financial impact
                      incurred by you from repayments.
                    </p>
                    <p>
                      We have a good understanding about how finances affect the
                      day to day transactions of individuals & businesses.
                    </p>
                    <p>
                      With our years of hands-on experience in management &
                      customer service, we are committed to build long and
                      lasting customer relationships based on trust, integrity
                      and loyalty.
                    </p>
                  </Col>
                  <Col xs={12} md={6} className="player-wrapper">
                    {/* <ResponsiveEmbed aspectRatio="16by9"> */}
                    <ReactPlayer
                      url="https://youtu.be/nx7sD4T2xZg"
                      playing={false}
                      controls
                      light
                      width="100%"
                      height="100%"
                    />
                    {/* </ResponsiveEmbed> */}
                    {/* https://drive.google.com/file/d/1tB4_QAQpxuVRP4Wl3bcGM3BeE9xEbabO/view?usp=sharing */}
                  </Col>
                </Row>

                {/* <Image src={backgroundPhone} fluid/> */}
              </Col>
            </Row>
            {/* <img width="750" height="906" 
            src="https://s17664.pcdn.co/wp-content/uploads/hero_img_mobile.png" 
            class="v2-text-image-homepage__mobile_image" alt="" 
            srcset="https://s17664.pcdn.co/wp-content/uploads/hero_img_mobile.png 750w, https://s17664.pcdn.co/wp-content/uploads/hero_img_mobile-579x700.png 579w" 
            sizes="(max-width: 750px) 100vw, 750px" /> */}
          </Container>
          <Container
            fluid
            style={{
              backgroundColor: "#fff",
              paddingTop: "50px",
              paddingBottom: "100px",
              background: "linear-gradient(135deg, #ffffff, #eae4f6)",
              backgroundImage:
                "linear-gradient(135deg, rgb(255, 255, 255), rgb(234, 228, 246))"
            }}
            // style={{
            //   background: "linear-gradient(135deg, #ffffff, #eae4f6)",
            //   backgroundImage:
            //     "linear-gradient(135deg, rgb(255, 255, 255), rgb(234, 228, 246))"
            // }}
          >
            <Row style={{ paddingBottom: "75px" }}>
              <Col sm={12} style={{ textAlign: "center" }}>
                <h2
                  style={{
                    fontWeight: "600",
                    color: "#231841",
                    fontSize: "32px"
                  }}
                >
                  Loan options designed with you in mind
                </h2>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={{ span: 5, offset: 1 }}>
                <Card.Title style={{ fontWeight: "600", color: "#2d1659" }}>
                  First Home Buyer
                </Card.Title>
                <Dropdown.Divider />
                <Card.Text
                  style={{ color: "#766f9b", dispaly: "inline-block" }}
                >
                  <p>
                    Over the years we have developed a satisfied and loyal first
                    home buyer customer base.
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheck} /> Financing first home
                    buyer
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheck} /> Miscellaneous cost
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheck} /> Lenders mortgage
                    insurance (LMI)
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheck} /> Building insurance
                  </p>
                </Card.Text>
                <Button style={style.button2} size="lg">
                  Lean More
                </Button>
              </Col>
              <Col sm={12} md={{ span: 5 }}>
                {/* https://s17664.pcdn.co/wp-content/uploads/SLR-1.jpg 926w, https://s17664.pcdn.co/wp-content/uploads/SLR-1-700x506.jpg 700w */}
                <Image
                  src="https://s17664.pcdn.co/wp-content/uploads/SLR-1.jpg"
                  width="100%"
                  rounded
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "75px" }}>
              <Col sm={12} md={{ span: 5, offset: 1 }}>
                <Card.Title style={{ fontWeight: "600", color: "#2d1659" }}>
                  Buying Your Next Home
                </Card.Title>
                <Dropdown.Divider />
                <Card.Text
                  style={{ color: "#766f9b", dispaly: "inline-block" }}
                >
                  <p>
                    It is not easy the next time around. In fact, you probably
                    remember how difficult organising your home loan can be.
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheck} /> What are your goals ?
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheck} /> How much can you afford
                    to borrow ?
                  </p>
                </Card.Text>
                <Button style={style.button2} size="lg">
                  Lean More
                </Button>
              </Col>
              <Col sm={12} md={{ span: 5 }}>
                {/* https://s17664.pcdn.co/wp-content/uploads/SLR-1.jpg 926w, https://s17664.pcdn.co/wp-content/uploads/SLR-1-700x506.jpg 700w */}
                <Image
                  src="https://s17664.pcdn.co/wp-content/uploads/PSL-1.jpg"
                  width="100%"
                  rounded
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "75px" }}>
              <Col sm={12} md={{ span: 5, offset: 1 }}>
                <Card.Title style={{ fontWeight: "600", color: "#2d1659" }}>
                  Re Financing
                </Card.Title>
                <Dropdown.Divider />
                <Card.Text
                  style={{ color: "#766f9b", dispaly: "inline-block" }}
                >
                  <p>
                    It is not easy the next time around. In fact, you probably
                    remember how difficult organising your home loan can be.
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheck} /> Mortgage in arrears
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheck} /> Your current Arrears
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheck} /> How to refinance if you
                    have arrears
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheck} /> The arrears rate /
                    default interest rate
                  </p>
                </Card.Text>
                <Button style={style.button2} size="lg">
                  Lean More
                </Button>
              </Col>
              <Col sm={12} md={{ span: 5 }}>
                {/* https://s17664.pcdn.co/wp-content/uploads/SLR-1.jpg 926w, https://s17664.pcdn.co/wp-content/uploads/SLR-1-700x506.jpg 700w */}
                <Image
                  src="https://s17664.pcdn.co/wp-content/uploads/PL@2x-700x506.jpg"
                  width="100%"
                  rounded
                />
              </Col>
            </Row>
            <Row
              style={{ marginTop: "75px", textAlign: "center" }}
              className="card-deck"
            >
              <Col sm={12} md={6} lg={3} className="d-flex">
                <Card bg="light" border="info" style={style.firstRowCard}>
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "600", color: "#2d1659" }}>
                      Investment Loans
                    </Card.Title>
                    <Dropdown.Divider />
                    <Card.Text
                      style={{
                        color: "#766f9b",
                        fontSize: "small",
                        textAlign: "left"
                      }}
                    >
                      If you are looking to buy an investment property we can
                      assist you. You can use equity in your existing home as
                      leverage to buy your first investment or put together a
                      finance package which enables the expansion of your
                      property portfolio.
                    </Card.Text>
                  </Card.Body>
                  <Button style={style.button} size="lg">
                    Learn More
                  </Button>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={3} className="d-flex">
                <Card bg="light" border="info" style={style.firstRowCard}>
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "600", color: "#2d1659" }}>
                      Business Loans
                    </Card.Title>
                    <Dropdown.Divider />
                    <Card.Text
                      style={{
                        color: "#766f9b",
                        fontSize: "small",
                        textAlign: "left",
                        lineHeight: "80%"
                      }}
                    >
                      <p>
                        <FontAwesomeIcon icon={faCheck} /> Starting a new
                        business
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCheck} /> Re-structuring an
                        existing business
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCheck} /> Growing a business
                        Boosting the cash flow
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCheck} /> Increasing the
                        working capital
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Button style={style.button} size="lg">
                    Learn More
                  </Button>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={3} className="d-flex">
                <Card bg="light" border="info" style={style.firstRowCard}>
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "600", color: "#2d1659" }}>
                      Types of Loans
                    </Card.Title>
                    <Dropdown.Divider />
                    <Card.Text
                      style={{
                        color: "#766f9b",
                        fontSize: "0.7em",
                        lineHeight: "80%",
                        textAlign: "left"
                      }}
                    >
                      <p>
                        <FontAwesomeIcon icon={faCheck} />
                        Interest only loans
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCheck} />
                        Fixed rate loans
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCheck} />
                        Basic or no frills loans
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCheck} />
                        Standard variable rate loans
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCheck} />
                        Line of credit loans
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCheck} />
                        Profesional home loan pakcages
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCheck} />
                        Bridging loans
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Button style={style.button} size="lg">
                    Learn More
                  </Button>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={3} className="d-flex">
                <Card bg="light" border="info" style={style.firstRowCard}>
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "600", color: "#2d1659" }}>
                      Types of Finance
                    </Card.Title>
                    <Dropdown.Divider />
                    <Card.Text
                      style={{
                        color: "#766f9b",
                        fontSize: "small",
                        textAlign: "left"
                      }}
                    >
                      <p>
                        <FontAwesomeIcon icon={faCheck} />
                        Property
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCheck} />
                        Self Employed
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCheck} />
                        Low doc no doc loans
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Button style={style.button} size="lg">
                    Learn More
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row
              style={{
                marginTop: "75px",
                background: "linear-gradient(90deg, #4293de, #4f4ecf)",
                backgroundImage:
                  "linear-gradient(90deg, rgb(66, 147, 222), rgb(79, 78, 207))",
                textAlign: "center",
                paddingTop: "75px"
              }}
            >
              <Col sm={12} md={{ span: 5, offset: 1, textAlign: "center" }}>
                <span
                  style={{
                    color: "#fff",
                    height: "48px",
                    marginTop: "0px",
                    marginBottom: "16px",
                    fontSize: "56px",
                    fontWeight: "900",
                    lineHeight: "56px",
                    whiteSpace: "nowrap",
                    textAlign: "center"
                  }}
                >
                  $8.6 billion{" "}
                </span>

                <p
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold"
                  }}
                >
                  Total Student Loans Refinanced{" "}
                </p>
              </Col>
              <Col sm={12} md={{ span: 5, offset: 1, textAlign: "center" }}>
                <span
                  style={{
                    color: "#fff",
                    height: "48px",
                    marginTop: "0px",
                    marginBottom: "16px",
                    fontSize: "56px",
                    fontWeight: "900",
                    lineHeight: "56px",
                    whiteSpace: "nowrap",
                    textAlign: "center"
                  }}
                >
                  105,000+{" "}
                </span>

                <p
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold"
                  }}
                >
                  Happy Clients Earned{" "}
                </p>
              </Col>
              <Col
                sm={12}
                md={{ span: 6, offset: 3 }}
                style={{
                  textAlign: "center",
                  paddingTop: "40px",
                  paddingBottom: "50px"
                }}
              >
                <img
                  src="https://s17664.pcdn.co/wp-content/uploads/Group-16.png"
                  alt="5 out of 5"
                />
                <p
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold"
                  }}
                >
                  Overall Trustpilot Rating{" "}
                </p>
              </Col>
            </Row>
            <ContinuousSlider />
            <Row
              style={{
                backgroundColor: "#fff",
                paddingTop: "30px",
                paddingBottom: "20px",
                marginBottom: "-100px"
              }}
            >
              <Col sm={12} style={{ marginBottom: "50px" }}>
                <Dropdown.Divider />
              </Col>
              <Col sm={2} style={{ lineHeight: "80%", fontWeight: "bold" }}>
                <h3
                  style={{
                    color: "#1bb580",
                    fontSize: "12px",
                    fontWeight: "600",
                    marginBottom: "10px",
                    textTransform: "uppercase"
                  }}
                >
                  PRODUCTS
                </h3>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  First Home Buyer
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Buying Your Next Home
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Re Financing
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Investment Loans
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Business Loans
                </p>
              </Col>
              <Col sm={3} style={{ lineHeight: "80%", fontWeight: "bold" }}>
                <h3
                  style={{
                    color: "#1bb580",
                    fontSize: "12px",
                    fontWeight: "600",
                    marginBottom: "10px",
                    textTransform: "uppercase"
                  }}
                >
                  CALCULATORS
                </h3>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Personal loan calculator
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Mortgage calculator
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Tax calculator
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Car Loan
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Savings Calculator
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Repayments Calculator
                </p>
              </Col>
              <Col sm={2} style={{ lineHeight: "80%", fontWeight: "bold" }}>
                <h3
                  style={{
                    color: "#1bb580",
                    fontSize: "12px",
                    fontWeight: "600",
                    marginBottom: "10px",
                    textTransform: "uppercase"
                  }}
                >
                  COMPANY
                </h3>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Blog
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  About Us
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Values
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Careers
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Employers
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Partner Sign Up
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Press
                </p>
              </Col>
              <Col sm={2} style={{ lineHeight: "80%", fontWeight: "bold" }}>
                <h3
                  style={{
                    color: "#1bb580",
                    fontSize: "12px",
                    fontWeight: "600",
                    marginBottom: "10px",
                    textTransform: "uppercase"
                  }}
                >
                  LEGAL
                </h3>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Privacy & Security
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Terms of Service
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Referral Terms
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Lending Licenses
                </p>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease"
                  }}
                >
                  Disclaimers
                </p>
              </Col>
              <Col
                sm={3}
                style={{
                  lineHeight: "80%",
                  fontWeight: "bold",
                  textAlign: "right"
                }}
              >
                <h3
                  style={{
                    color: "#1bb580",
                    fontSize: "12px",
                    fontWeight: "600",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                    paddingRight: "10px"
                  }}
                >
                  View the new guide
                </h3>
                <h3
                  style={{
                    color: "#000",
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                    paddingRight: "10px"
                  }}
                >
                  Falconas Guide to Refinancing
                </h3>
                <p
                  style={{
                    color: "#9c9ea1",
                    fontSize: "12px",
                    transition: "color 250ms ease",
                    paddingRight: "10px"
                  }}
                >
                  - The Falconas Team
                </p>
                <h3
                  style={{
                    color: "#1bb580",
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "10px",
                    textTransform: "uppercase"
                  }}
                >
                  <SocialIcon
                    style={{ marginLeft: "10px" }}
                    url="http://linkedin.com/"
                    network="linkedin"
                  />
                  <SocialIcon
                    style={{ marginLeft: "10px" }}
                    url="https://twitter.com/"
                    network="twitter"
                  />
                  <SocialIcon
                    style={{ marginLeft: "10px" }}
                    url="https://facebook.com/"
                    network="facebook"
                  />
                  <SocialIcon
                    style={{ marginLeft: "10px" }}
                    url="https://youtube.com/"
                    network="youtube"
                  />
                  {/* <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faLinkedInIn} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faPinterest} /> */}
                </h3>
              </Col>
            </Row>
          </Container>
          <Container style={{ background: "#fff" }}>
            {/* <nobr>
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-01.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-02.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-03.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-04.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-05.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-06.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-07.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-08.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-09.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-10.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-11.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-12.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-13.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-14.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-15.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-16.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-17.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-18.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-19.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-20.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-21.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-22.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-23.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-24.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-25.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-26.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-27.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-28.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-29.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-30.gif" />
              <img src="http://falconhl.com.au/wp-content/uploads/2016/02/scroller-31.gif" />
            </nobr> */}
          </Container>
          {/* <Overlay target={target.current} show placement="bottom">
            {({
              placement,
              scheduleUpdate,
              arrowProps,
              outOfBoundaries,
              ...props
            }) => (
              <div
                {...props}
                style={{
                  backgroundColor: "rgba(255, 100, 100, 0.85)",
                  padding: "2px 10px",
                  color: "white",
                  borderRadius: 3,
                  ...props.style
                }}
              >
                Simple tooltip
              </div>
            )}
          </Overlay> */}
        </div>
      </div>
    );
  }
}

export default HomePage;
