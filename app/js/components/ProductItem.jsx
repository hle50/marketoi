var React = require('react');

var ProductItem = React.createClass({

        render: function () {
            return (<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3"
                         style={{"padding": "5px !important"}}>
                    <div onClick={this.props.openModal} className="store-item hidden-xs hidden-sm">
                        <div className="store-item-image">

                            <img src={this.props.url} alt="" height="480" className="img-responsive"/>

                        </div>
                        <div className="store-item-info clearfix" style={{"font-size": "12px", "height": "120px"}}>
                            <div>

                                <p className="product-name">
                                    <strong>{this.props.name}</strong>
                                </p>

                            </div>
                            <div className="clearfix">
                                <span className="container-of-amount">
                                    <a href="#" className="text-muted">{this.props.amount} {this.props.unit}</a>
                                </span>
                                <span className="container-of-amount">
                                    <a href="#" className="text-muted">{this.props.label}</a>
                                </span>
                                <span className="store-item-price themed-color-dark">{this.props.price}</span>
                            </div>
                        </div>
                    </div>
                <div  className="col-xs-12 hidden-lg hidden-md item-border">
                     <div className="col-xs-2">
                         <img src={this.props.url} alt="" width="50px" className=""/>
                     </div>
                    <div className="col-xs-8">
                        <span className="product-name">
                            <strong>{this.props.name}</strong>
                        </span>
                         <span className="container-of-amount">
                                    <a href="#" className="text-muted">{this.props.amount} {this.props.unit}</a>
                                </span>
                                <span className="container-of-amount">
                                    <a href="#" className="text-muted">{this.props.label}</a>
                                </span>
                        <span className="store-item-price themed-color-dark">{this.props.price}</span>
                    </div>
                    <div className="col-xs-2">
                        <button className="btn btn-sm btn-default add-to-cart-btn">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                </div>
            );
        }
    })
    ;
module.exports = ProductItem;