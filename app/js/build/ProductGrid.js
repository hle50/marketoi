var React = require('react');
var ProductItem = require('./ProductItem');
var ProductGrid = React.createClass({displayName: "ProductGrid",
    render: function () {
        var loading = this.props.isLoading;
        console.log(loading);
        var length = this.props.listProduct.length > 0;
        return (
            React.createElement("div", {className: "col-md-7 col-lg-7"}, 
                loading && React.createElement("div", {className: "text-center"}, " ", React.createElement("img", {src: "img/loading.svg"}), " "), 


                React.createElement("div", {className: "row store-items"}, 
                    this.props.listProduct.map(function(pro) {
                        return(
                        React.createElement(ProductItem, {amount: pro.amount, unit: pro.unit, price: pro.price, label: pro.shops_label, 
                                     url: pro.icon_path, name: pro.name}, " ")
                            );
                        })
                ), 

                React.createElement("div", {className: "text-center"}, " ", React.createElement("img", {src: "img/loading.svg"}), " ")
            )
        );

    }
});
module.exports = ProductGrid;