import * as React from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/categories'





export class CategoriesList extends React.PureComponent {

    componentWillMount() {
        this.props.getCategories()
    }

    renderList(){
        const { categories } = this.props
        console.log("CategoriesList")
        console.log(categories)

        categories.map((category, index) => (

                <li key={category.title}
                    className="list-group-item" >
                    {category.title} {category.score}
                </li>

        ));


    }

    render(){
        return(
            <ul className={"list-group"}>
                {this.renderList()}
            </ul>
        )
    }
}

const mapStateToProps = ({ categories }) => ({ categories })



export default connect(mapStateToProps, { getCategories })(CategoriesList)