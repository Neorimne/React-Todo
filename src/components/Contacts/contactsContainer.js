import { connect } from 'react-redux';
import Contacts from './Contacts';
import { setNewMessage } from '../../redux/contactReducer';



const mapStateToProps = (state) => {
   return {
    contactMessages : state.contactMessages
   }
}

const ContactsContainer = connect(mapStateToProps,{setNewMessage})(Contacts);

export default ContactsContainer