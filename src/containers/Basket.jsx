import React, {Component} from 'react';
import NavBar from '../components/navBar';
import {connect} from 'react-redux';
import {resetAll} from '../actions/cartActions';
import Product from './Product';
class Basket extends Component {
    render() {
        return (
            <div>
                <NavBar total={
                    this.countThemAll()
                }/>
                <button className="btn btn-warning btn-sm m-2" type="button"
                    onClick={
                        this.props.resetAll
                }>Reset</button>
                {
                Object.keys(this.props.products).map(id => <Product key={id}
                    id={id}/>)
            } </div>
        );
    }
    countThemAll() {
        return Object.values(this.props.products).map(p => p.count).reduce((a, b) => (a + b), 0);
    }

}

/*
NOTES:
From redux global state only itrested field {products} is choosen and mapped to props.products
*/

const mapStateToProps = (state) => {
    const {products} = state;
    return {products};
}
/*
NOTES:
The props.resetAll function call triggers a dispatch event.
In this case we pass a resetALL (action) function that returns the action object {type,payload} is passed
to dispatch function
*/
const mapDispatchToProps = (dispatch) => {
    return {
        resetAll: () => {
            dispatch(resetAll());
        }
    };
}

/*
NOTES:
The connect method connect this component to redux global state.
It takes 2 args and returs a function.
The function takes component class as arg and returns an intstrumented Component.
*/

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
