import React from 'react'
import './assets/css/styles.css'
class Home extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault();
      const emailInput = event.target.elements['email'];
      if (!emailInput.checkValidity()) {
        alert("Please enter a valid email address.");
      } else {
        alert("Thank you for subscribing! We will reach out to you soon.");
      }
    }

render() {
  return (
    <>
    <div className='hhome'>
    <header class="indexheader" id="header">
      <nav class="indexnav indexcontainer">
          <a href="#" class="nav__logo">
               BeautyBlend
          </a>

          <div class="nav__menu" id="nav-menu">
              <ul class="nav__list">
                  <li class="nav__item">
                      <a href="#home" class="nav__link active-link"></a>
                  </li>
                  <li class="nav__item">
                      <a href="#featured" class="nav__link">Featured</a>
                  </li>
                  <li class="nav__item">
                      <a href="#products" class="nav__link">Products</a>
                  </li>
                  <li class="nav__item">
                      <a href="#new" class="nav__link">New</a>
                  </li>
                  <li class="nav__item">
                      <a href="./userlogin" class="nav__link">Login/SignUp</a>
                  </li>
              </ul>

              <div class="nav__close" id="nav-close">
                  <i class='bx bx-x' ></i>
              </div>
          </div>

          <div class="nav__btns">

              

              <div class="nav__shop" id="cart-shop">
                  <a href="./adminlogin" class=" nav__link"><h2 class=""><i class='bx bx-male' ></i></h2></a>
              </div>

              <div class="nav__toggle" id="nav-toggle">
                  <i class='bx bx-grid-alt' ></i>
              </div>
          </div>
      </nav>
  </header>


  <main class="indexmain">

      <section class="home" id="home">
          <div class="home__container indexcontainer indexgrid">
              
              <div class="home__img-bg">
                  
                  <img src="http://localhost:5000/uploads/myImage-1713757921796.jpg" alt="hgjhjgh" class="home__img"/>
              
              </div>
           
              <div class="home__social">
                  <a href="https://www.facebook.com/" target="_blank" class="home__social-link">
                      Facebook
                  </a>
                  <a href="https://twitter.com/" target="_blank" class="home__social-link">
                      Twitter
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" class="home__social-link">
                      Instagram
                  </a>
              </div>

              <div class="home__data">
                  <h1 class=" home__title">DISCOVER  <br/>BEAUTY PRODUCTS</h1>
                  <p class="home__description">
                    Explore the latest collection of new beauty products of this year
                        .
                  </p>
                  

                  <div class="home__btns">
                      <a href="#products" class="button button--gray button--small">
                          Discover
                      </a>

                  </div>
              </div>
          </div>
      </section>


      <section class="featured indexsection indexcontainer" id="featured">
          <h2 class="section__title">
              Featured
          </h2>

          <div class="featured__container indexgrid">
              <article class="featured__card">
                  <span class="featured__tag">Sale</span>

                  <img src="http://localhost:5000/uploads/myImage-1713500934920.jpg" alt="" class="featured__img"/>

                  <div class="featured__data">
                      <h3 class="featured__title">Aqualogica SPF 50 Sunscreen</h3>
                      <span class="featured__price">Rs.395</span>
                  </div>

                  <button class="button featured__button">ADD TO CART</button>
              </article>

              <article class="featured__card">
                  <span class="featured__tag">Sale</span>

                  <img src="http://localhost:5000/uploads/myImage-1713500951043.jpg" alt="" class="featured__img"/>

                  <div class="featured__data">
                      <h3 class="featured__title">Plum Niacinamide Serum</h3>
                      <span class="featured__price">Rs.584</span>
                  </div>

                  <button class="button featured__button">ADD TO CART</button>
              </article>

              <article class="featured__card">
                  <span class="featured__tag">Sale</span>

                  <img src="http://localhost:5000/uploads/myImage-1713500974211.jpg" alt="" class="featured__img"/>

                  <div class="featured__data">
                      <h3 class="featured__title">Maybelline Colossal Liner </h3>
                      <span class="featured__price">Rs.379</span>
                  </div>

                  <button class="button featured__button">ADD TO CART</button>
              </article>
          </div>
      </section>



      <section class="products indexsection indexcontainer" id="products">
          <h2 class=" section__title">
              Products
          </h2>

          <div class="products__container indexgrid">
              <article class="products__card">
                  <img src="http://localhost:5000/uploads/myImage-1713500974211.jpg" alt="" class="products__img"/>

                  <h3 class="products__title">Maybelline Colossal Liner</h3>
                  <span class="products__price">RS.379</span>

                  <button class="products__button">
                      <i class='bx bx-shopping-bag'></i>
                  </button>
              </article>

              <article class="products__card">
                  <img src="http://localhost:5000/uploads/myImage-1713500934920.jpg" alt="" class="products__img"/>

                  <h3 class="products__title">Aqualogica SPF 50 Sunscreen</h3>
                  <span class="products__price">Rs.395</span>

                  <button class="products__button">
                      <i class='bx bx-shopping-bag'></i>
                  </button>
              </article>

              <article class="products__card">
                  <img src="http://localhost:5000/uploads/myImage-1713500941092.jpg" alt="" class="products__img"/>

                  <h3 class="products__title">The Face Shop Cleanser</h3>
                  <span class="products__price">Rs.572</span>

                  <button class="products__button">
                      <i class='bx bx-shopping-bag'></i>
                  </button>
              </article>

              <article class="products__card">
                  <img src="http://localhost:5000/uploads/myImage-1713500946053.jpg" alt="" class="products__img"/>

                  <h3 class="products__title">5 Shade Glitter Eye Shadow Pallete</h3>
                  <span class="products__price">Rs.1150</span>

                  <button class="products__button">
                      <i class='bx bx-shopping-bag'></i>
                  </button>
              </article>

              <article class="products__card">
                  <img src="http://localhost:5000/uploads/myImage-1713500951043.jpg" alt="" class="products__img"/>

                  <h3 class="products__title">Plum Niacinamide Serum</h3>
                  <span class="products__price">Rs.584</span>

                  <button class="products__button">
                      <i class='bx bx-shopping-bag'></i>
                  </button>
              </article>

              <article class="products__card">
                  <img src="http://localhost:5000/uploads/myImage-1713500969263.jpg" alt="" class="products__img"/>

                  <h3 class="products__title">Minimalist Niacinamide Face Serum</h3>
                  <span class="products__price">Rs.599</span>

                  <button class="products__button">
                      <i class='bx bx-shopping-bag'></i>
                  </button>
              </article>

              <article class="products__card">
                  <img src="http://localhost:5000/uploads/myImage-1713500979529.jpg" alt="" class="products__img"/>

                  <h3 class="products__title">Rom&nd Bestsellers Tints Combo</h3>
                  <span class="products__price">Rs.1780</span>

                  <button class="products__button">
                      <i class='bx bx-shopping-bag'></i>
                  </button>
              </article>

              <article class="products__card">
                  <img src="http://localhost:5000/uploads/myImage-1713500990777.jpg" alt="" class="products__img"/>

                  <h3 class="products__title">Dr. Sheth's Ceramide & Vitamin C Oil Free Moisturiser</h3>
                  <span class="products__price">Rs.303</span>

                  <button class="products__button">
                      <i class='bx bx-shopping-bag'></i>
                  </button>
              </article>

              <article class="products__card">
                  <img src="http://localhost:5000/uploads/myImage-1713500985244.jpg" alt="" class="products__img"/>

                  <h3 class="products__title">Minimalist SPF 50 Sunscreen</h3>
                  <span class="products__price">Rs.399</span>

                  <button class="products__button">
                      <i class='bx bx-shopping-bag'></i>
                  </button>
              </article>

              <article class="products__card">
                  <img src="http://localhost:5000/uploads/myImage-1713500996266.jpg" alt="" class="products__img"/>

                  <h3 class="products__title">The Derma Co 1% Hyaluronic Sunscreen Aqua Gel</h3>
                  <span class="products__price">Rs.582</span>

                  <button class="products__button">
                      <i class='bx bx-shopping-bag'></i>
                  </button>
              </article>
          </div>
      </section>
      <section class="new indexsection indexcontainer" id="new">
          <h2 class=" section__title">
              New Arrivals
          </h2>
          
          <div class="new__container">
              <div class="swiper new-swiper">
                  <div class="swiper-wrapper">
                      <article class="new__card swiper-slide">
                          <span class="new__tag">New</span>
  
                          <img src="http://localhost:5000/uploads/myImage-1713500990777.jpg" alt="" class="new__img"/>
                          <div class="new__data">
                              <h3 class="new__title">Dr. Sheth's Ceramide & Vitamin C Oil Free Moisturiser</h3>
                              <span class="new__price">Rs.303</span>
                          </div>
                          <button class="button new__button">ADD TO CART</button>
                      </article>

                      <article class="new__card swiper-slide">
                          <span class="new__tag">New</span>
                          <img src="http://localhost:5000/uploads/myImage-1713500946053.jpg" alt="" class="new__img"/>
                          <div class="new__data">
                              <h3 class="new__title">5 Shade Glitter Eye Shadow Pallete</h3>
                              <span class="new__price">$1150</span>
                          </div>
                          <button class="button new__button">ADD TO CART</button>
                      </article>

                      <article class="new__card swiper-slide">
                          <span class="new__tag">New</span>
  
                          <img src="http://localhost:5000/uploads/myImage-1713500979529.jpg" alt="" class="new__img"/>
                          <div class="new__data">
                              <h3 class="new__title">Rom&nd Bestsellers Tints Combo</h3>
                              <span class="new__price">Rs.1780</span>
                          </div>
                          <button class="button new__button">ADD TO CART</button>
                      </article>

                      </div>
              </div>
          </div>
      </section>

      <section class="newsletter indexsection indexcontainer">
          <div class="newsletter__bg indexgrid">
              <div>
                  <h2 class="newsletter__title">Subscribe Our <br/> Newsletter</h2>
                  <p class="newsletter__description">
                      Don't miss out on your discounts. Subscribe to our email 
                      newsletter to get the best offers, discounts, coupons, 
                      gifts and much more.
                  </p>
              </div>

              <form id="myForm" class="newsletter__subscribe" onSubmit={this.handleSubmit}>
                  <input name='email' type="email" placeholder="Enter your email" class="newsletter__input"/>
                  <button class="button submit">
                      SUBSCRIBE
                  </button>
                  
              </form>
        
          </div>
      </section>
  </main>

  <footer class="footer indexsection">
      <div class="footer__container indexcontainer indexgrid">
          <div class="footer__content">
              <h3 class="footer__title">Our information</h3>

              <ul class="footer__list">
                  <li>C-14 Sonia road</li>
                  <li>Varanasi 221010</li>
                  <li>+91 9555542110</li>
              </ul>
          </div>
          <div class="footer__content">
              <h3 class="footer__title">About Us</h3>

              <ul class="footer__links">
                  <li>
                      <a href="./supportcenter" class="footer__link">Support Center</a>
                  </li>
                  <li>
                      <a href="./supportcenter" class="footer__link">Customer Support</a>
                  </li>
                  <li>
                      <a href="./supportcenter" class="footer__link">Customer Feedback</a>
                  </li>
                  <li>
                      <a href="#" class="footer__link">Copy Right</a>
                  </li>
              </ul>
          </div>

          <div class="footer__content">
              <h3 class="footer__title">Social</h3>

              <ul class="footer__social">
                  <a href="https://www.facebook.com/" target="_blank" class="footer__social-link">
                      <i class='bx bxl-facebook'></i>
                  </a>

                  <a href="https://twitter.com/" target="_blank" class="footer__social-link">
                      <i class='bx bxl-twitter' ></i>
                  </a>

                  <a href="https://www.instagram.com/" target="_blank" class="footer__social-link">
                      <i class='bx bxl-instagram' ></i>
                  </a>
              </ul>
          </div>
      </div>

      <span class="footer__copy">&#169; All rights reserved</span>
  </footer>


  <a href="#" class="scrollup" id="scroll-up"> 
      <i class='bx bx-up-arrow-alt scrollup__icon' ></i>
  </a>
  </div>
    </>
  )
}

}
export default Home;