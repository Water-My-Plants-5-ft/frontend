import React from "react";
import { Jumbotron, Button } from "reactstrap";
// import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const handleClick = () => {
    localStorage.getItem("token")
      ? history.push("/myplants")
      : history.push("/login");
  };

  return (
    <div className="home-wrapper">
      <div className="home-plants-image">
        <div className="homepage">
          <Jumbotron>
            <div className="homePage">
              <div className="content">
                <div className='company-name-img-container'>
                  <h1 className="wmp-head">Water My Plants</h1>
                  <img id="homepage-mid-img" src='https://www.ugaoo.com/knowledge-center/wp-content/uploads/2016/03/shutterstock_226079392-850x525.jpg' alt='Watering plant' />
                  <p className="lead">
                    WaterMyPlants will remind users when it's time to feed that
                    foliage and quench your plants' thirst.
                  </p>
                  <hr className="my-2" />
                  <p>
                    Ensuring that all your plants are consistently watered is
                    actually pretty difficult. Water My Plants is an app that
                    helps to solve those problems.
                  </p>
                  <p className="lead">
                    <Button onClick={handleClick} color="primary">
                      Learn More!
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </Jumbotron>
        </div>
      </div >
    </div >
  );
};
export default HomePage;
