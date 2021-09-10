<template>
<div>
	<button v-on:click="show" class="button bt-s">show!</button>
	<modal name="hello-world" :draggable="true" :resizable="true" @before-close="beforeClose">
		<div class="modal-header">
			<h2>Modal title</h2>
		</div>
		<div class="modal-body">
			<p>you're reading this text in a modal!</p>
			<p>you're reading this text in a modal!</p>
			<p>you're reading this text in a modal!</p>
			<p>you're reading this text in a modal!</p>
			<p>you're reading this text in a modal!</p>
			<p>you're reading this text in a modal!</p>
			<p>you're reading this text in a modal!</p>
			<p>you're reading this text in a modal!</p>
			<p>you're reading this text in a modal!</p>
			<button v-on:click="hide">閉じる</button>
		</div>  
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
    beforeClose (event) {
      console.log('Closing...')
      // What a gamble... 50% chance to cancel closing
      if (Math.random() < 0.5) {
        event.cancel()
      }
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