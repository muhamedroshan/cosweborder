import React,{useContext} from 'react'
import { Form } from 'react-bootstrap'
import ShopContext from '../context/ShopContext'

function FormDriveThru() {

  const{orderRef,setOrderRef,orderNote,setOrderNote} = useContext(ShopContext)

  function handleChangeInPlateNo(e){
    console.log(e.target.value)
    setOrderRef(e.target.value)
  }

  function handleChangePref(e){
    setOrderNote(e.target.value)
  }
  return (
    <Form>
    <Form.Group className="mb-3" controlId="homeDelivery.ControlInput">
      <Form.Label>Enter Plate Number</Form.Label>
      <Form.Control type="text" placeholder="Enter Plate No" onChange={handleChangeInPlateNo} value={orderRef}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="homeDelivery.ControlTextarea">
      <Form.Label>Personal Preferences</Form.Label>
      <Form.Control as="textarea" rows={4}  placeholder="Enter Personel Preferences" onChange={handleChangePref} value={orderNote}/>
    </Form.Group>
  </Form>
  )
}

export default FormDriveThru