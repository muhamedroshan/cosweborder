import {React,createContext,useState,useEffect} from 'react'
import { Restaurnt } from '../Restaurant';
import { BilledProduct } from '../BilledProduct';


export const ShopContext = createContext(null);
export function ShopContextProvider(props) {

    const [listOfProducts,setListOfProducts] = useState([])
    const [orderRef,setOrderRef] = useState("")
    const [orderNote,setOrderNote] = useState("")
    const [listOfFilteredProducts,setListFilterrdOfProducts] = useState([])
    const [MyRest,setMyRest] = useState({})
    const [stateSearch,setStateSearch] = useState("")
    const [cartList,setCartList] = useState([])
    const [badgeCount,SetBadgeCount] = useState(0)
    const [key, setKey] = useState('Drive')
    const [modalShow,setModalShow] = useState(false)
    const [isLangDec,setIsLanDec] = useState(false)
    
    //use effect for initialization
    useEffect(()=>{
        const Myrest2Set = new Restaurnt("","","","","")
    },[])


    //clear order ref
    useEffect(()=>{
        setOrderRef("")
    },[key])


    //function to search
    function onClickSearch(){
        if(stateSearch===""){
            setListFilterrdOfProducts([...listOfProducts])
        }else{
            const filtdList = listOfProducts.filter(e=>
                    e.productname.toLowerCase().includes(stateSearch.toLowerCase())
                )
            console.log(filtdList)
            setListFilterrdOfProducts(
                [...filtdList]
            )
        }
    }

    //function to add Cart items
    function addToCart(storageRef){
        const cartlistClone = cartList
        const  cartToUpdate = cartlistClone.find(cartItm => cartItm.storageref === storageRef)
        if(cartToUpdate){
            cartToUpdate.addQuantity()
            setCartList([...cartlistClone])
            SetBadgeCount((pre)=>(pre+1))
        }else{
            const prodt = listOfProducts.find(prdt4find => prdt4find.storageref === storageRef)
            if (prodt){
                const billdproduct = new BilledProduct(
                    prodt.imageUrl,
                    prodt.productcategory,
                    prodt.productdescription,
                    prodt.productname,
                    prodt.productprice,
                    prodt.producttax,
                    prodt.storageref,
                    1
                    )
                    setCartList([billdproduct,...cartlistClone])
                    SetBadgeCount((pre)=>(pre+1))
            }
        }
        console.log(cartList)
        console.log(badgeCount)
    }

    // function to delete cart
    function deleteCart(storageRef){
        const cartlistClone = cartList
        const  cartToUpdate = cartlistClone.find(cartItm => cartItm.storageref === storageRef)
        if(cartToUpdate){
            cartToUpdate.lessQuantity(()=>{
                const index2remove = cartlistClone.findIndex(obj => obj.storageref===storageRef)
                cartlistClone.splice(index2remove,1)
            })
            setCartList([...cartlistClone])
            SetBadgeCount((pre)=>(pre-1))
        }
    }
    const contextValue = {
        listOfProducts,
        setListOfProducts,
        listOfFilteredProducts,
        setListFilterrdOfProducts,
        MyRest,
        setMyRest,
        stateSearch,
        setStateSearch,
        onClickSearch,
        addToCart,
        badgeCount,
        cartList,
        deleteCart,
        key,
        setKey,
        orderRef,
        setOrderRef,
        orderNote,
        setOrderNote,
        modalShow,
        setModalShow,
        isLangDec,
        setIsLanDec 
      }
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContext