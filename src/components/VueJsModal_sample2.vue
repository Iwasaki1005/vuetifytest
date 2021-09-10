<template>
	<div>
		<button v-on:click="show" class="button bt-s">show!</button>
		<modal name="example" @before-open="beforeOpen" @before-close="beforeClose" :clickToClose="false" :draggable="true">
			<span>Hello, {{ name }}!</span>
			<button v-on:click="hide">閉じる</button>
		</modal>
	</div>
</template>

<script>
export default {
  name: 'VueJsModalSmaple2',
  data () {
    return {
      name: 'Tom'
    }
  },
  methods: {
    show : function() {
      this.$modal.show('example');
    },
    hide : function () {
      this.$modal.hide('example');
    },
   beforeOpen () {
      alert('モーダル展開前イベント');
    },
   beforeClose () {
      alert('モーダル収納前イベント');
   },
  }
}
</script>

<style scoped>
.bt-s {
	margin: 0 auto;
	width: 200px;
	height: 100px;
	background-color: rgb(217, 224, 156);
}
</style>