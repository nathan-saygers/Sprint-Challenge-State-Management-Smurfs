import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import SmurfCard from './SmurfCard';
import { getSmurf, makeSmurf } from '../actions/smurfActions';
import SmurfForm from './SmurfForm';

const SmurfVillage = props => {

  useEffect(() => {
    props.getSmurf();
  }, [props.smurfs.length])

  return(
    <div>
      <SmurfForm makeSmurf={props.makeSmurf}/>
      {props.smurfs.map(smurf => (
        <SmurfCard 
          key={smurf.name}
          age={smurf.age}
          height={smurf.height}
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