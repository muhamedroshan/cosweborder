import React ,{useContext,useEffect} from 'react'
import { Form } from 'react-bootstrap'
import ShopContext from '../context/ShopContext'
import { useTranslation } from 'react-i18next';
function FormFromRest() {
  const{orderRef,setOrderRef,orderNote,setOrderNote} = useContext(ShopContext)
  const { t, i18n } = useTranslation();
  

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
      <Form.Label>{t('enterTableName')}</Form.Label>
      <Form.Control type="text" placeholder={t('enterTableName')} onChange={handleChangeInTableNo} value={orderRef}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="homeDelivery.ControlTextarea">
      <Form.Label>{t('personalPreferences')}</Form.Label>
      <Form.Control as="textarea" rows={4}  placeholder={t('enterPersonalPreferences')} onChange={handleChangePref} value={orderNote}/>
    </Form.Group>
  </Form>
  )
}

export default FormFromRest