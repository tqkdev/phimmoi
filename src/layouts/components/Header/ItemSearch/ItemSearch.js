import className from 'classnames/bind';
import styles from './ItemSearch.module.scss';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

function ItemSearch({ data }) {
    data = data[1];

    return (
        <Link to={`/movie/${data.title}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.img} alt="test" />
            <div className={cx('info')}>
                <p className={cx('name')}>{data.title}</p>
            </div>
        </Link>
    );
}
export default ItemSearch;
