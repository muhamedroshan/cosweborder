import React,{useContext} from 'react'
import { Stack,Form,Button, Container} from 'react-bootstrap'
import ShopContext from '../context/ShopContext'
import { useTranslation } from 'react-i18next';

function SearchBox() {
  const {setStateSearch,onClickSearch} = useContext(ShopContext)
  const { t, i18n } = useTranslation();
  function handelChange(e){
    setStateSearch(e.target.value)
  }

  return (
    <Container fluid style={{backgroundColor : "#212529"}}>
        <Form className='pt-4 pb-4'>
            <Stack direction="horizontal" gap={3}>
            <Form.Control 
                className="me-auto"
                placeholder={t('searchHere')}
                type="search"
                aria-label="Search"
                onChange={handelChange}
             />
            <Button variant="secondary" onClick={()=>(onClickSearch())}>{t('search')}</Button>
            </Stack>
        </Form> 
    </Container>
  )
}

export default SearchBox