<template>
	<div id="modal3" v-on:click="mostzi3">
		<button v-on:click="show3"  class="button bt-s">Youtube動画(縦長)</button>
		<modal name="example3" id="modal3" @opened="Open3" :clickToClose="false" :resizable="true" :draggable="true" :scrollable="true">
			<span>Hello,3!</span>
			<button v-on:click="hide3">閉じる</button>
			<div class="youtubeshorts">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/7p-OYEQaoaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</modal>
	</div>
</template>

<script>
export default {
  name: 'VueJsModalSmaple3',
  methods: {
    show3 : function() {
      this.$modal.show('example3');
    },
    hide3 : function () {
      this.$modal.hide('example3');
    },
	Open3 () {
      let modal1 = document.getElementById('modal1');
      let modal2 = document.getElementById('modal2');
      let modal3 = document.getElementById('modal3');
      modal3.classList.add("zi-most");
      modal1.classList.remove("zi-most");
      modal1.classList.add("zi-other");
      modal2.classList.remove("zi-most");
      modal2.classList.add("zi-other");
    },
	mostzi3 () {
      let modal1 = document.getElementById('modal1');
      let modal2 = document.getElementById('modal2');
      let modal3 = document.getElementById('modal3');
      modal3.classList.remove("zi-other");
      modal1.classList.remove("zi-most");
      modal2.classList.remove("zi-most");
      modal3.classList.add("zi-most");
      modal1.classList.add("zi-other");
      modal2.classList.add("zi-other");
	}
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
/*.v--modal-overlay {
	width: 0.1%!important;
    min-height: 0.1%!important;
	width: 0.1%!important;
    min-height: 0.1%!important;
}*/
.vm--overlay {
	width: 0.1%!important;
    min-height: 0.1%!important;
	height: 0.1%!important;
    min-height: 0.1%!important;
}
.vm--container {
	width: 0.1%!important;
    min-height: 0.1%!important;
	height: 0.1%!important;
    min-height: 0.1%!important;
	z-index: 1!important;
}

.youtubeshorts {
  width: 100%;
  aspect-ratio: 9 / 16;
}

.youtubeshorts iframe {
  width: 100%;
  height: 100%;
}
</style>