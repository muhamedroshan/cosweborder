import React ,{useEffect ,useState ,useContext}from 'react'
import { Container, Tab,Tabs, Button,Alert,Spinner, Image} from 'react-bootstrap'
import {  Link,useNavigate } from 'react-router-dom'
import FormDriveThru from './FormDriveThru'
import FormFromRest from './FormFromRest'
import FormHomeDelivery from './FormHomeDelivery'
import ShopContext from '../context/ShopContext'
import  {BellSimple,HouseSimple,Car,Table} from 'phosphor-react'
import {db} from "../firebaseConf"
import {  getDoc,doc,Timestamp,setDoc,updateDoc,increment} from "firebase/firestore"
import { useTranslation } from 'react-i18next';
import tableImg from '../images/table.png'

function Form() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const {
        MyRest,
        cartList,
        key,
        setKey,
        orderRef,
        orderNote,
  } = useContext(ShopContext)
  const [messageError,setMessageError] = useState("")
  const [progress,setProgress] = useState(false)
    useEffect(()=>{
      switch (key) {
        case "Delivery":
          setMessageError(t('errorMsgDl'))
          break;
        case "Drive":
          setMessageError(t('errorMsgDr'))
          break;
        case "Inside":
          setMessageError(t('errorMsgIn'))
          break;
        default:
          break;
      }
    },[key])
    useEffect(()=>{
        document.body.style.backgroundColor = "#616161"
        return()=>{document.body.style.backgroundColor = null}
    },[])
    //Handle Order
    async function newOrder(){
      const dbRef = doc(db,"restaurants",MyRest.uid)
      const invId = await getDoc(dbRef).then((Data)=>{
          return(Data.data().billno)
      })
      const dbRefInv = doc(db,"restaurants",MyRest.uid,"orders",`${invId}.0`)
      const cartNormal = cartList.map((value)=>{
        return ({
          imageUrl:value.imageUrl,
          productcategory:value.productcategory,
          productdescription:value.productdescription,
          productname:value.productname,
          productprice:Number( value.productprice),
          unitprice:Number(value.unitprice),
          producttax :Number(value.producttax),
          storageref:value.storageref,
          quantity:Number(value.quantity)
        })
      })
      const docData = {
        confirmationStatus:false,
        id:invId,
        listOrederedProducts:cartNormal,
        orderNote:orderNote,
        orderRef:orderRef,
        orderType:key,
        timeStamp:Timestamp.now()
      }
      const success = await setDoc(dbRefInv, docData).then((e)=>{
        return(true)
      }).catch((e)=>{
        return(false)
      })
      //increase inv id
      if (success){
        await updateDoc(dbRef,{
          billno:increment(1)
        })
      }
      return(success ? Promise.resolve(success) : Promise.reject(success))
    }
    //Handle Order Click 
    async function handleOreder(){
      if (cartList.length === 0) {
        setMessageError(t('errorMsgCt'))
        setShow(true)
      }else{
      if (orderRef==="") {
        setShow(true)
      }else{
        setProgress(true)
        const confirmed = await newOrder()
        if (confirmed) {
          setProgress(false)
          navigateToSuccess()
        }else{
          setMessageError(t('errorMsgOd'))
          setShow(true)
          setProgress(false)
        }
        
      }
    }
    }
    //handle navigat to success
    function navigateToSuccess(){
      navigate('/success')
    }
  return (
    <div style={{overflowY: 'scroll',paddingBottom:"10rem"}}>
    { show ? 
      <Alert className='m-3' variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{t('alertHd')}</Alert.Heading>
        <p>
          {messageError}
        </p>
      </Alert> : <></>
    
  }
    <Container  fluid style={{backgroundColor : "#212529",display:"flex",flexDirection:"column",alignItems:"center"}} className="p-2 position-fixed fixed-bottom">
        <p style={{color:"grey" , textAlign:"center"}}>{t('orderNote')}</p>
        <Link to="" style={{width:"70%" ,maxWidth:"500px"}}>
          <Button style={{width:"100%"}} onClick={()=>{handleOreder()}} variant='warning' disabled={progress?true:false}>
          {progress?
            <>
              <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"/>
              {t('ordering')}
            </> :
            <>{t('sendOrder')} <BellSimple size={20}/></>
          }
          </Button></Link>
      </Container>
    <div style={{margin:"1rem" }}>
        <Container fluid className='p-3 mb-5' style={{backgroundColor:"white", borderRadius:".5rem",maxWidth:"70rem"}} >
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3" 
    >
      <Tab eventKey="Delivery" title={t('homeDelivery')}>
        <Container style={{display:"flex",justifyContent:"center"}}><HouseSimple size={55}/></Container>
        <FormHomeDelivery></FormHomeDelivery>
      </Tab>
      <Tab eventKey="Drive" title={t('driveThru')}>
        <Container style={{display:"flex",justifyContent:"center"}}><Car size={55}/></Container>
        <FormDriveThru></FormDriveThru>
      </Tab>
      <Tab eventKey="Inside" title={t('insideRest')}>
        <Container style={{display:"flex",justifyContent:"center"}}><Image src={tableImg} height={55} width={55}/></Container>
        <FormFromRest></FormFromRest>
      </Tab>
    </Tabs>
    </Container>
    </div>
    </div>
  )
}

export default Form