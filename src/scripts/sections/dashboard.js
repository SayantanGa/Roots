import {useState} from 'react'
import {WritePost, AllPosts} from '../components/posts'
import { nanoid } from 'nanoid';

const initialPosts = [
    {
        postId: '1',
        userName: 'Captain_Anonymous',
        avatar: 'user1.jpg',
        datetime: {
            hr:'7',
            min:'43',
            date:'1',
            month:'7',
            year:'2023'
        },
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in mollis. Aliquam ultrices sagittis orci a. Venenatis cras sed felis eget velit aliquet sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in mollis. Aliquam ultrices sagittis orci a. Venenatis cras sed felis eget velit aliquet sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in mollis. Aliquam ultrices sagittis orci a. Venenatis cras sed felis eget velit aliquet sagittis.',
        likes: 10,
        dislikes: 2,
        comments: 5
    },
    {
        postId: '2',
        userName: 'Captain_Anonymous',
        avatar: 'user1.jpg',
        datetime: {
            hr:'10',
            min:'42',
            date:'19',
            month:'1',
            year:'2023'
        },
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in mollis. Aliquam ultrices sagittis orci a. Venenatis cras sed felis eget velit aliquet sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in mollis. Aliquam ultrices sagittis orci a. Venenatis cras sed felis eget velit aliquet sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in mollis. Aliquam ultrices sagittis orci a. Venenatis cras sed felis eget velit aliquet sagittis.',
        likes: 15,
        dislikes: 5,
        comments: 9
    }
];
const postTemplate = (userName) => {
    const postId = `post_${userName}_${nanoid()}`;
    const time = new Date();
    return {
    userName: userName,
    avatar: 'user1.jpg',
    datetime: {
        hr:time.getHours(),
        min:time.getMinutes(),
        date:time.getDate(),
        month:time.getMonth(),
        year:time.getFullYear()
    },
    postId: postId,
    key: postId,
    content: '',
    likes: 0,
    dislikes: 0,
    comments: 0
    }
}

function AccountInfoDb() {
    
    return (
        <>
        </>
    );
}

function Feed() {
    /*******************        POSTS     ******************* */
    const [posts, setPosts] = useState(initialPosts)

    const sharePost = (formData) => {
        setPosts((prevPosts) => [formData, ...prevPosts]);
      };

    function deletePost(postId) {
        const newPosts = posts.filter((post) => post.postId !== postId);
        setPosts(newPosts);
    }

    const postModifiers = {
        delete: deletePost,
        share: sharePost
    }

    /****************************************************** */

    return (
        <div>
            <WritePost postModifiers={postModifiers} template={postTemplate}/>
            <AllPosts posts={posts} postModifiers={postModifiers}/>
        </div>
    );
}


export default function Dashboard() {
    
    return (
        <div className="conainer dashboard-container page-container">
            <AccountInfoDb />
            <Feed />
        </div>
    );
}