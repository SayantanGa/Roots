import {WritePost, AllPosts} from '../components/posts'

function AccountInfoDb() {
    
    return (
        <>
        </>
    );
}

function Feed() {

    return (
        <div>
            <WritePost />
            <AllPosts />
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