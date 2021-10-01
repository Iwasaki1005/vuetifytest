<template>
	<div id="modal2" v-on:click="mostzi2">
		<button v-on:click="show2" class="button bt-s">Youtube動画(通常)</button>
		<modal name="example" id="modal2naka" @opened="Open2" :resizable="true" :draggable="true" :scrollable="true" v-on:click="mostzi2">
			<div class="tube-head">
				<span>Hello, {{ name }}!</span>
				<button v-on:click="hide2">閉じる</button>
			</div>
			<div class="youtube">
			<!--<iframe width="560" height="315" src="https://www.youtube.com/embed/t3tm8iNlwIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
			<iframe width="560" height="315" src="https://www.youtube.com/embed/QxfKBGlhksM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
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
    show2 : function() {
      this.$modal.show('example');
    },
    hide2 : function () {
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
      var startY = null;
      var startX = null;
      var endY = null;
      var endX = null;
      window.addEventListener('load', function(){
        // スワイプ／フリック
        document.getElementByquerySelector("vm--modal").addEventListener('touchmove', logSwipe);
        // タッチ開始
        document.getElementByquerySelector("vm--modal").addEventListener('touchstart', logSwipeStart);
        // タッチ終了
        document.getElementByquerySelector("vm--modal").addEventListener('touchend', logSwipeEnd);
      });
      function logSwipeStart(event) {
          event.preventDefault();
          startY = event.touches[0].pageY;
          startX = event.touches[0].pageX;
      }
      function logSwipe(event) {
        event.preventDefault();
        endY = event.touches[0].pageY;
		endX = event.touches[0].pageX;
      }
      function logSwipeEnd(event) {
        event.preventDefault();
        if( 0 < (endY - startY) ) {
          console.log("下向き");
        } else {
          console.log("上向き");
        }
        if( 0 < (endX - startX) ) {
          console.log("右向き");
        } else {
          console.log("左向き");
        }
      }
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

.youtube {
  width: 100%;
  aspect-ratio: 16 / 9;
  z-index: 10;
}
.youtube iframe {
  width: 100%;
  height: 100%;
}

.tube-head {
	position: sticky;
	top: 0;
	z-index: 20;
}
</style>