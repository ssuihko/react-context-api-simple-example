import { useState } from 'react';

export default function CreatePost() {
    const [text, setText] = useState()

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea onChange={handleChange} value={text} cols={50} rows={5}></textarea>
            <br/>
            <input type="submit" value="Post!"></input>
        </form>
    )
}
