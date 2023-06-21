import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ButtonYear.module.scss';

const cx = className.bind(styles);

function ButtonYear({ to, href, onClick, children, leftIcon, rightIcon, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {/* {leftIcon && <div className={cx('icon')}>{leftIcon}</div>} */}
            <span className={cx('title')}>{children}</span>
            {/* {rightIcon && <div className={cx('icon')}>{rightIcon}</div>} */}
        </Comp>
    );
}

export default ButtonYear;
