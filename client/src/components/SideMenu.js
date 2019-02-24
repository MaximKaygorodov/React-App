import React, {Component} from 'react'
import SideMenuBody from './SideMenuComponents/SideMenuBody'

 class SideMenu extends Component{
        constructor(props) {
         super(props);

         this.state = { class: "col-sm-4 col-lg-2 col-10", spanClass: 'w-1' };
        }
            

     render() {
            const body = <SideMenuBody class={this.state.class}/>
            return (
                <div>
                    <span  id="open-button" onClick={this.openNav}></span>
                    {body}
                    <span class={this.state.spanClass} id="close-button" onClick={this.closeNav}></span>
                </div>
            )
    }
    openNav = () => {
        console.log('---', 'clicked');
        this.setState ({ class: 'col-10 col-sm-4 col-lg-2', spanClass: 'w-1'});
    }
    closeNav = () => {
        console.log('---', 'clicked');

        this.setState ({  class: "col-sm-4 col-md-2 w-0", spanClass: 'w-0' })
    }
}

export default SideMenu