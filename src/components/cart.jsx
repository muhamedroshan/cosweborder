import React,{useEffect,useContext,useState} from 'react'
import ShopContext from '../context/ShopContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { Container , Button,Badge} from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
function Cart() {
  const [subTotal,setSubToTal] = useState(0)
  const {cartList,badgeCount} = useContext(ShopContext)
  let [enabled , setenabled] = useState(true)
  const { t, i18n } = useTranslation();

  useEffect(()=>{
      document.body.style.backgroundColor = "#616161"
      return()=>{document.body.style.backgroundColor = null}
  },[])

  useEffect(()=>{
    setSubToTal(0)
    for (let index = 0; index < cartList.length; index++) {
      const element = cartList[index];
      setSubToTal(pre=>(new Number( element.productprice) + pre))
    }
    setenabled ( cartList.length === 0 ? false : true)
  },[cartList])
  return (
    <div >
      <Container  fluid style={{backgroundColor : "#212529",display:"flex",flexDirection:"column",alignItems:"center"}} className="p-2 position-fixed fixed-bottom">
        <p style={{color:"gray"}}>{t('subtotal')} <b>{subTotal.toFixed(3)}</b>{t('omr')}</p>
        <Link to={enabled?"/form":"/cosweborder/"} style={{width:"70%" ,maxWidth:"500px"}}><Button disabled={!enabled} style={{width:"100%"}} variant='warning'>{t('proceed')}{badgeCount>0 ?<Badge bg='danger' className='ms-1'>{badgeCount}</Badge>:<></>}</Button></Link>
      </Container>
      <div style={{display:"flex" , justifyContent:"center"}}>
    <div style={{display:"flex",flexDirection:"column",alignItems:"stretch",gap:".1rem",paddingBottom:"6rem",maxWidth:"700px"}}>
      {cartList.map((CartProduct,key)=>
        <CartItem billedProduct={CartProduct} key={key}/>
      )}
    </div>
    </div>
    </div>
  )
}

export default Cart