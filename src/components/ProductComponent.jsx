import React,{useEffect,useContext} from 'react'
import { Card,Button } from 'react-bootstrap'
import ShopContext from '../context/ShopContext'
import { useTranslation } from 'react-i18next';

function ProductComponent(props) {
    const product = props.product
    const { t, i18n } = useTranslation();
    const key = props.index
    useEffect(()=>{
       
    },[])
    const {addToCart} = useContext(ShopContext)
  return (
    <Card style={{ width: '15rem' }} key="white">
      <Card.Img variant="top" style={{height:"14rem"}} src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.productname}</Card.Title>
        <Card.Subtitle style={{color:"#3cb371"}}>{product.productprice +" " + t('omr')}</Card.Subtitle>
        <Card.Text>
          {product.productdescription}
        </Card.Text>
        <Button variant="primary" onClick={()=>{addToCart(product.storageref)}}>{t('addToKart')}</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductComponent