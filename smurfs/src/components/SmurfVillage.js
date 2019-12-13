import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import SmurfCard from './SmurfCard';
import { getSmurf, makeSmurf } from '../actions/smurfActions';
import SmurfForm from './SmurfForm';
import Axios from 'axios';

const SmurfVillage = props => {
  console.log('these are smurfs', props.smurfs)
  
  useEffect(() => {
    props.getSmurf();
  }, [])

  return(
    <div>
      <SmurfForm makeSmurf={props.makeSmurf}/>
      {props.smurfs.map(smurf => (
        <SmurfCard 
          name={smurf.name}
          age={smurf.age}
          height={smurf.height}
          id={smurf.id}
        />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, {getSmurf, makeSmurf})(SmurfVillage);