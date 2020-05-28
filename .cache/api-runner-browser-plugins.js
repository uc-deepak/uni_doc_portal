module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-glamor/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"#61dafb"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-41298772-1"},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Uni Docs","short_name":"Docs","lang":"en","start_url":"/","background_color":"#20232a","theme_color":"#20232a","display":"standalone","icon":"src/images/uni_logo.png","legacy":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
