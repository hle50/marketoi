var React = require('react');

var Aside = React.createClass({

    render: function () {
        return (  <div className="col-md-2 col-lg-2 home-left-column desktop-only">
                <aside className="sidebar site-block">

                    <div className="sidebar-block" id="categoriesMenuLevel">
                        <ul className="store-menu">
                            <li className="father-departments-icon selection-icon">
                                <span>SELECTIONS</span>
                            </li>

                            <li className="selection-production">
                                <a data-id="1">
                                    <img src="http://catalo.marketoi.com/icones/history.png" className="left-menu-image"
                                         width="20px" alt=""/>
                                    <span className="left-menu-name">History</span>
                                </a>
                            </li>

                            <li className="selection-production">
                                <a data-id="2">
                                    <img src="http://catalo.marketoi.com/icones/new.png" className="left-menu-image"
                                         width="20px" alt=""/>
                                    <span className="left-menu-name">New</span>
                                </a>
                            </li>

                            <li className="selection-production">
                                <a data-id="3">
                                    <img src="http://catalo.marketoi.com/icones/best_seller.png"
                                         className="left-menu-image" width="20px" alt=""/>
                                    <span className="left-menu-name">Best Sellers</span>
                                </a>
                            </li>

                        </ul>
                    </div>


                    <div className="sidebar-block" id="categoriesMenuLevel">
                        <ul className="store-menu">
                            <li className="father-departments-icon">
                                <span>DEPARTMENTS</span>
                            </li>

                            <li>
                                <a href="/cat/1" className="submenu" data-id="1">
                                    <i className="fa fa-angle-right"></i>
                                    <img src="http://catalo.marketoi.com/icones/food.png" className="left-menu-image"
                                         width="20px" alt=""/>
                                    <span className="left-menu-name">food</span>

                                </a>
                                <ul>


                                    <li className="show-product">
                                        <a className="department child" href="/cat/5">
                                            <img src="http://catalo.marketoi.com/icones/snack.png"
                                                 className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">snack</span>
                                            <span>  </span>
                                        </a>
                                    </li>


                                    <li className="show-product">
                                        <a className="department child" href="/cat/10">
                                            <img src="http://catalo.marketoi.com/icones/bakery.png"
                                                 className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">bakery</span>
                                            <span>  </span>
                                        </a>
                                    </li>


                                    <li className="show-product">
                                        <a className="department child" href="/cat/11">
                                            <img src="http://catalo.marketoi.com/icones/meat.png"
                                                 className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">butcher</span>
                                            <span>  </span>
                                        </a>
                                    </li>


                                    <li className="show-product">
                                        <a className="department child" href="/cat/35">
                                            <img src="http://catalo.marketoi.com/icones/gourmet.png"
                                                 className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">gourmet</span>
                                            <span>  </span>
                                        </a>
                                    </li>


                                    <li className="show-product">
                                        <a className="department child" href="/cat/36">
                                            <img src="http://catalo.marketoi.com/icones/condiment.png"
                                                 className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">condiments</span>
                                            <span>  </span>
                                        </a>
                                    </li>


                                    <li>
                                        <a href="/cat/37" data-id="37">
                                            <i className="fa fa-angle-right"></i>
                                            <img src="http://catalo.marketoi.com/icones/basefood.png"
                                                 className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">base food</span>
                                        </a>
                                        <ul>

                                            <li className="show-product">
                                                <a className="department child" href="/cat/41">
                                                    <img src="" className="left-menu-image" width="20px" alt=""/>
                                                    <span className="left-menu-name">instant noodles</span>
                                                    <span></span>
                                                </a>
                                            </li>

                                        </ul>
                                    </li>


                                    <li className="show-product">
                                        <a className="department child" href="/cat/39">
                                            <img src="" className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">creamery</span>
                                            <span>  </span>
                                        </a>
                                    </li>


                                    <li className="show-product">
                                        <a className="department child" href="/cat/40">
                                            <img src="" className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">tea/coffee</span>
                                            <span>  </span>
                                        </a>
                                    </li>


                                </ul>
                            </li>

                            <li>
                                <a href="/cat/2" className="submenu" data-id="2">
                                    <i className="fa fa-angle-right"></i>
                                    <img src="http://catalo.marketoi.com/icones/drink.png" className="left-menu-image"
                                         width="20px" alt=""/>
                                    <span className="left-menu-name">drinks</span>

                                </a>
                                <ul>


                                    <li className="show-product">
                                        <a className="department child" href="/cat/12">
                                            <img src="http://catalo.marketoi.com/icones/soda.png"
                                                 className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">soda</span>
                                            <span>  </span>
                                        </a>
                                    </li>


                                    <li className="show-product">
                                        <a className="department child" href="/cat/13">
                                            <img src="http://catalo.marketoi.com/icones/watermilk.png"
                                                 className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">water/milk</span>
                                            <span>  </span>
                                        </a>
                                    </li>


                                    <li className="show-product">
                                        <a className="department child" href="/cat/15">
                                            <img src="http://catalo.marketoi.com/icones/beer.png"
                                                 className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">beer</span>
                                            <span>  </span>
                                        </a>
                                    </li>


                                    <li className="show-product">
                                        <a className="department child" href="/cat/16">
                                            <img src="http://catalo.marketoi.com/icones/wine.png"
                                                 className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">wine</span>
                                            <span>  </span>
                                        </a>
                                    </li>


                                    <li className="show-product">
                                        <a className="department child" href="/cat/17">
                                            <img src="http://catalo.marketoi.com/icones/spirit.png"
                                                 className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">spirits</span>
                                            <span>  </span>
                                        </a>
                                    </li>


                                    <li className="show-product">
                                        <a className="department child" href="/cat/38">
                                            <img src="" className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">juice</span>
                                            <span>  </span>
                                        </a>
                                    </li>


                                </ul>
                            </li>

                            <li>
                                <a href="/cat/3" className="submenu" data-id="3">
                                    <i className="fa fa-angle-right"></i>
                                    <img src="http://catalo.marketoi.com/icones/housecare.png"
                                         className="left-menu-image" width="20px" alt=""/>
                                    <span className="left-menu-name">home essentials</span>

                                </a>
                                <ul>


                                    <li>
                                        <a href="/cat/18" data-id="18">
                                            <i className="fa fa-angle-right"></i>
                                            <img src="http://catalo.marketoi.com/icones/bathroom.png"
                                                 className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">bathroom</span>
                                        </a>
                                        <ul>

                                            <li className="show-product">
                                                <a className="department child" href="/cat/20">
                                                    <img src="" className="left-menu-image" width="20px" alt=""/>
                                                    <span className="left-menu-name">toilet paper</span>
                                                    <span></span>
                                                </a>
                                            </li>

                                            <li className="show-product">
                                                <a className="department child" href="/cat/25">
                                                    <img src="" className="left-menu-image" width="20px" alt=""/>
                                                    <span className="left-menu-name">mouth care</span>
                                                    <span></span>
                                                </a>
                                            </li>

                                            <li className="show-product">
                                                <a className="department child" href="/cat/26">
                                                    <img src="" className="left-menu-image" width="20px" alt=""/>
                                                    <span className="left-menu-name">diaper</span>
                                                    <span></span>
                                                </a>
                                            </li>

                                            <li className="show-product">
                                                <a className="department child" href="/cat/31">
                                                    <img src="" className="left-menu-image" width="20px" alt=""/>
                                                    <span className="left-menu-name">tampons</span>
                                                    <span></span>
                                                </a>
                                            </li>

                                        </ul>
                                    </li>


                                    <li>
                                        <a href="/cat/19" data-id="19">
                                            <i className="fa fa-angle-right"></i>
                                            <img src="http://catalo.marketoi.com/icones/kitchen.png"
                                                 className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">kitchen</span>
                                        </a>
                                        <ul>

                                            <li className="show-product">
                                                <a className="department child" href="/cat/21">
                                                    <img src="" className="left-menu-image" width="20px" alt=""/>
                                                    <span className="left-menu-name">napkin</span>
                                                    <span></span>
                                                </a>
                                            </li>

                                            <li className="show-product">
                                                <a className="department child" href="/cat/22">
                                                    <img src="" className="left-menu-image" width="20px" alt=""/>
                                                    <span className="left-menu-name">sponge</span>
                                                    <span></span>
                                                </a>
                                            </li>

                                            <li className="show-product">
                                                <a className="department child" href="/cat/29">
                                                    <img src="" className="left-menu-image" width="20px" alt=""/>
                                                    <span className="left-menu-name">washing powder</span>
                                                    <span></span>
                                                </a>
                                            </li>

                                            <li className="show-product">
                                                <a className="department child" href="/cat/30">
                                                    <img src="" className="left-menu-image" width="20px" alt=""/>
                                                    <span className="left-menu-name">dishwasher product</span>
                                                    <span></span>
                                                </a>
                                            </li>

                                        </ul>
                                    </li>


                                    <li>
                                        <a href="/cat/27" data-id="27">
                                            <i className="fa fa-angle-right"></i>
                                            <img src="http://catalo.marketoi.com/icones/clothecare.png"
                                                 className="left-menu-image" width="20px" alt=""/>
                                            <span className="left-menu-name">clothes care</span>
                                        </a>
                                        <ul>

                                            <li className="show-product">
                                                <a className="department child" href="/cat/28">
                                                    <img src="" className="left-menu-image" width="20px" alt=""/>
                                                    <span className="left-menu-name">fabric soft</span>
                                                    <span></span>
                                                </a>
                                            </li>

                                        </ul>
                                    </li>


                                </ul>
                            </li>

                            <li>
                                <a href="/cat/32" className="submenu" data-id="32">
                                    <i className="fa fa-angle-right"></i>
                                    <img src="http://catalo.marketoi.com/icones/streetfood.png"
                                         className="left-menu-image" width="20px" alt=""/>
                                    <span className="left-menu-name">restaurant</span>

                                </a>
                                <ul>

                                </ul>
                            </li>

                        </ul>
                    </div>

                    <div className="sidebar-block">
                        <ul className="store-menu shop-groups-menu">
                            <li className="father-market-icon">
                                <span>SHOPS</span>
                            </li>


                            <li>
                                <a href="#" className="submenu" data-id="0">
                                    <i className="fa fa-angle-right"></i>
                                    <span className="left-menu-name">other</span>
                                </a>
                                <ul>

                                    <li>
                                        <a href="/shop/10" className="shop-name-select" data-shop-id="10">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/b46b863400fa83cdc3b6d1fe24fef097_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Work Saigon</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/12" className="shop-name-select" data-shop-id="12">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/6c385a6fde9b5d7f2c55210be3006fff_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Ru Pho Bar</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/14" className="shop-name-select" data-shop-id="14">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/e4176e453d59f92d1973dfd966db9e43_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">wrap and roll</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/17" className="shop-name-select" data-shop-id="17">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/67d065c2885541e1fab76df037e30f02_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Mc donalds</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/23" className="shop-name-select" data-shop-id="23">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/a5335b33f53112803f6eab9b1185ac8c_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Mon hue</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/25" className="shop-name-select" data-shop-id="25">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/db6c4df6639cfe0b633107ba128832f3_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Subway</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/26" className="shop-name-select" data-shop-id="26">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/0d359ffb1010e4676aa8e2620b6c7780_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Pizza 4 Ps</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/28" className="shop-name-select" data-shop-id="28">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201510/639a4b58b22df9acf91fe20ac4c38f3c6b08faf2_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Pizza Hut</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/32" className="shop-name-select" data-shop-id="32">
                                            <img className="left-menu-image" src="" width="80" alt=""/>
                                            <span className="left-menu-name">Five Boys Number One</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/34" className="shop-name-select" data-shop-id="34">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/3467aea805be0e761b198fe58e73a018_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Phuc Long</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/35" className="shop-name-select" data-shop-id="35">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201510/8664c51865087c819c63ce16980b96da058196e2_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Mexi-Burgers</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/37" className="shop-name-select" data-shop-id="37">
                                            <img className="left-menu-image" src="" width="80" alt=""/>
                                            <span className="left-menu-name">Charcoal Shop</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/38" className="shop-name-select" data-shop-id="38">
                                            <img className="left-menu-image" src="" width="80" alt=""/>
                                            <span className="left-menu-name">Charcoal Shop</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/40" className="shop-name-select" data-shop-id="40">
                                            <img className="left-menu-image" src="" width="80" alt=""/>
                                            <span className="left-menu-name">Ice Shop</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/41" className="shop-name-select" data-shop-id="41">
                                            <img className="left-menu-image" src="" width="80" alt=""/>
                                            <span className="left-menu-name">Ice Shop</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/48" className="shop-name-select" data-shop-id="48">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201510/09a4933e4466ccdd1fa06d5efa7e879936c8a201_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Burger King</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/56" className="shop-name-select" data-shop-id="56">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201510/7dfd0980536ac9e153253c2e7226c005458ffc3a_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">BiBo Mart</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/58" className="shop-name-select" data-shop-id="58">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201510/c04af6a7de6d823e5a7220ebd45bc7ad408341c0_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Finewines</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/59" className="shop-name-select" data-shop-id="59">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/67d065c2885541e1fab76df037e30f02_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Mc donalds</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/63" className="shop-name-select" data-shop-id="63">
                                            <img className="left-menu-image" src="" width="80" alt=""/>
                                            <span className="left-menu-name">MarketOi</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/64" className="shop-name-select" data-shop-id="64">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/db4e17cc17eca7cfad9364fd7a3c021d_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Zakka Mart</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/73" className="shop-name-select" data-shop-id="73">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201511/af72495982f43e54714b55b9b4b6e42155e4b1fd_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Akuruhi Supermarket</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/76" className="shop-name-select" data-shop-id="76">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/0b34ad4bf0a87359379e33a3f6856e8b_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Popeyes</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/80" className="shop-name-select" data-shop-id="80">
                                            <img className="left-menu-image"
                                                 src="http://104.199.130.119/uploads/shops_img/201512/e9b7fd81160aa913c90b68c0a767f9bf4ee8ee05.jpg"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Vitorio</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/83" className="shop-name-select" data-shop-id="83">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/ab1f90c0f81bdf61522ab9825008945b_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Tay Ho</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/84" className="shop-name-select" data-shop-id="84">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/09ec99e903ebd448bbe7211ffafae312d033d93f_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Koicha</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/85" className="shop-name-select" data-shop-id="85">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/4bc74cf1fc76ea09b8e5a3e8411f9c5c4d39f974_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Box 4Ps</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/87" className="shop-name-select" data-shop-id="87">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/00e53d55b68292df7d6aadf7125df3c8f6512855_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Pop Fries</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/89" className="shop-name-select" data-shop-id="89">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/7930e7099caa49c568ace490d5b5c7a6cc09e74b_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Tigon Flower</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/90" className="shop-name-select" data-shop-id="90">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/5b44967313e28075cf3b76b73b98405b2f45ad21_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Hoa Yeu Thuong</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/91" className="shop-name-select" data-shop-id="91">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/be323df1e3be20623174155fa594d0ae3428a251_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Coop Mart</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/92" className="shop-name-select" data-shop-id="92">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/be323df1e3be20623174155fa594d0ae3428a251_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Coop Mart</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/97" className="shop-name-select" data-shop-id="97">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201602/95bd4f59d0269292da7fafd32d722433f47a7d4d_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Vins Descombe</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/98" className="shop-name-select" data-shop-id="98">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201602/c0de2e659af2bd6c688a6986ddef4ea8ddf7b705_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Panam</span>
                                        </a>
                                    </li>

                                </ul>
                            </li>


                            <li>
                                <a href="#" className="submenu" data-id="1">
                                    <i className="fa fa-angle-right"></i>
                                    <span className="left-menu-name">convenient</span>
                                </a>
                                <ul>

                                    <li>
                                        <a href="/shop/13" className="shop-name-select" data-shop-id="13">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201510/287eb140fbeec9ee5f09af197721e95546358555_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Family Mart</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/24" className="shop-name-select" data-shop-id="24">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/128f05b42c9c64f6684181b1c4a942eb_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Phuong Ha</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/46" className="shop-name-select" data-shop-id="46">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/26fe3a5687e6c2457de6f99ea5d2f1bc_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Satrafoods</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/61" className="shop-name-select" data-shop-id="61">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201510/e208a8b1154a5f4c449a14a6dbffd429d4117541_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Circle K</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/62" className="shop-name-select" data-shop-id="62">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201510/287eb140fbeec9ee5f09af197721e95546358555_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Family Mart</span>
                                        </a>
                                    </li>

                                </ul>
                            </li>


                            <li>
                                <a href="#" className="submenu" data-id="3">
                                    <i className="fa fa-angle-right"></i>
                                    <span className="left-menu-name">organic</span>
                                </a>
                                <ul>

                                    <li>
                                        <a href="/shop/30" className="shop-name-select" data-shop-id="30">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/56cc82f9852998dc5a06db6edd1878be_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Organica Farm</span>
                                        </a>
                                    </li>

                                </ul>
                            </li>


                            <li>
                                <a href="#" className="submenu" data-id="4">
                                    <i className="fa fa-angle-right"></i>
                                    <span className="left-menu-name">bakery</span>
                                </a>
                                <ul>

                                    <li>
                                        <a href="/shop/8" className="shop-name-select" data-shop-id="8">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201601/4889276994be9cae41eed1fa14737fee_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Une journee a Paris</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/11" className="shop-name-select" data-shop-id="11">
                                            <img className="left-menu-image" src="" width="80" alt=""/>
                                            <span className="left-menu-name">Pat a Chou</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/16" className="shop-name-select" data-shop-id="16">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201510/d437d00b137faec245a847befb9792830a6fd280_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Fly cupcake</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/21" className="shop-name-select" data-shop-id="21">
                                            <img className="left-menu-image"
                                                 src="http://catalogue.marketoi.com/uploads/shops_img/201510/f329478eacf681d170eef0fdb66975e7a6a48844_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Dunkin Donuts</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/shop/27" className="shop-name-select" data-shop-id="27">
                                            <img className="left-menu-image"
                                                 src="http://104.199.130.119/uploads/shops_img/201512/e090f8b10316c6055dccd08a63c798f9_thumb.png"
                                                 width="80" alt=""/>
                                            <span className="left-menu-name">Mochi Sweets</span>
                                        </a>
                                    </li>

                                </ul>
                            </li>


                        </ul>
                    </div>
                </aside>
            </div>

        );
    }
});
module.exports = Aside;