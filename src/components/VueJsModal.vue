<template>
	<div id="modal1" v-on:click="mostzi1">
		<button v-on:click="show" class="button bt-s">show!</button>
		<modal name="hello-world" @opened="Open1" :draggable="true" :resizable="true" v-on:click="mostzi1">
			<span>Hello,1!</span>
			<button v-on:click="hide">閉じる</button>
		</modal>
	</div>
</template>

<script>
export default {
  name: 'VueJsModal',
  methods: {
    show : function() {
      this.$modal.show('hello-world');
    },
    hide : function () {
      this.$modal.hide('hello-world');
    },
	Open1 () {
      let modal1 = document.getElementById('modal1');
      let modal2 = document.getElementById('modal2');
      let modal3 = document.getElementById('modal3');
      modal1.classList.add("zi-most");
      modal2.classList.remove("zi-most");
      modal2.classList.add("zi-other");
      modal3.classList.remove("zi-most");
      modal3.classList.add("zi-other");
    },
	mostzi1 () {
      let modal1 = document.getElementById('modal1');
      let modal2 = document.getElementById('modal2');
      let modal3 = document.getElementById('modal3');
      modal1.classList.remove("zi-other");
      modal2.classList.remove("zi-most");
      modal3.classList.remove("zi-most");
      modal1.classList.add("zi-most");
      modal2.classList.add("zi-other");
      modal3.classList.add("zi-other");
	}
  },
}
</script>

<style scoped>
.modal-header, .modal-body {
  padding: 5px 25px;
}
.modal-header {
  border-bottom: 1px solid #ddd;
}

.bt-s {
	margin: 0 auto;
	width: 200px;
	height: 100px;
	background-color: rgb(224, 156, 156);
}
</style>


<style>
.zi-most {
	z-index: 100!important;
}
.zi-other {
	z-index: 10!important;
}
</style>