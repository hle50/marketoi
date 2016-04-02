var React = require('react');

var ProductItem = React.createClass({

        render: function () {
            return (<div className="col-sm-6 col-md-4 col-lg-3"
                         style={{"padding": "5px !important"}}>
                    <div onClick={this.props.openModal} className="store-item">
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
                </div>
            );
        }
    })
    ;
module.exports = ProductItem;