import React,{Component} from 'react';
import '../scss/main.scss'
import Location from './Location'
import Typography from '@material-ui/core/Typography';



class LocationContainer extends Component {


    render (){
        return (
            <div className="section-about">
                <div className="u-center-text u-margin-bottom-medium">
                    <h2 className="heading-secondary">
                        오시는 길
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h4 style={{textAlign:'center'}}>발산점</h4>
                        <Location latitude={37.5587319} longitude = {126.8377892} name={"능력손 건강센터"} /> 
                    </div>
                    <div className="col-1-of-2">
                        <h4 style={{textAlign:'center'}}>해남점</h4>
                        <Location latitude={34.5695623} longitude= {126.5976548} name={"종합체형교정원"}/> 
                    </div>
                </div>
                
                <div className="u-center-text">
                    <Typography className="heading-secondary" variant="h2">
                            예약 문의 : 010-8953-1388
                    </Typography>
                </div>


            </div>

        )
    }
}

export default LocationContainer;