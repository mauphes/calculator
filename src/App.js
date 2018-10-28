import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: '',
      name: '',
      price: '',
      discount: null,
      allowDiscount: 0,
    }
  }

  handleChange = (type, e) => {
    this.setState({ [type]: e.target.value });
  };

  onKeyPress = e => {
    const charCode = e.which || e.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57)) e.preventDefault();
  };

  addProduct = () => {
    let { products, name, price } = this.state, error;

    if(!name) error = 'Не указано название продукта';
    else if(!price) error = 'Не указана цена продукта';

    if(error) this.setState({ error });
    else {
      products.push({ name, price: parseInt(price, 10) });
      this.setState({ products, name: '', price: '', error: '' }, this.calcDiscount);
    }
  };

  calcDiscount = () => {
    let { products, allowDiscount } = this.state, discountSum = allowDiscount;
    if(!!allowDiscount && products.length) {
      const prices = products.map(({ price }) => price),
        sum = prices.reduce((num, price) => num + price, 0),
        discountPercent = allowDiscount / sum,
        expensiveProductPrice = Math.max(...prices);
      let flag = false;
      products = products.map(product => {
        const discountPrice = product.price - product.price * discountPercent;
        if (!flag && (product.price === expensiveProductPrice)) {
          product.expensive = true;
          flag = true;
        } else {
          const roundPrice = Math.ceil(discountPrice);
          discountSum += roundPrice;
          product.discountPrice = roundPrice;
        }
        return product;
      });
      for (let i = 0; i < products.length; i++) {
        const el = products[i];
        if (el.expensive) {
          delete el.expensive;
          el.discountPrice = sum > discountSum ? sum - discountSum : 0;
        }
      }
      this.setState({ products });
    }
  };

  render() {
    const { products, name, price, discount, error } = this.state;
    return (
      <div className="App">
        <h2>Добавить продукт</h2>
        <div className="form">
          <div className="field_in_row">
            <label htmlFor="productName">Продукт</label>
            <input type="text" id="productName" value={name} onChange={this.handleChange.bind(this, 'name')}/>
          </div>
          <div className="field_in_row">
            <label htmlFor="productPrice">Цена</label>
            <input type="text" id="productPrice" value={price} onKeyPress={this.onKeyPress} onChange={this.handleChange.bind(this, 'price')}/>
          </div>
          <div className="field_in_row">
            <button onClick={this.addProduct}>Добавить</button>
          </div>
          {error && <div className="error">{error}</div>}
        </div>
        <hr/>
        <h3>Корзина</h3>
        <table>
          <thead>
            <tr>
              <td>Продукт</td>
              <td>Цена</td>
              <td>Цена со скидкой</td>
            </tr>
          </thead>
          <tbody>
          {products.map(({ name, price, discountPrice }, key) =>
            <tr key={key}>
              <td>{name}</td>
              <td>{price}</td>
              <td>{discountPrice}</td>
            </tr>
          )}
          </tbody>
        </table>
        <div className="discountBlock">
          Применить скидку <input type="text" value={discount || ''} onKeyPress={this.onKeyPress} onChange={this.handleChange.bind(this, 'discount')}/> рублей
          &nbsp;<button onClick={() => this.setState({ allowDiscount: parseInt(discount, 10) }, this.calcDiscount)}>Применить</button>
        </div>
      </div>
    );
  }
}

export default App;
