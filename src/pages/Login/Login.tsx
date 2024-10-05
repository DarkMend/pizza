import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import { FormEvent } from 'react';

export default function Login() {

    const submit = (e: FormEvent) => {
        e.preventDefault();
        console.log('a')
    }

    return (
        <div className={styles['login']}>
            <Headling>Вход</Headling>
            <form className={styles['form']} onSubmit={submit}>
                <div className={styles['input-wrapper']}>
                    <label htmlFor="email">Ваш email</label>
                    <Input id='email' name='email' placeholder='Email' className={styles['form-input']}/>
                </div>
                <div className={styles['input-wrapper']}>
                    <label htmlFor="password">Ваш пароль</label>
                    <Input id='password' name='password' placeholder='Пароль' className={styles['form-input']}/>
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