import { login } from './utils';
import './index.css';
import { useState } from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    const handleLogin = () => {
        setError('');

        setIsFetching(true);
        login({ email, password })
            .then(() => alert('Usuário Logado!'))
            .catch(error => setError(error.message))
            .finally(() => setIsFetching(false));
    };

    const handleChangeEmail = e => {
        setError('');
        setEmail(e.target.value);
    };

    const handleChangePassword = e => {
        setError('');
        setPassword(e.target.value);
    };

    return (
        <div className="wrapper">
            <div className="login-form">
                <h1>Login Form 🐞</h1>
                {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
                {error && <div className="errorMessage">{error}</div>}
                <div className="row">
                    <label htmlFor={'email'}>Email</label>
                    <input
                        onChange={handleChangeEmail}
                        id={'email'}
                        type={'email'}
                        value={email}
                        autoComplete="off"
                    />
                </div>
                <div className="row">
                    <label htmlFor={'password'}>Password</label>
                    <input
                        onChange={handleChangePassword}
                        id={'password'}
                        type={'password'}
                        value={password}
                    />
                </div>

                <div className="button">
                    <button
                        onClick={handleLogin}
                        disabled={!email || password.length < 6 || isFetching}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
