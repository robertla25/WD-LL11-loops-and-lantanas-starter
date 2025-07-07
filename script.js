// Initial rendering logic – to be refactored during the lab
function addStations(stations) {
  // TODO: Refactor this loop using map() or forEach()
  for (let i = 0; i < stations.length; i++) {
    addStationElement(stations[i]);
  }
}

// 🧪 TEAM FEATURES

// 💌 Wishlist Renderer
function renderWishlist() {
  const wishlistSection = document.getElementById("wishlist");
  const ul = document.createElement("ul");

  wishlist.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  // Clear previous content and append the list
  wishlistSection.innerHTML = "<h2>Wishlist Items</h2>";
  wishlistSection.appendChild(ul);
}

// ❌ Search Feedback
function searchStations(query) {
  // TODO: Filter stations array based on query
  // TODO: Display error if none found
}

// 🌟 Random Featured Station
function pickFeaturedStation() {
  // TODO: Use Math.random to select and display a station
}

// 🏙️ Group by City
function groupStationsByCity() {
  // TODO: Loop through stations and group under each city
}

// 🔄 Filter Toggle
function toggleFilteredStations() {
  // TODO: Add toggle logic to filter stations dynamically
}

// Load stations on page start
addStations(stations);
renderWishlist();
