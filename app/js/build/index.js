var React = require('react');
var Header = require('./Header');
var Aside = require('./Aside');
var Search = require('./Search');
var Cart = require('./Cart');
var ProductGrid = require('./ProductGrid');
var App = React.createClass({displayName: "App",

    offset: 0,
    limit: 20,
    getInitialState: function () {
        return {
            listProduct: [],
            isLoading: true
        };
    },
    getData: function () {
        this.setState({isLoading: true});
        $.ajax({
            url: "http://catalogue.marketoi.com/index.php/api/Front/products",
            data: $.param({
                user_id: null,
                device_id: '5xJpgutpmDvhCsFMQ',
                limit: this.limit,
                offset: this.offset,
                time_illico: 1458598834653
            }),
            dataType: 'json',
            cache: false,
            success: function (data) {
                var current = this.state.listProduct;
                current.push.apply(current, data.result);
                this.setState({listProduct: current});
                this.setState({isLoading: false});
                this.offset += this.limit;
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    componentWillMount: function () {
        window.removeEventListener('scroll', this.handleScroll);
        this.getData();
    },
    componentDidMount: function() {
        window.addEventListener('scroll', this.handleScroll);
    },
    handleScroll: function (e) {
        if (window.scrollY + window.innerHeight > this.getDOMNode().scrollHeight - 50) {
            this.getData();
        }
    },
    render: function () {
        return (  React.createElement("div", null, 
                React.createElement(Header, null), 
                React.createElement(Search, null), 
                React.createElement("section", {className: "site-content site-section"}, 
                    React.createElement("div", {className: "container"}, 
                        React.createElement("div", {className: "row"}, 
                            React.createElement(Aside, null), 
                            React.createElement(ProductGrid, {isLoading: this.state.isLoading, 
                                         listProduct: this.state.listProduct}), 
                            React.createElement(Cart, null)
                        )
                    )
                )
            )
        );
    }
});
React.render(React.createElement(App, null), document.getElementById('page-container'));
