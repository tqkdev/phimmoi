import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Button from '../../../../components/Button';
import className from 'classnames/bind';
import styles from './BtnTheLoai.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../../../../components/Popper';

import MenuItem from '../../../../components/Popper/Menu/MenuItem';

const cx = className.bind(styles);

function BtnTheLoai({ items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <span>
            <Tippy
                // visible
                interactive
                placement="bottom-start"
                render={(attrs) => (
                    <div className={cx('content')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>{renderItem()}</PopperWrapper>
                    </div>
                )}
            >
                <Button className={cx('btn-title')} rightIcon={<FontAwesomeIcon icon={faCaretDown} />}>
                    Thể loại
                </Button>
            </Tippy>
        </span>
    );
}

export default BtnTheLoai;
