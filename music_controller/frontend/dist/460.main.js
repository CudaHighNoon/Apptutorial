"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[460],{460:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(6540),r=n.n(a),o=n(5045),s=n(5340),l=n(9239),i=n(7873),c=n(1175),u=n(1210),h=n(5709),m=n(2016),d=n(2759),p=n(4976),g=n(7767);class f extends a.Component{constructor(e){var t,n,a;super(e),t=this,a=2,(n=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(n="defaultVotes"))in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,this.state={guestCanPause:!0,votesToSkip:this.defaultVotes},this.handleRoomButtonPressed=this.handleRoomButtonPressed.bind(this),this.handleVotesChange=this.handleVotesChange.bind(this),this.handleGuestCanPauseChange=this.handleGuestCanPauseChange.bind(this)}handleVotesChange(e){this.setState({votesToSkip:e.target.value})}handleGuestCanPauseChange(e){this.setState({guestCanPause:"true"===e.target.value})}handleRoomButtonPressed(){const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({votes_to_skip:this.state.votesToSkip,guest_can_pause:this.state.guestCanPause})};fetch("/api/create-room",e).then((e=>e.json())).then((e=>{this.props.navigate("/room/"+e.code)})).catch((e=>console.error("There was a problem with the fetch operation:",e)))}render(){return r().createElement(s.A,{container:!0,spacing:1},r().createElement(s.A,{item:!0,xs:12,align:"center"},r().createElement(l.A,{component:"h4",variant:"h4"},"Create A Room")),r().createElement(s.A,{item:!0,xs:12,align:"center"},r().createElement(u.A,{component:"fieldset"},r().createElement(c.A,null,r().createElement("div",{align:"center"},"Guest Control of Playback State")),r().createElement(m.A,{row:!0,defaultValue:"true",onChange:this.handleGuestCanPauseChange},r().createElement(d.A,{value:"true",control:r().createElement(h.A,{color:"primary"}),label:"Play/Pause",labelPlacement:"bottom"}),r().createElement(d.A,{value:"false",control:r().createElement(h.A,{color:"secondary"}),label:"No Control",labelPlacement:"bottom"})))),r().createElement(s.A,{item:!0,xs:12,align:"center"},r().createElement(i.A,{required:!0,type:"number",onChange:this.handleVotesChange,defaultValue:this.defaultVotes,inputProps:{min:1,style:{textAlign:"center"}}}),r().createElement(c.A,null,r().createElement("div",{align:"center"},"Votes Required To Skip Song"))),r().createElement(s.A,{item:!0,xs:12,align:"center"},r().createElement(o.A,{color:"primary",variant:"contained",onClick:this.handleRoomButtonPressed},"Create A Room")),r().createElement(s.A,{item:!0,xs:12,align:"center"},r().createElement(o.A,{color:"secondary",variant:"contained",to:"/",component:p.N_},"Back")))}}function v(){const e=(0,g.Zp)();return r().createElement(f,{navigate:e})}}}]);