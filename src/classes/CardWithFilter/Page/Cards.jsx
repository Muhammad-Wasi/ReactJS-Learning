import React, { Component } from 'react';
import Item from '../Component/index';
import DATA from './data';
import { Input } from 'antd';
const { Search } = Input;

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }

    onSearch = value => {
        console.log("Text => ", value)
        this.setState({ searchText: value });
    };

    render() {
        const { searchText } = this.state;

        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Search
                    style={{ margin: '20px 40px' }}
                    placeholder="input search text"
                    onSearch={this.onSearch}
                    onChange={(e) => this.onSearch(e.target.value)}
                    enterButton
                />
                {
                    searchText ?
                        DATA.map(item => item.title.toUpperCase().includes(searchText.toUpperCase()) ? <Item item={item} /> : null)
                        :
                        DATA.map(item => <Item item={item} />)
                }
            </div>
        )
    }
}

export default Cards;