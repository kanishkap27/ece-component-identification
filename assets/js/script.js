// ========================================
// ECE COMPONENT IDENTIFICATION
// Search Functionality
// ========================================

const components = [

    {
        name: "Resistor",
        category: "Passive Components",
        description: "Limits current and is used for voltage division."
    },

    {
        name: "Capacitor",
        category: "Passive Components",
        description: "Stores electrical energy and is used for filtering."
    },

    {
        name: "Inductor",
        category: "Passive Components",
        description: "Stores energy in a magnetic field."
    },

    {
        name: "LED",
        category: "Active Components",
        description: "Emits light when current flows through it."
    },

    {
        name: "Diode",
        category: "Active Components",
        description: "Allows current to flow mainly in one direction."
    },

    {
        name: "Transistor",
        category: "Active Components",
        description: "Used for switching and amplification."
    },

    {
        name: "Arduino UNO",
        category: "Microcontrollers",
        description: "Popular microcontroller development board."
    },

    {
        name: "ESP32",
        category: "Microcontrollers",
        description: "Wi-Fi and Bluetooth enabled microcontroller."
    },

    {
        name: "DHT11",
        category: "Sensors",
        description: "Digital temperature and humidity sensor."
    },

    {
        name: "HC-05",
        category: "Communication Modules",
        description: "Bluetooth serial communication module."
    }

];

// ========================================
// SEARCH FUNCTION
// ========================================

function searchComponent() {

    const searchInput = document.querySelector("#searchInput");

    if (!searchInput) {
        console.log("Search input not found.");
        return;
    }

    const searchText = searchInput.value.trim().toLowerCase();

    if (searchText === "") {
        alert("Please enter a component name.");
        return;
    }

   const result = components.filter(component => {

    const nameMatch =
        component.name.toLowerCase().includes(searchText);

    const categoryMatch =
        component.category.toLowerCase().includes(searchText);

    const descriptionMatch =
        component.description.toLowerCase().includes(searchText);

    return (
        nameMatch ||
        categoryMatch ||
        descriptionMatch
    );
});

    showSearchResults(result, searchText);
}


// ========================================
// DISPLAY SEARCH RESULTS
// ========================================

function showSearchResults(results, searchText) {

    let resultSection = document.querySelector("#searchResults");

    if (!resultSection) {

        resultSection = document.createElement("section");

        resultSection.id = "searchResults";

        resultSection.style.padding = "50px 8%";

        resultSection.style.background = "#f8fafc";

        document.body.appendChild(resultSection);
    }

    if (results.length === 0) {

        resultSection.innerHTML = `
            <h2>No Components Found</h2>

            <p>
                We couldn't find a component matching
                "<strong>${searchText}</strong>".
            </p>

            <p>
                Try searching for:
                Resistor, Capacitor, LED, Arduino, ESP32, DHT11...
            </p>const 
        `;

        resultSection.scrollIntoView({
            behavior: "smooth"
        });

        return;
    }


    let html = `
        <h2 style="text-align:center;">
            Search Results
        </h2>

        <p style="text-align:center;">
            Found ${results.length} component(s)
        </p>

        <div style="
            display:grid;
            grid-template-columns:
            repeat(auto-fit, minmax(250px, 1fr));
            gap:25px;
            margin-top:30px;
        ">
    `;


    results.forEach(component => {

        html += `
            <div style="
                background:white;
                padding:25px;
                border-radius:15px;
                box-shadow:0 5px 20px rgba(0,0,0,0.08);
            ">

                <h3>
                    ${component.name}
                </h3>

                <p>
                    <strong>Category:</strong>
                    ${component.category}
                </p>

                <p>
                    ${component.description}
                </p>

                <button
                    onclick="viewComponent('${component.name}')"
                    style="
                        padding:10px 18px;
                        border:none;
                        border-radius:8px;
                        background:#2563eb;
                        color:white;
                        cursor:pointer;
                    "
                >
                    View Details
                </button>

            </div>
        `;
    });


    html += `</div>`;

    resultSection.innerHTML = html;

    resultSection.scrollIntoView({
        behavior: "smooth"
    });
}


// ========================================
// VIEW COMPONENT
// ========================================

function viewComponent(componentName) {

    window.location.href =
        "component.html?name=" +
        encodeURIComponent(componentName);

}


// ========================================
// SEARCH BUTTON
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const searchButton =
        document.querySelector("#searchButton");

    const searchInput =
        document.querySelector("#searchInput");


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            searchComponent
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "keypress",
            function (event) {

                if (event.key === "Enter") {
                    searchComponent();
                }

            }
        );

    }

});