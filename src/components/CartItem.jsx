import React,{useEffect,useContext} from 'react'
import { Card ,Row,Col,Image, Button} from 'react-bootstrap'
import ShopContext from '../context/ShopContext'
import { useTranslation } from 'react-i18next';
function CartItem(props) {
    const {billedProduct} = props
    const { t, i18n } = useTranslation();
    const {addToCart,deleteCart} = useContext(ShopContext)
    useEffect(()=>{

        console.log("from Cart" +billedProduct)

    },[])




  return (
    <Card style={{maxWidth:"700px",minWidth:"200px",margin:"10px"}}>
        <Card.Body>
            <Row>
                <Col xs="12" sm={billedProduct.imageUrl===""?"12":"6"}>
                <Image fluid rounded src={billedProduct.imageUrl}style={{height:"15rem",width:"100%"}}></Image>
                </Col>
                <Col>
                <div className='pt-2' style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <p className='App'><b>{billedProduct.productname}</b></p>
                <p className='App'>{billedProduct.productdescription}</p>
                <p className='App' style={{color:"green"}}>{billedProduct.productprice+ t('omr')}</p>
                <p className='App'>{t('quantity')+billedProduct.quantity}</p>
                <Row>
                    <Col>
                <Button variant='outline-dark' onClick={()=>(addToCart(billedProduct.storageref))}>{t('add')}</Button>
                </Col>
                <Col>
                <Button variant='outline-dark' onClick={()=>(deleteCart(billedProduct.storageref))}>{t('less')}</Button>
                </Col>
                </Row>
                </div>
                </Col>
             </Row>   
        </Card.Body>
    </Card>
  )
}

export default CartItem