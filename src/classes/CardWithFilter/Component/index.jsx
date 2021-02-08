import React, { Component } from 'react';
import { Card } from 'antd';
const { Meta } = Card;

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const {name, image, description, title} = this.props.item;
        return (
            <Card
                hoverable
                style={{ width: 180, height: 300, margin: 20 }}
                cover={<img alt={name} src={image} />}
            >
                <Meta title={title} description={description} />
            </Card>
        )
    }
}

export default Item;