import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './Register.module.css';
import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { register, userActions } from '../../store/user.slice';

export type RegisterForm = {
    email: {
        value: string
    },
    password: {
        value: string
    },
    name: {
        value: string
    }
}

export default function Register() {

    
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const {jwt, registerErrorMessage} = useSelector((s: RootState) => s.user)

    useEffect(() => {
        if(jwt){
            navigate('/')
        }
    }, [jwt, navigate])

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        dispatch(userActions.clearRegisterError())
        const target = e.target as typeof e.target & RegisterForm;
        const { email, password, name } = target;
        console.log(email, password)
        dispatch(register({email: email.value, password: password.value, name: name.value}))
    }

    return (
        <div className={styles['login']}>
            {registerErrorMessage && <div className={styles['error']}>{registerErrorMessage}</div>}
            <Headling>Регистрация</Headling>
            <form className={styles['form']} onSubmit={submit}>
                <div className={styles['input-wrapper']}>
                    <label htmlFor="email">Ваш email</label>
                    <Input id='email' name='email' placeholder='Email' className={styles['form-input']} />
                </div>
                <div className={styles['input-wrapper']}>
                    <label htmlFor="password">Ваш пароль</label>
                    <Input id='password' name='password' placeholder='Пароль' className={styles['form-input']} />
                </div>
                <div className={styles['input-wrapper']}>
                    <label htmlFor="name">Ваше имя</label>
                    <Input id='name' name='name' placeholder='Имя' className={styles['form-input']} />
                </div>
                <Button appearence='big'>ЗАРЕГИСТРИРОВАТЬСЯ</Button>
            </form>
            <div className={styles['reg']}>
                <p>Есть аккаунт</p>
                <Link to='/auth/login' className={styles['reg-button']}>
                    Войти
                </Link>
            </div>
        </div>
    )
}