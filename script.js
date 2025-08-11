const countriesData = [
    { name: "Afghanistan", capital: "Kaboul", continent: "Asie", flag: "drapeaux/afghanistan.png", page: "pays/afghanistan.html"},
{ name: "Afrique du Sud", capital: "Pretoria", continent: "Afrique", flag: "drapeaux/afrique du sud.png" },
    { name: "Albanie", capital: "Tirana", continent: "Europe", flag: "drapeaux/albanie.png" },
    { name: "Algérie", capital: "Alger", continent: "Afrique", flag: "drapeaux/algerie.png" },
    { name: "Allemagne", capital: "Berlin", continent: "Europe", flag: "drapeaux/allemagne.png" },
    { name: "Andorre", capital: "Andorre-la-Vieille", continent: "Europe", flag: "drapeaux/andorre.png" },
    { name: "Angola", capital: "Luanda", continent: "Afrique", flag: "drapeaux/angola.png" },
    { name: "Arabie Saoudite", capital: "Riyad", continent: "Asie", flag: "drapeaux/arabie saoudite.png" },
    { name: "Argentine", capital: "Buenos Aires", continent: "Amérique du Sud", flag: "drapeaux/argentine.png" },
    { name: "Australie", capital: "Canberra", continent: "Océanie", flag: "drapeaux/australie.png" },
    { name: "Autriche", capital: "Vienne", continent: "Europe", flag: "drapeaux/autriche.png" },
    { name: "Bahamas", capital: "Nassau", continent: "Amérique du Nord", flag: "drapeaux/bahamas.png" },
    { name: "Bangladesh", capital: "Dacca", continent: "Asie", flag: "drapeaux/bangladesh.png" },
    { name: "Belgique", capital: "Bruxelles", continent: "Europe", flag: "drapeaux/belgique.png" },
    { name: "Bolivie", capital: "Sucre", continent: "Amérique du Sud", flag: "drapeaux/bolivie.png" },
    { name: "Brésil", capital: "Brasilia", continent: "Amérique du Sud", flag: "drapeaux/bresil.png" },
    { name: "Cameroun", capital: "Yaoundé", continent: "Afrique", flag: "drapeaux/cameroun.png" },
    { name: "Canada", capital: "Ottawa", continent: "Amérique du Nord", flag: "drapeaux/canada.png" },
    { name: "Chili", capital: "Santiago", continent: "Amérique du Sud", flag: "drapeaux/chili.png" },
    { name: "Chine", capital: "Pékin", continent: "Asie", flag: "drapeaux/chine.png" },
    { name: "Colombie", capital: "Bogota", continent: "Amérique du Sud", flag: "drapeaux/colombie.png" },
    { name: "Corée du Nord", capital: "Pyongyang", continent: "Asie", flag: "drapeaux/Corée_nord.png" },
    { name: "Corée du Sud", capital: "Séoul", continent: "Asie", flag: "drapeaux/coree_du_sud.png" },
    { name: "Côte d'Ivoire", capital: "Yamoussoukro", continent: "Afrique", flag: "drapeaux/Cote divoire.png" },
    { name: "Cuba", capital: "La Havane", continent: "Amérique du Nord", flag: "drapeaux/cuba.png" },
    { name: "Danemark", capital: "Copenhague", continent: "Europe", flag: "drapeaux/danemark.png" },
    { name: "Égypte", capital: "Le Caire", continent: "Afrique", flag: "drapeaux/egypte.png" },
    { name: "Émirats Arabes Unis", capital: "Abou Dabi", continent: "Asie", flag: "drapeaux/Emirats arabes unis.png" },
    { name: "Équateur", capital: "Quito", continent: "Amérique du Sud", flag: "drapeaux/Équateur.png" },
    { name: "Espagne", capital: "Madrid", continent: "Europe", flag: "drapeaux/espagne.png" },
    { name: "États-Unis", capital: "Washington", continent: "Amérique du Nord", flag: "drapeaux/etats_unis.jpg" },
    { name: "Éthiopie", capital: "Addis-Abeba", continent: "Afrique", flag: "drapeaux/Ethiopie.png" },
    { name: "Fidji", capital: "Suva", continent: "Océanie", flag: "drapeaux/Fidji.png" },
    { name: "Finlande", capital: "Helsinki", continent: "Europe", flag: "drapeaux/Finlande.png" },
    { name: "France", capital: "Paris", continent: "Europe", flag: "drapeaux/france.png" },
    { name: "Ghana", capital: "Accra", continent: "Afrique", flag: "drapeaux/Ghana.png" },
    { name: "Grèce", capital: "Athènes", continent: "Europe", flag: "drapeaux/grece.png" },
    { name: "Inde", capital: "New Delhi", continent: "Asie", flag: "drapeaux/inde.png" },
    { name: "Indonésie", capital: "Jakarta", continent: "Asie", flag: "drapeaux/indonesie.png" },
    { name: "Iran", capital: "Téhéran", continent: "Asie", flag: "drapeaux/Iran.png" },
    { name: "Israël", capital: "Jérusalem", continent: "Asie", flag: "drapeaux/Israël.png" },
    { name: "Italie", capital: "Rome", continent: "Europe", flag: "drapeaux/italie.png" },
    { name: "Irlande", capital: "Dublin", continent: "Europe", flag: "drapeaux/Irlande.png" },
    { name: "Jamaïque", capital: "Kingston", continent: "Amérique du Nord", flag: "drapeaux/Jamaïque.png" },
    { name: "Japon", capital: "Tokyo", continent: "Asie", flag: "drapeaux/japon.png" },
    { name: "Kenya", capital: "Nairobi", continent: "Afrique", flag: "drapeaux/Kenya.png" },
    { name: "Madagascar", capital: "Antananarivo", continent: "Afrique", flag: "drapeaux/Madagascar.png" },
    { name: "Malaisie", capital: "Kuala Lumpur", continent: "Asie", flag: "drapeaux/Malaisie.png" },
    { name: "Mali", capital: "Bamako", continent: "Afrique", flag: "drapeaux/Mali.png" },
    { name: "Maroc", capital: "Rabat", continent: "Afrique", flag: "drapeaux/maroc.png" },
    { name: "Mexique", capital: "Mexico", continent: "Amérique du Nord", flag: "drapeaux/mexique.png" },
    { name: "Nigéria", capital: "Abuja", continent: "Afrique", flag: "drapeaux/nigeria.png" },
    { name: "Norvège", capital: "Oslo", continent: "Europe", flag: "drapeaux/norvege.png" },
    { name: "Nouvelle-Zélande", capital: "Wellington", continent: "Océanie", flag: "drapeaux/nouvelle_zelande.png" },
    { name: "Panama", capital: "Panama", continent: "Amérique du Nord", flag: "drapeaux/Panama.png" },
    { name: "Papouasie-Nouvelle-Guinée", capital: "Port Moresby", continent: "Océanie", flag: "drapeaux/Papouasie.png" },
    { name: "Paraguay", capital: "Asunción", continent: "Amérique du Sud", flag: "drapeaux/Paraguay.png" },
    { name: "Pays-Bas", capital: "Amsterdam", continent: "Europe", flag: "drapeaux/pays_bas.png" },
    { name: "Pérou", capital: "Lima", continent: "Amérique du Sud", flag: "drapeaux/perou.png" },
    { name: "Philippines", capital: "Manille", continent: "Asie", flag: "drapeaux/Philippines.png" },
    { name: "Pologne", capital: "Varsovie", continent: "Europe", flag: "drapeaux/pologne.png" },
    { name: "Portugal", capital: "Lisbonne", continent: "Europe", flag: "drapeaux/portugal.png" },
    { name: "République Dominicaine", capital: "Saint-Domingue", continent: "Amérique du Nord", flag: "drapeaux/R_dominicaine.png" },
    { name: "République Tchèque", capital: "Prague", continent: "Europe", flag: "drapeaux/R_tcheque.png" },
    { name: "Royaume-Uni", capital: "Londres", continent: "Europe", flag: "drapeaux/royaume-uni.png" },
    { name: "Russie", capital: "Moscou", continent: "Europe/Asie", flag: "drapeaux/russie.png" },
    { name: "Sénégal", capital: "Dakar", continent: "Afrique", flag: "drapeaux/Sénégal.png" },
    { name: "Singapour", capital: "Singapour", continent: "Asie", flag: "drapeaux/Singapour.png" },
    { name: "Suède", capital: "Stockholm", continent: "Europe", flag: "drapeaux/suede.png" },
    { name: "Suisse", capital: "Berne", continent: "Europe", flag: "drapeaux/suisse.png" },
    { name: "Ukraine", capital: "Kiev", continent: "Europe", flag: "drapeaux/Ukraine.png" },
    { name: "Uruguay", capital: "Montevideo", continent: "Amérique du Sud", flag: "drapeaux/uruguay.png" },
    { name: "Tanzanie", capital: "Dodoma", continent: "Afrique", flag: "drapeaux/Tanzanie.png" },
    { name: "Thaïlande", capital: "Bangkok", continent: "Asie", flag: "drapeaux/thailande.png" },
    { name: "Tunisie", capital: "Tunis", continent: "Afrique", flag: "drapeaux/tinisie.png" },
    { name: "Turquie", capital: "Ankara", continent: "Asie/Europe", flag: "drapeaux/turquie.png" },
    { name: "Vanuatu", capital: "Port-Vila", continent: "Océanie", flag: "drapeaux/Vanuatu.png" },
    { name: "Venezuela", capital: "Caracas", continent: "Amérique du Sud", flag: "drapeaux/Venezuela.png" },
    { name: "Viêt Nam", capital: "Hanoï", continent: "Asie", flag: "drapeaux/Vietnam.png" },
    { name: "Zambie", capital: "Lusaka", continent: "Afrique", flag: "drapeaux/zambie.png" },

    // NOUVEAUX PAYS AJOUTÉS
    { name: "Arménie", capital: "Erevan", continent: "Asie", flag: "drapeaux/armenie.png" },
    { name: "Azerbaïdjan", capital: "Bakou", continent: "Asie", flag: "drapeaux/azerbaidjan.png" },
    { name: "Bahreïn", capital: "Manama", continent: "Asie", flag: "drapeaux/bahrein.png" },
    { name: "Barbade", capital: "Bridgetown", continent: "Amérique du Nord", flag: "drapeaux/barbade.png" },
    { name: "Bénin", capital: "Porto-Novo", continent: "Afrique", flag: "drapeaux/benin.png" },
    { name: "Bhoutan", capital: "Thimphou", continent: "Asie", flag: "drapeaux/bhoutan.png" },
    { name: "Biélorussie", capital: "Minsk", continent: "Europe", flag: "drapeaux/bielorussie.png" },
    { name: "Bosnie-Herzégovine", capital: "Sarajevo", continent: "Europe", flag: "drapeaux/bosnie_herzegovine.png" },
    { name: "Botswana", capital: "Gaborone", continent: "Afrique", flag: "drapeaux/botswana.png" },
    { name: "Bulgarie", capital: "Sofia", continent: "Europe", flag: "drapeaux/bulgarie.png" },
    { name: "Burkina Faso", capital: "Ouagadougou", continent: "Afrique", flag: "drapeaux/burkina_faso.png" },
    { name: "Burundi", capital: "Gitega", continent: "Afrique", flag: "drapeaux/burundi.png" },
    { name: "Cambodge", capital: "Phnom Penh", continent: "Asie", flag: "drapeaux/cambodge.png" },
    { name: "Cap-Vert", capital: "Praia", continent: "Afrique", flag: "drapeaux/cap_vert.png" },
    { name: "Centrafrique", capital: "Bangui", continent: "Afrique", flag: "drapeaux/centrafrique.png" },
    { name: "Comores", capital: "Moroni", continent: "Afrique", flag: "drapeaux/comores.png" },
    { name: "Congo (Brazzaville)", capital: "Brazzaville", continent: "Afrique", flag: "drapeaux/congo_brazzaville.png" },
    { name: "Congo (Kinshasa)", capital: "Kinshasa", continent: "Afrique", flag: "drapeaux/congo_kinshasa.png" },
    { name: "Costa Rica", capital: "San José", continent: "Amérique du Nord", flag: "drapeaux/costa_rica.png" },
    { name: "Croatie", capital: "Zagreb", continent: "Europe", flag: "drapeaux/croatie.png" },
    { name: "Djibouti", capital: "Djibouti", continent: "Afrique", flag: "drapeaux/djibouti.png" },
    { name: "Dominique", capital: "Roseau", continent: "Amérique du Nord", flag: "drapeaux/dominique.png" },
    { name: "Érythrée", capital: "Asmara", continent: "Afrique", flag: "drapeaux/erythree.png" },
    { name: "Estonie", capital: "Tallinn", continent: "Europe", flag: "drapeaux/estonie.png" },
    { name: "Eswatini", capital: "Mbabane", continent: "Afrique", flag: "drapeaux/eswatini.png" },
    { name: "Gabon", capital: "Libreville", continent: "Afrique", flag: "drapeaux/gabon.png" },
    { name: "Gambie", capital: "Banjul", continent: "Afrique", flag: "drapeaux/gambie.png" },
    { name: "Géorgie", capital: "Tbilissi", continent: "Asie", flag: "drapeaux/georgie.png" },
    { name: "Grenade", capital: "Saint-George's", continent: "Amérique du Nord", flag: "drapeaux/grenade.png" },
    { name: "Guatemala", capital: "Guatemala", continent: "Amérique du Nord", flag: "drapeaux/guatemala.png" },
    { name: "Guinée", capital: "Conakry", continent: "Afrique", flag: "drapeaux/guinee.png" },
    { name: "Guinée-Bissau", capital: "Bissau", continent: "Afrique", flag: "drapeaux/guinee_bissau.png" },
    { name: "Guinée équatoriale", capital: "Malabo", continent: "Afrique", flag: "drapeaux/guinee_equatoriale.png" },
    { name: "Guyana", capital: "Georgetown", continent: "Amérique du Sud", flag: "drapeaux/guyana.png" },
    { name: "Haïti", capital: "Port-au-Prince", continent: "Amérique du Nord", flag: "drapeaux/haiti.png" },
    { name: "Honduras", capital: "Tegucigalpa", continent: "Amérique du Nord", flag: "drapeaux/honduras.png" },
    { name: "Hongrie", capital: "Budapest", continent: "Europe", flag: "drapeaux/hongrie.png" },
    { name: "Irak", capital: "Bagdad", continent: "Asie", flag: "drapeaux/irak.png" },
    { name: "Islande", capital: "Reykjavik", continent: "Europe", flag: "drapeaux/islande.png" },
    { name: "Kazakhstan", capital: "Astana", continent: "Asie", flag: "drapeaux/kazakhstan.png" },
    { name: "Kirghizistan", capital: "Bichkek", continent: "Asie", flag: "drapeaux/kirghizistan.png" },
    { name: "Koweït", capital: "Koweït City", continent: "Asie", flag: "drapeaux/koweit.png" },
    { name: "Laos", capital: "Vientiane", continent: "Asie", flag: "drapeaux/laos.png" },
    { name: "Lesotho", capital: "Maseru", continent: "Afrique", flag: "drapeaux/lesotho.png" },
    { name: "Lettonie", capital: "Riga", continent: "Europe", flag: "drapeaux/lettonie.png" },
    { name: "Liban", capital: "Beyrouth", continent: "Asie", flag: "drapeaux/liban.png" },
    { name: "Libéria", capital: "Monrovia", continent: "Afrique", flag: "drapeaux/liberia.png" },
    { name: "Libye", capital: "Tripoli", continent: "Afrique", flag: "drapeaux/libye.png" },
    { name: "Liechtenstein", capital: "Vaduz", continent: "Europe", flag: "drapeaux/liechtenstein.png" },
    { name: "Lituanie", capital: "Vilnius", continent: "Europe", flag: "drapeaux/lituanie.png" },
    { name: "Luxembourg", capital: "Luxembourg", continent: "Europe", flag: "drapeaux/luxembourg.png" },
    { name: "Macédoine du Nord", capital: "Skopje", continent: "Europe", flag: "drapeaux/macedoine_du_nord.png" },
    { name: "Malawi", capital: "Lilongwe", continent: "Afrique", flag: "drapeaux/malawi.png" },
    { name: "Maldives", capital: "Malé", continent: "Asie", flag: "drapeaux/maldives.png" },
    { name: "Malte", capital: "La Valette", continent: "Europe", flag: "drapeaux/malte.png" },
    { name: "Mauritanie", capital: "Nouakchott", continent: "Afrique", flag: "drapeaux/mauritanie.png" },
    { name: "Micronésie", capital: "Palikir", continent: "Océanie", flag: "drapeaux/micronesie.png" },
    { name: "Moldavie", capital: "Chișinău", continent: "Europe", flag: "drapeaux/moldavie.png" },
    { name: "Monaco", capital: "Monaco", continent: "Europe", flag: "drapeaux/monaco.png" },
    { name: "Mongolie", capital: "Oulan-Bator", continent: "Asie", flag: "drapeaux/mongolie.png" },
    { name: "Monténégro", capital: "Podgorica", continent: "Europe", flag: "drapeaux/montenegro.png" },
    { name: "Mozambique", capital: "Maputo", continent: "Afrique", flag: "drapeaux/mozambique.png" },
    { name: "Myanmar", capital: "Naypyidaw", continent: "Asie", flag: "drapeaux/myanmar.png" },
    { name: "Namibie", capital: "Windhoek", continent: "Afrique", flag: "drapeaux/namibie.png" },
    { name: "Nauru", capital: "Yaren", continent: "Océanie", flag: "drapeaux/nauru.png" },
    { name: "Népal", capital: "Katmandou", continent: "Asie", flag: "drapeaux/nepal.png" },
    { name: "Nicaragua", capital: "Managua", continent: "Amérique du Nord", flag: "drapeaux/nicaragua.png" },
    { name: "Niger", capital: "Niamey", continent: "Afrique", flag: "drapeaux/niger.png" },
    { name: "Oman", capital: "Mascate", continent: "Asie", flag: "drapeaux/oman.png" },
    { name: "Ouganda", capital: "Kampala", continent: "Afrique", flag: "drapeaux/ouganda.png" },
    { name: "Ouzbékistan", capital: "Tachkent", continent: "Asie", flag: "drapeaux/ouzbekistan.png" },
    { name: "Pakistan", capital: "Islamabad", continent: "Asie", flag: "drapeaux/pakistan.png" },
    { name: "Palaos", capital: "Ngerulmud", continent: "Océanie", flag: "drapeaux/palaos.png" },
    { name: "Palestine", capital: "Jérusalem-Est (revendiquée)", continent: "Asie", flag: "drapeaux/palestine.png" }, // Note: statut contesté
    { name: "Qatar", capital: "Doha", continent: "Asie", flag: "drapeaux/qatar.png" },
    { name: "Roumanie", capital: "Bucarest", continent: "Europe", flag: "drapeaux/roumanie.png" },
    { name: "Rwanda", capital: "Kigali", continent: "Afrique", flag: "drapeaux/rwanda.png" },
    { name: "Saint-Kitts-et-Nevis", capital: "Basseterre", continent: "Amérique du Nord", flag: "drapeaux/saint_kitts_et_nevis.png" },
    { name: "Sainte-Lucie", capital: "Castries", continent: "Amérique du Nord", flag: "drapeaux/sainte_lucie.png" },
    { name: "Saint-Marin", capital: "Saint-Marin", continent: "Europe", flag: "drapeaux/saint_marin.png" },
    { name: "Saint-Vincent-et-les-Grenadines", capital: "Kingstown", continent: "Amérique du Nord", flag: "drapeaux/saint_vincent_et_les_grenadines.png" },
    { name: "Salomon", capital: "Honiara", continent: "Océanie", flag: "drapeaux/salomon.png" },
    { name: "Salvador", capital: "San Salvador", continent: "Amérique du Nord", flag: "drapeaux/salvador.png" },
    { name: "Samoa", capital: "Apia", continent: "Océanie", flag: "drapeaux/samoa.png" },
    { name: "Sao Tomé-et-Principe", capital: "São Tomé", continent: "Afrique", flag: "drapeaux/sao_tome_et_principe.png" },
    { name: "Serbie", capital: "Belgrade", continent: "Europe", flag: "drapeaux/serbie.png" },
    { name: "Sierra Leone", capital: "Freetown", continent: "Afrique", flag: "drapeaux/sierra_leone.png" },
    { name: "Slovaquie", capital: "Bratislava", continent: "Europe", flag: "drapeaux/slovaquie.png" },
    { name: "Slovénie", capital: "Ljubljana", continent: "Europe", flag: "drapeaux/slovenie.png" },
    { name: "Somalie", capital: "Mogadiscio", continent: "Afrique", flag: "drapeaux/somalie.png" },
    { name: "Soudan", capital: "Khartoum", continent: "Afrique", flag: "drapeaux/soudan.png" },
    { name: "Soudan du Sud", capital: "Djuba", continent: "Afrique", flag: "drapeaux/soudan_du_sud.png" },
    { name: "Sri Lanka", capital: "Sri Jayawardenepura Kotte", continent: "Asie", flag: "drapeaux/sri_lanka.png" },
    { name: "Suriname", capital: "Paramaribo", continent: "Amérique du Sud", flag: "drapeaux/suriname.png" },
    { name: "Syrie", capital: "Damas", continent: "Asie", flag: "drapeaux/syrie.png" },
    { name: "Tadjikistan", capital: "Douchanbé", continent: "Asie", flag: "drapeaux/tadjikistan.png" },
    { name: "Timor oriental", capital: "Dili", continent: "Asie", flag: "drapeaux/timor_oriental.png" },
    { name: "Togo", capital: "Lomé", continent: "Afrique", flag: "drapeaux/togo.png" },
    { name: "Tonga", capital: "Nukualofa", continent: "Océanie", flag: "drapeaux/tonga.png" },
    { name: "Trinité-et-Tobago", capital: "Port-d'Espagne", continent: "Amérique du Nord", flag: "drapeaux/trinite_et_tobago.png" },
    { name: "Turkménistan", capital: "Achgabat", continent: "Asie", flag: "drapeaux/turkmenistan.png" },
    { name: "Tuvalu", capital: "Funafuti", continent: "Océanie", flag: "drapeaux/tuvalu.png" },
    { name: "Vatican", capital: "Cité du Vatican", continent: "Europe", flag: "drapeaux/vatican.png" },
    { name: "Yémen", capital: "Sanaa", continent: "Asie", flag: "drapeaux/yemen.png" },
    { name: "Zimbabwe", capital: "Harare", continent: "Afrique", flag: "drapeaux/zimbabwe.png" }, 
    { name: "Maurice", capital: "Port-Louis", continent: "Afrique", flag: "drapeaux/drapeau_generique.png" },
    { name: "Seychelles", capital: "Victoria", continent: "Afrique", flag: "drapeaux/drapeau_generique.png" },
    { name: "Tchad", capital: "N'Djamena", continent: "Afrique", flag: "drapeaux/drapeau_generique.png" },
    { name: "Antigua-et-Barbuda", capital: "Saint John's", continent: "Amérique du Nord", flag: "drapeaux/drapeau_generique.png" },
    { name: "Belize", capital: "Belmopan", continent: "Amérique du Nord", flag: "drapeaux/drapeau_generique.png" },
    { name: "Jordanie", capital: "Amman", continent: "Asie", flag: "drapeaux/drapeau_generique.png" },
    { name: "Brunei", capital: "Bandar Seri Begawan", continent: "Asie", flag: "drapeaux/drapeau_generique.png" },
    { name: "Chypre", capital: "Nicosie", continent: "Europe", flag: "drapeaux/drapeau_generique.png" },
    { name: "Kosovo", capital: "Pristina", continent: "Europe", flag: "drapeaux/drapeau_generique.png" },
    { name: "Îles Marshall", capital: "Majuro", continent: "Océanie", flag: "drapeaux/drapeau_generique.png" },
    { name: "Kiribati", capital: "Tarawa-Sud", continent: "Océanie", flag: "drapeaux/drapeau_generique.png" },

];

const grdsect = document.getElementById('grdsect');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');
const noResultsMessage = document.getElementById('no-results');

// Fonction pour créer une fiche de pays
function createCountryCard(country) {
    const card = document.createElement('section');
    card.classList.add('country-card');

    card.innerHTML = `
        <h2>${country.name}</h2>
        <img class="flag-img" src="${country.flag}" alt="Drapeau de ${country.name}">
        <table>
            <tr>
                <td>Capitale:</td>
                <td>${country.capital}</td>
            </tr>
            <tr>
                <td>Continent:</td>
                <td>${country.continent}</td>
            </tr>
        </table>
        <a class="details-link" href="${country.page}">Aller</a>
    `; // `encodeURIComponent` est utilisé pour les noms de pays avec des caractères spéciaux dans l'URL.

    return card;
}

// Fonction pour afficher les pays
function displayCountries(countriesToDisplay) {
    grdsect.innerHTML = ''; // Vide le conteneur actuel des pays
    if (countriesToDisplay.length === 0) {
        noResultsMessage.style.display = 'block'; // Affiche le message "aucun résultat"
    } else {
        noResultsMessage.style.display = 'none'; // Cache le message
        countriesToDisplay.forEach(country => {
            const card = createCountryCard(country);
            grdsect.appendChild(card); // Ajoute la fiche de pays au conteneur
        });
    }
}

// Fonction de recherche/filtrage des pays
function searchCountries() {
    const searchTerm = searchInput.value.toLowerCase(); // Récupère la valeur de l'input en minuscules
    const filteredCountries = countriesData.filter(country => {
        // Vérifie si le nom, la capitale ou le continent inclut le terme de recherche
        return country.name.toLowerCase().includes(searchTerm) ||
               country.capital.toLowerCase().includes(searchTerm) ||
               country.continent.toLowerCase().includes(searchTerm);
    });
    displayCountries(filteredCountries); // Affiche les pays filtrés
}


// Événements
// Au chargement de la page, afficher tous les pays
document.addEventListener('DOMContentLoaded', () => {
    displayCountries(countriesData);
});

// Quand l'utilisateur tape dans la barre de recherche
searchInput.addEventListener('input', searchCountries);

// Pour empêcher le rechargement de la page quand on soumet le formulaire de recherche
searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire
    searchCountries(); // Exécute la recherche
});