import { useParams } from "react-router-dom";

export function ProductId() {
  const { id } = useParams();

  return <>Product {id}</>;
}
