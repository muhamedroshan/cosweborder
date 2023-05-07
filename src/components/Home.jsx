import {React,useContext,useEffect,useState} from 'react'
import SearchBox from './SearchBox'
import ShopContext from '../context/ShopContext'
import { Card ,Button,Spinner,Badge, Container} from 'react-bootstrap'
import ProductComponent from './ProductComponent'
import { ShoppingCart } from 'phosphor-react'
import { Link,useSearchParams } from 'react-router-dom'
import {db} from "../firebaseConf"
import { collection, getDoc,doc,getDocs} from "firebase/firestore"
import { RestaurntConverter } from '../Restaurant'
import { ProductsConverter } from '../Product'

function Home() {
  const { listOfProducts,setListOfProducts,listOfFilteredProducts,setListFilterrdOfProducts,MyRest,setMyRest,stateSearch,badgeCount} = useContext(ShopContext)
  const [listOfCategories , setListOfCategories] = useState([])
  const [params,setparams] = useSearchParams()
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const tosetlistofcategories = listOfFilteredProducts.map(prodt=> prodt.productcategory)
    setListOfCategories(prev => [...new Set(tosetlistofcategories)])
    // console.log(stateSearch)
  },[listOfFilteredProducts])

  useEffect(()=>{
    const setUp = async () => {
        const uid = params.get('uid')
        if(uid!=null){
          const dbRef = doc(db,"restaurants",uid).withConverter(RestaurntConverter)
          await getDoc(dbRef).then((Data)=>{
            setMyRest(Data.data())
            console.log(Data.data())
          }).catch((reason)=>(console.log("Error")))
        }
    }
    const setUpProducts = async () =>{
      const uid = params.get('uid')
      if(uid!=null){
        setLoading(true)
        const collectionRef = collection(db,"restaurants",uid,"products").withConverter(ProductsConverter)
        await getDocs(collectionRef).then((Data)=>{
          return Data.docs.map((e,i)=>{return Data.docs[i].data()})
        }).then((Data)=>{
          setListOfProducts(Data)
          setListFilterrdOfProducts(Data)
          console.log(Data)
        }).finally(()=>(setLoading(false)))
      }
    }
    setUpProducts()
    setUp()
  },[])
  return (
    <div>
    <SearchBox/>
    <div className='position-fixed' style={{bottom:"0" ,right:"0" ,zIndex:"100", marginBottom:"2rem", marginRight:"2rem"}}>
    <Link to="/cart">
    <Button variant="warning" size="lg" >
      <ShoppingCart size={35}/>
      My Kart{badgeCount>0 ?<Badge bg='danger' className='ms-1'>{badgeCount}</Badge>:""}
    </Button>
    </Link>
    </div>
    <div style={{minHeight:"800px",backgroundColor:"#616161" , paddingTop:"10px" ,paddingBottom:"10px"}}>
    {loading ? <Container style={{maxWidth:"5rem"}}><Spinner animation='border' variant='warning' ></Spinner></Container> :<></>}
    {
      listOfCategories.map((element,index) =>
          <Card className='p-2 m-3'key={index} >
            <Card.Header>{element}</Card.Header>
            <Card.Body style={{ overflowX: 'auto' }}>
              <div className='Media-Scroller'>
              {listOfFilteredProducts.filter(filist=>
                filist.productcategory===element
              ).map((maplist,key)=>
                <ProductComponent product={maplist} index={key} key={key}/>
                )}
              </div>
            </Card.Body>
          </Card>
        )
    }
    </div>
      <footer style={{minHeight:"7rem" ,
       backgroundColor:"#212529",
       display:"flex",
        flexDirection:"column",
        alignItems:"center",
        color:"#787878"}}>
        <p className='pt-2'>{MyRest.companyName}</p>
        <p>{MyRest.companyAddress}</p>
        <p>{MyRest.email}</p>
        <p className='pb-1'>Powered By We Do</p>
      </footer>
    </div>
  )
}

export default Home