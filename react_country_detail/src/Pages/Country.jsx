import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../component/UI/Loader";
import { CountryCard } from "../component/Layouts/CountryCard";

export const Country = () => {


  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);


  const [search, setSearch] = useState();
  const [filter, setFilter] = useState([]);

  useEffect(() => {

    startTransition(async () => {
      const res = await getCountryData();
      console.log(res);
      setCountries(res.data);
    });


  }, []);

  if (isPending) return <Loader />;


  return (
    <section className="country-section">


      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />


      <ul className="grid grid-four-cols">{
        countries.map((curCountry, index) => {
          return <CountryCard country=
            {curCountry} key={index} />
        })

      }</ul>

    </section>
  )
};

