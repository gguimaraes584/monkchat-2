
import { Barra, ContainerCabecalho } from './styled'

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom';

//////////d90fdwjehg8regt9iro´gjrg

export default function Cabecalho() {
    
    const navigation = useHistory();

    const logoff = () => {
        Cookies.remove('usuario-logado');
        navigation.push('/');
    }
    
    
    return (
        <ContainerCabecalho>
            <img src="/assets/images/logo-monkchat.png" alt="" />
            <Barra />
            <div className="titulo"> MonkChat </div>
            <div onClick={logoff}>&nbsp;&nbsp;Sair</div>
        </ContainerCabecalho>
    )
}
