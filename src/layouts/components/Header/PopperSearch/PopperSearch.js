import className from 'classnames/bind';
import styles from './PopperSearch.module.scss';

const cx = className.bind(styles);

function PopperSearch({ children }) {
    return <div className={cx('Wrapper')}>{children}</div>;
}

export default PopperSearch;
