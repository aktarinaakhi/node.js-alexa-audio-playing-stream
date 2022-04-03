const { xml2json } = require("xml-js"),
    fetch = require('node-fetch');

module.exports.RSSFeeds = async () => {

    try {

        const resp = await fetch('https://moneywithmakandg.libsyn.com/rss'),
            resp_body = await resp.text();
        const respJson = await xml2json(resp_body);

        const { elements } = JSON.parse(respJson),
            rssElements = elements[0].elements,
            channelElements = rssElements[0].elements;

        let audioData = [];

        // rss channel elements
        for (let elem of channelElements) {

            if (elem.name === "item") {

                let obj = {};

                // items from channel elements object
                for (let items of elem.elements) {

                    if (items.name === "title") {
                        var a = obj.title;
                        const b = "isode ";
                        const position = 2;
                        a = [a.slice(0, position), b, a.slice(position)].join('');
                        a = items.elements[0].text;
                    }


                    if (items.name === "enclosure")
                        obj.url = items.attributes.url;
                }

                audioData.push(obj);
            }
        }

        return audioData;
    } catch (err) {
        throw err;
    }
}