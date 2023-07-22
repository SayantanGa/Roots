import { useEffect, useState } from 'react';
import {FormSubmitButton} from './account-form'


function PostStatItems(props) {
    return (
        <div className='post__stats-item'>
            <input type='radio' className='post__stats-item-radio' id={props.postId + '-' + props.type} name={props.name} checked={props.radioChecked} onChange={props.onChangeHandler} style={{display: 'none'}}/>
            <label htmlFor={props.postId + '-' + props.type} className='post__stats-item-text' onClick={props.onClickHandler} ><span className="material-symbols-outlined post__stats-item-icon">{props.buttonType}</span></label>
            <p className='post__stats-item-number'>{props.var}</p>
        </div>
    );
}

function PostStatLikings(props) {
    const postId = props.postId;
    const [initialLikes,initialDislikes] = [props.var[0], props.var[1]];
    const [likes, setLikes] = useState(props.var[0]);
    const [dislikes, setDislikes] = useState(props.var[1]);
    const [likeChecked, setLikeChecked] = useState(false);
    const [dislikeChecked, setDislikeChecked] = useState(false);

    const handleLikeChange = () => {
        setLikeChecked(!likeChecked);
        setDislikeChecked(false);
    };

    const handleDislikeChange = () => {
        setDislikeChecked(!dislikeChecked);
        setLikeChecked(false);
    };

    useEffect(() => {
        if (likeChecked) {
            setLikes(initialLikes => initialLikes + 1);
            setDislikes(initialDislikes);
        }
        if (dislikeChecked) {
            setLikes(initialLikes);
            setDislikes(initialDislikes => initialDislikes + 1);
        }
    }, [likeChecked, dislikeChecked]);

    return (
        <>
            <PostStatItems buttonType='thumb_up' var={likes} type='like' postId={postId} name='likings' onChangeHandler={handleLikeChange} />
            <PostStatItems buttonType='thumb_down' var={dislikes} type='dislike' postId={postId} name='likings' onChangeHandler={handleDislikeChange} />
        </>
    );
}

function PostStatComments(props) {
    const [checked, setChecked] = useState(false);
    const [count, setCount] = useState(props.var);
const handleClick = (e) => {
    e.preventDefault();
    setChecked(!checked);
    
    if (!checked) {
        setCount(count + 1);
        e.target.style.fontVariationSettings = "'FILL' 1";
    } else {
        setCount(count - 1);
        e.target.style.fontVariationSettings = "'FILL' 0";
    }
}

    return (
        <PostStatItems buttonType='comment' var={count} type='comment' radioChecked={checked} onClickHandler={handleClick} postId={props.postId} />
    );  

}

export function WritePost(props) {
    const [submittedData, setSubmittedData] = [props.formData, props.postModifiers.setSubmittedData]

    const handleShare = (e) => {
        e.preventDefault();
        if(submittedData.content == false) {
            return;
        }
        props.postModifiers.share(submittedData);
        setSubmittedData(props.template());
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setSubmittedData((prevValues) => ({
          ...prevValues,
          content: value
        }));
      };

    return (
        <div className='writepost form__formarea'>
            <form className='form writepost__form' onSubmit={handleShare}>
                <textarea rows={8} cols={25} className="form__input" placeholder='Share your thoughts...' value={submittedData.content } onChange={handleChange} />
                <FormSubmitButton value={<span className="material-symbols-outlined post__stats-item-icon">{props.isEdit ? 'select_check_box' : 'send'}</span>}  />
            </form>
        </div>
    );
}

function Post(props) {
    let datetime = props.post.datetime;
    let postId= props.post.postId;
    let userName= props.post.userName;
    let avatar= props.post.avatar;
    let content= props.post.content;
    let likes=props.post.likes;
    let dislikes= props.post.dislikes;
    let comments= props.post.comments;

    return(
        <div className='post'>
            <div className='post__creator'>
                <div className='post__creator-details'>
                    <img src={avatar} alt='avatar' className='post__avatar' />
                    <p className='post__author'>{userName}</p>
                    <p className='post__datetime'>{`${datetime.hr}:${datetime.min}, ${datetime.date}/${datetime.month}/${datetime.year}` + `${props.post.edited ? ' ~ edited' : ''}`}</p>
                </div>
                <div className='post__actions'>
                    <FormSubmitButton value={<span className="material-symbols-outlined post__stats-item-icon">edit_square</span>} onClick = {() => props.postModifiers.edit(postId)} />
                    <FormSubmitButton value={<span className="material-symbols-outlined post__stats-item-icon">delete_forever</span>} onClick = {() => props.postModifiers.delete(postId)} />
                </div>
            </div>
            <div className='post__content'>
                <p className='post__content'>{content}</p>
            </div>
            <div className='post__stats'>
                <PostStatLikings var={[likes, dislikes]} postId={postId} />
                <PostStatComments var={comments} postId={postId} />
            </div>
        </div>
    );
}

export function AllPosts(props) {

    const posts = props.posts;

    const postItems = posts?.map((post) => {
        return (
            <Post key={post.postId} post = {post} postModifiers={props.postModifiers} />
        )
    });
    
    return (
        <div className='feed__posts form__formarea'>
            {postItems}
        </div>
    );
}