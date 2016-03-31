var React = require('react');

var Cart = React.createClass({
        
    render: function () {
        return ( 
            <div className="col-md-3 col-lg-3 cart-quick-view">
                        <div id="cartQuickView">
                            <div className="col-md-12 cart-total">
                                <div className="col-md-7">
                                    <h3>0 VND</h3>
                                    <span style={{"display": "block"}}>0 ITEM(S)</span>
                                    <span style={{"display": "block"}}>Service</span>
                                    <span>0 VND</span>
                                </div>
                                <div className="col-md-5">

                                    <span className="mini-cart-button">
          <a href="#" data-action="empty-cart" className="btn btn-sm btn-block btn-default">EMPTY</a>
        </span>
                                    <span className="mini-cart-button">
          <a href="/shoppingCart" className="btn btn-sm btn-block btn-default">VIEW</a>
        </span>
                                    <span className="mini-cart-button">
          <a href="/checkout" className="btn btn-sm btn-block btn-success">CHECKOUT</a>
        </span>

                                </div>
                            </div>
                          
                            <div className="col-md-12 cart-product-list">
                                <div className="table-responsive">
                                    <table className="table table-vcenter table-striped">
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
});
module.exports = Cart;
