var React = require('react');
var ProductItem = require('./ProductItem')
var ProductGrid= React.createClass({
    
     getInitialState:function(){
        return {
            listProduct: []
            };
     },
    
     componentWillMount: function() {
        $.ajax({
          url: "http://catalogue.marketoi.com/index.php/api/Front/products?user_id=null&device_id=5xJpgutpmDvhCsFMQ&limit=20&offset=20&time_illico=1458598834653",
          dataType: 'json',
          cache: false,
          success: function(data) {
            this.setState({listProduct: data.result});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
      }, 
    
    render: function () {

        return(<div className="customGrid">
        {this.state.listProduct.map(function(pro) {
            return  <ProductItem amount={pro.amount} unit={pro.unit} price={pro.price} label={pro.shops_label}  url={pro.icon_path} name={pro.name} ></ProductItem>;
        })}
      </div>)
    }
});
module.exports = ProductGrid;