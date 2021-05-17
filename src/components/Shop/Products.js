import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [{
  "id": 1,
  "title": "Plate - Foam, Bread And Butter",
  "description": "Nam nulla.",
  "price": 79.23
}, {
  "id": 2,
  "title": "Jameson Irish Whiskey",
  "description": "Quisque porta volutpat erat.",
  "price": 22.7
}, {
  "id": 3,
  "title": "Cabbage - Green",
  "description": "Vivamus tortor. Duis mattis egestas metus.",
  "price": 52.73
}, {
  "id": 4,
  "title": "Rice - Brown",
  "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
  "price": 76.68
}, {
  "id": 5,
  "title": "Bread - Rye",
  "description": "Morbi non lectus.",
  "price": 10.17
}, {
  "id": 6,
  "title": "Soup - Campbells Mac N Cheese",
  "description": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
  "price": 91.84
}, {
  "id": 7,
  "title": "Trout - Smoked",
  "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
  "price": 85.0
}]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(product => 
          
            <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
            id = {product.id}
          />
          
          )}
       
        
      </ul>
    </section>
  );
};

export default Products;
