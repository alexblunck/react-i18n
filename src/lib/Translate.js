import React from 'react'
import PropTypes from 'prop-types'
import I18n from './I18n'
import Base from './Base'

export default class Translate extends Base {

    static propTypes = {
        value: PropTypes.string.isRequired
    }

    render() {
        const { className, value } = this.props
        const translation = I18n.translate(value)

        return (
            <span className={className}>{translation}</span>
        )
    }

}
