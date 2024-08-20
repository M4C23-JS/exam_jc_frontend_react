import { Container, ListGroup, Button, ButtonGroup } from 'react-bootstrap';
import { useInstruments } from '../hooks/UseInstruments'; // Importa tu hook personalizado

const InstrumentsList = () => {
  const { instrumentsQuery, deleteInstrumentMutation } = useInstruments();

  if (instrumentsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (instrumentsQuery.error) {
    return <div>Error loading instruments: {instrumentsQuery.error instanceof Error ? instrumentsQuery.error.message : 'Unknown error'}</div>;
  }

  return (
    <Container>
      <h1>Lista de Instrumentos</h1>
      <ListGroup>
        {instrumentsQuery.data?.map(instrument => (
          <ListGroup.Item key={instrument.id} className="d-flex justify-content-between align-items-center">
            {instrument.name} - {instrument.type}
            <ButtonGroup>
              <Button
                className="btn btn-danger btn-sm"
                onClick={() => deleteInstrumentMutation.mutate(instrument.id)}
                disabled={deleteInstrumentMutation.isPending}
              >
                Eliminar
              </Button>
            </ButtonGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default InstrumentsList;
