import className from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import ButtonYear from '../../../components/ButtonYear';

const cx = className.bind(styles);

const RELEASE_YEAR = [
    { title: '2023' },
    { title: '2022' },
    { title: '2021' },
    { title: '2020' },
    { title: '2019' },
    { title: '2018' },
    { title: '2017' },
    { title: '2016' },
    { title: '2015' },
    { title: '2014' },
    { title: '2013' },
    { title: '2012' },
    { title: '2011' },
    { title: '2010' },
    { title: '2009' },
    { title: '2008' },
    { title: '2007' },
    { title: '2006' },
    { title: '2005' },
    { title: '2004' },
    { title: '2003' },
    { title: '2002' },
    { title: '2001' },
    { title: '2000' },
    { title: '1999' },
    { title: '1998' },
    { title: '1997' },
    { title: '1996' },
    { title: '1995' },
    { title: '1994' },
    { title: '1993' },
    { title: '1992' },
    { title: '1991' },
    { title: '1990' },
    { title: '1989' },
    { title: '1988' },
    { title: '1987' },
    { title: '1986' },
    { title: '1985' },
    { title: '1984' },
    { title: '1983' },
    { title: '1982' },
    { title: '1981' },
    { title: '1980' },
    { title: '1979' },
    { title: '1978' },
    { title: '1977' },
    { title: '1976' },
    { title: '1975' },
    { title: '1974' },
    { title: '1973' },
    { title: '1972' },
];

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('main-aside')}>
                <div className={cx('release-year')}>
                    <div className={cx('title')}>
                        <h4>Năm phát hành</h4>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <div className={cx('year')}>
                        {RELEASE_YEAR.map((year) => (
                            <ButtonYear btnyear to={`/nam-phat-hanh/${year.title}`}>
                                {year.title}
                            </ButtonYear>
                        ))}
                    </div>
                </div>
                <div className={cx('article-aside')}></div>
                <div className={cx('list-item-aside')}></div>
            </div>
        </aside>
    );
}

export default Sidebar;
