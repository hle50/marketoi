var React = require('react');

var ProductItem = React.createClass({displayName: "ProductItem",
  
    render: function () {
        return ( React.createElement("div", {className: "col-sm-6 col-md-4 col-lg-3", "data-toggle": "animation-appear", style: {"padding": "5px !important"}, "data-animation-className": "animation-fadeInQuick", "data-element-offset": "-100"}, 
                                    React.createElement("div", {className: "store-item", "data-action": "openProductModalDetails"}, 
                                        React.createElement("div", {className: "store-item-image"}, 
                                            React.createElement("a", {href: "#"}, 
                                                React.createElement("img", {alt: "", height: "480", className: "img-responsive"})
                                            )
                                        ), 
                                        React.createElement("div", {className: "store-item-info clearfix", style: {"font-size": "12px", "height": "120px"}}, 
                                            React.createElement("div", null, 
                                                React.createElement("a", {href: "#"}, 
                                                    React.createElement("p", {className: "product-name"}, 
                                                        React.createElement("strong", null, this.props.name)
                                                    )
                                                )
                                            ), 
                                            React.createElement("div", {className: "clearfix"}, 
                                                React.createElement("span", {className: "container-of-amount"}, React.createElement("a", {href: "#", className: "text-muted"}, this.props.amount, "  ", this.props.unit)), 
                                                React.createElement("span", {className: "container-of-amount"}, React.createElement("a", {href: "#", className: "text-muted"}, this.props.label)), 
                                                React.createElement("span", {className: "store-item-price themed-color-dark"}, this.props.price)
                                            )
                                        )
                                    )
                                )
        );
    }
});
module.exports = ProductItem;