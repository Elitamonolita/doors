import React, {Component} from "react";
import ProductList from "../product-list/product-list";
import "../services/services";
import ProductMenu from "../product-menu/product-menu";
import "./product-details.css";

export default class ProductDetails extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        const {swapiService} = this.props;
        swapiService.getProduct().then((data) => {
            this.setState({
                data
            });
        })
    }
    render() {
        const {data} = this.state;
        const content = data ? <ProductList productData={data}></ProductList> : null;
        const product = data ? <ProductMenu></ProductMenu> : null;
        return (
            <div>
                {product}
                {content}
            </div>
        )
    }
}