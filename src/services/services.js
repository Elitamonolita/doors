export default class Service {
    _product = [
        {id: 1, name: "12345678914444444444 33333333333333", comments: "1"},
        {id: 1, name: "Название2", comments: "1"},
        {id: 1, name: "Название3", comments: "1"},
        {id: 1, name: "Название4", comments: "1"},
        {id: 1, name: "Название5", comments: "1"},
        {id: 1, name: "Название6", comments: "1"},
        {id: 1, name: "Название6", comments: "1"},
        {id: 1, name: "Название6", comments: "1"},
        {id: 1, name: "Название6", comments: "1"},
        {id: 1, name: "Название6", comments: "1"},
        {id: 1, name: "Название6", comments: "1"},
        {id: 1, name: "Название7", comments: "1"}


    ];
    getProduct = async () => {
        return this._product;
    };
}