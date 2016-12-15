import React from 'react'
import Helmet from "react-helmet"
import {config} from 'config'

function heads() {
    return (<Helmet htmlAttributes={{
        "lang": "en",
        "amp": undefined
    }} meta={[
        {
            "name": "description",
            "content": config.description
        }, {
            "name": "keywords",
            "content": config.keywords
        }, {
            "name": "theme-color",
            "content": "#3f51b5"
        }, {
            "name": "mobile-web-app-capable",
            "content": "yes"
        }, {
            "name": "application-name",
            "content": config.application
        }, {
            "name": "apple-mobile-web-app-capable",
            "content": "yes"
        }, {
            "name": "apple-mobile-web-app-status-bar-style",
            "content": "black-translucent"
        }, {
            "name": "apple-mobile-web-app-title",
            "content": config.application
        }, {
            "name": "msapplication-TileImage",
            "content": "/images/manifest/icon-144x144.png"
        }, {
            "name": "msapplication-TileColor",
            "content": "#3f51b5"
        }, {
            "name": "msapplication-tap-highlight",
            "content": "no"
        }, {
            "name": "microtip",
            "content": "3EoZDLsfmrHvC62V8PgrkyCFUZUgutubiH",
            "data-currency": "btc",
            "data-recipient": "block.io"
        }
    ]} link={[
        {
            "rel": "icon",
            "href": "/images/favicon.ico"
        }, {
            "rel": "manifest",
            "href": "/manifest.json"
        }, {
            "rel": "apple-touch-icon",
            "href": "/images/manifest/icon-48x48.png"
        }, {
            "rel": "apple-touch-icon",
            "sizes": "72x72",
            "href": "/images/manifest/icon-72x72.png"
        }, {
            "rel": "apple-touch-icon",
            "sizes": "96x96",
            "href": "/images/manifest/icon-96x96.png"
        }, {
            "rel": "apple-touch-icon",
            "sizes": "144x144",
            "href": "/images/manifest/icon-144x144.png"
        }, {
            "rel": "apple-touch-icon",
            "sizes": "192x192",
            "href": "/images/manifest/icon-192x192.png"
        }, {
            "rel": "Publisher",
            "href": config.plusurl
        }, {
            "rel": "dns-prefetch",
            "href": "//app.omniconvert.com"
        }
    ]} script={[
        {
            "type": "application/ld+json",
            "innerHTML": `{ "@context": "http://schema.org/", "@type": "Organization", "name": "${config.application}", "url": "${config.url}", "sameAs": "${config.facebookurl}", "sameAs": "${config.twitterurl}", "sameAs": "${config.tumblrurl}", "sameAs": "${config.plusurl}" }`
        }, {
            "src": "//apis.google.com/js/platform.js",
            "async": "async",
            "defer": "defer"
        }
    ]}/>)
}

export default heads
