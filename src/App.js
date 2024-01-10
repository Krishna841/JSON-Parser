import { useState } from "react";
import JsonInput from "./components/JsonInput/JsonInput";

function App() {
  const [jsonSchema, setJsonSchema] = useState("");
  return (
    <div className="w-screen h-screen grid grid-cols-2">
      <JsonInput jsonSchema={jsonSchema} setJsonSchema={setJsonSchema} />
    </div>
  );
}

export default App;
