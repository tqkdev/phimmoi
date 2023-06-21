import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import { forwardRef } from 'react';

const cx = className.bind(styles);

const Button = forwardRef(
    ({ to, href, primary = false, outline = false, onClick, children, leftIcon, rightIcon, ...passProps }, ref) => {
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
            primary,
            outline,
        });

        return (
            <Comp ref={ref} className={classes} {...props}>
                {leftIcon && <div className={cx('icon')}>{leftIcon}</div>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <div className={cx('icon')}>{rightIcon}</div>}
            </Comp>
        );
    },
);

export default Button;
