var React = require('react');
var ProductItem = require('./ProductItem');
var ProductGrid = React.createClass({
    render: function () {
        var loading = this.props.isLoading;
        console.log(loading);
        var length = this.props.listProduct.length > 0;
        return (
            <div className="col-md-7 col-lg-7">
                {loading && <div className="text-center"> <img src="img/loading.svg"/> </div>}


                <div className="row store-items">
                    {this.props.listProduct.map(function(pro) {
                        return(
                        <ProductItem amount={pro.amount} unit={pro.unit} price={pro.price} label={pro.shops_label}
                                     url={pro.icon_path} name={pro.name}> </ProductItem>
                            );
                        })}
                </div>

                <div className="text-center"> <img src="img/loading.svg"/> </div>
            </div>
        );

    }
});
module.exports = ProductGrid;