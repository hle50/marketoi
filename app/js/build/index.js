var React = require('react');
var Header = require('./Header');
var Aside = require('./Aside');
var Search = require('./Search');
var Cart = require('./Cart');
var ProductGrid = require('./ProductGrid');
var InfiniteScroll = require('./InfiniteScroll');
var _ = require('underscore');
var App = React.createClass({displayName: "App",

    offset: 0,
    limit: 20,
    getInitialState: function () {
        return {
            listProduct: [],
            searchKey: ''

        };
    },

    doSearch: function (searchStr) {
        console.log(searchStr);
        this.offset = 0;
        this.setState({
            searchKey: searchStr
        });
        return _.debounce($.ajax({
            url: "http://catalogue.marketoi.com/index.php/api/Front/products",
            data: $.param({
                user_id: null,
                limit: this.limit,
                offset: this.offset,
                time_illico: 1458598834653,
                search: searchStr
            }),
            dataType: 'json',
            cache: false,
            success: function (data) {
                if (data.status === "true") {
                    this.setState({listProduct: data.result});
                    this.setState({isLoading: false});
                    this.offset += this.limit;
                }

            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        }), 100);
    },

    getData: function () {
        var self = this;
        return $.ajax({
            url: "http://catalogue.marketoi.com/index.php/api/Front/products",
            data: $.param({
                user_id: null,
                device_id: '5xJpgutpmDvhCsFMQ',
                limit: this.limit,
                offset: this.offset,
                time_illico: 1458598834653,
                search: self.state.searchKey
            }),
            dataType: 'json',
            cache: false,
            success: function (data) {
                if (data.status === "true") {
                    var current = this.state.listProduct;
                    current.push.apply(current, data.result);
                    this.setState({listProduct: current});
                    this.setState({isLoading: false});
                    this.offset += this.limit;
                }

            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    componentWillMount: function () {
        this.getData();
    },

    render: function () {
        return (  React.createElement("div", null, 
                React.createElement(Header, null), 
                React.createElement(Search, {handleSearch: this.doSearch}), 
                React.createElement("section", {className: "site-content site-section"}, 
                    React.createElement("div", {className: "container"}, 
                        React.createElement("div", {className: "row"}, 
                            React.createElement(Aside, null), 
                            React.createElement(InfiniteScroll, {listProduct: this.state.listProduct, 
                                            fetchDataCallback: this.getData, 
                                            delegate: React.createElement(ProductGrid, {listProduct: this.state.listProduct})}), 

                            React.createElement(Cart, null)
                        )
                    )
                )
            )
        );
    }
});
React.render(React.createElement(App, null), document.getElementById('page-container'));
