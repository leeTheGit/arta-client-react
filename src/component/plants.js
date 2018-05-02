import React, {Component} from 'react';
import axios from 'axios';
import Plant from './plant';
import Plantform from './plantform';

class Plants extends Component {

    state = {
        plants : []
    }

    componentDidMount () {
        axios.get('/')
            .then( response => {
            console.log(response);
            // const postArray = response.data.slice(0,4);
            // this.setState({plants: postArray});
        }).catch( response => {
            console.log(response);


        })
    }


    render() {

        const plants = this.state.plants.map(plant => {
            return <Plant key= {plant.id} plantid = {plant.id} />
        });

        return (
            <div className="plant">
                <h1>Hi I'm a plant!</h1>
                {plants}
                <Plantform submitHandler={this.submitHandler}/>
                <Plants />
            </div>
        )
    }
}

export default Plants;