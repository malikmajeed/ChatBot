// import { useState } from 'react'
// import axios from 'axios'
import './App.css'
import Chatbot from './assets/chatbot'

// function App() {
//   const [Question, setQuestion] = useState('');
//   const [Answer, setAnswer] = useState('');

//   async function getAnswer() {

//     setAnswer('Loading...');
//     const response = await axios({
//       url:'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDn55YG4fUxjAr7nFiCT89tb5eCgnHeWG0',
//       method:'POST',
//         data:{contents: [{
//           parts:[{text: Question}]
//           }]}
        
   
//     });
//     console.log(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
//     setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
//   //  setAnswer(response.data.candidates[0].contents.parts[0].text);

//   }

//   return (
//     <>
//     <div>
//       <h1>My Ai bot</h1>
//       <textarea value={Question} onChange={(e)=>setQuestion(e.target.value)}></textarea>
//       <button onClick={getAnswer}>Get Answer</button>
//       <pre>{Answer}</pre>
//     </div>
      
//     </>
//   )
// }



const App = () => {

  return (
    <div>
      <h1>My Ai bot</h1>
      <Chatbot />
    </div>
  )
}

export default App
