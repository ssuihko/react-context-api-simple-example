import { useState, createContext } from 'react'
import CreatePost from './components/CreatePost.jsx';
import Header from './components/Header.jsx'
import Posts from './components/Posts.jsx'
import './App.css'

const MyContext = createContext()

function App() {
    const [posts, setPosts] = useState([
        { title: 'Hello, world!', content: 'React context is great :)' },
        { title: 'But...', content: 'It\'s a little confusing at first!' },
    ])

    return (
        <MyContext.Provider value={ { appName: 'Next-gen Social Media', posts: posts } }>
            <Header />
            <Posts />
            <CreatePost />
        </MyContext.Provider>
    )
}

export { App, MyContext }
