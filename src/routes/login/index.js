import React, { Component, Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";
import { Row, Card, CardTitle, CardBody, Form, Input, Label, Button } from 'reactstrap';

const Login = () => {
    const [credencials, setCredencials] = useState({
        login: "",
        password: ""
    })

    const [forgotPassword, setForgotPassword] = useState(false)
    const [emailForgot, setEmailForgot] = useState('');

    const renderLogin = () => {
        return (
            <>
             <NavLink to={'/'} className="white"> <span className=""/> </NavLink>
            <CardTitle className="mb-4">
                Preencha os campos com os seus dados.
            </CardTitle>
            <Form> 
                <Label className="form-group has-float-label mb-4"> 
                    <Input type="email"  defaultValue={credencials.login}/>
                    <IntlMessages id="user.email" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                    <Input type="password"/>
                    <IntlMessages id="user.password" defaultValue={credencials.password}/>
                </Label>
                <div className="d-flex justify-content-between align-items-center">
                    <NavLink 
                        to={'/'}
                        onClick={e => {
                            e.preventDefault()
                            setForgotPassword(true)
                        }}
                    > <p> Esqueci minha senha </p></NavLink>
                </div>
                <Button
                    color="secondary"
                    className="btn-shadow"
                    size="lg"
                    onClick={() => window.location.href = '/app/profile'}
                > 
                    Login
                </Button>
            </Form>
            </>
        )
    }

    const renderForgotPassword = () => {
        return (
            <> 
                <CardTitle className="mb-4"> Informe seu e-mail para recuperação. </CardTitle>
                <Form> 
                    <Label className="form-group has-float-label mb-4">
                        <Input type="email" onChange={e => {setEmailForgot(e.target.value)}}/>
                        <IntlMessages id="user.email" />
                    </Label>
                    <Button 
                        color="secondary" 
                        className="btn-shadow" 
                        size="lg" 
                        onClick={e => {
                            e.preventDefault()
                            console.log(emailForgot);
                        }}
                    > 
                        Solicitar recuperação
                    </Button>

                    <div className="d-flex" style={{marginTop:'3%'}}>
                        Já tem uma conta? 
                        &nbsp;
                        <NavLink 
                            to={'#'}
                            onClick={e => setForgotPassword(false)}
                        >
                            <b> Fazer login </b>
                        </NavLink>
                    </div>
                </Form>
            </>
        )
    }
   
    return (
        <> 
         <div className="fixed-background" />
            <main>   
                <div className="container">
                    <Row className="h-100"> 
                        <Colxx xxs="12" md="10" className="mx-auto my-auto"> 
                            <Card className="auth-card"> 
                                <div className="position-relative image-side">
                                    <p className="text-white h2"> { !forgotPassword ?  "Login | Entrar" : "Esqueci a senha"}</p>
                                    <p className="white mb-0">
                                        Utilize suas credenciais para fazer login
                                        <br/>
                                        Ainda não tem uma conta? <NavLink to={'/'} className="white"> Registre-se </NavLink>
                                    </p>
                                </div>
                                <div className="form-side">
                                    {!forgotPassword ? renderLogin() : renderForgotPassword()}
                                </div>
                            </Card>
                        </Colxx>
                    </Row>  
                </div>
            </main>
        </>
    )
}

export default Login;

