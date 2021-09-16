<template>
	<div>
		<button v-on:click="show"  class="button bt-s">show!</button>
		<modal name="example4" :clickToClose="false" :draggable="true" :resizable="true" :scrollable="true">
			<div  style="height: 100%; overflow-y:scroll;">
			<Timeline :id="user_id" sourceType="profile" :options="{ tweetLimit: '8' }"/>
			</div>
			<button v-on:click="hide">⛔Close</button>
		</modal>
	</div>
</template>

<script>
import { Timeline } from "vue-tweet-embed";

export default {
  name: 'VueJsModalSmaple4',
  methods: {
    show : function() {
      this.$modal.show('example4');
    },
    hide : function () {
      this.$modal.hide('example4');
    },
  },
  components: {
    Timeline
  },
  data: function() {
    return {
      user_id: "vuejs"
    };
  },
}
</script>

<style scoped>
.bt-s {
	margin: 0 auto;
	width: 200px;
	height: 100px;
	background-color: rgb(156, 224, 176);
}
</style>