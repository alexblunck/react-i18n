import React from 'react'
import PropTypes from 'prop-types'
import I18n from './I18n'
import Base from './Base'

export default class Translate extends Base {

    static propTypes = {
        value: PropTypes.string.isRequired,
        html: PropTypes.bool,
        className: PropTypes.string
    }

    render() {
        const { value, html, className } = this.props
        const translation = I18n.translate(value)

        if (html) {
            return <span className={className} dangerouslySetInnerHTML={{ __html: translation }}></span>
        } else {
            return <span className={className}>{translation}</span>
        }
    }

}
