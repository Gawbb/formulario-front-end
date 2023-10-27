import { useEffect, useState } from "react";
import CardData from "./componentes/Card/CardData";
import Form from "./componentes/form";
import api from "./service/axios";

function App() {
  const [data, setData] = useState([]);
 async function getData() {
    try {
      const reponse = await api.get("all");
      if (reponse.data) {
        console.log(reponse)
        setData(reponse.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
   getData()
  }, []);
  return (
    <>
      <Form />
      {data?.map((item) => (
        <CardData
          key={item.id}
          tipoServico={item.tipoServico}
          user={item.user}
          ordem={item.ordem}
        />
      ))}
    </>
  );
}

export default App;
