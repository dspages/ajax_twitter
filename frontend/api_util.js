


const APIUtil = {


  doAJAX (method, input_url, data){
    return $.ajax({
      type: method,
      dataType: "json",
      data: data,
      url: input_url,
      error(){
        console.log("error!");
      },
    });
  },

  followUser(id) {
    // console.log("Posting to "+id+" with cb "+cb);
    return this.doAJAX('POST', `/users/${id}/follow`);
  },

  unfollowUser (id){
    // console.log("deleting from "+id+" with cb "+cb);
    return this.doAJAX('DELETE', `/users/${id}/follow`);
  },

  searchUsers(queryVal, success) {
    // return this.doAJAX('GET', `/users/search`, queryVal);
    return $.ajax({
      type: 'GET',
      dataType: "json",
      data: {query: queryVal},
      url: '/users/search',
    });
  }
};

module.exports = APIUtil;
