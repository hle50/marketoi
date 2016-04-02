var React = require('react');
var ProductItem = require('./ProductItem');
var Modal = require('react-bootstrap/lib/Modal');
var ProductGrid = React.createClass({
    getInitialState: function(){
        return {
            showModal: false,
            product: {},
        };
    },

    close:function(){
        this.setState({ showModal: false });
    },

    open:function(pro){
        console.log(pro);
        this.setState({ showModal: true });
        this.setState({ product: pro });
    },
    render: function () {
        return (

            <div className="col-md-7 col-lg-7">
                <Modal show={this.state.showModal} onHide={this.close}>

                    <Modal.Body>
                        <form id="frm_addToCart">
                            <div className="row modal_border_product">
                                <div className="col-md-6">
                                    <div className="store-item-image">
                                        <a href="#"><img src={this.state.product.icon_path} alt="" className="img-responsive"/></a>
                                    </div>
                                    <div className="store-item-info clearfix">
                                        <a href="#">

                                            <p className="product-name">{this.state.product.brand}</p>

                                            <p className="product-name"><strong>{this.state.product.name}</strong></p>
                                            <p className="product-name">{this.state.product.unit}</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="store-item-price themed-color-dark pull-right">
                                            <div className="col-md-12">{this.state.product.price}</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="pull-right">
                                            <label className="col-md-3 col-xs-6 control-label product_qty" for="product_qty">Qty</label>
                                            <div className="col-md-9 col-xs-6">
                                                <input type="number" id="product_qty" name="product_qty" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p className="product-description"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="col-md-12">
                                        <div className="col-md-8" style={{"margin-bottom": "10px"}}>
                                            <ul className="list-shop-item">

                                                <li>
                                                    <div>
                                                        <span><img src={this.state.product.thumb} style={{"width": "50px", "height": "50px"}}/></span>
                                                        <span>{this.state.product.brand}</span>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="col-md-4" style={{"margin-bottom": "10px"}}>
                                        </div>
                                    </div>

                                    <div style={{"color": "#BD0000"}}>Sorry at the moment, no shopper can take your order. You can add to cart
                                        for later
                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div className="col-md-12">
                                        <div>
                                            <button type="button" className="btn btn-lg btn-block btn-default addToCartBtn" data-loading-text="Adding..." style={{"height": "86px"}}>Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
                <div className="row store-items">
                    {this.props.listProduct.map(function(pro) {
                        return(
                        <ProductItem openModal={this.open.bind(this, pro)} amount={pro.amount} unit={pro.unit} price={pro.price} label={pro.shops_label}
                                     url={pro.icon_path} name={pro.name} />
                            );
                        }, this)}
                </div>


            </div>

        );
    }
});
module.exports = ProductGrid;