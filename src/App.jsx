import "./App.css";
import mainData from "./emoji.json";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const newD = mainData.filter((emoji) =>
      emoji.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setData(newD);
  }, [search]);
  return (
    <div>
      <h1> 😸 Emoji Arama Motoru 😺</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {data.map((item, index) => (
        <div
          key={index}
          onClick={() => navigator.clipboard.writeText(item.emoji)}
        >
          <div className="itemDiv">
            <div className="emojiName">
              <span>{item.emoji}</span>
              <span>{item.name}</span>
            </div>
            <span className="copyText">😺Emoji&apos;yi kopyala😺</span>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default App;
