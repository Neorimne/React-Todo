import Users from "./Users";
import { connect } from "react-redux";
import { getUsers, getUserImages } from "../../redux/usersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.users.usersData,
        usersImages: state.users.usersImages
    }
}

const UsersContainer = connect(mapStateToProps,{ getUsers, getUserImages})(Users);
export default UsersContainer;