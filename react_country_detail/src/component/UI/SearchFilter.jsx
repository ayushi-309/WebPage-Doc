export const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {



    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }


    const handleSelectChange = (event) => {
        setFilter(event.target.value);
    }


    const sortContries = (value) => {
       const sortCountry = [...countries].sort((a, b) => {
        return value === "asc"
        ? a.name.common.localCompare(b.name.common)
        : b.name.common.localCompare(a.name.common);
       });
       setCountries(sortCountry);
    };


    return <section className="section-searchFilter container">
        <input type = "text"
         placeholder="search" 
         value = {search} 
         onChange = {handleInputChange}
         />

         <div>


           
           <div>
            <button onClick={() => sortContries ("asc")}>Asc</button>
           </div>

           <div>
            <button onClick={() => sortContries ("desc")}>Desc</button>
           </div>

            <select className="select-section" value={filter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
         </div>

    </section>
}