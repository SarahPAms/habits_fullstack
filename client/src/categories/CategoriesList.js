import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import fetchCategories from '../actions/categories'


class CategoriesList extends PureComponent {


    componentWillMount() {
        fetchCategories();
    }
    renderList(categories){
        return this.props.categories.map((category) => {
            return (
                <li>
                    key={category.title}

                    className="list-group-item"
                    {category.title} {category.score}
                </li>
            );
        });
    }

    render(){
        return(
            <ul className={"list-group"}>
                {this.renderList()}
            </ul>
        )
    }
}

const mapStateToProps = ({ categories }) => ({
    categories
})



export default connect(mapStateToProps)(CategoriesList)