import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface Instrument {
  id: string;
  name: string;
  type: string;
  price: string;
}

const fetchInstruments = async (): Promise<Instrument[]> => {
  await new Promise(resolve => setTimeout(resolve, 5000)); // Simulando un retraso de 5 segundos
  const response = await axios.get('http://localhost:5000/instruments');
  return response.data;
};

const deleteInstrument = async (id: string): Promise<void> => {
  await axios.delete(`http://localhost:5000/instruments/${id}`);
};

export const useInstruments = () => {
  const queryClient = useQueryClient();

  const instrumentsQuery = useQuery<Instrument[], Error>({
    queryKey: ['instruments'],
    queryFn: fetchInstruments,
  });

const deleteInstrumentMutation = useMutation({
    mutationFn: deleteInstrument,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['instruments']});
    },
  });

  return {
    instrumentsQuery,
    deleteInstrumentMutation,
  };
};
