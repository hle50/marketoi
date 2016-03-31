var React = require('react');

var Header = React.createClass({
        
    render: function () {
        return (
                    <header>
            <div>
                <div className="col-xs-12 col-md-12 header-bar-section">
                    <a href="/shoppingCart" className="pull-right cartIconHeader">
                        <i className="shopping-cart-icon header"></i>
                        <span className="label label-primary label-indicator top-right-number-notification
 animation-floating cartItemsCount">0</span>
                    </a>
                    <nav className="site-navigation-bar">
                        <a href="javascript:void(0)" className="btn btn-default site-menu-toggle visible-xs visible-sm">
                            <i className="fa fa-bars"></i>
                        </a>
                        <ul className="site-nav">
                            <li className="visible-xs visible-sm">
                                <a href="javascript:void(0)" className="site-menu-toggle text-center">
                                    <i className="fa fa-times"></i>
                                </a>
                            </li>
                            <li><a href="/about">About</a></li>
                            <li><a href="#">Support: 0126.449.2309</a></li>
                            <li><a href="http://apply.marketoi.com">Become a shopper</a></li>

                            <li><a href="/sign-in" className="log-in-option">Log In</a></li>
                            <li><a href="/sign-up" className="log-in-option">Sign Up</a></li>

                        </ul>
                    </nav>
                    <a className="site-logo"><span className="main-logo"></span></a>
                </div>
            </div>
        </header>
        );
    }
});
module.exports = Header;