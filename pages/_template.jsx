import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'

import { rhythm } from '../utils/typography'
// import amphtml from 'react-amphtml'
//
// const ampScripts = [];
// const addScript = script => ampScripts.push(script);
//
// const AmpAnalytics = amphtml('analytics', addScript);


module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
      <article className="window-frame focus">
        <header className="top-bar">
          <div className="controls">
            <div className="control close" />
            <div className="control minify" />
            <div className="control expand" />
          </div>
        </header>
        <section className="window-content">
          {this.props.children}
        </section>
      </article>

        {/* <AmpAnalytics type="googleanalytics" id="analytics1">
          <script type="application/json" dangerouslySetInnerHTML={{ __html: `
          {
            "vars": {
              "account": "UA-89070820-1"
            },
            "triggers": {
              "trackPageview": {
                "on": "visible",
                "request": "pageview"
              },
              "scrollPings": {
                "on": "scroll",
                "scrollSpec": {
                  "verticalBoundaries": [20, 60, 100, 140, 180, 220, 260]
                },
                "request": "event",
                "vars": {
                  "eventCategory": "page",
                  "eventAction": "scroll"
                }
              },
              "trackimgClicks": {
                "on": "click",
                "selector": "#addressimg",
                "request": "event",
                "vars": {
                  "eventCategory": "click",
                  "eventAction": "addressimg"
                }
              },
              "trackInputClicks": {
                "on": "click",
                "selector": "input",
                "request": "event",
                "vars": {
                  "eventCategory": "click",
                  "eventAction": "input"
                }
              },
              "trackButtonClicks": {
                "on": "click",
                "selector": "button",
                "request": "event",
                "vars": {
                  "eventCategory": "click",
                  "eventAction": "button"
                }
              },
              "pageTimer": {
                "on": "timer",
                "timerSpec": {
                  "interval": 30,
                  "maxTimerLength": 600
                },
                  "request": "event",
                  "vars": {
                    "eventCategory": "page",
                    "eventAction": "timer"
                  }
                }
              }
            }
          ` }}>
          </script>
        </AmpAnalytics> */}
      </div>
    )
  },
})
