import {Button, Card} from "react-bootstrap";
import {FormatCurrency} from "../utilities/FormatCurrency";

export function StoreItem({id, name, price, imgUrl}) {

    const quantity = 0

    return <Card className="h-100">
        <Card.Img variant="top"
                  src={imgUrl} height="200px"
                  style={{objectFit: "cover"}} />

        <Card.Body className="d-flex-column">
            <Card.Title className="d-flex
            justify-content-space-between align-items-baseline
            mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{FormatCurrency(price)}</span>

            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? <Button className="w-100">+ Add To Cart</Button>
                    // : null}
                    : <div className="d-flex align-items-center flex-column" style={{gap: ".5 rem"}}>

                        <div className="d-flex align-items-center justify-content-center" style={{gap: ".5 rem"}}>

                           <Button>-</Button>
                            <div>
                            <span className="fs-3">{quantity}</span> in cart
                            </div>
                           <Button>+</Button>
                        </div>

                        <Button variant="danger" size="sm">Remove</Button>



                    </div>}

            </div>

        </Card.Body>
    </Card>
}