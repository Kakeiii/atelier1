import React, { useEffect, useState } from "react";
function ListUsersFetch() {
    const [tabUser, setTabUser] = useState([]);

    // fonction get qui permet d'aller chercher les web services,
    // grace au tableau elle se regenere
    useEffect(() => {
      // permet d'aller chercher les donnes chez l'api
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
        // retourne les donnes du json
        .then(data => setTabUser(data))
        // sinon attrape l'erreur
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Longitude</th>
            </tr>
          </thead>
          <tbody>
  
              {   // bug qui affiche la meme
                  tabUser.map((ligne, i) => (
                      <tr key={i}>
                      <th scope="row">{ligne.id}</th>
                      <td>{ligne.name}</td>
                      <td>{ligne.email}</td>
                      <td>{ligne.address.city}</td>
                      <td>{ligne.address.geo.lng}</td>
                    </tr>
                  )) 
              }
          </tbody>
        </table>
      </div>
    );
  }

export default ListUsersFetch;