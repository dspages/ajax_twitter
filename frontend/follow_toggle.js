const FOLLOWED = true;
const FOLLOWING = 1;
const UNFOLLOWED = false;
const UNFOLLOWING = 0;

let APUtil = require("./api_util");

class FollowToggle {

  constructor(el,user_id=-1,follow_state=-1) {
    this.$el = $(el);
    if(user_id===-1){this.userId = this.$el.data("user-id");}
    else{this.userId=user_id;}
    if(follow_state===-1){this.followState=this.$el.data("initial-follow-state");}
    else{this.followState=follow_state;}
    // console.log("constructor is being called");
    this.render();
    this.$el.on("click", ()=>{
      this.handleClick();
    });
    console.log(this.userId);
  }

  render(){
    if (this.followState){
      this.$el.text("Unfollow");
    }
    else{
      this.$el.text("Follow");
    }
  }

  toggle(){
    if(this.followState===UNFOLLOWED||this.followState===FOLLOWING){
      this.followState=FOLLOWED;
    }else{
      this.followState=UNFOLLOWED;
    }
    this.$el.prop("disabled",false);
    this.render();
  }

  prelimToggle(){
    if(this.followState===UNFOLLOWED){
      this.followState=FOLLOWING;
    }else if(this.followState===FOLLOWED){
      this.followState=UNFOLLOWING;
    }
    this.render();
    this.$el.prop("disabled",true);
  }



  handleClick(){

    event.preventDefault();

    let toggleCB = () => {
      this.toggle();
    };

    // console.log(this.followState);

    if (this.followState === FOLLOWED) {
      APUtil.unfollowUser(this.userId,toggleCB).then(toggleCB);
    }
    else if(this.followState === UNFOLLOWED) {
      APUtil.followUser(this.userId).then(toggleCB);
    }
    this.prelimToggle();
  }
}

module.exports = FollowToggle;
