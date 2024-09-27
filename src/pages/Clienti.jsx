import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClienteCard from "../components/ClienteCard";

const Clienti = () => {
  const [hasError, setError] = useState(false);
  const [clienti, setClienti] = useState([]);

  const { token } = useParams();

  const fetchClienti = async () => {
    try {
      const resp = await fetch("http://localhost:3001/clienti", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        setClienti(data.content);
      } else throw new Error();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchClienti();
  }, []);
  return (
    <>
      <h1>Clienti</h1>
      {clienti.map(cliente => (
        <ClienteCard
          key={cliente.id}
          ragioneSociale={cliente.ragioneSociale}
          email={cliente.email}
          partitaIva={cliente.partitaIva}
          fatturatoAnnuale={cliente.fatturatoAnnuale}
        />
      ))}
    </>
  );
};

export default Clienti;
