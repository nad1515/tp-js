for (let lignes = 1; lignes <= 10; lignes++) {
    let maLigne = document.createElement("tr");
    maTable.appendChild(maLigne);
    console.log("numero de lignes/table: ", lignes);



    for (let cellules = 0; cellules <= 10; cellules++) {
        let maCellule = document.createElement("td");
        maCellule.textContent = (cellules * lignes).toString();
        maLigne.appendChild(maCellule);
    }
}
