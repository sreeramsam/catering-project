import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import sweets from '../assets/north-indian-menu/sweetsdec8b8ec.png';
import bengalisweets from '../assets/north-indian-menu/bengaliSweets6bcb319b.png';
import rajsathansweets from '../assets/north-indian-menu/rajastanSweets.png';
import savouries from '../assets/north-indian-menu/savaries.png';
import veg from '../assets/north-indian-menu/vegetables3c13140f.png';
import rotti from '../assets/north-indian-menu/rotti.png';
import poori from '../assets/north-indian-menu/pooriNor.png';
import tandoori from '../assets/north-indian-menu/tandooria9f54f96.png';
import parotta from '../assets/north-indian-menu/parotta751d43b0.png';
import salad from '../assets/north-indian-menu/salad0356156c.png';
import dal from '../assets/north-indian-menu/dalb669937a.png';
import rice from '../assets/north-indian-menu/rice60a0648c.png';
import chat from '../assets/north-indian-menu/chatea3a4c5e.png';
import chatni from '../assets/north-indian-menu/chatni80603b03.png';
import soup from '../assets/north-indian-menu/soupf9f989f2.png';
import chinese from '../assets/north-indian-menu/chinise.png';
import cooldrinks from '../assets/north-indian-menu/coolDrinkse7607f19.png';
import milkshakes from '../assets/north-indian-menu/milkShakese13d0fef.png';
import { Link } from 'react-router-dom';

export default function NorthIndian() {
    return (
        <div>
            <div class="container-fluid container-scroll">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row southind-menu nav-bg-col south-justify-content south-ind-position">
                            <h4 class="nav-southind-text">North Indian Menu</h4>
                        </div>
                    </div>
                </div>
                <div class="row ml-2 pt-3">
                  <Link to="/" >
                      <button class="btn-1"><i class="fa fa-home"></i> Home</button>
                  </Link>
                </div>
                <div class="row south-Indian-align">
                    <div class="row pt-4 pl-4">
                        <h5 class="south-ind-heading-color">Food is Life sustaining everyone needs to eat and survive. Food is
                        the only thing in this world where as a consumer you have ability to say “ No Thanks” due to being
                    fully satisfied. At AANJANEYA Caterers to give you this satisfaction.</h5>
                    </div>
                    <div class="row">
                        <h4 class="pt-4 pl-3 ">Our Specials</h4>
                    </div>

                    <div class="row pt-3">
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={sweets} alt="logo" />
                            <h4 class="text-center">Sweets</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={bengalisweets} alt="logo" />
                            <h4 class="text-center">Bengali Sweets</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={rajsathansweets} alt="logo" />
                            <h4 class="text-center">Rajasthan Sweets</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={savouries} alt="logo" />
                            <h4 class="text-center">Savouries</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={veg} alt="logo" />
                            <h4 class="text-center">Vegetables</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={rotti} alt="logo" />
                            <h4 class="text-center">Roti</h4>
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={poori} alt="logo" />
                            <h4 class="text-center">Poori</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={tandoori}
                                alt="logo" />
                            <h4 class="text-center">Tandoori</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={parotta}
                                alt="logo" />
                            <h4 class="text-center">Parotta</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={salad}
                                alt="logo" />
                            <h4 class="text-center">Salad</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={dal} alt="logo" />
                            <h4 class="text-center">Dal</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={rice}
                                alt="logo" />
                            <h4 class="text-center">Rice</h4>
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={chat} alt="logo" />
                            <h4 class="text-center">Chat</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={chatni}
                                alt="logo" />
                            <h4 class="text-center">Chatni</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={soup}
                                alt="logo" />
                            <h4 class="text-center">Soup</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={chinese}
                                alt="logo" />
                            <h4 class="text-center">Chinese</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={cooldrinks} alt="logo" />
                            <h4 class="text-center">Cold Drinks</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={milkshakes}
                                alt="logo" />
                            <h4 class="text-center">Milk Shakes</h4>
                        </div>
                    </div>
                </div>

            </div>
            <footer class="footer-bg-color text-center text-lg-start mt-5">

                <div class="text-center p-3 text-nowrap footer-color">
                    © AANJANEYA Caterers 1995. All Rights Reserved.
        </div>

            </footer>
        </div>
    )
}
