import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';


import { Container } from './styled'
import { ChatButton, ChatInput } from '../../components/outros/inputs'
import { useState, useRef } from 'react'

import Cookies from 'js-cookie';
import Api from '../../service/api';
import { useHistory } from 'react-router-dom'

const api = new Api(); 

export default function Login() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');


    const navig = useHistory();
    const loading = useRef(null);   

    const logar = async () => {
        loading.current.continuousStart();
        

        let resp = await api.login(login, senha);
        if (resp.erro) {
            toast.error(`${resp.erro}`)
            loading.current.complete();
        } else {
            Cookies.set('usuario-logado', JSON.stringify(resp));
            navig.push('/chat')
        }
    }

    return (
        <Container>
             <ToastContainer />
            <LoadingBar color="red" ref={loading} />
            <div className="box">
                <div className="titulo">
                    <img src="/assets/images/logo-monkchat.png" alt="" />
                    <br />
                    MonkChat
                </div>
            </div>

            <div className="login">
                <div className="container-form">
                    <div className="form-row">
                        <div className="title">Faça seu Login</div>
                    </div>

                    <div className="form-row">
                        <div>
                            <div className="label">Login </div>
                            <ChatInput
                                value={login}
                                onChange={e => setLogin(e.target.value)}
                                style={{ border: '1px solid gray', fontSize: '1.5em' }}
                                />
                        </div>
                        <div>
                            <div className="label">Senha </div>
                            <ChatInput
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                                type="password"
                                style={{ border: '1px solid gray', fontSize: '1.5em' }}
                                />
                        </div>
                        <div>
                            <ChatButton
                                onClick={logar}
                                style={{ fontSize: '1.2em'}}> Login </ChatButton>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}
