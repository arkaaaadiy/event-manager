import Axios from "axios";

export default Axios.create({
    baseURL: 'https://release-react-app.firebaseio.com/'    
  });