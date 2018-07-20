import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
// ...

class RecipesContainer extends PureComponent {

}

const mapStateToProps = ({ categories }) => ({
    categories
})

export default connect(mapStateToProps)(CategoriesContainer)