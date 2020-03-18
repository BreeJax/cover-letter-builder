import React, { Component } from "react"

class FinalLetter extends Component {

  render() {
    return (
      <div className="userInputedConfiguredLetter">
        <p className="userCompanyName">{this.props.companyName}</p>

        <span className="userContactInfo">
          <p className="userFullName"> {this.props.userName} </p>
          <p className="userPhoneNumber">{this.props.phoneNumber}</p>
          <p className="userEmail">{this.props.email}</p>
          <p className="userPortfolio">{this.props.userPortfolio}</p>
        </span>
        <span className="FinalLetter">
          <p>{this.props.headerDate}</p>
          <p>To Whom it may Concern, </p>
          <p>My name is {this.props.userName} and I am your next {this.props.positionInCompany}! I am interested in working at {this.props.companyName} because of {this.props.paragraphOneDropDown} {this.props.paragraphOneFillIn}! I believe I would be an asset to {this.props.companyName} because of my skills in {this.props.techUserUses}.</p>
          <p>I have been coding since June 2017, and haven’t stopped really since graduating from The Iron Yard, a coding bootcamp, in October that same year. From there, I gained a strong love for TDD and for the process that is coding.</p>
          <p>I am always determined to bring the best and safest user experience that I can, along with giving my all for every project that I do. I am an eager learner who looks forward to an asset to your company.</p>
          <p>I look forward to hearing more about this great opportunity!</p>
          <p>{this.props.signOff},</p>
          <p>{this.props.userName}</p>
        </span>

      </div>
    )
  }
}

export default FinalLetter
//
//
//
// Body- second and third paragraph
// Second should be based on your research of the company and their goals. Align yourself to comp narrative
// Third is how your add value to the team or real
//
// Conclusion- final paragraph - Is there something about their culture that you feel you can add to, and how you are an asset to the company. Also, along the lines from “I look forward to hearing back from you” “I can’t wait to grab coffee with you to talk more about the position” “I look forward to hearing back about the next steps”
//
//
//
// Three personal strength and an example of each
//
// —Determination: I am one that, once I have a problem, I refuse to give up on it until I have an acceptable fix or beyond.  There are many times where I have come across a problem, and have gone down many rabbit holes in order to successfully fix it. My challenges with coding are approached no differently.
//
// —Faith: my Faith in others allows for me to feel comfortable asking questions when I cannot find the answers on my own. If I know that someone is an “expert” at something, and is willing to help, I have no qualms about asking for that help. I’m also glad to be learning how best to explain to others how to overcome their problems, as we all attach problems differently.
//
//
// Three personal values and examples of how they play in your life
// —Helpfulness: When my family or friends call on me, either after car accidents or miscommunications, I do my best to come and fix, restore, or give a hand when I can. When I can’t, I give support in whatever way possible. 
// —Integrity: I tend to be open about my own faults and how I feel about others in everything I do. 
// —Security: I strive to create a safe work and living space where my mind can feel free to wonder and explore possibilities and problems that I can fix. 
// —Wisdom: 
// —Faith: I rely heavily on those around me, and trust in them to lead me down the right path, and trust that they feel the same in me. 
// —Growth: Over time, I have grown from a recluse to someone who can communicate with many different people, and strive to continue that growth. 
// —Creativity: I strive in being given tools and the ability to create things with those tools, from a computer with a few programs, to recyclable material that can be reused.
//
//
//
// Three unique tidbits about you
// —Dependable
// —Creative
// —Loyal.
//
// Three goals/visions for your future
// —Creating things that I am proud of, and that make other’s lives better.
// —Creating a family, and as stable of a life as possible for that family.
// —Becoming more active in my communities and be viewed as a stable fixture in my communities.
//
