import { useParams } from "react-router-dom";

export const Recipe = () => {
  const { id } = useParams();

  return (
    <p>Recipe Page: {id}</p>
  )
}
