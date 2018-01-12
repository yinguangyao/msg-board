import React from 'react'
import Comment from '../components/Comment'

export default class Message extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Comment />
        )
    }
}