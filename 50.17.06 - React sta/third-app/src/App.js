import productsJson from "../src/data/products.json";
import contactsJson from "../src/data/contacts.json";
import Contact from "./components/Contact";
import Product from "./components/Product";
import "./App.css";

function App() {
  return (
    <div className="App">
      {productsJson.map(
        (product) => (
          <Product {...product} />
        )
        // not to use//
        // <Product product= {product} />
        // props = {product: { {'name': productname}}}
        // return <Product {...product} />;
        // return <Product name={product.name} price={product.price} category={product.category} />;
        // props = {'name': productname}
      )}
      {/* {contactsJson.map(contact=><Contact {...contact}>} */}
      {/* {contactsJson.map((contact) => (
        <div>
          <Contact {...contact} />
          <Contact />
        </div>
      ))} */}
    </div>
  );
}

export default App;
