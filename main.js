'use strict';

const othersFile = "others.json";
const allWebsites = [
    { "Main": [
        { name: "Github", url: "https://github.com/luis-caldas", description: "Personal Github" },
        { name: "Flashing", url: "https://morse.my.to", description: "Flashing training website" },
        { name: "Email", url: "https://wednesday.mxrouting.net/webmail", description: "Email website" }
    ]}
];

function main(websitesData) {

    let createLink = (name, url, description) => {
        let link = $("<a>", {
            href: url,
            class: "d-block btn btn-lg btn-round btn-secondary fw-bold border-white bg-white"
        }).append(name.toUpperCase());
        return $("<div>", { class: "m-2 float-start", title: description.toUpperCase() }).append(link);
    };
    let createBlock = (linksList, blockName) => {
        let block = $("<div>", { class: "d-grid p-2" });
        let header = $("<div>", { class: "h4 float-start m-2 px-2" }).append(blockName.toUpperCase());
        let simpleDiv = $("<div>");
        block.append(header);
        linksList.forEach(function (item, _) {
            simpleDiv.append(item);
        });
        block.append(simpleDiv);
        return block;
    };

    let allBlocks = []

    websitesData.forEach(function (eachBlock, _) {
        let firstName = Object.keys(eachBlock)[0];
        let allLinks = [];
        eachBlock[firstName].forEach(function (eachLink, _) {
            allLinks.push(createLink(eachLink.name, eachLink.url, eachLink.description));
        });
        allBlocks.push(createBlock(allLinks, firstName));
    });

    let inserter = $("#inserter");
    inserter.empty();
    allBlocks.forEach(function (eachBlock, _) {
        inserter.append(eachBlock);
    });

};

$( document ).ready(function() {
    $.getJSON(othersFile, function(data){
        main(data);
    }).fail(function(){
        main(allWebsites);
    });
});