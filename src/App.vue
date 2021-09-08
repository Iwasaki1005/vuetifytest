<template>
  <div id="app">
	<v-app>
		<VuetifyHeader />
		<div class="main-content">
			<VuetifySlider />
		</div>
		<v-content class="main-content">
			<VuetifyPankuzu />
			<v-layout wrap align-content-space-between>
				<v-flex class="p80">
					<h2>人気ランキング</h2>
					<VuetifyItemslide />
					<h2>セール中のアイテム</h2>
					<VuetifyItemslide />
					<h2>オススメアイテム</h2>
					<VuetifyItemslide />
				</v-flex>
				<v-flex class="p20">
					<VuetifySidebar />
				</v-flex>
			</v-layout>
		</v-content>
	</v-app>
	<!--<ShopHeader />
	<Carousels2 />
	<Lazytest />
	<Carousels />
	<About />-->
  </div>
</template>

<script>
import VuetifySlider from './components/Vuetify_slider.vue'
import VuetifyHeader from './components/Vuetify_header.vue'
import VuetifyPankuzu from './components/Vuetify_pankuzu.vue'
import VuetifySidebar from './components/Vuetify_sidebar.vue'
import VuetifyItemslide from './components/Vuetify_itemslide.vue'
//import About from './components/About.vue'
//import Carousels from './components/Carousels.vue'
//import Carousels2 from './components/Carousels2.vue'
//import ShopHeader from './components/Shop_header.vue'
//import Lazytest from './components/Lazytest.vue'

export default {
  name: 'App',
  components: {
	VuetifyHeader,
	VuetifyPankuzu,
	VuetifySlider,
	VuetifySidebar,
	VuetifyItemslide,
	//About,
	//Carousels,
	//Carousels2,
	//Lazytest,
	//ShopHeader,
  },
}
</script>

<style>
.p80 {
	width: 80%;
}
.p20 {
	width: 20%;
}
.main-content {
	width: 80%;
	margin: 0 auto;
}
</style>