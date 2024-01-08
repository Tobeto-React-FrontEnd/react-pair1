import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import PlatformHeader from '../../../Components/Layouts/PlatformHeader';
import PlatformForm from '../../../Components/Layouts/PlatformForm';

function PlatformKisiselMenu() {
  const [activeTab, setActiveTab] = useState("basvurularim");


  const renderContent = () => {
    switch (activeTab) {
      case "kisiselbilgilerim":
        return <Card.Body><PlatformForm/></Card.Body>;
      case "deneyimlerim":
        return <Card.Body>Eğitimlerim içeriği burada gösterilecek.</Card.Body>;
      case "egitimhayatim":
        return <Card.Body>Duyuru ve Haberlerim içeriği burada gösterilecek.</Card.Body>;
      case "yetkinliklerim":
        return <Card.Body>Anketlerim içeriği burada gösterilecek.</Card.Body>;
      case "sertifikalarım":
        return <Card.Body>Sertifikalarım</Card.Body>;
      case "medya":
        return <Card.Body>Medya içeriği burada gösterilecek.</Card.Body>;
      case "yabancı dillerim":
        return <Card.Body>Yabancı içeriği burada gösterilecek.</Card.Body>;
      case "ayarlar":
        return <Card.Body>Ayarlar</Card.Body>;
      default:
        return <Card.Body>İçerik bulunamadı.</Card.Body>;
    }
  };

  return (
    <>
    <PlatformHeader/>
    <Container className='my-5'>
      <Row>
        {/* Sol Taraf: Dikey Menü */}
        <Col md={3}>
          <Nav className="flex-column">
            <Nav.Link onClick={() => setActiveTab("kisiselbilgilerim")}>Kişisel Bilgilerim</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("deneyimlerim")}>Deneyimlerim</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("egitimhayatim")}>Eğitim Hayatım</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("yetkinliklerim")}>Yetkinliklerim</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("sertifikalarım")}>Sertifikalarım</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("medya")}>Medya Hesaplarım</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("yabancı dillerim")}>Yabancı Dillerim</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("ayarlar")}>Ayarlar</Nav.Link>
          </Nav>
        </Col>

        {/* Sağ Taraf: İçerik Alanı */}
        <Col md={9}>
          <Card>
            {renderContent()}
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default PlatformKisiselMenu