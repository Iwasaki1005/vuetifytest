<template>
	<div id="modal2" v-on:click="mostzi2">
		<button v-on:click="show" class="button bt-s">show!</button>
		<modal name="example" id="modal2" @opened="Open2" :clickToClose="false" :draggable="true" v-on:click="mostzi2">
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
      name: '2'
    }
  },
  methods: {
    show : function() {
      this.$modal.show('example');
    },
    hide : function () {
      this.$modal.hide('example');
    },
	Open2 () {
      let modal1 = document.getElementById('modal1');
      let modal2 = document.getElementById('modal2');
      let modal3 = document.getElementById('modal3');
      modal2.classList.add("zi-most");
      modal3.classList.remove("zi-most");
      modal3.classList.add("zi-other");
      modal1.classList.remove("zi-most");
      modal1.classList.add("zi-other");
    },
	mostzi2 () {
      let modal1 = document.getElementById('modal1');
      let modal2 = document.getElementById('modal2');
      let modal3 = document.getElementById('modal3');
      modal2.classList.remove("zi-other");
      modal3.classList.remove("zi-most");
      modal1.classList.remove("zi-most");
      modal2.classList.add("zi-most");
      modal3.classList.add("zi-other");
      modal1.classList.add("zi-other");
	}
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