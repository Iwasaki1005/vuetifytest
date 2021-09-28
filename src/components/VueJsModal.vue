<template>
	<div id="modal1" class="" v-on:click="mostzi1">
		<button v-on:click="show" class="button bt-s">show!</button>
		<modal name="hello-world" @opened="Open1" :draggable="true" :resizable="true" v-on:click="mostzi1">
			<span>Hello,1!</span>
			<button v-on:click="hide">閉じる</button>
			<button v-on:click="modal1full">フルスクリーン</button>
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
	modal1full : function () {
      let modal1 = document.getElementById('modal1');
      if (modal1.classList.contains('modalfull') == false ) {
        modal1.classList.add("modalfull");
      }
      else {
        modal1.classList.remove("modalfull");
      }
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

      // ここからスワイプ //
//      var startY = null;
//      var endY = null;
//        window.addEventListener('load', function(){
//          // スワイプ／フリック
//          document.getElementById("content1").addEventListener('touchmove', logSwipe);
//          // タッチ開始
//          document.getElementById("content1").addEventListener('touchstart', logSwipeStart);
//          // タッチ終了
//          document.getElementById("content1").addEventListener('touchend', logSwipeEnd);
//        });
//        function logSwipeStart(event) {
//          event.preventDefault();
//          startY = event.touches[0].pageY;
//        }
//        function logSwipe(event) {
//          event.preventDefault();
//          endY = event.touches[0].pageY;
//        }
//        function logSwipeEnd(event) {
//          event.preventDefault();
//          if( 0 < (endY - startY) ) {
//            console.log("下向き");
//         } else {
//              console.log("上向き");
//          }
//        }
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
	},
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

.modalfull .vm--modal {
	top: 0!important;
	left: 0!important;
	width: 100vw!important;
	height: 100vh!important;
}
</style>