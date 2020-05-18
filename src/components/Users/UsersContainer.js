import Users from "./Users";
import { connect } from "react-redux";
import { getUsers } from "../../redux/usersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.users.usersData,
    }
}

const UsersContainer = connect(mapStateToProps,{getUsers})(Users);
export default UsersContainer;