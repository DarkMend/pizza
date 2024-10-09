import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../../helpers/API';
import { LoginResponse } from '../../interfaces/auth.interface';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { userActions } from '../../store/user.slice';

export type LoginForm = {
    email: {
        value: string
    },
    password: {
        value: string
    }
}

export default function Login() {

    const [error, setError] = useState<string | null>();
    
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        const target = e.target as typeof e.target & LoginForm;
        const { email, password } = target;
        console.log(email, password)
        await sendLogin(email.value, password.value)
    }


    const sendLogin = async (email: string, password: string) => {
        try {
            const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
                email,
                password
            });
            dispatch(userActions.addJwt(data.access_token))
             navigate('/');
        } catch (e) {
            if(e instanceof AxiosError){
                console.log(e);
                setError(e.response?.data.message)
            }
        }

    }

    return (
        <div className={styles['login']}>
            {error && <div className={styles['error']}>{error}</div>}
            <Headling>Вход</Headling>
            <form className={styles['form']} onSubmit={submit}>
                <div className={styles['input-wrapper']}>
                    <label htmlFor="email">Ваш email</label>
                    <Input id='email' name='email' placeholder='Email' className={styles['form-input']} />
                </div>
                <div className={styles['input-wrapper']}>
                    <label htmlFor="password">Ваш пароль</label>
                    <Input id='password' name='password' placeholder='Пароль' className={styles['form-input']} />
                </div>
                <Button appearence='big'>ВХОД</Button>
            </form>
            <div className={styles['reg']}>
                <p>Нет аккаунта?</p>
                <Link to='/auth/register' className={styles['reg-button']}>
                    Зарегистрироваться
                </Link>
            </div>
        </div>
    )
}