import React from 'react'
import { CheckCircle } from 'phosphor-react'
import { useTranslation } from 'react-i18next';


function OrderSuccess() {
  const { t, i18n } = useTranslation();
  return (
    <div className='App-header'>
      <CheckCircle size={150}/>
      <h3>{t('orderSuccessH3')}</h3>
      <h6>{t('orderSuccessH6')}</h6>
    </div>
  )
}

export default OrderSuccess