export default class Service {
    _product = [
        {id: 1, name: "Название", comments: "1"},


    ];
    getProduct = async () => {
        return this._product;
    };
}