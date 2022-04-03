const {RSSFeeds} = require("./rss-feeds");

const STREAMS = [
  {
    "token": "1",
    "url": 'https://streaming.radionomy.com/-ibizaglobalradio-?lang=en-US&appName=iTunes.m3u',
    "metadata" : {
      "title": "Stream One",
      "subtitle": "A subtitle for stream one",
      "art": {
        "sources": [
          {
            "contentDescription": "example image",
            "url": "https://s3.amazonaws.com/cdn.dabblelab.com/img/audiostream-starter-512x512.png",
            "widthPixels": 512,
            "heightPixels": 512
          }
        ]
      },
      "backgroundImage": {
        "sources": [
          {
            "contentDescription": "example image",
            "url": "https://s3.amazonaws.com/cdn.dabblelab.com/img/wayfarer-on-beach-1200x800.png",
            "widthPixels": 1200,
            "heightPixels": 800
          }
        ]
      }
    }
  }
];

exports.skill = {
  appId: ''
};


exports.audioData = async() => {
  return RSSFeeds();
}