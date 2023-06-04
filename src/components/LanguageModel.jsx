
import React ,{useContext}from 'react'
import { Modal,Form } from 'react-bootstrap'
import ShopContext from '../context/ShopContext'
import { useTranslation } from 'react-i18next';

function LanguageModel(props) {
    const { setModalShow,setIsLanDec } = useContext(ShopContext)
    const { t, i18n } = useTranslation();

    function handleClick(lang){
        setModalShow(false)
        setIsLanDec(true)
        i18n.changeLanguage(lang)
    }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select Langauge   اختر اللغة
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            label="English"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            onClick={()=>{ handleClick('en') }}
          />
          <Form.Check
            label="العربية"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            onClick={()=>{ handleClick('ar') }}
          />
        </div>
      ))}
    </Form>
      </Modal.Body>
    </Modal>
  )
}

export default LanguageModel