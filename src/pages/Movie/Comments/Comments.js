import React, { useState } from 'react';
import className from 'classnames/bind';
import styles from './Comments.module.scss';
import images from '../../../assets/images';

const cx = className.bind(styles);

function Comment() {
    const [todos, setTodos] = useState([]);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() === '' || content.trim() === '') return;

        const newTodo = {
            id: Date.now(),
            name: name,
            content: content,
        };

        setTodos([...todos, newTodo]);
        setName('');
        setContent('');
    };

    return (
        <div className={cx('comments')}>
            <h4 className={cx('title')}>Bình luận</h4>
            <form onSubmit={handleSubmit}>
                <div className={cx('khung')}>
                    <div className={cx('info')}>
                        <div className={cx('name')}>
                            <input type="text" placeholder="Tên" value={name} onChange={handleNameChange} />
                        </div>
                        <div className={cx('content')}>
                            <input
                                placeholder="Viết bình luận...."
                                value={content}
                                onChange={handleContentChange}
                                // rows="4"
                            ></input>
                        </div>

                        <button className={cx('btn-submit')} type="submit">
                            Đăng
                        </button>
                    </div>
                </div>
            </form>
            <ul className={cx('comment-submit')}>
                <li className={cx('comment-list')}>
                    <img src={images.avatar} alt="tesst" />
                    <div className={cx('comment-content')}>
                        <h4>Bạn Hiền</h4>
                        <p>Má phim đỉnh vậy !!!!!!!!!!!!!!!!!!</p>
                    </div>
                </li>
                <li className={cx('comment-list')}>
                    <img src={images.avatar} alt="tesst" />
                    <div className={cx('comment-content')}>
                        <h4>Vũ Trịnh</h4>
                        <p>Đã có vietsub rồi cơ đấy</p>
                    </div>
                </li>
                {todos.map((todo) => (
                    <li className={cx('comment-list')} key={todo.id}>
                        <img src={images.avatar} alt="tesst" />
                        <div className={cx('comment-content')}>
                            <h4>{todo.name}</h4>
                            <p>{todo.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comment;
