import React,{useContext} from 'react'
import { Stack,Form,Button, Container} from 'react-bootstrap'
import ShopContext from '../context/ShopContext'

function SearchBox() {
  const {setStateSearch,onClickSearch} = useContext(ShopContext)
  function handelChange(e){
    setStateSearch(e.target.value)
  }

  return (
    <Container fluid style={{backgroundColor : "#212529"}}>
        <Form className='pt-4 pb-4'>
            <Stack direction="horizontal" gap={3}>
            <Form.Control 
                className="me-auto"
                placeholder="Search Here"
                type="search"
                aria-label="Search"
                onChange={handelChange}
             />
            <Button variant="secondary" onClick={()=>(onClickSearch())}>Search</Button>
            </Stack>
        </Form> 
    </Container>
  )
}

export default SearchBox