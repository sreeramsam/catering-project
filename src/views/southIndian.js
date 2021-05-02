import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import kasihalwa from '../assets/southindian-menu/kasihalwa.png';
import ravakesari from '../assets/southindian-menu/ravaKesari1.png';
import meduvada from '../assets/southindian-menu/meduVada.png';
import idly from '../assets/southindian-menu/idly.png';
import pongal from '../assets/southindian-menu/pongal.png';
import dosa from '../assets/southindian-menu/dosa.png';
import poori from '../assets/southindian-menu/poori.png';
import ravakichadi from '../assets/southindian-menu/rava-kichadi-breakfast.png';
import ravadosa from '../assets/southindian-menu/rava-dosa-recipe-1.png';
import idiyappam from '../assets/southindian-menu/idiyappamd3acd9b2.png';
import filtercofee from '../assets/southindian-menu/FilterCoffee.png';
import freshjuice from '../assets/southindian-menu/freshJuice703aa344.png';
import riceapplam from '../assets/southindian-menu/sambarRiceAppalam.png';
import parupughee from '../assets/southindian-menu/parupuGhee0e1e74bd.png';
import sweetpachidi from '../assets/southindian-menu/thakkalliPachadi.png';
import parupusili from '../assets/southindian-menu/kothavarangaiparupuusilirecipe.png';
import potato from '../assets/southindian-menu/potato661827eb.png';
import rasam from '../assets/southindian-menu/rasamRecipe.png';
import aviyal from '../assets/southindian-menu/keralaAvialKeralaSadyaStyleAvialOrAviyalRecipe.png';
import palpaayasam from '../assets/southindian-menu/paalpayasamrecipericekheer1400.png';
import bagalabath from '../assets/southindian-menu/bagalabath.png';
import chips from '../assets/southindian-menu/chipsCat.png';
import elannerpayasam from '../assets/southindian-menu/elaneerpayasam.png';
import icecream from '../assets/southindian-menu/icecream.png';
import { Link } from 'react-router-dom';

export default function SouthIndian() {
    return (
        <div>
            <div class="container-fluid container-scroll">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row southind-menu nav-bg-col south-justify-content south-ind-position">
                            <h4 class="nav-southind-text">South Indian Menu</h4>
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
                        <h5 class="south-ind-heading-color">Food is Life sustaining everyone needs to eat and survive. Food is the only thing in this world where as a consumer you have ability to say “ No Thanks” due to being fully satisfied. At AANJANEYA Caterers to give you this satisfaction.</h5>
                    </div>
                    <h4 class="pt-4 pl-3">Tiffen
                    </h4>
                    <div class="row pt-3">
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={kasihalwa} alt="logo" />
                            <h4 class="text-center">Kasi Halwa</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={ravakesari} alt="logo" />
                            <h4 class="text-center">Rava Kesari</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={meduvada} alt="logo" />
                            <h4 class="text-center">Medu Vada</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={idly} alt="logo" />
                            <h4 class="text-center">Idly</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={pongal} alt="logo" />
                            <h4 class="text-center">Pongal</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={dosa} alt="logo" />
                            <h4 class="text-center">Dosa</h4>
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={poori} alt="logo" />
                            <h4 class="text-center">Poori</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={ravakichadi} alt="logo" />
                            <h4 class="text-center">Rava Kichadi</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={ravadosa} alt="logo" />
                            <h4 class="text-center">Rava Dosa</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={idiyappam} alt="logo" />
                            <h4 class="text-center">Idiyappam</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={filtercofee} alt="logo" />
                            <h4 class="text-center">Filter Coffee</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={freshjuice} alt="logo" />
                            <h4 class="text-center">Fresh Juice</h4>
                        </div>
                    </div>

                </div>
                <div class="row south-Indian-align">
                    <h4 class="pt-4 pl-3">Lunch
            </h4>
                    <div class="row pt-3">
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={riceapplam} alt="logo" />
                            <h4 class="text-center">Rice and Applam</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={parupughee} alt="logo" />
                            <h4 class="text-center">Paruppu and Ghee</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={sweetpachidi} alt="logo" />
                            <h4 class="text-center">Sweet Pachidi</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={parupusili} alt="logo" />
                            <h4 class="text-center">Parrupu Usili</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={potato} alt="logo" />
                            <h4 class="text-center">Potato Fry</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={rasam} alt="logo" />
                            <h4 class="text-center">Rasam</h4>
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={aviyal} alt="logo" />
                            <h4 class="text-center">Aviyal</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={palpaayasam} alt="logo" />
                            <h4 class="text-center">Paal Payasam</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={bagalabath} alt="logo" />
                            <h4 class="text-center">Bagalabath</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={chips} alt="logo" />
                            <h4 class="text-center">Chips</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={elannerpayasam} alt="logo" />
                            <h4 class="text-center">Elaneer Payasam</h4>
                        </div>
                        <div class="col-md-2">
                            <img class="img-fluid rounded img-width" src={icecream} alt="logo" />
                            <h4 class="text-center">Ice Cream</h4>
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
