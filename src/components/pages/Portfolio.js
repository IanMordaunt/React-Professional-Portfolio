import React, { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import "../../App.css";

function Portfolio() {
  const [work] = useState([
    {
      name: "Stox-ster",
      image: "Stox-ster",
      description: "Stox-ster is a personalized stock trading application",
      tech: "HTML, CSS, JavaScript, Bootstrap" ,
      link: "https://ianmordaunt.github.io/Stox-ster/",
      github: "https://github.com/IanMordaunt/Stox-ster",
    },
    {
      name: "Auto Part Inventory Tracker",
      image: "Auto-Part-Inv-Tracker",
      description: "Inventory tracker for Auto Shops within the same region",
      tech: "Node.js, SQL, Handlebars, Express, Bcrypt, Dotenv" ,
      link: "https://auto-parts-inventory-tracker.herokuapp.com/login",
      github: "https://github.com/IanMordaunt/Auto-Parts-Inventory",
    },
    {
      name: "DRIP",
      image: "DRIP",
      description: "A blog platform focused on everything coffee",
       tech: "HTML, CSS, Bootstrap, Node.JS, Express, React.js, MongoDB, GraphQL" ,
      link: "https://drip-coffee-blog-mern.herokuapp.com/",
      github: "https://github.com/BennetWilson/drip-coffee-blog",
    },
    {
      name: "Weather Dashboard",
      image: "weather-dashboard",
      description: "HTML, CSS, JS, Server Side APIs",
      link: "https://ianmordaunt.github.io/Weather_Dashboard/",
      github: "https://github.com/IanMordaunt/Weather_Dashboard",
    },
    {
      name: "Team Generator",
      image: "team_generator",
      description: "",
      link: "https://vimeo.com/manage/videos/665085517",
      github: "https://github.com/IanMordaunt/Team-Profile-Generator",
    },
    {
      name: "Tech Blog",
      image: "Tech-Blog",
      description: "HTML, Bootstrap, JS",
      link: " https://mvc-tech-block-ian.herokuapp.com/",
      github: "https://github.com/IanMordaunt/mvc-tech-blog-mordaunt",
    },
    {
      name: "Note Taker",
      image: "note-taker",
      description: "HTRML, Bootstrap, JQuery",
      link: "https://shielded-harbor-18931.herokuapp.com/notes",
      github: "https://github.com/IanMordaunt/Note-Taker",
    },
    
    
     // {
    //   name: "",
    //   image: "",
    //   description: "HTML, CSS",
    //   link: "",
    //   github: "",
    // },,,
  ]);

  return (
    <div className="portfolioContainer">
      <div className="projTitle">
      <h2 className="my-work">- Projects -</h2>
      </div>
      <section className="my-3">
        <div className="portfolio-div">
          {work.map((example, i) => (
            <Card key={example.name} id={example.id} className="WorkCard">
              <Col className="img-col">
                <img
                 bre src={require(`../../Assets/portfolio/${example.image}.png`)}
                  alt="Img of portfolio project"
                  className="project-image"
                />
              </Col>
              <Card.Body>
                <Col>
                  <Card.Text className="description">
                    {example.description}
                    <br></br>
                    {example.tech}
                  </Card.Text>
                </Col>
                <div>
                  <Button className="portBtn" href={example.link} traget='_blank'>
                    {example.name}
                  </Button>
                  <Button className="portBtn" href={example.github} traget='_blank'>
                    GitHub Repository
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
