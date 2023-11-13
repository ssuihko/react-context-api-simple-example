import { useState, createContext } from 'react'
import './App.css'
import Posts from './Posts'
import Header from './Header'

const MyContext = createContext()

function App() {
    const [posts, setPosts] = useState([
        { title: 'Hello, world!', content: 'React context is great :)' },
        { title: 'But...', content: 'It\s a little confusing at first!' },
    ])

    return (
        <MyContext.Provider value={ { appName: 'Next-gen Social Media', posts: posts } }>
            <Header />
            <Posts />
        </MyContext.Provider>
    )
}

export { App, MyContext }
