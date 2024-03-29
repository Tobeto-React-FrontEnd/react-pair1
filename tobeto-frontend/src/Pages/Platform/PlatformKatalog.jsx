import { Container, Row,Col } from 'react-bootstrap'
import PlatformHeader from '../../Components/Layouts/PlatformHeader'
import KatalogMenu from '../../Components/Common/KatalogMenu'
import KatalogCard from '../../Components/Common/KatalogCard'
import MiddleBannerKatalog from '../../Components/Common/MiddleBannerKatalog'


const PlatformKatalog = () => {

  return (
    <div className='body-container'>
      <PlatformHeader/>
      <MiddleBannerKatalog/>
      <div>
        <Container className='my-4'>
          <Row>
            <Col sm={5} md={3} lg={3}><KatalogMenu/></Col>
            <Col sm={7} md={9} lg={9}><KatalogCard/></Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default PlatformKatalog