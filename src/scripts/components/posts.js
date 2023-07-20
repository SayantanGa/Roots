import {GetInput, FormSubmitButton} from './account-form'

let posts = [
    {
        postId: 1,
        userName: 'Captain_Anonymous',
        avatar: '',
        title: 'Post One',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in mollis. Aliquam ultrices sagittis orci a. Venenatis cras sed felis eget velit aliquet sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in mollis. Aliquam ultrices sagittis orci a. Venenatis cras sed felis eget velit aliquet sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in mollis. Aliquam ultrices sagittis orci a. Venenatis cras sed felis eget velit aliquet sagittis.',
        likes: 10,
        dislikes: 2,
        comments: 5
    }
];

export function WritePost() {

    return (
        <div className='writepost form__formarea'>
            <form className='form writepost__form'>
                <GetInput type='textarea' phtext='Share your thoughts...' />
                <FormSubmitButton value='SHARE' />
            </form>
        </div>
    );
}

function Post(props) {
    let postId= props.post.postId;
    let userName= props.post.userName;
    let avatar= props.post.avatar;
    let title= props.post.title;
    let content= props.post.content;
    let likes=props.post.likes;
    let dislikes= props.post.dislikes;
    let comments= props.post.comments;

    return(
        <div className='post'>
            <div className='post__creator'>
                <img src={avatar} alt='avatar' className='post__avatar' />
                <p className='post__author'>{userName}</p>
                <FormSubmitButton value='EDIT' />
                <FormSubmitButton value='DELETE' />
            </div>
            <div className='post__content'>
                <h3 className='post__title'>{title}</h3>
                <p className='post__content'>{content}</p>
            </div>
            <div className='post__stats'>
                <div className='post__stats-item'>
                    <p className='post__stats-item-text'>Likes</p>
                    <p className='post__stats-item-number'>{likes}</p>
                </div>
                <div className='post__stats-item'>
                    <p className='post__stats-item-text'>Dislikes</p>
                    <p className='post__stats-item-number'>{dislikes}</p>
                </div>
                <div className='post__stats-item'>
                    <p className='post__stats-item-text'>Comments</p>
                    <p className='post__stats-item-number'>{comments}</p>
                </div>
            </div>
        </div>
    );
}

export function AllPosts() {
    const postItems = posts?.map((post) => {
        return (
            <Post post = {post} />
        )
    });
    
    return (
        <div className='feed__posts form__formarea'>
            {postItems}
        </div>
    );
}