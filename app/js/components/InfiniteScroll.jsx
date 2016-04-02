var React = require('React');
var InfiniteScroll = React.createClass({
    isLoading: false,
    componentWillMount: function () {
        this.props.fetchDataCallback();
        window.removeEventListener('scroll', this.handleScroll);
    },
    loadData: function () {
        var self = this;
        this.props.fetchDataCallback().then(function () {
            self.isLoading = false;
        });
    },
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    },
    handleScroll: function (e) {
        if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight) && !this.isLoading) {
            this.loadData();
            this.isLoading = true;
        }
    },

    getDisplay: function () {
        return (
            <div>{this.props.delegate}</div>
        )
    },
    render: function () {
        return (
            <div>
                {this.getDisplay()}
            </div>
        )
    }
});

module.exports = InfiniteScroll;
/**
 * Created by hoale on 4/1/2016.
 */
