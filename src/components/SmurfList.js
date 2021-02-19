import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

const SmurfList = (props) => {
    const { smurfs, isLoading } = props;

    if (isLoading) { // Sees if isLoading is true and displays the h1 if it is
        return <h1>Loading...</h1>;
    }

    return (<div className="listContainer">
        {
            smurfs.map((smurf) => { // Maps over each smurf in the array from the server and returns them as an individual smurf to be displayed
                return <Smurf smurf={smurf} key={smurf.id} />
            })
        }
    </div>);
}

const mapStateToProps = (state) => { // Allows access to state in the redux store through props
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.