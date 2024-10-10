import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { login, userActions } from '../../store/user.slice';

export type LoginForm = {
    email: {
        value: string
    },
    password: {
        value: string
    }
}

export default function Login() {

    
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const {jwt, loginErrorMessage} = useSelector((s: RootState) => s.user)

    useEffect(() => {
        if(jwt){
            navigate('/')
        }
    }, [jwt, navigate])

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        dispatch(userActions.clearLoginError())
        const target = e.target as typeof e.target & LoginForm;
        const { email, password } = target;
        console.log(email, password)
        await sendLogin(email.value, password.value)
    }


    const sendLogin = async (email: string, password: string) => {
        dispatch(login({email, password}));
    }

    return (
        <div className={styles['login']}>
            {loginErrorMessage && <div className={styles['error']}>{loginErrorMessage}</div>}
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