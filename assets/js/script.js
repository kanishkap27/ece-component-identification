// ========================================
// ECE COMPONENT IDENTIFICATION
// Search Functionality
// ========================================

const components = [
    {
        name: "Resistor",
        category: "Passive Components",
        description: "A resistor limits or controls the flow of electric current in a circuit.",
        keywords: ["resistor", "resistance", "passive"]
    },

    {
        name: "Capacitor",
        category: "Passive Components",
        description: "A capacitor stores electrical energy temporarily in an electric field.",
        keywords: ["capacitor", "capacitance", "passive"]
    },

    {
        name: "Inductor",
        category: "Passive Components",
        description: "An inductor stores energy in the form of a magnetic field.",
        keywords: ["inductor", "coil", "passive"]
    },

    {
        name: "LED",
        category: "Active Components",
        description: "An LED emits light when electric current passes through it.",
        keywords: ["led", "light emitting diode", "diode"]
    },

    {
        name: "Diode",
        category: "Active Components",
        description: "A diode allows current to flow mainly in one direction.",
        keywords: ["diode", "rectifier"]
    },

    {
        name: "Transistor",
        category: "Active Components",
        description: "A transistor is used for switching and amplification in electronic circuits.",
        keywords: ["transistor", "bjt", "switch", "amplifier"]
    },

    {
        name: "LDR",
        category: "Sensors",
        description: "An LDR changes its resistance according to the intensity of light.",
        keywords: ["ldr", "light sensor", "sensor"]
    },

    {
        name: "Ultrasonic Sensor",
        category: "Sensors",
        description: "An ultrasonic sensor measures distance using ultrasonic sound waves.",
        keywords: ["ultrasonic", "distance sensor", "sensor"]
    },

    {
        name: "DHT11",
        category: "Sensors",
        description: "DHT11 is a digital sensor used to measure temperature and humidity.",
        keywords: ["dht11", "temperature", "humidity", "sensor"]
    },

    {
        name: "MQ-135",
        category: "Sensors",
        description: "MQ-135 is a gas sensor commonly used for air-quality monitoring.",
        keywords: ["mq135", "mq-135", "gas sensor", "air quality"]
    },

    {
        name: "Arduino UNO",
        category: "Microcontrollers",
        description: "Arduino UNO is a popular development board based on the ATmega328P microcontroller.",
        keywords: ["arduino", "arduino uno", "atmega328p"]
    },

    {
        name: "ESP32",
        category: "Microcontrollers",
        description: "ESP32 is a powerful microcontroller with built-in Wi-Fi and Bluetooth.",
        keywords: ["esp32", "wifi", "bluetooth", "microcontroller"]
    },

    {
        name: "ESP8266",
        category: "Microcontrollers",
        description: "ESP8266 is a Wi-Fi enabled microcontroller widely used in IoT projects.",
        keywords: ["esp8266", "wifi", "iot", "microcontroller"]
    },

    {
        name: "HC-05",
        category: "Communication Modules",
        description: "HC-05 is a Bluetooth communication module used for wireless serial communication.",
        keywords: ["hc05", "hc-05", "bluetooth", "communication"]
    },

    {
        name: "RFID Module",
        category: "Communication Modules",
        description: "An RFID module is used to identify objects using radio-frequency identification.",
        keywords: ["rfid", "communication", "reader"]
    },

    {
        name: "Relay",
        category: "Power Electronics",
        description: "A relay is an electrically operated switch used to control high-power loads.",
        keywords: ["relay", "switch", "power"]
    },

    {
        name: "Voltage Regulator",
        category: "Power Electronics",
        description: "A voltage regulator provides a stable output voltage to electronic circuits.",
        keywords: ["voltage regulator", "regulator", "power"]
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

        const keywordMatch =
            component.keywords.some(keyword =>
                keyword.toLowerCase().includes(searchText)
            );

        return (
            nameMatch ||
            categoryMatch ||
            descriptionMatch ||
            keywordMatch
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
            </p>
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