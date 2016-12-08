import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {

  render() {
    return (
      <div className="form">
        <p>People</p>
        <input id="people" type="number" name="people" min="1" onChange={this.props.numPeople} />
        <p>Rooms</p>
        <input id="rooms"type="number" name="rooms" min="1" onChange={this.props.numRooms} />
        <div id="select1">
          <select onChange={this.props.typeRoom}>
            <option value="Private room">Private Room</option>
            <option value="Shared room">Shared Room</option>
            <option value="Entire home/apt">Entire Home</option>
          </select>
        </div>
        <div id="select2">
          <select onChange={this.props.borough}>
            <option value="Manhattan">Manhattan</option>
            <option value="Bronx">Bronx</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Staten Island">Staten Island</option>
          </select>
        </div>
        {this.props.man ? <select>
          <option value="Roosevelt Island">Roosevelt Island</option>
          <option value="Civic Center">Civic Center</option>
          <option value="Stuyvesant Town">Stuyvesant Town</option>
          <option value="Hell's Kitchen">Hell's Kitchen</option>
          <option value="Greenwich Village">Greenwich Village</option>
          <option value="Financial District">Financial District</option>
          <option value="Battery Park City">Battery Park City</option>
          <option value="SoHo">SoHo</option>
          <option value="Kips Bay">Kips Bay</option>
          <option value="Two Bridges">Two Bridges</option>
          <option value="Upper West Side">Upper West Side</option>
          <option value="East Village">East Village</option>
          <option value="NoHo">NoHo</option>
          <option value="Chelsea">Chelsea</option>
          <option value="West Village">West Village</option>
          <option value="Washington Heights">Washington Heights</option>
          <option value="Theater District">Theater District</option>
          <option value="Inwood">Inwood</option>
          <option value="Gramercy">Gramercy</option>
          <option value="Marble Hill">Marble Hill</option>
          <option value="Little Italy">Little Italy</option>
          <option value="Chinatown">Chinatown</option>
          <option value="Nolita">Nolita</option>
          <option value="Lower East Side">Lower East Side</option>
          <option value="East Harlem">East Harlem</option>
          <option value="Flatiron District">Flatiron District</option>
          <option value="Harlem">Harlem</option>
          <option value="Midtown">Midtown</option>
          <option value="Tribeca">Tribeca</option>
          <option value="Morningside Heights">Morningside Heights</option>
          <option value="Upper East Side">Upper East Side</option>
          <option value="Murray Hill">Murray Hill</option>
        </select>: null}
        {this.props.queen ? <select>
          <option value="Bay Terrace">Bay Terrace</option>
          <option value="Astoria">Astoria</option>
          <option value="Kew Gardens Hills">Kew Gardens Hills</option>
          <option value="Whitestone">Whitestone</option>
          <option value="Ridgewood">Ridgewood</option>
          <option value="Jamaica">Jamaica</option>
          <option value="Neponsit">Neponsit</option>
          <option value="Ozone Park">Ozone Park</option>
          <option value="Long Island City">Long Island City</option>
          <option value="Woodside">Woodside</option>
          <option value="Middle Village">Middle Village</option>
          <option value="Glendale">Glendale</option>
          <option value="Ditmars Steinway">Ditmars Steinway</option>
          <option value="Laurelton">Laurelton</option>
          <option value="Sunnyside">Sunnyside</option>
          <option value="Belle Harbor">Belle Harbor</option>
          <option value="Hollis Hills">Hollis Hills</option>
          <option value="Edgemere">Edgemere</option>
          <option value="Holliswood">Holliswood</option>
          <option value="College Point">College Point</option>
          <option value="Far Rockaway">Far Rockaway</option>
          <option value="Elmhurst">Elmhurst</option>
          <option value="Fresh Meadows">Fresh Meadows</option>
          <option value="Kew Gardens">Kew Gardens</option>
          <option value="Glen Oaks">Glen Oaks</option>
          <option value="Cambria Heights">Cambria Heights</option>
          <option value="Woodhaven">Woodhaven</option>
          <option value="Maspeth">Maspeth</option>
          <option value="Bayswater">Bayswater</option>
          <option value="Arverne">Arverne</option>
          <option value="Bayside">Bayside</option>
          <option value="Richmond Hill">Richmond Hill</option>
          <option value="East Elmhurst">East Elmhurst</option>
          <option value="Little Neck">Little Neck</option>
          <option value="Rosedale">Rosedale</option>
          <option value="St. Albans">St. Albans</option>
          <option value="South Ozone Park">South Ozone Park</option>
          <option value="Briarwood">Briarwood</option>
          <option value="Rego Park">Rego Park</option>
          <option value="Rockaway Beach">Rockaway Beach</option>
          <option value="Hollis">Hollis</option>
          <option value="Howard Beach">Howard Beach</option>
          <option value="Corona">Corona</option>
          <option value="Jamaica Estates">Jamaica Estates</option>
          <option value="Forest Hills">Forest Hills</option>
          <option value="Queens Village">Queens Village</option>
          <option value="Springfield Gardens">Springfield Gardens</option>
          <option value="Bellerose">Bellerose</option>
          <option value="Flushing">Flushing</option>
          <option value="Jackson Heights">Jackson Heights</option>
        </select>: null}
        {this.props.brok ? <select>
          <option value="Carroll Gardens">Carroll Gardens</option>
          <option value="Flatbush">Flatbush</option>
          <option value="Prospect Heights">Prospect Heights</option>
          <option value="Crown Heights">Crown Heights</option>
          <option value="Dyker Heights">Dyker Heights</option>
          <option value="Gravesend">Gravesend</option>
          <option value="South Slope">South Slope</option>
          <option value="Borough Park">Borough Park</option>
          <option value="Sea Gate">Sea Gate</option>
          <option value="Williamsburg">Williamsburg</option>
          <option value="Bath Beach">Bath Beach</option>
          <option value="Cypress Hills">Cypress Hills</option>
          <option value="Sheepshead Bay">Sheepshead Bay</option>
          <option value="Brownsville">Brownsville</option>
          <option value="Gerritsen Beach">Gerritsen Beach</option>
          <option value="East New York">East New York</option>
          <option value="Kensington">Kensington</option>
          <option value="Bay Ridge">Bay Ridge</option>
          <option value="Bedford-Stuyvesant">Bedford-Stuyvesant</option>
          <option value="Midwood">Midwood</option>
          <option value="Windsor Terrace">Windsor Terrace</option>
          <option value="Brighton Beach">Brighton Beach</option>
          <option value="Brooklyn Heights">Brooklyn Heights</option>
          <option value="Downtown Brooklyn">Downtown Brooklyn</option>
          <option value="Canarsie">Canarsie</option>
          <option value="Park Slope">Park Slope</option>
          <option value="Fort Hamilton">Fort Hamilton</option>
          <option value="Boerum Hill">Boerum Hill</option>
          <option value="Columbia St Beach">Columbia St Beach</option>
          <option value="Fort Greene">Fort Greene</option>
          <option value="Gowanus">Gowanus</option>
          <option value="Greenpoint">Greenpoint</option>
          <option value="Sunset Park">Sunset Park</option>
          <option value="East Flatbush">East Flatbush</option>
          <option value="Bushwick">Bushwick</option>
          <option value="Vinegar Hill">Vinegar Hill</option>
          <option value="Navy Yard">Navy Yard</option>
          <option value="Mill Basin">Mill Basin</option>
          <option value="Prospect-Lefferts Gardens">Prospect-Lefferts Gardens</option>
          <option value="Flatlands">Flatlands</option>
          <option value="Coney Island">Coney Island</option>
          <option value="Red Hook">Red Hook</option>
          <option value="Cobble Hill">Cobble Hill</option>
          <option value="Bergen Beach">Bergen Beach</option>
          <option value="Clinton Hill">Clinton Hill</option>
          <option value="DUMBO">DUMBO</option>
          <option value="Bensonhurst">Bensonhurst</option>
        </select>: null}
        {this.props.bronx ? <select>
          <option value="Hunts Point">Hunts Point</option>
          <option value="Pelham Bay">Pelham Bay</option>
          <option value="Co-op City">Co-op City</option>
          <option value="Allerton">Allerton</option>
          <option value="Belmont">Belmont</option>
          <option value="Clason Point">Clason Point</option>
          <option value="Van Nest">Van Nest</option>
          <option value="Tremont">Tremont</option>
          <option value="Pelham Gardens">Pelham Gardens</option>
          <option value="Norwood">Norwood</option>
          <option value="North Riverdale">North Riverdale</option>
          <option value="Mount Hope">Mount Hope</option>
          <option value="Wakefield">Wakefield</option>
          <option value="Highbridge">Highbridge</option>
          <option value="Fieldston">Fieldston</option>
          <option value="Unionport">Unionport</option>
          <option value="Concourse Village">Concourse Village</option>
          <option value="Claremont Village">Claremont Village</option>
          <option value="Fordham">Fordham</option>
          <option value="Olinville">Olinville</option>
          <option value="Spuyten Duyvil">Spuyten Duyvil</option>
          <option value="Mott Haven">Mott Haven</option>
          <option value="Longwood">Longwood</option>
          <option value="West Farms">West Farms</option>
          <option value="Concourse">Concourse</option>
          <option value="Parkchester">Parkchester</option>
          <option value="Port Morris">Port Morris</option>
          <option value="Morris Heights">Morris Heights</option>
          <option value="Kingsbridge">Kingsbridge</option>
          <option value="Williamsbridge">Williamsbridge</option>
          <option value="East Morrisania">East Morrisania</option>
          <option value="Riverdale">Riverdale</option>
          <option value="Morrisania">Morrisania</option>
          <option value="Morris Park">Morris Park</option>
          <option value="Throgs Neck">Throgs Neck</option>
          <option value="Baychester">Baychester</option>
          <option value="Soundview">Soundview</option>
          <option value="Eastchester">Eastchester</option>
          <option value="Schuylerville">Schuylerville</option>
          <option value="Mount Eden">Mount Eden</option>
          <option value="Edenwald">Edenwald</option>
          <option value="Bronxdale">Bronxdale</option>
          <option value="University Heights">University Heights</option>
          <option value="Melrose">Melrose</option>
          <option value="Woodlawn">Woodlawn</option>
          <option value="City Island">City Island</option>
        </select>: null}
        {this.props.stat ? <select>
          <option value="Shore Acres">Shore Acres</option>
          <option value="New Springville">New Springville</option>
          <option value="Great Kills">Great Kills</option>
          <option value="Arden Heights">Arden Heights</option>
          <option value="Concord">Concord</option>
          <option value="New Brighton">New Brighton</option>
          <option value="Todt Hill">Todt Hill</option>
          <option value="Oakwood">Oakwood</option>
          <option value="Howland Hook">Howland Hook</option>
          <option value="Randall Manor">Randall Manor</option>
          <option value="Castleton Corners">Castleton Corners</option>
          <option value="Clifton">Clifton</option>
          <option value="West Brighton">West Brighton</option>
          <option value="Dongan Hills">Dongan Hills</option>
          <option value="Tottenville">Tottenville</option>
          <option value="New Dorp Beach">New Dorp Beach</option>
          <option value="Lighthouse Hill">Lighthouse Hill</option>
          <option value="Arrochar">Arrochar</option>
          <option value="St. George">St. George</option>
          <option value="Eltingville">Eltingville</option>
          <option value="Midland Beach">Midland Beach</option>
          <option value="South Beach">South Beach</option>
          <option value="Westerleigh">Westerleigh</option>
          <option value="Tompkinsville">Tompkinsville</option>
          <option value="Grymes Hill">Grymes Hill</option>
          <option value="Port Richmond">Port Richmond</option>
          <option value="Stapleton">Stapleton</option>
          <option value="Emerson Hill">Emerson Hill</option>
          <option value="Silver Lake">Silver Lake</option>
          <option value="Graniteville">Graniteville</option>
          <option value="Woodrow">Woodrow</option>
          <option value="Mariners Harbor">Mariners Harbor</option>
        </select>: null}
      </div>
    );
  }
}
