"use strict";

// Globals

// Should all items have same width
const shouldFixSize = false;
// Name of the class of the size
const sizeClassName = "widest";

// Merge sections with the same names
const mergeSections = true;

// File and configuration
const othersFile = "more/other.json";
const topInfo = [
    { "Main": [
        { name: "Email", url: "https://wednesday.mxrouting.net/webmail", description: "Email website" },
        { name: "Message", url: "https://app.schildi.chat/", description: "Messaging website" }
    ]}
];
const bottomInfo = [
    { "NixOS": [
        { name: "Packages", url: "https://search.nixos.org/packages", description: "NixOS Search Packages" },
        { name: "Options", url: "https://search.nixos.org/options", description: "NixOS Search Options" },
        { name: "Home Manager", url: "https://mipmip.github.io/home-manager-option-search", description: "Home Manager Options for NixOS" }
    ]},
    { "More": [
        { name: "Github", url: "https://github.com/luis-caldas", description: "Personal Github" },
        { name: "Flashing", url: "https://morse.my.to", description: "Flashing training website" }
    ]},
    { "Tech": [
	{ name: "Firmware", url: "https://fwupd.org", description: "Linux Firmwares" },
        { name: "Circuit", url: "https://www.falstad.com/circuit/circuitjs.html", description: "Electronic Circuits Simulator" },
        { name: "DevDocs", url: "https://devdocs.io", description: "Programming Documentation" },
        { name: "Carbon", url: "https://carbon.now.sh", description: "Create Code Screenshots" },
        { name: "BinVis", url: "https://binvis.io", description: "Binary Visualiser" },
        { name: "HexEdit", url: "https://hexed.it", description: "Hexadecimal Editor" },
        { name: "VIM", url: "https://vim.rtorr.com", description: "VIM Cheat Sheet" },
        { name: "STRFTIME", url: "https://strftime.net", description: "STRFTIME Syntax" },
        { name: "Crontab", url: "https://crontab.guru", description: "Crontab Syntax" },
        { name: "Time", url: "https://time.is", description: "Accurate Time" },
        { name: "Wormhole", url: "https://webwormhole.io", description: "Magic Wormhole File Transfer" },
        { name: "MonkeyType", url: "https://monkeytype.com", description: "Typing Speed Test" },
        { name: "Switches", url: "https://switches.mx/switches", description: "Database of Mechanical Keyboard Switches" },
        { name: "VIA", url: "https://usevia.app", description: "VIA Online Configurator" },
        { name: "QMK", url: "https://config.qmk.fm", description: "QMK Online Configurator" }
    ]},
    { "Finance": [
        { name: "FinViz", url: "https://finviz.com/map.ashx", description: "Finance Visualiser" }
    ]},
    { "SpeedTest": [
        { name: "Fast", url: "https://fast.com", description: "Internet Speed Test" },
        { name: "Speedtest", url: "https://www.speedtest.net", description: "Internet Speed Test" },
        { name: "Eir", url: "https://www.eir.ie/helpandsupport/broadbandspeedtest", description: "Internet Speed Test" }
    ]},
    { "Flight": [
        { name: "Airspace", url: "https://airspace.flyryte.com", description: "IAA Map" },
        { name: "ADS-B", url: "https://globe.adsbexchange.com/?SiteLat=51.8491&SiteLon=-8.4899&centerReceiver&zoom=8&enableLabels&extendedLabels=2&noVanish&hideSideBar&rangeRings=0&altitudeChart=1", description: "ADS-B Exchange" },
        { name: "FlightRadar", url: "https://www.flightradar24.com", description: "Flight Radar" },
        { name: "LiveATC", url: "https://www.liveatc.net/search/?icao=eick", description: "Live ATC Radio" },
        { name: "METAR", url: "https://metar-taf.com", description: "METAR & TAFs" },
        { name: "NOTAMs", url: "https://www.airnav.ie/air-traffic-management/notam-notice-to-airmen", description: "NOTAMs" },
        { name: "Windy", url: "https://www.windy.com", description: "Weather Map" },
        { name: "Tide", url: "https://www.tide-forecast.com/locations/Cork/tides/latest", description: "Tide Information" }
    ]},
    { "Media": [
        { name: "Hockey", url: "http://onhockey.tv", description: "Ice Hockey Stream" },
        { name: "Chiptune", url: "http://79.120.11.40:8000/chiptune.ogg", description: "Chiptune Radio" },
        { name: "Roms", url: "https://r-roms.github.io", description: "Roms Center" },
        { name: "9Anime", url: "https://aniwave.to/home", description: "Anime Stream" },
        { name: "Nyaa", url: "https://nyaa.si", description: "Anime Torrent Tracker" },
        { name: "DopeBox", url: "https://dopebox.to", description:"Movies / Series Stream" },
        { name: "123Movies", url: "https://0123movies.com", description: "Movies / Series Stream" },
        { name: "FMovies", url: "https://fmoviesz.to", description: "Movies / Series Stream" },
        { name: "Pirate Bay", url: "https://thepiratebay.org", description: "Torrent Tracker" },
        { name: "RARBG", url: "https://rargb.to", description: "Torrent Tracker" },
        { name: "YTS", url: "https://yts.mx", description: "Movies/ Series Torrent Tracker" }
    ]},
    { "Files": [
        { name: "Authority", url: "https://raw.githubusercontent.com/luis-caldas/mypub/master/ssl/ca.pem", description: "My certificate authority" }
    ]}
];
// Create the entire set
const allInfo = topInfo.concat(bottomInfo);

// Main function when website loads
function main(websitesData) {

    // Functions that create blocks and links
    let createLink = (name, url, description, isDownload) => {
        let link = $("<a>", {
            href: url,
            ref: "noreferrer noopener",
            class: "d-block btn btn-lg btn-round btn-secondary fw-bold border-white bg-white"
        }).append(name.toUpperCase());
        if (isDownload)
            link.attr("download", "");
        return $("<div>", { class: "m-2 float-start", title: description.toUpperCase() })
               .addClass(sizeClassName)
               .append(link);
    };
    let createBlock = (linksList, blockName) => {
        let block = $("<div>", { class: "d-grid p-2" });
        let header = $("<div>", { class: "h4 float-start m-2 px-2" }).append(blockName.toUpperCase());
        let simpleDiv = $("<div>");
        block.append(header);
        linksList.forEach(function (item) {
            simpleDiv.append(item);
        });
        block.append(simpleDiv);
        return block;
    };

    // Create list containing all blocks
    let allBlocks = []

    // Iterate the data, create and add to the list
    websitesData.forEach(function (eachBlock) {
        let firstName = Object.keys(eachBlock)[0];
        let allLinks = [];
        eachBlock[firstName].forEach(function (eachLink) {
            let isDownload = "download" in eachLink && eachLink.download === true;
            allLinks.push(createLink(eachLink.name, eachLink.url, eachLink.description, isDownload));
        });
        allBlocks.push(createBlock(allLinks, firstName));
    });

    // Finally insert it into the website
    let inserter = $("#inserter");
    inserter.empty();
    allBlocks.forEach(function (eachBlock) {
        inserter.append(eachBlock);
    });

}

$( document ).ready(function() {

    // Function that normalises the width of the links
    function fixSize() {
        let classIdentifier = $(`.${sizeClassName}`);
        classIdentifier.width(Math.max.apply(Math, classIdentifier.map(function() {
            return $(this).width();
        }).get()));
    }

    // Try to get the file if possible
    $.getJSON(othersFile, function(data) {
        // If data is acquired merge if possible

        // Create temporary lists for us to store items that are merged or not
        let tempPure = [];
        let tempMerged = [];

        // Check if new data should be merged and merge it
        if (mergeSections) {

            // Get the list of all the entries list
            let listLocalTabs = allInfo.map(each => Object.keys(each)).flat(1);

            // Iterate all the items in the new data
            data.forEach(each => {

                // Get the name of the object we are trying to merge
                let localName = Object.keys(each)[0]

                // Check if this object should be tried to merge
                if (listLocalTabs.includes(localName)) {

                    // Get the data that is inside the remotely received item
                    let remoteWebsiteDataInside = each[localName];

                    // Get the local data that matches the name
                    let localWebsiteDataFull = allInfo.filter(eachItem => Object.keys(eachItem)[0] === localName);
                    let localWebsiteDataInside = Object.values(localWebsiteDataFull[0])[0];

                    // Create new object and its parts
                    let newObj = {};

                    // Add to the object
                    newObj[localName] = localWebsiteDataInside.concat(remoteWebsiteDataInside);

                    // Return it
                    tempMerged.push(newObj);

                } else
                    tempPure.push(each);

            })

        } else
            tempPure = data;

        // Replace merged data into their new spots
        let mergedNames = tempMerged.map(each => Object.keys(each)).flat(1)

        // Create variables to store new info
        let newItems = {
            top: [],
            bottom: []
        }

        // Create generic filtering function
        let newFixBlock = listNewItems =>
            listNewItems.forEach( eachNewItem =>
                eachNewItem.info.forEach(eachItem => {
                    let localName = Object.keys(eachItem)[0];
                    newItems[eachNewItem.new] = newItems[eachNewItem.new].concat(
                        mergedNames.includes(localName) ?
                            tempMerged.filter(eachMerged => Object.keys(eachMerged)[0] === localName) :
                            [ eachItem ]
                    )
                })
            )

        // Run filtering function for new blocks
        newFixBlock([
            { info: topInfo, new: "top" },
            { info: bottomInfo, new: "bottom" },

        ])

        // Build the whole structure
        let newData = [];
        newData = newData.concat(newItems.top);  // The new merged top
        newData = newData.concat(tempPure);  // Keep the pure stuff in the middle
        newData = newData.concat(newItems.bottom);  // The new merged bottom

        // Call main with the newly built data
        main(newData);

    }).fail(function() {
        // If no file is found just use local data
        main(allInfo);
    }).always(() => {
        // Fix size if selected
        if (shouldFixSize)
            fixSize();
    });

});
