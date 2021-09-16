<template>
	<div>
		<button v-on:click="show"  class="button bt-s">show!</button>
		<modal name="example5" :clickToClose="false" :draggable="true" :resizable="true" :scrollable="true">
			<div id="twitter-color" class="p-twitter-box pm-tw">
				<a class="twitter-timeline" data-width="100%" data-height="100%" data-theme="light" data-chrome=”noheader,transparent,nofooter,noborders,noscrollbar” href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a> <!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->
			</div>
		</modal>
	</div>
</template>

<script>
export default {
  name: 'VueJsModalSmaple5',
  methods: {
    show : function() {
      this.$modal.show('example5');
    },
    hide : function () {
      this.$modal.hide('example5');
    },
  },
  updated: function () {
	/*--------------------------------------------------------------------------
	 *
	 * tweet
	 *
	 *
	--------------------------------------------------------------------------*/
	let tweetScript = document.createElement('script')
	tweetScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
	document.head.appendChild(tweetScript)
  },
}
</script>

<style scoped>
.bt-s {
	margin: 0 auto;
	width: 200px;
	height: 100px;
	background-color: tomato;
}
</style>