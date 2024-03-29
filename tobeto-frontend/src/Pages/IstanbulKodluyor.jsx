import React from "react";
import logo from '../Assets/Images/istanbulkodluyor-logo-white.svg';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import  '../Styles/PagesStyles/IstanbulKodluyor.css'

const IstanbulKodluyor = () => {
  return (
    <>
       <Container fluid style={{backgroundColor:"#1E1041"}}>
            <Row className="justify-content-center p-10">
                <Col xs={12} className="d-flex justify-content-center">
                    <Image
                        alt="İstanbul Kodluyor Logo"
                        src={logo}
                        fluid
                    />
                </Col>
            </Row>
            <Row className="justify-content-center px-10 text-center">
                <Col xs={12} className="mt-3">
                    <span className="text-white fs-2">
                        Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
                    </span>
                    <br/>
                    <span className="text-white fs-3">
                        Aradığın <span className="text-success">“</span>İş<span className="text-success">”</span> Burada!
                    </span>
                </Col>
            </Row>
        </Container>
        <Container fluid style={{backgroundColor:"#00D29B"}} className="p-3">
            <Row>
                <Col xs={12} className="text-center text-white fs-3 fw-bold">
                    <span>Türkiye’nin İlk Sosyal Etki Tahvili: “İstanbul Kodluyor” Projesi </span>
                </Col>
                <Col xs={12} className="text-center text-white fs-4 fw-bold mt-2">
                    <p className="">
                        Sanayi ve Teknoloji Bakanlığı Kalkınma Ajansları Genel Müdürlüğü koordinasyonunda İstanbul Kalkınma Ajansı (İSTKA) ve İngiltere merkezli Bridges Outcomes Partnerships iş birliğinde başladı!
                    </p>
                </Col>
            </Row>
        </Container>
            <Row>
                <Col md={6} xs={12} style={{ backgroundColor: '#0ECDFA' }} className="d-flex justify-content-center">
                    <div>
                        <p className="text-center text-white fs-3 fw-bold" style={{ marginTop: '24px', marginBottom: '32px' }}>Yazılım ve teknoloji alanında yeni bir kariyere adım atmak istiyorsan</p>
                        <ul className="text-black list-unstyled ms-5 fs-4">
                            <li>18-35 yaş arasındaysan</li>
                            <li>Lise veya üniversite mezunuysan</li>
                            <li>Son 6 aydır ve şu an öğrenci değilsen</li>
                            <li>Son 1 yıldır çalışmıyorsan</li>
                            <li>İş arayışındaysan</li>
                        </ul>
                        <span className="fw-bold text-black d-flex justify-content-center fs-4">O halde doğru yerdesin!</span>
                        <hr style={{ width: 'inherit', borderTop: '1px solid #fff', opacity: 0.5, width:'200px'}} className="mx-auto"/>
                        <span style={{ fontWeight: 500 }} className="d-flex justify-content-center fs-4 text-black">Aklına takılan tüm sorular için;</span>
                        <div style={{ marginTop: '20px' }}>
                            {/* İçerik */}
                        </div>
                        <ul className="text-black list-unstyled ms-5 fs-4 mt-5">
                        <li><span className="text-black fw-bold">1</span> Sıkça Sorulan Sorulara Bakabilirsin</li>
                        <Button className="rounded-pill btn-dark">S.S.S</Button>
                        <li className="mt-4"><span className="text-black fw-bold">2</span> Bize Yazabilirsin</li>
                        <Button className="rounded-pill btn-dark">Message</Button>

                    </ul>
                    </div>
                </Col>
                <Col md={6} xs={12} style={{ backgroundColor: '#FFFFFF' }}>
                    <Form>
                        <h3 style={{ marginTop: '10rem', marginBottom: '32px' }} className=" fw-bold fs-1 text-black">Hemen Kayıt Ol</h3>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Control type="text" placeholder="Ad*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Control type="text" placeholder="Soyad*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Control type="email" placeholder="E-Posta*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Control type="password" placeholder="Şifre*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPasswordAgain">
                            <Form.Control type="password" placeholder="Şifre Tekrar*" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100 rounded-pill" style={{ marginTop: '24px' , backgroundColor:'#BF7FFC'}}>
                            Kayıt Ol
                        </Button>
                    </Form>
                    <div style={{ marginTop: '24px' }}>
                        <label className="d-flex justify-content-center">
                            <small>Zaten bir hesabın var mı?<a className="text-decoration-none text-muted fw-bold" href="giris.html"> Giriş Yap</a></small>
                        </label>
                    </div>
                </Col>
            </Row>
            <Row style={{ backgroundColor: '#00D29B' }}> {/* bg-lightgreen yerine inline CSS */}
                <Col xs={12} className="header-left-2 mt-3" style={{  }}>
                    <span className="header-left-text text-white" style={{ backgroundColor:"#100A3A"}}>
                        İstanbul Kodluyor Projesi Hakkında
                    </span>
                </Col>
                <Col xs={12} style={{ marginTop: '32px' }}> {/* mt-8 yerine inline CSS */}
                  <Container>
                    <p className="text-white fs-4">
                        <b>Yazılım ve teknoloji</b> alanında meslek sahibi olmak isteyen genç yetişkinlere, <b>ücretsiz
                        ve kapsamlı eğitimlerle</b> gerekli bilgi ve becerileri kazandıran, Türkiye’nin önde gelen
                        kurumlarında <b>işe yerleşmelerini</b> sağlayan bir projedir. Teknoloji alanında nitelikli insan
                        kaynağını geliştirmeyi amaçlayan bu proje, aynı zamanda <b>kadınların</b> sektördeki
                        temsiliyetini artırmayı da hedeflemektedir.
                    </p>
                    </Container>
                </Col>
            </Row>
            <Container fluid>
            <Row style={{ backgroundColor: '#1E1041', padding: '10px' }}> {/* bg-darkblue ve p-10 için inline CSS */}
                <Col xs={12} className="text-center">
                    <span className="text-neon" style={{ /* text-neon için gerekli stiller */ }}>SÜREÇ</span>
                    <section className="ps-timeline-sec" style={{ /* ps-timeline-sec için gerekli stiller */ }}>
                        <ol className="ps-timeline" style={{ /* ps-timeline için gerekli stiller */ }}>
                            {/* Süreç adımları */}
                            <li>
                                <div className="ps-top" style={{ /* ps-top için gerekli stiller */ }}>
                                    <p>Başvuru ve <br /> Ön-değerlendirme</p>
                                </div>
                                <span className="ps-sp-top" style={{}}>1</span>
                            </li>
                        </ol>
                    </section>
                </Col>
            </Row>
        </Container>
 
            
 
    </>
  );
};
export default IstanbulKodluyor;
