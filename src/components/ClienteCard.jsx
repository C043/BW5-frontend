const ClienteCard = ({ ragioneSociale, partitaIva, email, fatturatoAnnuale, provincia, logo }) => {
  return (
    <div className="my-5">
      <div className="d-flex align-items-center mb-2">
        <img src={logo} alt="logo-aziendale" className="me-2 rounded-circle" />
        <p className="h3 mb-0">{ragioneSociale}</p>
      </div>
      <p>Partita IVA: {partitaIva}</p>
      <p>Email: {email}</p>
      <p>Fatturato Annuale: {fatturatoAnnuale}$</p>
      <p>Provincia: {provincia}</p>
    </div>
  );
};

export default ClienteCard;
