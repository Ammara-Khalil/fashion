import "./style.css";

const products = [
  { id: 1, name: "Red Dress", price: "$49", image: "https://via.placeholder.com/200x200?text=Red+Dress" },
  { id: 2, name: "Blue Jeans", price: "$59", image: "https://via.placeholder.com/200x200?text=Blue+Jeans" },
  { id: 3, name: "White Shirt", price: "$29", image: "https://via.placeholder.com/200x200?text=White+Shirt" },
  { id: 4, name: "Leather Jacket", price: "$120", image: "https://via.placeholder.com/200x200?text=Leather+Jacket" },
  { id: 5, name: "Sneakers", price: "$75", image: "https://via.placeholder.com/200x200?text=Sneakers" },
  { id: 6, name: "Handbag", price: "$90", image: "https://via.placeholder.com/200x200?text=Handbag" },
];

function App() {
  return (
    <>
      <header>
        <h1>Fashion Store</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Accessories</a>
        </nav>
      </header>

      <div className="container">
        <h2>Our Products</h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;