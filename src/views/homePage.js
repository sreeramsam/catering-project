import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/home/catering-edit.png';
import cateringHome from '../assets/home/catering-alt.jpg';
import ownerimg from '../assets/home/owner-img.png';
import southInd from '../assets/home/south.png';
import northInd from '../assets/home/northIndianMenuc45a7386.png';
import cateringSer from '../assets/home/cateringSer.png';
import buffet from '../assets/home/buffet69c63d86.png';
import choclate from '../assets/home/choclate.png';
import cottonCandy from '../assets/home/cottonCandy1c7c3449.png';
import popCorn from '../assets/home/popcorn.png';
import fruitsCurving from '../assets/home/fruits.png';
import kolam from '../assets/home/kolam-edited.png';
import nadhaswaram from '../assets/home/nadaswaram-players-coimbatore-jpg-500x500.png';
import kasiYatra from '../assets/home/kasiYatrae38567de.png';
import icecreamstall from '../assets/home/icecream-stall-edited.png';
import bangles from '../assets/home/bangles7d5a30f1.png';
import thamboolam from '../assets/home/thamboolam.png';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function HomePage() {
    var textInput = React.createRef();
    function sendEmail(e) {
        console.log(textInput.current.value);
        e.preventDefault();
        if (textInput.current.value.length == 10){
            emailjs.sendForm("gmail", "catering-project", e.target, "user_aeXg1UgvWHM97UoFzX0rL")       
            .then((result) => {
                console.log(result.text);                
                if (result.text=="OK"){
                  toast.success('Mail Sent Successfully', {                
                      position: toast.POSITION.BOTTOM_LEFT, autoClose:8000})
                }
            }, (error) => {
                console.log(error.text);
            });    
            e.target.reset()       
        }
        else{
            toast.error('Enter a valid mobile number', {                
                position: toast.POSITION.BOTTOM_LEFT, autoClose:8000})
        }
        
    }
    return (
        <div>
            <div class="container-fluid container-scroll">
                <div class="row sreeram">
                    <div class="col-md-12">
                        <nav class="navbar navbar-expand-sm nav-color navbar-dark fixed-top">
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#collapsibleNavbar">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                <span class="navbar-brand">
                                    <img id="img-1" class="img-fluid nav-logo-width" src={logo} alt="logo" />
                                </span>
                                <ul class="navbar-nav ">
                                    <li class="nav-item nav-space d-flex">
                                        <i class='fa fa-leaf mt-2 mr-2 nav-font-style'></i> <a
                                            class="a-class nav-text-color" href="#home">Home</a>
                                    </li>
                                    <li class="nav-item nav-space d-flex">
                                        <i class='fa fa-leaf mt-2 mr-2 nav-font-style'></i> <a
                                            class="a-class nav-text-color" href="#about">About</a>
                                    </li>
                                    <li class="nav-item nav-space d-flex">
                                        <i class='fa fa-leaf mt-2 mr-2 nav-font-style'></i> <a
                                            class="a-class nav-text-color" href="#menu">Menu</a>
                                    </li>
                                    <li class="nav-item nav-space d-flex">
                                        <i class='fa fa-leaf mt-2 mr-2 nav-font-style'></i> <a
                                            class="a-class nav-text-color" href="#services">Services</a>
                                    </li>
                                    <li class="nav-item nav-space d-flex">
                                        <i class='fa fa-leaf mt-2 mr-2 nav-font-style'></i> <a
                                            class="a-class nav-text-color" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <section id="home">
                    <h4 class="text-center pt-3"> ஸ்ரீ மஹா பெரியவாள் துணை 🙏</h4>
                    <h4 class="text-center pt-2">We have the glory beginning in catering services </h4>
                    <h4 class="pt-2 pl-3"><i class='fa fa-leaf mt-2 mr-2 nav-font-style'></i>Home</h4>
                    <div class="row pt-1">
                        <div class="col-md-6 home-text-indent">
                            <p class="pl-2">
                                Sri AANJANEYA Marriage Catering Service are marriage caterers of repute, specialised in
                                Brahmin
                                marriages.
                             </p>
                            <p class="pl-2">
                                We very well understand that a marriage is always a special and important moment in a
                                person’s
                                life.
                                So, we pay utmost care to every aspect to make the occasion not only a grand event but also
                                a
                                memorable one.
                            </p>
                            <p class="pl-2">
                                Sri AANJANEYA Marriage Catering Service is the leading marriage catering services in Chennai and
                                Tamil Nadu with two decades of experience and has successfully executed many
                                marriages
                                and other functions across Tamil Nadu, Sri AANJANEYA Catering have established itself as one
                                of
                                the reputed
                                marriage
                                caterers in Tamil Nadu. We are committed to making the marriage of your family a cherishing
                                experience.
                            </p>
                            <p class="pl-2">
                                It has been an exciting journey serving special cuisine from around the globe to
                                celebrities,
                                senior
                                executives of renowned organizations and global Corporate giants.
                            </p>
                        </div>
                        <div class="col-md-4 offset-md-1">
                            <h4 class="text-center">Over 25 years of excellence</h4>
                            <div class="row">
                                <img class="img-fluid catering-alt-width" src={cateringHome} alt="logo" />
                            </div>
                            <h4 class="text-center">Since 1995</h4>
                        </div>
                    </div>
                </section>
                <section id="about">
                    <h4 class="pt-2 pl-3"><i class='fa fa-leaf mt-2 mr-2 nav-font-style'></i>About</h4>
                    <div class="row pt-1">
                        <div class="col-md-6 about-text-indent">
                            <div class="row" id="ownerimg">
                                <img class="img-fluid mx-auto d-block own-img" src={ownerimg} alt="logo" />
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="pl-2" id="start">
                                        Kudandhai <b>K. RAAMAMOORTHY Iyer</b> is a founder & Emperor in food preparation has
                                excellence in his
                                service over 25 Years. Be it a simple marriage or a grand one, we are always committed
                                to
                                ensure
                                complete customer
                                satisfaction at every stage of our service. Our services are always based on your
                                requirements and
                                budget. With decades of experience behind, Sri AANJANEYA marriage catering service don’t
                                simply
                                prepare for
                                the food for the most important occasion of your family – The Marriage - but also act as
                                a
                                consultant by suggesting the menu according to the season, need and the budget.
                            </p>
                                    <p class="pl-2">
                                        Sri AANJANEYA marriage catering service have the right infrastructure in terms of expert
                                        chefs,
                                        fleet of vehicles to transport and an excellent network to mobilize resources besides
                                        experienced
                                        people to serve and handle your needs.
                                        We also undertake catering services for Upanayanams, Sasthiapthapoorthy and
                                        Sathabishekam
                                        functions,
                                        besides marriages. We also cater to family functions on a contract basis and undertake
                                        orders
                                        for a
                                        minimum of 50 persons and door delivery the food.
                            </p>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="embed-responsive embed-responsive-16by9 mt-5 pt-5">
                                <iframe width="100%" src="https://www.youtube.com/embed/uvVvfU7w-XA" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="menu">
                    <h4 class="pt-2 pl-3"><i class='fa fa-leaf mt-2 mr-2 nav-font-style'></i>Menu</h4>
                    <div class="row pt-1 p-3">
                        <div class="col-md-3 offset-md-2 mb-3">
                            <h4 class="text-center">South Indian Menu</h4>
                            <div class="row">

                                <img class="img-fluid img-width" src={southInd} alt="logo" />

                            </div>
                            <div class="row pt-3 justify-content-center">
                                <Link to="/southindian-items" >
                                    <button type="button" class="btn btn-success">View Details</button>
                                </Link>
                            </div>
                        </div>
                        <div class="col-md-3 offset-md-2 mb-3">
                            <h4 class="text-center">North Indian Menu</h4>
                            <div class="row">
                                <img class="img-fluid img-width" src={northInd} alt="logo" />
                            </div>
                            <div class="row pt-3 justify-content-center">
                                <Link to="/northindian-items" >
                                    <button type="button" class="btn btn-success">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services">
                    <h4 class="pt-2 pl-3"><i class='fa fa-leaf mt-2 mr-2 nav-font-style'></i>Services
                    </h4>
                    <div class="row pt-3">
                        <div class="col-md-3">
                            <img class="img-fluid rounded img-width" src={cateringSer} alt="logo" />
                            <h4 class="text-center">Catering</h4>
                        </div>
                        <div class="col-md-3">
                            <img class="img-fluid rounded img-width" src={buffet} alt="logo" />
                            <h4 class="text-center">Buffet</h4>
                        </div>
                        <div class="col-md-3">
                            <img class="img-fluid rounded img-width" src={choclate} alt="logo" />
                            <h4 class="text-center">Chocolate Fountain</h4>
                        </div>
                        <div class="col-md-3">
                            <img class="img-fluid rounded img-width" src={cottonCandy} alt="logo" />
                            <h4 class="text-center">Cotton Candy</h4>
                        </div>
                    </div>
                    <div class="row pt-3">

                        <div class="col-md-3">
                            <img class="img-fluid rounded img-width" src={popCorn} alt="logo" />
                            <h4 class="text-center">Pop Corn</h4>
                        </div>
                        <div class="col-md-3">
                            <img class="img-fluid rounded img-width" src={fruitsCurving} alt="logo" />
                            <h4 class="text-center">Fruits Carving</h4>
                        </div>
                        <div class="col-md-3">
                            <img class="img-fluid rounded img-width" src={kolam} alt="logo" />
                            <h4 class="text-center">Kolam</h4>
                        </div>
                        <div class="col-md-3">
                            <img class="img-fluid rounded img-width" src={nadhaswaram} alt="logo" />
                            <h4 class="text-center">Nadhaswaram</h4>
                        </div>
                    </div>

                    <div class="row pt-3">
                        <div class="col-md-3">
                            <img class="img-fluid rounded img-width" src={kasiYatra}
                                alt="logo" />
                            <h4 class="text-center">Kasi Yatra</h4>
                        </div>
                        <div class="col-md-3">
                            <img class="img-fluid rounded img-width" src={icecreamstall}
                                alt="logo" />
                            <h4 class="text-center">IceCream Stall</h4>
                        </div>

                        <div class="col-md-3">
                            <img class="img-fluid rounded img-width" src={bangles}
                                alt="logo" />
                            <h4 class="text-center">Bangles</h4>
                        </div>

                        <div class="col-md-3">
                            <img class="img-fluid rounded img-width" src={thamboolam} alt="logo" />
                            <h4 class="text-center">Thamboolam Bags</h4>
                        </div>
                    </div>
                </section>
                <section id="contact">

                    <h4 class="pt-2 pl-3"><i class='fa fa-leaf mt-2 mr-2 nav-font-style'></i>Contact</h4>
                    <div class="row">
                        <div class="col-md-1"></div>
                    </div>

                    <div class="row pt-2">
                        <div class="col-md-1"></div>
                        <div class="col-md-4 mt-2">

                            <form class="mt-1" role="form" onSubmit={sendEmail}>
                                <h4 class="pt-2 ml-2 text-nowrap mt-2">Customer Contact Form:</h4>
                                <div class="form-group">
                                    <label for="purchasedate" class="font-weight-bold">Name:</label><br />
                                    <input id="name" class="form-control" name="customerName" id="customerName" required />
                                </div>
                                <div class="form-group">
                                    <label for="purchase" class="font-weight-bold">Email Id:</label><br />
                                    <input type="email" id="email" name="customerEmail" id="customerEmail" class="form-control" required />
                                </div>

                                <div class="form-group">
                                    <label for="productName" class="font-weight-bold">Contact No:</label><br />
                                    <input type="number" ref={textInput} id="contact" class="form-control" name="contact" required />
                                </div>

                                <div class="form-group">
                                    <label for="specialDiscount" class="font-weight-bold">Describe Your Requirements in
                                Detail:</label><br />
                                    <textarea class="form-control" name="message" id="message" rows="3"></textarea>
                                </div>
                                <div class="form-group ml-5">
                                    <input type="submit" class="btn btn-danger text-nowrap btn-style"/>                             
                                </div>

                            </form>

                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-6">
                            <div class="mapouter mt-3">
                                <div class="gmap_canvas mapouter gmap_canvas"><iframe width="100%" height="400" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=vembuli%20amman%20temple%20madipakkam&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
                                        href="https://yt2.org">youtube to mp3</a><br />

                                </div>
                            </div>
                            <br />
                            <h4 class="pt-2 pl-5 ml-4">Contact Address:</h4>
                            <address class="font-weight-bold">
                                No. 1/153-C, Vembuli Amman Koil Street,<br />
                        (Opp to Vembuli Amman Koil),<br />
                        Madipakkam,<br />
                        Chennai - 600091.<br />
                        Mobile Number: 9841452224/9003803310.<br />
                            </address>
                        </div>
                    </div>
                </section>
            </div>
            <footer class="footer-bg-color text-center text-lg-start mt-5">
                <div class="text-center p-3 text-nowrap footer-color">
                    © AANJANEYA Caterers 1995. All Rights Reserved.
                 </div>
            </footer>
        </div>
    )
}


