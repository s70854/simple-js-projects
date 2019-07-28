import React, {Component} from 'react';
import {addItem, deleteItem, removeItem} from '../actions/cartActions';
import {connect} from 'react-redux';

class Product extends Component {
    state = {}
    render() {
        return <div>

            <button className=" btn btn-secondary btn-sm m-2"
                onClick={
                    () => this.props.addItem(this.props.id)
            }>+</button>
            <button className=" btn btn-secondary btn-sm m-2"
                onClick={
                    () => this.props.deleteItem(this.props.id)
            }>-</button>
            <button className=" btn btn-info btn-sm m-2"
                onClick={
                    () => this.props.removeItem(this.props.id)
            }>Delete</button>
            <span className="badge badge-dark"> {
                this.props.products[this.props.id].name
            }</span>
            <span className={
                this.getBadgeClasses(this.props.id)
            }> {
                this.formatCount(this.props.id)
            }</span>
        </div>
    }
    formatCount(id) { // Object destructuring
        const {count} = this.props.products[id]
        return count <= 0 ? 'Zero' : count
    }

    getBadgeClasses(id) {
        let classes = "badge m-2 badge-"
        classes += this.props.products[id].count > 0 ? "success" : "warning"
        return classes
    }
}

const mapStateToProps = (state) => {
    const {products} = state;
    return {products};
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (id) => {
            dispatch(addItem(id));
        },
        deleteItem: (id) => {
            dispatch(deleteItem(id));
        },
        removeItem: (id) => {
            dispatch(removeItem(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
