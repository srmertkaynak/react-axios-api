import { useState } from "react";
import "./App.css";
import Search from "./Components/Search.jsx";
import ImageList from "./Components/ImageList.jsx";
import searchImages from "./api.jsx";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <Search search={handleSubmit} />
      <ImageList imagePlaceholder={images} />
    </div>
  );
}

export default App;
