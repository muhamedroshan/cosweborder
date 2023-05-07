import React ,{useContext,useEffect} from 'react'
import { Form } from 'react-bootstrap'
import ShopContext from '../context/ShopContext'
function FormFromRest() {
  const{orderRef,setOrderRef,orderNote,setOrderNote} = useContext(ShopContext)

  

  function handleChangeInTableNo(e){
    console.log(e.target.value)
    setOrderRef(e.target.value)
  }

  function handleChangePref(e){
    setOrderNote(e.target.value)
  }
  return (
    <Form>
    <Form.Group className="mb-3" controlId="homeDelivery.ControlInput">
      <Form.Label>Enter Table Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Table Name" onChange={handleChangeInTableNo} value={orderRef}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="homeDelivery.ControlTextarea">
      <Form.Label>Personal Preferences</Form.Label>
      <Form.Control as="textarea" rows={4}  placeholder="Enter Personel Preferences" onChange={handleChangePref} value={orderNote}/>
    </Form.Group>
  </Form>
  )
}

export default FormFromRest