new Vue({
  el: "#vue-app",
  data: {
    displayImg: "before.jpg",
    health: 100
  },
  methods: {
    reset: function() {
      this.displayImg = "before.jpg";
      this.health = 100;
    },
    attack: function(x) {
      if (x != "s") {
        this.health -= 5;
      } else {
        this.health -= 25;
      }

      if (this.health <= 0) {
        this.displayImg = "after.jpg";
        alert("objective achieved!");
      }
    }
  },
  computed: {}
});
