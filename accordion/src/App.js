import React from "react";
import Counter from "./Counter/Counter";
import Accordion from "./Accordion/Accordion";
import ColorSlider from "./ColorSlider/ColorSlider";
import Product from "./Product/Product";
import "./App.css";
import ListTest from "./Product/ListTest";

class App extends React.Component {
  state = {
    products: [
      {
        _id: "5cfdbd",
        price: 200,
        name: "flor 1",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Nelumno_nucifera_open_flower_-_botanic_garden_adelaide2.jpg"
      },
      {
        _id: "5cfdb4",
        price: 400,
        name: "flor 3",
        img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
      },
      {
        _id: "5cfdbe",
        price: 300,
        name: "flor 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Nelumno_nucifera_open_flower_-_botanic_garden_adelaide2.jpg"
      },
      {
        _id: "5cfdb3",
        price: 50,
        name: "flor 4",
        img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
      }
    ]
  };

  removeProduct() {
    let newState = {
      ...this.state
    };

    newState.products.pop();

    this.setState(newState);
  }

  addProduct() {
    let newState = {
      ...this.state
    };

    newState.products.push({
      price: 20,
      name: "vitaminas henche"
    });

    this.setState(newState);
  }

  sortProducts() {
    let newState = {
      ...this.state
    };

    newState.products.sort((a, b) => a.name.localeCompare(b.name));

    this.setState(newState);
  }

  sortProductsByPrice(method) {
    let newState = {
      ...this.state
    };

    newState.products.sort((a, b) => {
      if (a.price > b.price) return method === "asc" ? 1 : -1;
      else return method === "asc" ? -1 : 1;
    });

    this.setState(newState);
  }

  deleteProduct(productID) {
    console.log(`Hi! I am the container of all products`)
    console.log(`I am gonna delete the id ${productID}`)
    
    let newState = {...this.state}
    let filteredProducts = newState.products.filter((product) => product._id !== productID)

    newState.products = filteredProducts

    this.setState(newState)
  }

  render() {
    return (
      <section className="main">

        {/* <ListTest></ListTest>
        <ListTest></ListTest>
        <ListTest></ListTest>
        <ListTest></ListTest> */}

        
        <nav>
          <button onClick={() => this.addProduct()}>Add product</button>
          <button onClick={() => this.removeProduct()}>Remove product</button>
          <button onClick={() => this.sortProducts()}>Sort products</button>
          <button onClick={() => this.sortProductsByPrice("asc")}>Price asc</button>
          <button onClick={() => this.sortProductsByPrice("des")}>Price desc</button>
        </nav>
        <div className="product-grid">
          {this.state.products.map(product => (
            <Product clickToDelete={() => this.deleteProduct(product._id)} key={product._id} img={product.img} price={product.price} name={product.name}></Product>
          ))}
        </div>

        {/* <ColorSlider></ColorSlider>
        <ColorSlider></ColorSlider>
        <ColorSlider></ColorSlider> */}

        {/* <Accordion>
          <img src="https://images.unsplash.com/photo-1558521958-0a228e77e984?ixlib=rb-1.2.1&w=1000&q=80" height="100"/>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Autem quam asperiores distinctio. Beatae.</p>
        </Accordion>
        <Accordion>
          <p>Otro2</p>
          <p>Otro3 lorem lorem lorem</p>
          <p>Otro4 lorem lorem</p>
        </Accordion> */}

        {/* <Counter buttonName="Button 1"></Counter>
        <Counter buttonName="Button 2"></Counter> */}
      </section>
    );
  }
}

export default App;
