<template>
  <div>
	<section id="content1"></section>
  </div>
</template>

<script>
export default {
  name: 'Swipetest',
  mounted: function() { 
      var startY = null;
      var startX = null;
      var endY = null;
      var endX = null;
      window.addEventListener('load', function(){
        // スワイプ／フリック
        document.getElementById("content1").addEventListener('touchmove', logSwipe);
        // タッチ開始
        document.getElementById("content1").addEventListener('touchstart', logSwipeStart);
        // タッチ終了
        document.getElementById("content1").addEventListener('touchend', logSwipeEnd);
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
  }
}
</script>

<style>
	#content1 {
		padding: 20px;
		height: 300px;
		background-color: #3f98d1;
	}
</style>