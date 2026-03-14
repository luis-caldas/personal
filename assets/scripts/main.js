"use strict";

// Globals

// Should all items have same width
const shouldFixSize = false;
// Name of the class of the size
const sizeClassName = "widest";

// Merge sections with the same names
const mergeSections = true;

// Search
const searchAction = "https://duckduckgo.com"

// File and configuration
const othersFile = "more/other.json";
const topInfo = [
    { "Main": [
        { name: "Email", url: "https://mail.caldas.ie", description: "Email Website" },
        { name: "Message", url: "https://app.schildi.chat", description: "Messaging Website" }
    ]}
];
const bottomInfo = [
    { "NixOS": [
        { name: "Packages", url: "https://search.nixos.org/packages", description: "NixOS Search Packages" },
        { name: "Options", url: "https://search.nixos.org/options", description: "NixOS Search Options" },
        { name: "Home Manager", url: "https://nix-community.github.io/home-manager/options.xhtml", description: "Home Manager Options for NixOS" }
    ]},
    { "More": [
        { name: "Github", url: "https://github.com/luis-caldas", description: "Personal Github" }
    ]},
    { "Dev": [
        { name: "BinVis", url: "https://binvis.io", description: "Binary File Visualiser" },
        { name: "HexEdit", url: "https://hexed.it", description: "Hex Editor" },
        { name: "DevDocs", url: "https://devdocs.io", description: "Programming Documentation Compilation" },
        { name: "Bash", url: "https://www.gnu.org/software/bash/manual/html_node/Pattern-Matching.html#Pattern-Matching", description: "Bash Pattern Matching" },
        { name: "MIMEs", url: "https://www.iana.org/assignments/media-types/media-types.xhtml", description: "IANA Media Types" },
        { name: "Wireshark", url: "https://www.wireshark.org/docs/dfref", description: "Wireshark Display Filters" },
        { name: "VIM", url: "https://vim.rtorr.com", description: "VIM Cheat Sheet" },
        { name: "Crontab", url: "https://crontab.guru", description: "Crontab Builder" },
        { name: "STRFTIME", url: "https://strftime.net", description: "STRFTIME Builder" },
        { name: "Carbon", url: "https://carbon.now.sh", description: "Code Screenshots" },
        { name: "ArrayBox", url: "https://arraybox.dev", description: "Array Language Playground" },
        { name: "Time", url: "https://time.is", description: "Accurate Time" },
        { name: "Wormhole", url: "https://webwormhole.io", description: "Simple File Transfer" },
        { name: "MonkeyType", url: "https://monkeytype.com", description: "Typing Speed Text" },
    ]},
    { "Hardware": [
        { name: "Circuit", url: "https://www.falstad.com/circuit/circuitjs.html", description: "Electronic Circuit Simlator" },
        { name: "Firmware", url: "https://fwupd.org", description: "Linux Firmwares" },
        { name: "OpenWrt", url: "https://firmware-selector.openwrt.org", description: "OpenWrt Firmware Builder" },
        { name: "VIA", url: "https://usevia.app", description: "VIA Configurator" },
        { name: "QMK", url: "https://config.qmk.fm", description: "QMK Configurator" },
    ]},
    { "Security": [
        { name: "CyberChef", url: "https://gchq.github.io/CyberChef", description: "CyberChef" },
        { name: "Reverse", url: "https://www.revshells.com", description: "Reverse Shell Creator"},
        { name: "Zimmermans", url: "https://ericzimmerman.github.io/#!index.md", description: "Eric Zimmermans Tools" },
        { name: "GTFOBins", url: "https://gtfobins.github.io", description: "UNIX Escalation Binaries" },
        { name: "ShellCodes", url: "https://shell-storm.org/shellcode/index.html", description: "ShellCodes" },
        { name: "OSINT", url: "https://osintframework.com", description: "OSINT Framework Map" },
        { name: "Textreader", url: "https://textreader.pro", description: "Text to Speech" },
        { name: "Widevine", url: "https://cdrm-project.com", description: "CDRM and Widevine" },
        { name: "Massgrave", url: "https://massgrave.dev", description: "Windows Scripts" },
        { name: "BIOS", url: "https://bios-pw.org", description: "Laptop BIOS Password" },
    ]},
    { "Flight": [
        { name: "AirSpace", url: "https://iaa-ie.maps.arcgis.com/apps/instant/basic/index.html?appid=0772db05b2bb488686d3678d8144ae66", description: "IAA Air Space Map" },
        { name: "OpenAIP", url: "https://www.openaip.net/map#6.38/53.3442/-8.2491", description: "OpenAIP Map" },
        { name: "NOTAM", url: "https://notaminfo.com/irelandmap", description: "NOTAM Info Map" },
        { name: "EFIS", url: "https://rdamazio.github.io/efis-editor", description: "EFIS Editor" },
        { name: "ADS-B", url: "https://adsb.caldas.ie/?airport=EICK&centerReceiver&zoom=8&enableLabels&extendedLabels=2&noVanish&hideSideBar&rangeRings=0&altitudeChart=1&tempTrails=%3C120%3E&mapDim=0.6", description: "ADS-B Exchange" },
        { name: "AirLoom", url: "https://objectiveunclear.com/airloom.html?airport=ORK", description: "AirLoom 3D Viewer" },
        { name: "FlightRadar", url: "https://www.flightradar24.com", description: "Flight Radar" },
        { name: "HeyWhatsThat", url: "https://www.heywhatsthat.com", description: "Line of Sight & Horizon Tool" },
        { name: "LiveATC", url: "https://www.liveatc.net/search/?icao=eick", description: "Live ATC Radio" },
        { name: "METAR", url: "https://metar-taf.com", description: "METAR & TAFs" },
        { name: "Windy", url: "https://www.windy.com", description: "Weather Map" },
        { name: "Tide", url: "https://www.tide-forecast.com/locations/Cork/tides/latest", description: "Tide Information" },
    ]},
    { "Aviation": [
        { name: "Fleet", url: "https://www.flightdb.net/fleet.php?fleet=IRL", description: "Fleet Database" },
        { name: "Designators", url: "https://www2023.icao.int/publications/DOC8643/Pages/Search.aspx", description: "Aircraft Designators" },
        { name: "Countries", url: "https://www.aerotransport.org/html/ICAO_hex_decode.html", description: "ICAO Countries" },
        { name: "Callsigns", url: "https://123atc.com/call-signs/ireland", description: "Callsigns" },
    ]},
    { "Speed": [
        { name: "Fast", url: "https://fast.com", description: "Internet Speed Test" },
        { name: "Speedtest", url: "https://www.speedtest.net", description: "Internet Speed Test" },
        { name: "Eir", url: "https://www.eir.ie/helpandsupport/broadbandspeedtest", description: "Internet Speed Test" },
    ]},
    { "Games": [
        { name: "Roms", url: "https://r-roms.github.io", description: "Roms Center" },
        { name: "Textures", url: "https://evilgames.eu/texture-packs.htm", description: "Texture packs" },
        { name: "DS", url: "https://archive.flashcarts.net", description: "Nintendo DS Flashcarts" },
    ]},
    { "Media": [
        { name: "Stream", url: "https://fmhy.net/videopiracyguide", description: "Movies / Series Stream Compilation" },
        { name: "Nyaa", url: "https://nyaa.si", description: "Anime Torrent Tracker" },
        { name: "RARBG", url: "https://rargb.to", description: "Torrent Tracker" },
        { name: "Hockey", url: "http://onhockey.tv", description: "Ice Hockey Stream" },
    ]},
    { "Music": [
        { name: "Strudel", url: "https://strudel.cc", description: "Music Coding REPL" },
    ]},
    { "Files": [
        { name: "Authority", url: "https://raw.githubusercontent.com/luis-caldas/mypub/master/ssl/ca.pem", description: "My Root Certificate" },
    ]}
];
// Create the entire set
const allInfo = topInfo.concat(bottomInfo);

// Functions
function checkURL(urlString) {
    return /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(urlString);
}

function submitForm(form, text) {

    // Check if redirect or search
    if (checkURL(text)) {

        let fixedURL = text;

        // Check if protocol is present
        if (!/^https?:\/\//i.test(fixedURL))
            fixedURL = 'https://' + fixedURL;

        // Redirect
        window.location.href = fixedURL;

    } else {

        // Set search provider and submit
        form.action = searchAction;
        form.submit();

    }
}

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

    // Form Submission
    $("form").each(function() {

        // Event handler
        let eventHandle = (event) => {
            // Prevent default submission
            event.preventDefault();
            // Use custom submit
            submitForm(this, $(this).find("input").val());
            // Also prevent default
            return false;
        }

        // Text input
        $(this).find("input").keypress((event) => {
            // If enter is pressed
            if(event.which == 10 || event.which == 13) {
                // Prevent default action
                event.preventDefault();
                // Event handler
                return eventHandle(event);
            }
        });

        // Submit button
        $(this).find("button").click(eventHandle);

    });

});
