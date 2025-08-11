        // Variables globales
        let chart;
        let polygonSeries;
        let nightMode = false;
        let showBorders = true;
        const countryDataMap = new Map();
        let favorites = JSON.parse(localStorage.getItem('countryFavorites')) || [];
        let comparisonCountries = [];
        let currentCountry = null;
        let root;
        let rotationInterval = null;
        let isRotating = false;
        
        // Créer des étoiles pour le mode nuit
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const starsCount = 200;
            
            for (let i = 0; i < starsCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                
                // Position aléatoire
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                
                // Taille aléatoire
                const size = Math.random() * 2;
                
                // Durée d'animation aléatoire
                const duration = 1 + Math.random() * 2;
                
                star.style.left = `${x}%`;
                star.style.top = `${y}%`;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.animationDuration = `${duration}s`;
                
                starsContainer.appendChild(star);
            }
        }
        
        // Initialisation de la carte
        am5.ready(function() {
            createStars();
            
            root = am5.Root.new("chartdiv");
            root.setThemes([am5themes_Animated.new(root)]);
            
            // Création de la carte
            chart = root.container.children.push(am5map.MapChart.new(root, {
                panX: "rotateX",
                panY: "rotateY",
                projection: am5map.geoOrthographic(),
                rotationX: -10,
                rotationY: 0,
                background: am5.Rectangle.new(root, {
                    fill: am5.color(0xf0f0f0)
                })
            }));
            
            // Série de polygones pour les pays
            polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                exclude: ["AQ"],
                fill: am5.color(0x5475a8),
                stroke: am5.color(0xffffff),
                strokeWidth: 0.5
            }));
            
            // Style des pays
            polygonSeries.mapPolygons.template.setAll({
                tooltipText: "{name}",
                interactive: true,
                cursorOverStyle: "pointer"
            });
            
            // Style au survol
            polygonSeries.mapPolygons.template.states.create("hover", {
                fill: am5.color(0x8FBB45)
            });
            
            // Style au clic
            polygonSeries.mapPolygons.template.states.create("active", {
                fill: am5.color(0xE1B945)
            });
            
            // Style des favoris
            polygonSeries.mapPolygons.template.states.create("favorite", {
                fill: am5.color(0xFFD700)
            });
            
            // Gestion du clic sur un pays
            polygonSeries.mapPolygons.template.on("click", function(ev) {
                const dataItem = ev.target.dataItem;
                const countryName = dataItem.dataContext.name;
                currentCountry = countryName;
                showCountryInfo(countryName);
                
                // Afficher le bouton "Aller à la page du pays"
                document.getElementById('go-to-country').style.display = 'block';
                document.getElementById('go-to-country').onclick = function() {
                    window.open(`https://fr.wikipedia.org/wiki/${encodeURIComponent(countryName)}`, '_blank');
                };
                
                // Animation vers le pays sélectionné
                chart.animate({
                    key: "rotationX",
                    to: -dataItem.get("latitude"),
                    duration: 1000
                });
                chart.animate({
                    key: "rotationY",
                    to: dataItem.get("longitude"),
                    duration: 1000
                });
                
                // Mettre à jour le bouton favori
                updateFavoriteButton(countryName);
            });
            
            // Initialiser les fonctionnalités
            initSearch();
            initControls();
            initTabs();
            initFavorites();
            initComparison();
            
            // Animation initiale
            chart.appear(1000, 100);
            
            // Charger les favoris
            updateFavoritesDisplay();
        });
        
        // Afficher les informations d'un pays
        async function showCountryInfo(countryName) {
            const infoPanel = document.getElementById("control-panel");
            const loadingElement = document.getElementById("loading-data");
            
            // Afficher le panneau et l'indicateur de chargement
            infoPanel.style.display = "block";
            loadingElement.style.display = "block";
            
            // Masquer temporairement les données
            document.getElementById("country-name").textContent = countryName;
            document.getElementById("country-capital").textContent = "...";
            document.getElementById("country-population").textContent = "...";
            document.getElementById("country-area").textContent = "...";
            document.getElementById("country-region").textContent = "...";
            document.getElementById("country-languages").textContent = "...";
            document.getElementById("country-currency").textContent = "...";
            document.getElementById("country-flag").src = "";
            document.getElementById("country-link").href = "#";
            
            // Réinitialiser les onglets
            document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
            document.getElementById("info-tab").classList.add("active");
            document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
            document.querySelector(`.tab[data-tab="info"]`).classList.add("active");
            
            try {
                // Vérifier si les données sont déjà en cache
                if (countryDataMap.has(countryName)) {
                    const country = countryDataMap.get(countryName);
                    updateCountryPanel(country);
                    loadAdditionalData(country);
                } else {
                    // Récupérer les données depuis l'API
                    const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fullText=true`);
                    if (!response.ok) throw new Error("Pays non trouvé");
                    
                    const data = await response.json();
                    const country = data[0];
                    
                    // Mettre en cache les données
                    countryDataMap.set(countryName, country);
                    updateCountryPanel(country);
                    loadAdditionalData(country);
                }
            } catch (error) {
                console.error("Erreur:", error);
                document.getElementById("country-capital").textContent = "Données non disponibles";
            } finally {
                loadingElement.style.display = "none";
            }
        }
        
        // Mettre à jour le panneau d'information
        function updateCountryPanel(country) {
            document.getElementById("country-name").textContent = country.name.common;
            document.getElementById("country-capital").textContent = country.capital ? country.capital[0] : "Inconnue";
            document.getElementById("country-population").textContent = country.population ? country.population.toLocaleString() : "Inconnue";
            document.getElementById("country-area").textContent = country.area ? country.area.toLocaleString() + " km²" : "Inconnue";
            document.getElementById("country-region").textContent = country.region || "Inconnu";
            
            // Langues
            if (country.languages) {
                const languages = Object.values(country.languages).join(", ");
                document.getElementById("country-languages").textContent = languages;
            } else {
                document.getElementById("country-languages").textContent = "Inconnu";
            }
            
            // Monnaie
            if (country.currencies) {
                const currency = Object.values(country.currencies)[0];
                document.getElementById("country-currency").textContent = `${currency.name} (${currency.symbol || ""})`;
            } else {
                document.getElementById("country-currency").textContent = "Inconnue";
            }
            
            // Drapeau
            if (country.flags) {
                document.getElementById("country-flag").src = country.flags.png;
                document.getElementById("country-flag").alt = `Drapeau de ${country.name.common}`;
            }
            
            // Lien vers la page Wikipedia
            const wikiLink = `https://fr.wikipedia.org/wiki/${encodeURIComponent(country.name.common)}`;
            const countryLink = document.getElementById("country-link");
            countryLink.href = wikiLink;
            countryLink.textContent = `Wikipedia: ${country.name.common}`;
            
            // Mettre à jour le style si favori
            updateFavoriteStyle(country.name.common);
        }
        
        // Charger des données supplémentaires
        async function loadAdditionalData(country) {
            // Ici vous pourriez ajouter des appels à d'autres APIs
            // Par exemple pour les statistiques ou la météo
            
            // Exemple fictif pour les statistiques
            if (country.capital) {
                document.getElementById("country-gdp").textContent = "$" + (Math.random() * 50000).toFixed(2) + " milliards";
                document.getElementById("country-life-expectancy").textContent = (70 + Math.random() * 15).toFixed(1) + " ans";
                document.getElementById("country-hdi").textContent = (0.5 + Math.random() * 0.5).toFixed(3);
                document.getElementById("country-fertility").textContent = (1 + Math.random() * 3).toFixed(1) + " enfants/femme";
            }
            
            // Exemple fictif pour la météo
            if (country.capital) {
                const weatherConditions = ["Ensoleillé", "Nuageux", "Pluvieux", "Orageux", "Neigeux"];
                const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
                
                document.getElementById("weather-description").textContent = randomWeather;
                document.getElementById("weather-temp").textContent = (10 + Math.random() * 25).toFixed(1) + "°C";
                document.getElementById("weather-humidity").textContent = (30 + Math.random() * 60).toFixed(0) + "%";
                document.getElementById("weather-wind").textContent = (5 + Math.random() * 20).toFixed(1) + " km/h";
                
                // Icône météo fictive (en réalité vous utiliseriez une API météo)
                const weatherIcon = document.getElementById("weather-icon");
                weatherIcon.src = `https://openweathermap.org/img/wn/${["01d", "02d", "03d", "09d", "11d"][Math.floor(Math.random() * 5)]}@2x.png`;
                weatherIcon.alt = randomWeather;
            }
        }
        
        // Initialiser le moteur de recherche
        function initSearch() {
            const searchInput = document.getElementById("country-search");
            
            searchInput.addEventListener("input", function() {
                const searchTerm = this.value.toLowerCase();
                
                polygonSeries.mapPolygons.each(function(polygon) {
                    const countryName = polygon.dataItem.dataContext.name.toLowerCase();
                    if (countryName.includes(searchTerm)) {
                        polygon.show();
                    } else {
                        polygon.hide();
                    }
                });
            });
            
            // Permettre la sélection par Entrée
            searchInput.addEventListener("keypress", function(e) {
                if (e.key === "Enter") {
                    const searchTerm = this.value.trim();
                    if (searchTerm) {
                        const found = polygonSeries.mapPolygons.values.find(polygon => 
                            polygon.dataItem.dataContext.name.toLowerCase().includes(searchTerm.toLowerCase())
                        );
                        
                        if (found) {
                            const dataItem = found.dataItem;
                            currentCountry = dataItem.dataContext.name;
                            showCountryInfo(dataItem.dataContext.name);
                            updateFavoriteButton(dataItem.dataContext.name);
                            
                            chart.animate({
                                key: "rotationX",
                                to: -dataItem.get("latitude"),
                                duration: 1000
                            });
                            chart.animate({
                                key: "rotationY",
                                to: dataItem.get("longitude"),
                                duration: 1000
                            });
                        }
                    }
                }
            });
        }
        
        // Initialiser les contrôles interactifs
        function initControls() {
            // Rotation automatique
            document.getElementById("rotate-btn").addEventListener("click", function() {
                isRotating = !isRotating;
                
                if (isRotating) {
                    this.textContent = "⏸ Arrêter rotation";
                    rotationInterval = setInterval(() => {
                        chart.animate({
                            key: "rotationY",
                            to: chart.get("rotationY") + 1,
                            duration: 100
                        });
                    }, 50);
                } else {
                    this.textContent = "↻ Rotation";
                    clearInterval(rotationInterval);
                }
            });
            
            // Réinitialisation
            document.getElementById("reset-view").addEventListener("click", function() {
                chart.animate({
                    key: "rotationX",
                    to: -10,
                    duration: 1000
                });
                chart.animate({
                    key: "rotationY",
                    to: 0,
                    duration: 1000
                });
                
                // Si la rotation était active, on l'arrête
                if (isRotating) {
                    isRotating = false;
                    clearInterval(rotationInterval);
                    document.getElementById("rotate-btn").textContent = "↻ Rotation";
                }
            });
            
            // Mode nuit/jour
            document.getElementById("night-mode").addEventListener("click", function() {
                nightMode = !nightMode;
                document.body.classList.toggle('night-mode', nightMode);
                
                if (nightMode) {
                    // Mode nuit
                    chart.set("background", am5.Rectangle.new(root, {
                        fill: am5.color(0x121212)
                    }));
                    polygonSeries.mapPolygons.template.set("fill", am5.color(0x3a4a6b));
                    this.textContent = "☀️ Mode Jour";
                    root.setThemes([am5themes_Dark.new(root)]);
                } else {
                    // Mode jour
                    chart.set("background", am5.Rectangle.new(root, {
                        fill: am5.color(0xf0f0f0)
                    }));
                    polygonSeries.mapPolygons.template.set("fill", am5.color(0x5475a8));
                    this.textContent = "🌙 Mode Nuit";
                    root.setThemes([am5themes_Animated.new(root)]);
                }
            });
            
            // Frontières
            document.getElementById("toggle-borders").addEventListener("click", function() {
                showBorders = !showBorders;
                polygonSeries.mapPolygons.template.set("strokeWidth", showBorders ? 0.5 : 0);
                this.textContent = showBorders ? "🗺️ Cacher frontières" : "🗺️ Afficher frontières";
            });
            
            // Fermeture du panneau
            document.getElementById("close-panel").addEventListener("click", function() {
                document.getElementById("control-panel").style.display = "none";
                document.getElementById('go-to-country').style.display = 'none';
            });
        }
        
        // Initialiser le système d'onglets
        function initTabs() {
            document.querySelectorAll(".tab").forEach(tab => {
                tab.addEventListener("click", function() {
                    const tabId = this.getAttribute("data-tab");
                    
                    // Désactiver tous les onglets
                    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
                    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
                    
                    // Activer l'onglet sélectionné
                    this.classList.add("active");
                    document.getElementById(`${tabId}-tab`).classList.add("active");
                });
            });
        }
        
        // Initialiser le système de favoris
        function initFavorites() {
            // Bouton d'ajout aux favoris
            document.getElementById("favorite-btn").addEventListener("click", function() {
                if (!currentCountry) return;
                
                const index = favorites.indexOf(currentCountry);
                if (index === -1) {
                    favorites.push(currentCountry);
                } else {
                    favorites.splice(index, 1);
                }
                
                localStorage.setItem('countryFavorites', JSON.stringify(favorites));
                updateFavoriteButton(currentCountry);
                updateFavoriteStyle(currentCountry);
                updateFavoritesDisplay();
            });
            
            // Bouton d'affichage des favoris
            document.getElementById("favorites-btn").addEventListener("click", function() {
                const panel = document.getElementById("favorites-panel");
                panel.style.display = panel.style.display === "block" ? "none" : "block";
            });
        }
        
        // Mettre à jour le bouton favori
        function updateFavoriteButton(countryName) {
            const favoriteBtn = document.getElementById("favorite-btn");
            if (favorites.includes(countryName)) {
                favoriteBtn.textContent = "★ Retirer des favoris";
                favoriteBtn.classList.add("secondary");
            } else {
                favoriteBtn.textContent = "⭐ Ajouter aux favoris";
                favoriteBtn.classList.remove("secondary");
            }
        }
        
        // Mettre à jour le style des pays favoris
        function updateFavoriteStyle(countryName) {
            polygonSeries.mapPolygons.each(function(polygon) {
                if (polygon.dataItem.dataContext.name === countryName) {
                    if (favorites.includes(countryName)) {
                        polygon.states.apply("favorite");
                    } else {
                        polygon.states.apply("default");
                    }
                }
            });
        }
        
        // Mettre à jour l'affichage des favoris
        function updateFavoritesDisplay() {
            const favoritesList = document.getElementById("favorites-list");
            favoritesList.innerHTML = "";
            
            if (favorites.length === 0) {
                favoritesList.innerHTML = "<p>Aucun favori pour le moment</p>";
                return;
            }
            
            favorites.forEach(countryName => {
                const country = countryDataMap.get(countryName);
                const favoriteItem = document.createElement("div");
                favoriteItem.className = "favorite-item";
                favoriteItem.innerHTML = `
                    ${country ? `<img src="${country.flags.png}" class="favorite-flag">` : ""}
                    ${countryName}
                `;
                
                favoriteItem.addEventListener("click", function() {
                    currentCountry = countryName;
                    showCountryInfo(countryName);
                    updateFavoriteButton(countryName);
                    
                    // Trouver le pays dans la série
                    const polygon = polygonSeries.mapPolygons.values.find(p => 
                        p.dataItem.dataContext.name === countryName
                    );
                    
                    if (polygon) {
                        const dataItem = polygon.dataItem;
                        chart.animate({
                            key: "rotationX",
                            to: -dataItem.get("latitude"),
                            duration: 1000
                        });
                        chart.animate({
                            key: "rotationY",
                            to: dataItem.get("longitude"),
                            duration: 1000
                        });
                    }
                });
                
                favoritesList.appendChild(favoriteItem);
            });
        }
        
        // Initialiser le système de comparaison
        function initComparison() {
            // Bouton de comparaison
            document.getElementById("compare-btn").addEventListener("click", function() {
                const panel = document.getElementById("comparison-panel");
                panel.style.display = panel.style.display === "block" ? "none" : "block";
                updateComparisonList();
            });
            
            // Bouton d'action de comparaison
            document.getElementById("compare-action-btn").addEventListener("click", function() {
                if (comparisonCountries.length < 2) {
                    alert("Veuillez sélectionner au moins 2 pays à comparer");
                    return;
                }
                
                // Ici vous implémenteriez la logique de comparaison
                alert(`Comparaison entre: ${comparisonCountries.join(", ")}`);
                
                // Pour une vraie implémentation, vous pourriez:
                // 1. Créer un tableau comparatif
                // 2. Afficher des graphiques comparatifs
                // 3. Mettre en évidence les pays sur la carte
            });
        }
        
        // Mettre à jour la liste de comparaison
        function updateComparisonList() {
            const comparisonList = document.getElementById("comparison-list");
            comparisonList.innerHTML = "";
            
            // Ajouter tous les pays disponibles
            polygonSeries.dataItems.each(function(dataItem) {
                const countryName = dataItem.dataContext.name;
                const isSelected = comparisonCountries.includes(countryName);
                const country = countryDataMap.get(countryName);
                
                const comparisonItem = document.createElement("div");
                comparisonItem.className = "comparison-item";
                comparisonItem.innerHTML = `
                    <input type="checkbox" id="compare-${countryName}" ${isSelected ? "checked" : ""}>
                    <label for="compare-${countryName}" style="margin-left: 5px; cursor: pointer;">
                        ${country ? `<img src="${country.flags.png}" class="comparison-flag">` : ""}
                        ${countryName}
                    </label>
                `;
                
                const checkbox = comparisonItem.querySelector("input");
                checkbox.addEventListener("change", function() {
                    if (this.checked) {
                        comparisonCountries.push(countryName);
                    } else {
                        const index = comparisonCountries.indexOf(countryName);
                        if (index !== -1) {
                            comparisonCountries.splice(index, 1);
                        }
                    }
                });
                
                comparisonList.appendChild(comparisonItem);
            });
        }