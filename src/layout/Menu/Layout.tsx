import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from './Layout.module.css';
import cn from 'classnames'
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getProfile, userActions } from "../../store/user.slice";
import { useEffect } from "react";

export function Layout() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>()
    const profile = useSelector((s: RootState) => s.user.profile)

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch  ])

    const logout = () => {
        dispatch(userActions.logout())
        navigate('/auth/login');
    }

    return (
        <div className={styles['layout']}>
            <div className={cn(styles['sidebar'])}>
                <div className={styles['sidebar-main']}>
                    <div className={styles['user']}>
                        <div className={styles['user-ava']}>
                            <img src='/user.png' alt="" />
                        </div>
                        <div className={styles['user-info']}>
                            <div className={styles['user-name']}>
                                {profile?.name}
                            </div>
                            <div className={styles['user-email']}>
                                {profile?.email}
                            </div>
                        </div>
                    </div>
                    <div className={styles['menu']}>
                        <NavLink to="/" className={({isActive}) => cn(styles['menu-item'], {
                            [styles['menu-item__active']]: isActive
                        })}>
                            <div className={styles['menu-icon']}>
                                <img src="/menu-icon.svg" alt="" />
                            </div>
                            <p>Меню</p>
                        </NavLink>
                        <NavLink to="/cart" className={({isActive}) => cn(styles['menu-item'], {
                            [styles['menu-item__active']]: isActive
                        })}>
                            <div className={styles['menu-icon']}>
                                <img src="/cart-icon.svg" alt="" />
                            </div>
                            <p>Корзина</p>
                        </NavLink>
                    </div>
                </div>
                <div className="menu__exit">
                    <Button className={styles['exit']} onClick={logout}>
                        <img src='/exit-icon.svg' alt="" />
                        Выйти
                    </Button>
                </div>
            </div>
            <div className={styles['content']}>
                <Outlet />
            </div>
        </div>
    )
}