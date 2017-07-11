 import React from 'react'
 import { connect } from 'react-redux';

 const Results = (props) => (
     <div className="show-results">
     </div>
 )
const mapStateToProps = (state) => {
    console.log(state);
    return {
        cityName: '',
        forecast: ''
    }
}

 export default connect(mapStateToProps)(Results);
