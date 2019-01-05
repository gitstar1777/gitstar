import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var skype = this.props.data.skype;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <p className = 'about-title'>About Me</p>

         <p>{bio}</p>
         <div className = 'contact-details'>
            <p className = 'about-title'>Contact Details</p>
            <p className="address">
               <span>{name}</span><br />
               <span>{street}<br />
                     {city} {state}, {zip}
               </span><br />
               <span>{phone}</span><br />
               <span>{email}</span><br />
               <span>skype: {skype}</span>
            </p>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
