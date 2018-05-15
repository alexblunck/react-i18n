import React from 'react'
import PropTypes from 'prop-types'

import { I18n } from './I18n'

export class I18nProvider extends React.Component {

    static propTypes = {
        render: PropTypes.func.isRequired
    }

    constructor() {
        super()

        this.state = {
            locale: I18n._locale
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        window.addEventListener('reactI18nDidSetLocale', this.handleChange)
    }

    componentWillUnmount() {
        window.removeEventListener('reactI18nDidSetLocale', this.handleChange)
    }

    handleChange() {
        this.setState({
            locale: I18n._locale
        })
    }

    render() {
        return this.props.render(this.state.locale)
    }

}
