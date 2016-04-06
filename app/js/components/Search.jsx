var React = require('react');

var Search = React.createClass({

    getInitialState: function(){
        return { searchString: '' };
    },
    handleChange: function(event){
       this.setState({searchString: event.target.value});
        this.props.handleSearch(this.state.searchString);
    },

    render: function () {
        return (
            <section className="site-section site-section-light site-section-top">
            <div className="container text-center" style={{"padding-right": "0px"}}>
                <div className="mobile-bar search-mobile-section">
                    <div className="pull-right">
                        <ul id="iconRightUL">
                            <li className="shopinfo">
                                <div className="shopper-icon-section">
                                    <i className="top-deliver-icon"></i>
                                </div>
                                <div style={{"font-size": "12px"}} className="text-logo">
                                    <span className="shoppernumber">  1 shopper</span>
                                </div>
                            </li>
                            <li className="location">
                                <i className="glyphicon glyphicon-map-marker"></i>
                                <span>D1</span>
                            </li>
                            <li className="time">
                                <i className="glyphicon glyphicon-time"></i>
                                <span>lllico</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pull-left search-group-section">
                        <div className="input-group input-group-lg search-group">
                            <span className="hiddenSearch"></span>
                            <input onChange={this.handleChange} value={this.state.searchString} type="text" id="productSearchBar" className="form-control productSearchBar productSearchBarWidth" placeholder="Search products" />
                        </div>
                    </div>
                </div>
                <div className="desktop-only search-desktop-section">
                
                    <div className="pull-right">
                        <ul id="iconRightUL">
                            <li className="shopinfo">
                                <div className="shopper-icon-section">
                                    <i className="top-deliver-icon"></i>
                                </div>
                                <div style={{"height": "13px"}} className="text-logo">

                                    <span className="shoppernumber"> 1 shopper</span>

                                </div>
                            </li>   
                            <li className="location">
                                <i className="glyphicon glyphicon-map-marker"></i>
                                <span>D1</span>
                            </li>
                            <li className="time">
                                <i className="glyphicon glyphicon-time"></i>
                                <span>lllico</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pull-left search-group-section">
                        <div className="input-group input-group-lg search-group">
                            <span className="hiddenSearch"></span>
                            <input onChange={this.handleChange} value={this.state.searchString} type="text" id="productSearchBar" className="form-control productSearchBar" placeholder="Search products.."/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
});
module.exports = Search;