import Character from "./Character.jsx"

function Filter(props) {
  const { characters } = props
  const pocLeads = characters.filter((character) => character.pocLead)
  const femLeads = characters.filter((character) => character.femaleLead)
  const lgbtqaLeads = characters.filter((character) => character.lgbtqaLead)
  // filter goes through each array element and can return all the elements that pocLead / femaleLead / lgbtqaLead = true.

  return (
    <section>
      <h2>Videogames with POC Protagonists</h2>
        <div className="pocLeads">
        {pocLeads.map((poc) => {
          return <Character poc={poc} />})}
{/* here's where I render the div results and map through each array item that is true for the different leads and return the entire object property */}
         
        </div>
      <h2>Videogames with Female Protagonists</h2>
        <div className="femLeads">
          {femLeads.map((fem) => {
            return <Character fem={fem} />
          })}
        </div>

      <h2>Videogames with Queer Protagonists</h2>
        <div className="queerLeads">
          {lgbtqaLeads.map((lgbtqa) => {
            return <Character lgbtqa={lgbtqa} />
          })}
        </div>
    </section>
  
  )
 
  
}

export default Filter;
