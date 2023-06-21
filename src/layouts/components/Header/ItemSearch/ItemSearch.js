import className from 'classnames/bind';
import styles from './ItemSearch.module.scss';

const cx = className.bind(styles);

function ItemSearch({ data }) {
    data = data[1];

    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.img} alt="test" />
            <div className={cx('info')}>
                <p className={cx('name')}>{data.title}</p>
            </div>
        </div>
    );
}
export default ItemSearch;
