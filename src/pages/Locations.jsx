import { useState } from "react";
import TitleComponent from "../components/TitleComponent";
import Loader from '../components/Loader';
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../utils/querys";

const Locations = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { page: pageNumber }
  });

  if (loading) return <Loader />;
  if (error) return `Error: ${error.message}`;

  console.log({ data });

  return (
    <div>
      <TitleComponent value="Locations" />
    </div>
  );
};

export default Locations;
