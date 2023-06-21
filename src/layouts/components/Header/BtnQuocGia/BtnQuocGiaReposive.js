import Button from '../../../../components/Button';
import className from 'classnames/bind';
import styles from './BtnQuocGia.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../../../../components/Popper';

import MenuItem from '../../../../components/Popper/Menu/MenuItem';

const cx = className.bind(styles);

function BtnQuocGiaReposive({ items }) {
    const renderItem = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <span className={cx('btn-quocgia-reposive')}>
            <Button className={cx('btn-quocgia-reposive-title')} rightIcon={<FontAwesomeIcon icon={faCaretDown} />}>
                Quốc Gia
            </Button>
            <PopperWrapper>{renderItem()}</PopperWrapper>
        </span>
    );
}
export default BtnQuocGiaReposive;
