import styled from 'styled-components';
import a1 from './a1.jpg';

const LoginContainer = styled.div`
    margin-top: 50px;
    position: relative;
    width: 30%;
    max-width: 300px;
    padding: 80px;
    background: #ffffff;
    text-align: center;
    border-radius: 10px;
    color: rgb(0, 0, 0);
`;

const UserBox = styled.div`
    position: relative;
    margin-bottom: 20px;

    input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #363636;
        margin-bottom: 20px;
        border: none;
        border-bottom: 1px solid #363636;
        outline: none;
        background: transparent;
    }

    label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #363636;
        pointer-events: none;
        transition: 0.5s;
    }
`;

const LogoContainer = styled.div`
    position: relative;
	text-align: center;
	width: 100%;
    max-width: 400px;
    margin-right: 40px;

    img {
        width: 50%;
    }
`;

const Button = styled.button`
    display: block;
    width: 100%;
    padding: 12px 0;
    font-size: 18px;
    color: #fff;
    background: #606366;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.5s;

`;

const BodyContainer = styled.body`
    font-family: sans-serif;
    background: linear-gradient(135deg, #363636, #1d1d1d);
    height: 130vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`;

export default function LoginBody(){
    return (
        <BodyContainer>
            <LoginContainer>
                <LogoContainer>
                    <img src={a1} alt='Logo da Techart'/>
                </LogoContainer>
                <h1>Tech Art</h1>
                <form>
                    <UserBox>
                        <input type="text" name="e-mail"/>
                        <label>E-mail</label>
                    </UserBox>
                    <UserBox>
                        <input type="password" name="password"/>
                        <label>Senha</label>
                    </UserBox>
                    <Button type="submit">
                        Entrar
                    </Button>
                </form>
            </LoginContainer>
        </BodyContainer>
    )
}