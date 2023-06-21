import Button from '../../Button';
import className from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = className.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item');
    return (
        <Button onClick={onClick} leftIcon={data.icon} to={data.to} rightIcon={data.light} className={classes}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
