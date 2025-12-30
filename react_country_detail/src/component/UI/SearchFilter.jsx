export const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
    return <section className="section-searchFilter container">
        <input type = "text" placeholder="search" 
        value = {search} onChange = {handleInputChange}/>

    </section>
}