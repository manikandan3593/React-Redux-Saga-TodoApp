import {connect} from 'react-redux'
import  Link  from '../components/Link'
import { filterTodo } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    active : ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    filterTodo : () => dispatch(filterTodo(ownProps.filter))
});

const LinkWrapper =  connect( mapStateToProps, mapDispatchToProps)(Link)

export default LinkWrapper