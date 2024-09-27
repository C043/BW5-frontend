import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClienteCard from "../components/ClienteCard";
import { Button } from "react-bootstrap";

const Clienti = () => {
  const [hasError, setError] = useState(false);
  const [page, setPage] = useState(0);
  const [last, setLast] = useState(false);
  const [sortBy, setSortBy] = useState("ragioneSociale");
  const [clienti, setClienti] = useState([]);

  const { token } = useParams();

  const fetchClienti = async () => {
    try {
      const resp = await fetch("http://localhost:3001/clienti" + "?page=" + page + "&sortBy=" + sortBy, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        setClienti(data.content);
        setLast(data.last);
        setPage(data.number);
      } else throw new Error();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchClienti();
  }, [page, sortBy]);

  return (
    <>
      <h1 className="mt-3">Clienti</h1>
      <h3>Ordina per:</h3>
      <Button
        className="me-3"
        active={sortBy === "ragioneSociale" ? true : false}
        onClick={() => setSortBy("ragioneSociale")}
      >
        Ragione Sociale
      </Button>
      <Button
        className="me-3"
        active={sortBy === "fatturatoAnnuale" ? true : false}
        onClick={() => setSortBy("fatturatoAnnuale")}
      >
        Fatturato Annuale
      </Button>
      <Button
        className="me-3"
        active={sortBy === "dataInserimento" ? true : false}
        onClick={() => setSortBy("dataInserimento")}
      >
        Data Inserimento
      </Button>
      <Button
        className="me-3"
        active={sortBy === "dataUltimoContatto" ? true : false}
        onClick={() => setSortBy("dataUltimoContatto")}
      >
        Data Ultimo Contatto
      </Button>
      <Button className="me-3" active={sortBy === "provincia" ? true : false} onClick={() => setSortBy("provincia")}>
        Provincia
      </Button>
      {clienti.map(cliente => (
        <ClienteCard
          key={cliente.id}
          ragioneSociale={cliente.ragioneSociale}
          email={cliente.email}
          partitaIva={cliente.partitaIva}
          fatturatoAnnuale={cliente.fatturatoAnnuale}
          provincia={cliente.provincia}
        />
      ))}
      {page === 0 ? (
        ""
      ) : (
        <Button className="mb-5 me-3" onClick={() => setPage(page - 1)}>
          Indietro
        </Button>
      )}
      {last ? (
        ""
      ) : (
        <Button className="mb-5" onClick={() => setPage(page + 1)}>
          Avanti
        </Button>
      )}
    </>
  );
};

export default Clienti;
