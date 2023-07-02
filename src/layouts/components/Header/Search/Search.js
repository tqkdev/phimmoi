import className from 'classnames/bind';
import * as request from '../../../../utils/request';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';

import PopperSearch from '../PopperSearch/PopperSearch';
import { useEffect, useRef, useState } from 'react';

import Tippy from '@tippyjs/react/headless';
import ItemSearch from '../ItemSearch/ItemSearch';
import { useDebounce } from '../../../../hook';
import Button from '../../../../components/Button/Button';

const cx = className.bind(styles);

function Search() {
    const [searchValue, setsearchValue] = useState('');
    const [searchResult, setsearchResult] = useState([]);
    const [showResult, setshowResult] = useState(true);
    const [loadding, setloadding] = useState(false);

    const debounce = useDebounce(searchValue, 700);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setsearchResult([]);
            return;
        }

        setloadding(true);

        const fetchApi = async () => {
            try {
                const res = await request.get('https://phimmoiyyy.net/wp-json/dooplay/search/', {
                    params: {
                        keyword: debounce,
                        nonce: 'ab2604e03e',
                    },
                });
                const jsonArray = Object.entries(res);
                // console.log(jsonArray[0][0]);
                if (jsonArray[0][0] !== 'error') {
                    setsearchResult(jsonArray);
                }
                setloadding(false);
            } catch (error) {
                setloadding(false);
            }
        };

        fetchApi();
    }, [debounce]);

    const handleClear = () => {
        setsearchValue('');
        setsearchResult([]);
        inputRef.current.focus();
    };

    const handlehiddenResult = () => {
        setshowResult(false);
    };

    return (
        <span>
            <input type="checkbox" hidden className={cx('search-checknox')} id="search-checkbox-reponsive" />

            <Tippy
                visible={showResult && searchResult.length > 0}
                interactive
                placement="bottom-start"
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperSearch>
                            {searchResult.map((result, index) => (
                                <ItemSearch key={index} data={result} />
                            ))}
                        </PopperSearch>
                    </div>
                )}
                onClickOutside={handlehiddenResult}
            >
                <div className={cx('search')}>
                    <input
                        value={searchValue}
                        ref={inputRef}
                        type="text"
                        placeholder="Tìm kiếm..."
                        spellCheck={false}
                        onChange={(e) => setsearchValue(e.target.value)}
                        onFocus={() => setshowResult(true)}
                    />

                    {loadding && (
                        <button className={cx('btn-loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}

                    {!!searchValue && !loadding && (
                        <button className={cx('btn-clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    )}

                    <Button to={`/search/${searchValue}`} className={cx('btn-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                </div>
            </Tippy>

            {/* reponsive */}
            <label htmlFor="search-checkbox-reponsive" className={cx('btn-search-reponsive')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </label>
            <label htmlFor="search-checkbox-reponsive" className={cx('btn-xmark-reponsive')}>
                <FontAwesomeIcon icon={faXmark} />
            </label>

            {/* reponsive */}
        </span>
    );
}

export default Search;
