let FollowToggle = require("./follow_toggle");
let UsersSearch = require("./users_search");
$(
  () => {
  $("button.follow-toggle").each((indx,el) => {
    // console.log("callback fired");
    new FollowToggle(el);
  });

  $("nav.users-search").each((index, el) => {
    new UsersSearch(el, $(".search-box"), $(".users"));
  });
}

);
