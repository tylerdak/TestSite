
                    // <div>
                    //     <h2 class="favoritesHeader">
                    //         {{ favorite.categoryEmoji1 }} {{ favorite.categoryTitle }} {{ favorite.categoryEmoji2 }}
                    //     </h2>
                    //     <a class="standardLink" href="{{ favorite.itemURL }}">
                    //         {{ favorite.itemName }}
                    //     </a>
                    //     <h3 class="favoritesDescription">
                    //         {{ favorite.content }}
                    //     </h3>
                    // </div>

var records;

// This key is for my Read-Only AirTable account; It only has read access and only to tables that I grant access to.
// Change it to your key and make sure to update the table as necessary as well below (marked)
var key = "keyQNh4jP1NqeDsDG"

function getCurrentData() {

    // Update this endpoint to your AirTable, see your API info on AirTable's site
    const endpoint = "https://api.airtable.com/v0/appaeYC2IUyie7cxh/Table%201"

    const otherParams = {
        headers: {
            "Authorization":"Bearer " + key
        },
        method: "GET"
    };

    fetch(endpoint, otherParams)
        .then(async response => { 
            console.log(response);
            if (!response.ok) {
                alert("Something went wrong with the request...")
            }
            else {
                const data = await response.json();
                console.log(JSON.stringify(data.records));
                records = data.records;
                updateListing()
            }
         })
        .catch(error => { 
            console.log(error); 
        })

    
}

function updateListing() {
    records.sort((a, b) => (a.fields.date > b.fields.date) ? -1 : 1) // Gives precedence to a if -1 is returned

    for (record in records) {
        fields = records[record].fields
        if (fields.shown) {
            document.getElementById("favoritesList").innerHTML += `
            <div>
                <h2 class="favoritesHeader">
                    ${fields.categoryTitle}
                </h2>

                <a class="standardLink" href="${fields.itemURL}">
                    ${fields.itemName}
                </a>

                <h3 class="favoritesDescription">
                    ${fields.description}
                </h3>
            </div>
            `
        }
        
    }
}

getCurrentData()