let APIUtil = require("./api_util");
let FollowToggle = require("./follow_toggle");

class UsersSearch {
  constructor(el, input, ul) {
    console.log("constructor go!");
    this.$el = $(el);
    console.log(this.$el);
    this.$input = $(input);
    this.$ul = $(ul);
    this.$input.on("input", () => {
      console.log(this.$input.val());
      this.handleInput(this.$input.val());
    });
    console.log(this.$input);
  }


  handleInput(queryVal) {
    console.log("input handling");
    let renderResults = (arg) => {
      console.log(arg);
      this.$ul.empty();
      arg.forEach((el, index) => {
        let li = $("<a></a>");

        let $followToggle = $("<button></button>");
        let followed=el.followed ? true : false;
        new FollowToggle($followToggle, el.id, followed);

        li.text(el.username);
        li.attr("href",`/users/${el.id}`);
        console.log(li);
        this.$ul.append(li);
        this.$ul.append($("<br>"));
        this.$ul.append($followToggle);
        this.$ul.append($("<br>"));
      });
    };

    APIUtil.searchUsers(queryVal).then(renderResults);
    console.log(APIUtil.searchUsers(queryVal));
  }

}

module.exports = UsersSearch;
