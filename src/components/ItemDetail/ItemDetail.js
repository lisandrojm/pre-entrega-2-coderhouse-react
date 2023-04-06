import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <Card style={{ width: '18rem' }} className="m-5">
      <Card.Body>
        <Card.Img variant="top" src={img} className="ps-3 pe-3 pt-3" />
        <div className="d-flex flex-column justify-content-center align-items-start pt-3 pb-2 text-start">
          <div>
            <Card.Title>{name}</Card.Title>
          </div>
          <div>
            <Card.Text>
              <b>Categoría</b> = {category}
            </Card.Text>
          </div>
          <div>
            <Card.Text>
              <b>Descripción</b> = {description}
            </Card.Text>
          </div>
          <div>
            <Card.Text>
              <b>Precio</b> = ${price}
            </Card.Text>
          </div>
        </div>
        <div>
          <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
