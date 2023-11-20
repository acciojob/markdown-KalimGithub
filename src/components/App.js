{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}

import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'

const App = () => {
    const [text, setText] = useState('');
  return (
    <div className='app'>
          <textarea name='text'
              id='text'
              className='textarea'
              value={text}
              onChange={(e) =>
                  setText(e.target.value)}>
          </textarea>
        <div className='preview'>
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    </div>
  )
}

export default App