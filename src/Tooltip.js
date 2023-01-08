import React,{Component} from 'react';
import './Tooltip.css';

// export tooltip
export default class Tooltip extends Component{

    constructor(props){
        super(props);
        this.state={
            hovered:false
        };
    }

    onHover=()=>{
        this.setState({
            hovered:true
        })
    }

    onLeave=()=>{
       this.setState({
         hovered: false
       })
    }

    render(){
        const position=this.props.position;
        const { hovered } = this.state;

        return(
            <div className='tooltip' onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
              Hover over me! Tooltip - {position}

              {/* tooltip text */}
              
              <span style={{visibility:hovered ? 'visible' : 'hidden'}} className={`tooltiptext ${position}`}>
                  Thanks for Hovering ! I am a tooltip
              </span>
            </div>
        )
    }
}