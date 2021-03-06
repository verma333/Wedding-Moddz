import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { GET_ERRORS , VEN_LIST , OTP , TYPE , IMAGE} from "./types";
export const verifyOtp = (userData , history) => dispatch => {
    axios
      .post("/api/vendor/verifyOtp", userData)
      .then(res => 
         
           history.push('/vendor/dashboard')
        )
      .catch(err =>
        console.log(err)
      );
  };

  export const getVerfication = () => dispatch => {
    axios
      .get("/api/vendor/getVerfication")
      .then(res => 
         
        dispatch({
            type: OTP,
            payload:  res.data
          })
        )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };


  export const getVenueVendor = () => dispatch => {
    axios
      .get("/api/vendor/getVenueVendor" )
      .then(res => 
         
        dispatch({
            type: TYPE,
            payload:  res.data
          })
        )
      .catch(err =>
        console.log(err)
      );
  };
 

  export const VenueVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/VenueVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const caterersVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/caterersVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const panditsVendor  = (data , history) => dispatch => {
    axios
      .post("/api/vendor/panditsVendor " , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const decoratorsVendor  = (data , history) => dispatch => {
    axios
      .post("/api/vendor/decoratorsVendor " , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const mehendiVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/mehendiVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const jewelleryVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/jewelleryVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };


  export const musicVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/musicVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const photographersVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/photographersVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const wediingInvVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/wediingInvVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const bridalVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/bridalVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const groomVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/groomVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };



  export const VendorListing = (id) => dispatch => {
    axios
      .get(`/api/vendor/VendorListing/${id}` )
      .then(res => 
        dispatch({
          type: VEN_LIST,
          payload: res.data
        })
      
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const uploadImages = (id , toggle) => dispatch => {
    axios
      .post(`/api/vendor/uploadImages/`, id )
      .then(res => 
        dispatch({
          type: VEN_LIST,
          payload: res.data
        })
      
        ).then (
      toggle()
        ).then(
     toast.success("Image added")
        )
      .catch(err =>
       console.log(err)
      );
  };



  export const updateCover = ( userData ) => dispatch => {
  
    axios
      .put(`/api/vendor/uploadCover` , userData)
      .then(res => 
        dispatch({
          type: VEN_LIST,
          payload: res.data
        })
      
        ).then(
     toast.success("Cover Update")
        )
      .catch(err =>
       console.log(err)
      );
  };