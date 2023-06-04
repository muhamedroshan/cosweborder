import React,{useContext} from 'react'
import { Form } from 'react-bootstrap'
import ShopContext from '../context/ShopContext'
import { useTranslation } from 'react-i18next';
function FormHomeDelivery() {

  const{orderRef,setOrderRef,orderNote,setOrderNote} = useContext(ShopContext)
  const { t, i18n } = useTranslation();

  function handleChangeInAddress(e){
    console.log(e.target.value)
    setOrderRef(e.target.value)
  }

  function handleChangePref(e){
    setOrderNote(e.target.value)
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="homeDelivery.ControlInput">
        <Form.Label>{t('enterAddress')}</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder={t('enterAddress')} onChange={handleChangeInAddress} value={orderRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="homeDelivery.ControlTextarea">
        <Form.Label>{t('personalPreferences')}</Form.Label>
        <Form.Control as="textarea" rows={4}  placeholder={t('enterPersonalPreferences')} onChange={handleChangePref} value={orderNote}/>
      </Form.Group>
    </Form>

  )
}

export default FormHomeDelivery