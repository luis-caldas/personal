"use strict";

// Globals

// Should all items have same width
const shouldFixSize = false;
// Name of the class of the size
const sizeClassName = "widest";

// Merge quick section with local
const mergeQuick = true;
const quickName = "Quick";

// File and configuration
const othersFile = "other.json";
const allWebsites = [
    { "Main": [
        { name: "Github", url: "https://github.com/luis-caldas", description: "Personal Github" },
        { name: "Flashing", url: "https://morse.my.to", description: "Flashing training website" },
        { name: "Email", url: "https://wednesday.mxrouting.net/webmail", description: "Email website" }
    ]},
    { "Quick": [
        { name: "SpeedTest", url: "https://fast.com", description: "Internet Speed Test"},
        { name: "Hockey", url: "http://onhockey.tv", description: "Ice Hockey Stream" },
        { name: "Nyaa", url: "https://nyaa.si", description: "Anime Torrent Tracker" },
        { name: "9Anime", url: "https://9anime.gs/home", description: "Anime Stream" },
        { name: "Pirate Bay", url: "https://thepiratebay.org", description: "Torrent Tracker" },
        { name: "RARBG", url: "https://rargb.to", description: "Torrent Tracker" },
        { name: "YTS", url: "https://yts.mx", description: "Movies/ Series Torrent Tracker" },
        { name: "BopeBox", url: "https://dopebox.to", description:"Movies / Series Stream" },
        { name: "123Movies", url: "https://0123movies.com", description: "Movies / Series Stream" }
    ]}
];

// Main function when website loads
function main(websitesData) {

    // Functions that create blocks and links
    let createLink = (name, url, description) => {
        let link = $("<a>", {
            href: url,
            ref: "noreferrer noopener",
            class: "d-block btn btn-lg btn-round btn-secondary fw-bold border-white bg-white"
        }).append(name.toUpperCase());
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
            allLinks.push(createLink(eachLink.name, eachLink.url, eachLink.description));
        });
        allBlocks.push(createBlock(allLinks, firstName));
    });

    // Finally insert it into the website
    let inserter = $("#inserter");
    inserter.empty();
    allBlocks.forEach(function (eachBlock) {
        inserter.append(eachBlock);
    });

};

$( document ).ready(function() {

    // Function that normalises the width of the links
    function fixSize() {
        let classIdentificator = $(`.${sizeClassName}`);
        classIdentificator.width(Math.max.apply(Math, classIdentificator.map(function() {
            return $(this).width();
        }).get()));
    }

    // Try to get the file if possible
    $.getJSON(othersFile, function(data){
        // If data is acquired merge if possible

        // Initialise the new data
        let newData = data;

        // Check if new data should be merged and merge it
        if (mergeQuick) {

            // Function to find the part of object with name
            let filterCorrect = each => Object.keys(each)[0] == quickName;

            // Merge if possible
            newData = newData.map(each => {

                // If this is the new object
                if (filterCorrect(each)) {

                    // Assign new inside data to var
                    let otherWebsiteDataInside = each[Object.keys(each)[0]];

                    // Get the extra local data
                    let localWebsiteDataFull = allWebsites.filter(filterCorrect);
                    let localWebsiteDataInside = Object.values(Object.values(localWebsiteDataFull)[0])[0];

                    // Create new object and its parts
                    let newObj = {};

                    // Add to the object
                    newObj[quickName] = otherWebsiteDataInside.concat(localWebsiteDataInside);

                    // Return it
                    return newObj;

                } else
                    return each;

            })
        }

        console.log(newData);

        // Call main with the new data
        main(newData);
    }).fail(function() {
        // If no file is found just use local data
        main(allWebsites);
    }).always(() => {
        // Fix size if selected
        if (shouldFixSize)
            fixSize();
    });

});