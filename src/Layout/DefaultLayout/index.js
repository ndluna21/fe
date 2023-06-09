import classNames from 'classnames/bind';
import Header from "~/Layout/components/Header";
import styles from './DefaultLayout.module.scss'; 
import Sidebar from '../Sidebar';

const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={`container ${cx('container')}`}>
                <div className={cx('content')}>{children}</div>
                <Sidebar />
            </div>
        </div>
    );
}

export default DefaultLayout;