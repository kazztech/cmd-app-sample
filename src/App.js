import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled("div")({
  width: 600,
  height: 400,
  backgroundColor: "black",
  overflowY: "scroll",
});
const HistoryLine = styled("div")({
  color: "green",
});
const CurrentLine = styled("div")({
  color: "green",
});
const Input = styled("input")({
  fontSize: 16,
  padding: 0,
  outline: "none",
  backgroundColor: "black",
  color: "green",
  border: "none",
});

function App() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  return (
    <Wrapper>
      {lines.map((l, index) => (
        <HistoryLine key={index}>user: ~$ {l}</HistoryLine>
      ))}
      <CurrentLine>
        user: ~${" "}
        <Input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setLines((l) => [...l, input]);
              setInput("");
            } else if (e.key === "Up") {
              // 上キーでhistory遡る機能(未実装)
            }
          }}
        />
      </CurrentLine>
    </Wrapper>
  );
}

export default App;
