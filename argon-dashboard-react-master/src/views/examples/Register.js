/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
import ModalRegister from '../../components/Modal/ModalRegister';
import imgError from '../../assets/img/imgModal/error.png';
import imgSuccess from '../../assets/img/imgModal/success.jpeg';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

const Register = () => {
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const [ nameUser, setNameUser ] = useState('');
  const [ emailUser, setEmailUser ] = useState('');
  const [ passwordUser, setPasswordUser ] = useState('');
  const [ dados, setDados ] = useState({});
  const [ estilo, setEstilo ] = useState({});

  function validationInfo() {
    setEstilo({
      color: "red"
    });

    if(nameUser === "" && emailUser === "" && passwordUser === "")
    {
      setDados({
        title: "Erro",
        message: "Não é possível se cadastrar. Preencha todos os campos necessários!",
        textButton: "Ok",
        img: imgError,
      });

      setIsModalVisible(true);
    }

    if(nameUser === "" && emailUser !== "" && passwordUser !== "")
    {
      setDados({
        title: "Erro",
        message: "Não é possível se cadastrar. Por favor preencha o nome!",
        textButton: "Ok",
        img: imgError
      });

      setIsModalVisible(true);
    }

    if(nameUser !== "" && emailUser === "" && passwordUser !== "")
    {
      setDados({
        title: "Erro",
        message: "Não é possível se cadastrar. Por favor preencha o email!",
        textButton: "Ok",
        img: imgError
      });

      setIsModalVisible(true);
    }

    if(nameUser !== "" && emailUser !== "" && passwordUser === "")
    {
      setDados({
        title: "Erro",
        message: "Não é possível se cadastrar. Por favor digite uma senha!",
        textButton: "Ok",
        img: imgError
      });

      setIsModalVisible(true);
    }

    if(nameUser === "" && emailUser === "" && passwordUser !== "")
    {
      setDados({
        title: "Erro",
        message: "Não é possível se cadastrar. Por favor preencha o nome e email!",
        textButton: "Ok",
        img: imgError
      });

      setIsModalVisible(true);
    }

    if(nameUser === "" && emailUser !== "" && passwordUser === "")
    {
      setDados({
        title: "Erro",
        message: "Não é possível se cadastrar. Por favor preencha o nome e digite uma senha!",
        textButton: "Ok",
        img: imgError
      });

      setIsModalVisible(true);
    }

    if(nameUser !== "" && emailUser === "" && passwordUser === "")
    {
      setDados({
        title: "Erro",
        message: "Não é possível se cadastrar. Por favor preencha o email e digite uma senha!",
        textButton: "Ok",
        img: imgError
      });

      setIsModalVisible(true);
    }

    if(nameUser !== "" && emailUser !== "" && passwordUser !== "")
    {
      setDados({
        title: "Sucesso",
        message: "Usuário cadastrado com sucesso!",
        textButton: "Ok",
        img: imgSuccess
      });

      setEstilo({
        color: "green"
      });

      setIsModalVisible(true);
    }
  }

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-4">
              <small>Sign up with</small>
            </div>
            <div className="text-center">
              <Button
                className="btn-neutral btn-icon mr-4"
                color="default"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/github.svg")}
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/google.svg")}
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign up with credentials</small>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Digite seu nome..." type="text" onChange={(e) => { setNameUser(e.target.value); }}/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Digite seu Email..." type="email" autoComplete="new-email" onChange={(e) => { setEmailUser(e.target.value); }}></Input>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Digite uma senha..." type="password" autoComplete="new-password" onChange={(e) => { setPasswordUser(e.target.value); }}/>
                </InputGroup>
              </FormGroup>
              <div className="text-muted font-italic">
                <small>
                  password strength:{" "}
                  <span className="text-success font-weight-700">strong</span>
                </small>
              </div>
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button
                  className="mt-4"
                  color="primary"
                  type="button"
                  onClick={() => validationInfo()}>Create account
                </Button>
                {isModalVisible ? <ModalRegister onClose={() => setIsModalVisible(false)} dados={dados} estilo={estilo}></ModalRegister> : null}
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default Register;
