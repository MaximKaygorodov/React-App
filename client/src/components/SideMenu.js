import React, {Component} from 'react'
import SideMenuBody from './SideMenuComponents/SideMenuBody'

 class SideMenu extends Component{
        constructor(props) {
         super(props);

         this.state = { class: "hidden-xs hidden-sm col-md-2", spanClass: 'hidden' };
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
        this.setState ({ class: 'col-xs-10 col-md-2 col-sm-8', spanClass: ''});
    }
    closeNav = () => {
        this.setState ({  class: "hidden-xs hidden-sm col-md-2", spanClass: 'hidden' })
    }
}

export default SideMenu