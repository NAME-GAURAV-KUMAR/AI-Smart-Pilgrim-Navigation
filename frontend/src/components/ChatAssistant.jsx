import { useState } from "react";
import axios from "axios";

function ChatAssistant() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = async () => {

    const response = await axios.post(
      "http://127.0.0.1:5000/chat",
      {
        question
      }
    );

    setAnswer(response.data.answer);
  };

  return (
    <div>

      <h2>AI Travel Assistant</h2>

      <input
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
        placeholder="Ask a question"
      />

      <button onClick={askAI}>
        Ask
      </button>

      <p>{answer}</p>

    </div>
  );
}

export default ChatAssistant;