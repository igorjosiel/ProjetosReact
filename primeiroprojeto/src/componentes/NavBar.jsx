import React, {Component} from 'react';

export default class NavBar extends Component {
    render() {
        const textLinkHome = this.props.textLink1;
        const textLinkAbout = this.props.textLink2;
        const linkHome = this.props.link1Page;
        const linkAbout = this.props.link2Page;

        const styleDiv = {
            backgroundColor: '#1E90FF',
            width: '100%',
            height: '50px',
            margin: '20px auto'
        }

        const styleLink = {
            padding: '30px',
            margin: '30px'
        }

        return (
            <div>
               <div style={styleDiv}>
                   <a href={linkHome} style={styleLink}>{textLinkHome}</a>
                   <a href={linkAbout}>{textLinkAbout}</a>
               </div>
            </div>
        )
    }
}