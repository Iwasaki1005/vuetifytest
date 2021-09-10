<template>
	<div>
		<button v-on:click="show"  class="button bt-s">show!</button>
		<modal name="example3" :clickToClose="false" :draggable="true">
			<span>Hello,3!</span>
			<button v-on:click="hide">閉じる</button>
		</modal>
	</div>
</template>

<script>
export default {
  name: 'VueJsModalSmaple3',
  methods: {
    show : function() {
      this.$modal.show('example3');
    },
    hide : function () {
      this.$modal.hide('example3');
    },
  }
}
</script>

<style scoped>
.bt-s {
	margin: 0 auto;
	width: 200px;
	height: 100px;
	background-color: rgb(156, 208, 224);
}
</style>

<style>
.v--modal-overlay {
	width: 0.1%!important;
    min-height: 0.1%!important;
	width: 0.1%!important;
    min-height: 0.1%!important;
}
</style>