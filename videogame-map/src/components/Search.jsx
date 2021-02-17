function Search(props) {
  return (
    <div className="search-filter">
      <form>
        <h3>Filter by character or game</h3>
        <label htmlFor="character-keyword">Character Name</label>
        <input type="search" placeholder="Try typing a character name."></input>
        <label htmlFor="videogame-keyword">Videogame Title</label>
        <input type="search" placeholder="Type a videogame title."></input>
        <label htmlFor="queerLead">LGBTQA Protagonist</label>
        <input type="checkbox"></input>
        <label htmlFor="pocLead">Person of Color (POC) Protagonist</label>
        <input type="checkbox"></input>
        <label htmlFor="femaleLead">Female Protagonist</label>
        <input type="checkbox"></input>

        <button type="submit">Find Characters</button>
      </form>
    </div>
  )
}

export default Search;