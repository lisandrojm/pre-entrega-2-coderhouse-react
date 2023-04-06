import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div className="ListGroup">
      <div className="container d-flex flex-column flex-xl-row justify-content-center align-items-center">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
