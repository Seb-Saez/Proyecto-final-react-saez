import { useParams } from 'react-router-dom';

function useProductId() {
  const { id } = useParams();
  return parseInt(id);
}

export default useProductId;