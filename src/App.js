import React from 'react';

class Ipod extends React.Component{
    constructor(){
        super();
        this.state = {
            // left: 0,
            // right: 0,
            x_mid: 0,
            // top: 0,
            // bottom: 0,
            y_mid: 0,
            x:0,
            y:0
        }
    }
    moveMenu = (e)=>{
        // console.log(e.clientX, e.clientY);
        const controller = document.getElementsByClassName("controller");
        const coord = controller[0].getBoundingClientRect();
        this.setState((prevState)=>{
            this.state.x_mid = coord.left+(coord.width/2)
            this.state.y_mid = coord.top+(coord.height/2)
        });

        console.log(e.clientX, this.state.x);

        if(this.state.x <= this.state.x_mid && this.state.y <= this.state.y_mid){
            if(this.state.x < e.clientX || this.state.y > e.clientY){
                console.log(e.clientX, this.state.x);
                console.log("you are moving in clockwise direction.");
            }
            else if(this.state.x != e.clientX || this.state.y != e.clientY){
                console.log("you are moving in counter-clockwise direction.");
            }
            // code for anticlockwise movement.
        }

        this.setState({
            x : e.clientX,
            y : e.clientY
        });
    }

    render(){
        return(
            <div className='ipodBody'>
                <div className='display'>
                    <div className='menuBar'>
                        <h2>Menu</h2>
                        <a href='' className='' id='1'>Cover Flow</a>
                        <a href='' className='active' id='2'>Music</a>
                        <a href='' id='3'>Games</a>
                        <a href='' id='4'>Setting</a>
                    </div>
                    <div className='wallPaper'>
                        <img src='https://wallpapercave.com/wp/wp6118722.jpg' alt='wallpaper'/>
                    </div>
                    <div className='Option'>
                    </div>
                </div>
                <div className='controller' onMouseMove={this.moveMenu}>
                    <div className='outer-circle'>
                        <div className='Menu'>MENU</div>
                        <div className='three-btns'>
                            <div className='prev'>
                                <img src='https://www.svgrepo.com/show/393777/previous-1.svg' alt='previous'/>
                            </div>
                            <div className='inner-circle'></div>
                            <div className='next'>
                                <img src='https://www.svgrepo.com/show/446272/next-1.svg' alt='next'/>
                            </div>
                        </div>
                        <div className='play-pause'>
                            <img src="https://www.svgrepo.com/show/311430/video-play-pause.svg" alt='play-pause'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ipod;