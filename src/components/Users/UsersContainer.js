import Users from "./Users";
import { connect } from "react-redux";
import { setUsersData, setUsersImages } from "../../redux/usersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.users.usersData,
        usersImages: state.users.usersImages
    }
}

const UsersContainer = connect(mapStateToProps,{setUsersData,setUsersImages})(Users);
export default UsersContainer;