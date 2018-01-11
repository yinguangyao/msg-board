import React from 'react'
import { List, Avatar } from 'antd'

export default function Comment (props) {
    return (
        <List
            itemLayout="horizontal"
            dataSource={props.data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={item.icon} />}
                        title={<a href="javascript:;">{item.title}</a>}
                        description={item.comment}
                    />
                </List.Item>
            )}
        />
    )
}