import { useEffect, useState } from 'react';
import {FormSubmitButton} from './account-form'


/**
 * Renders a single post stats item.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - {string} postId - The unique identifier of the post.
 *   - {string} type - The type of the stats item.
 *   - {string} name - The name of the stats item.
 *   - {boolean} radioChecked - Indicates whether the radio button is checked.
 *   - {function} onChangeHandler - The handler function for the onChange event of the radio button.
 *   - {function} onClickHandler - The handler function for the onClick event of the label.
 *   - {string} buttonType - The type of button to display.
 *   - {string} var - The number to display in the stats item.
 * @return {JSX.Element} The rendered post stats item component.
 */
function PostStatItems(props) {
    return (
        <div className='post__stats-item'>
            <input type='radio' className='post__stats-item-radio' id={props.postId + '-' + props.type} name={props.name} checked={props.radioChecked} onChange={props.onChangeHandler} style={{display: 'none'}}/>
            <label htmlFor={props.postId + '-' + props.type} className='post__stats-item-text' onClick={props.onClickHandler} ><span className="material-symbols-outlined post__stats-item-icon">{props.buttonType}</span></label>
            <p className='post__stats-item-number'>{props.var}</p>
        </div>
    );
}

/**
 * Keeps track of number of likes & dislikes.
 *
 * @param {Object} props - The props object containing the required parameters.
 * @param {number} props.postId - The ID of the post.
 * @param {Array} props.var - An array containing the initial likes and dislikes.
 * @param {number} props.var[0] - The initial number of likes.
 * @param {number} props.var[1] - The initial number of dislikes.
 * @return {JSX.Element} - The JSX element representing the post stat likings.
 */
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

/**
 * Creates a component for displaying the number of comments and a toggle button to increase or decrease the count.
 *
 * @param {object} props - The properties object containing the necessary data for rendering the component.
 * @param {number} props.var - The initial value for the comment count.
 * @param {string} props.postId - The ID of the post associated with the comment count.
 * @return {JSX.Element} - The JSX element representing the component.
 */
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

/**
 * Generates the component for writing a post.
 *
 * @param {Object} props - The props object containing formData and postModifiers.
 * @param {Object} props.formData - The formData object.
 * @param {Function} props.postModifiers.setSubmittedData - The setSubmittedData function from the postModifiers object.
 * @param {Function} props.Alert - The Alert function.
 * @param {boolean} props.isLoggedIn - A boolean indicating if the user is logged in.
 * @param {Function} props.postModifiers.share - The share function from the postModifiers object.
 * @param {Function} props.template - The template function.
 * @param {Function} props.onClick - The onClick function.
 * @param {boolean} props.isEdit - A boolean indicating if the post is being edited.
 * @returns {JSX.Element} The JSX element representing the WritePost component.
 */
export function WritePost(props) {
    const [submittedData, setSubmittedData] = [props.formData, props.postModifiers.setSubmittedData]

    const handleShare = (e) => {
        e.preventDefault();
        if(submittedData.content == false) {
            props.Alert('Can\'t share empty message!');
            return;
        }
        if(props.isLoggedIn) {
            props.postModifiers.share(submittedData);
            setSubmittedData(props.template());
        } else {
            props.Alert('Please log in first!')
        }

    }

    const handleImageUpload = (e) => {
        e.target.files && e.target.files[0] && (
        setSubmittedData((prevValues) => ({
            ...prevValues,
            imgUrl: URL.createObjectURL(e.target.files[0])
        })))
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
                {props.isLoggedIn && <PostCreator avatar='/user1.jpg' userName='Captain_Anonymous' />}
                <textarea rows={8} cols={25} className="form__input" placeholder='Share your thoughts...' value={submittedData.content } onChange={handleChange} />
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <input type='file' className='writepost__img-input' id='uploadImg' onChange={handleImageUpload} style={{display:'none'}} />
                    <label htmlFor='uploadImg' ><span className="post__stats-item-icon btn"><span className='material-symbols-outlined'>center_focus_strong</span></span></label>
                    <button className="btn form__submit-button" onClick={props.onClick} > <span className="material-symbols-outlined post__stats-item-icon">{props.isEdit ? 'select_check_box' : 'send'}</span> </button>
                </div>
            </form>
        </div>
    );
}

/**
 * Renders a component with details of the post creator.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.avatar - The URL of the avatar image.
 * @param {string} props.userName - The name of the user.
 * @returns {JSX.Element} - The rendered post creator component.
 */
export function PostCreator(props) {
    return (
        <div className='post__creator-details'>
            <img src={props.avatar} alt='avatar' className='post__avatar' />
            <p className='post__author'>{props.userName}</p>
        </div>
    );
}

/**
 * Render a post component.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.post - The post object containing post details.
 * @param {Object} props.post.datetime - The datetime of the post.
 * @param {string} props.post.datetime.hr - The hour of the post.
 * @param {string} props.post.datetime.min - The minute of the post.
 * @param {string} props.post.datetime.date - The date of the post.
 * @param {string} props.post.datetime.month - The month of the post.
 * @param {string} props.post.datetime.year - The year of the post.
 * @param {string} props.post.datetime.edited - The flag indicating if the post is edited.
 * @param {string} props.post.postId - The ID of the post.
 * @param {string} props.post.userName - The username of the post creator.
 * @param {string} props.post.avatar - The URL to the avatar of the post creator.
 * @param {string} props.post.content - The content of the post.
 * @param {number} props.post.likes - The number of likes of the post.
 * @param {number} props.post.dislikes - The number of dislikes of the post.
 * @param {Array} props.post.comments - The comments on the post.
 * @param {string} props.post.imgUrl - The URL of the post image.
 * @return {JSX.Element} - The rendered post component.
 */
function Post(props) {
    let datetime = props.post.datetime;
    let postId= props.post.postId;
    let userName= props.post.userName;
    let avatar= props.post.avatar;
    let content= props.post.content;
    let likes=props.post.likes;
    let dislikes= props.post.dislikes;
    let comments= props.post.comments;
    let imgUrl = props.post.imgUrl;

    return(
        <div className='post'>
            <div className='post__creator'>
                <div className='post__creator-details'>
                    <PostCreator avatar={avatar} userName={userName} />
                    <p className='post__datetime'>{`${datetime.hr}:${datetime.min}, ${datetime.date}/${datetime.month}/${datetime.year}` + `${props.post.edited ? ' ~ edited' : ''}`}</p>
                </div>
                <div className='post__actions'>
                    <FormSubmitButton value={<span className="material-symbols-outlined post__stats-item-icon">edit_square</span>} onClick = {() => props.postModifiers.edit(postId)} />
                    <FormSubmitButton value={<span className="material-symbols-outlined post__stats-item-icon">delete_forever</span>} onClick = {() => props.postModifiers.delete(postId)} />
                </div>
            </div>
            <div className='post__content'>
                <p className='post__content'>{content}</p>
                {imgUrl && <img src={imgUrl} className='post__img' />}
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