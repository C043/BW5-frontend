const ClienteCard = ({ ragioneSociale, partitaIva, email, fatturatoAnnuale, provincia }) => {
  return (
    <div className="my-5">
      <p className="h3">Ragione Sociale: {ragioneSociale}</p>
      <p>Partita IVA: {partitaIva}</p>
      <p>Email: {email}</p>
      <p>Fatturato Annuale: {fatturatoAnnuale}$</p>
      <p>Provincia: {provincia}</p>
    </div>
  );
};

export default ClienteCard;
