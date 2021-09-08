<template>
	<v-carousel cycle show-arrows-on-hover>
		<a v-for="(item,i) in items" :key="i" v-bind:href=item.link>
			<v-carousel-item :key="i" :src="item.src"></v-carousel-item>
		</a>
		<template v-slot:prev="{ on, attrs }">
			<v-btn 
				class="dokuzi-button"
				color="success"
				v-bind="attrs"
				v-on="on"
			>Previous slide</v-btn>
		</template>
		<template v-slot:next="{ on, attrs }">
			<v-btn
				color="info"
				v-bind="attrs"
				v-on="on"
			>Next slide</v-btn>
		</template>
	</v-carousel>
</template>

<script>
export default {
  name: 'VuetifySlider',
  data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
			link: 'https://www.yahoo.co.jp/'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
			link: 'https://www.yahoo.co.jp/'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
			link: 'https://www.yahoo.co.jp/'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
			link: 'https://www.yahoo.co.jp/'
          },
        ]
      }
    },
}
</script>

<style>
.dokuzi-button {
	font-size: 30px!important
}
</style>