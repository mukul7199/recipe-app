import React from "react";
import { Slider, Slide } from "react-materialize";
import "./App.css";
import pancake from "./images/pancake.jpg";
import pizza from "./images/pizza.jpg";
import burrito from "./images/burrito.jpg";
import brunch from "./images/brunch.jpg";

const Slid = () => {
  return (
    <div>
      <Slider className="black-text ">
        <Slide
          src="http://lorempixel.com/1000/800/food/1"
          title="Delicious Food, Happy Mood!"
        />
        <Slide
          src="http://lorempixel.com/1000/800/food/3"
          title="From Pan To Plate, Fingerlicking Great!"
          placement="left"
        />
        <Slide
          src="http://lorempixel.com/1000/800/food/9"
          title="For Healthy Appetite, Eat Right!"
          placement="right"
        />
      </Slider>

      <div class="section section-icons center ">
        <div class="container">
          <div class="row ">
            <div class="col s12 m4">
              <div class="card-panel brown lighten-2 black-text">
                <i class="fa fa-users fa-3x deep-cyan-text text-darken-2 medium" />
                <h4>free Account</h4>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="card-panel brown lighten-2 black-text">
                <i class="fa fa-utensils fa-3x deep-cyan-text text-darken-2 medium" />
                <h4>View Recipes</h4>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="card-panel brown lighten-2 black-text">
                <i class="fa fa-hamburger fa-3x deep-cyan-text text-darken-2 medium" />

                <h4>Add Recipes</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div class="container">
        <div class="row">
          <div class="col s12 m6">
            <p class="flow-text">
              “One of the very nicest things about life is the way we must
              regularly stop whatever it is we are doing and devote our
              attention to eating.” – Luciano Pavarotti
            </p>
          </div>
          <div class="col s12 m6">
            <img src={brunch} alt="" class="circle responsive-img" />
          </div>
        </div>
      </div>

      <br />

      <div id="popular" class="section section-popular scrollspy">
        <div class="container">
          <div class="row">
            <h3 class="center">
              <span class="white-text">Popular </span>
              Dishes
            </h3>
            <div class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img src={pizza} alt="" />
                  <span class="card-title">Pizza</span>
                </div>
                <div class="card-content">
                  <p>
                    Pizza is a savory dish of Italian origin, consisting of a
                    usually round, flattened base of leavened wheat-based dough
                    topped with tomatoes, cheese, and various other ingredients
                    baked at a high temperature, traditionally in a wood-fired
                    oven.
                  </p>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img src={pancake} alt="" />
                  <span class="card-title">Pancake</span>
                </div>
                <div class="card-content">
                  <p>
                    A pancake is a flat cake, often thin and round, prepared
                    from a starch-based batter that may contain eggs, milk and
                    butter and cooked on a hot surface such as a griddle or
                    frying pan, often frying with oil or butter.The pancake's
                    shape and structure varies worldwide. In Britain, pancakes
                    are often unleavened.
                  </p>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img src={burrito} alt="" />
                  <span class="card-title">Burrito</span>
                </div>
                <div class="card-content">
                  <p>
                    A burrito is a dish in Mexican and Tex-Mex cuisine that
                    consists of a flour tortilla with various other ingredients.
                    It is wrapped into a closed-ended cylinder that can be
                    picked up, in contrast to a taco, where the tortilla is
                    simply folded around the fillings. The tortilla is sometimes
                    lightly grilled or steamed to soften it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};
export default Slid;
