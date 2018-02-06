import React from 'react'

export default class Base extends React.Component {

    static instances = [];

    static forceUpdateAllInstances() {
        Base.instances.forEach(instance => {
            instance.forceUpdate()
        })
    }

    componentDidMount() {
        Base.instances.push(this)
    }

    componentWillUnmount() {
        const index = Base.instances.indexOf(this)
        Base.instances.splice(index, 1)
    }

}
