import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
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
    )
  },
})
