"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[459],{1459:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var o=s(8431),n=s(6320);class r extends o.Component{constructor(e){super(e),this.state={votesToSkip:2,guestCanPause:!1,isHost:!1},this.roomCode=this.props.roomCode,this.getRoomDetails()}getRoomDetails(){fetch("/api/get-room?code="+this.roomCode).then((e=>e.json())).then((e=>{this.setState({votesToSkip:e.votes_to_skip,guestCanPause:e.guest_can_pause,isHost:e.is_host})}))}render(){return o.createElement("div",null,o.createElement("h3",null,this.roomCode),o.createElement("p",null,"Votes: ",this.state.votesToSkip),o.createElement("p",null,"Guest Can Pause: ",this.state.guestCanPause.toString()),o.createElement("p",null,"Host: ",this.state.isHost.toString()))}}function a(){const{roomCode:e}=(0,n.g)();return o.createElement(r,{roomCode:e})}}}]);