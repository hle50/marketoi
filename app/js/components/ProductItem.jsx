var React = require('react');

var ProductItem = React.createClass({
  
    render: function () {
        return ( <div className="col-sm-6 col-md-4 col-lg-3" data-toggle="animation-appear" style={{"padding": "5px !important"}} data-animation-className="animation-fadeInQuick" data-element-offset="-100">
                                    <div className="store-item" data-action="openProductModalDetails">
                                        <div className="store-item-image">
                                            <a href="#">
                                                <img  alt="" height="480" className="img-responsive" />
                                            </a>
                                        </div>
                                        <div className="store-item-info clearfix" style={{"font-size": "12px", "height": "120px"}}>
                                            <div>
                                                <a href="#">
                                                    <p className="product-name">
                                                        <strong>{this.props.name}</strong>
                                                    </p>
                                                </a>
                                            </div>
                                            <div className="clearfix">
                                                <span className="container-of-amount"><a href="#" className="text-muted">{this.props.amount}  {this.props.unit}</a></span>
                                                <span className="container-of-amount"><a href="#" className="text-muted">{this.props.label}</a></span>
                                                <span className="store-item-price themed-color-dark">{this.props.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        );
    }
});
module.exports = ProductItem;