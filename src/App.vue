<template>
  <div id="app">
	<v-app>
		<CommerceTag />
		<Swipetest />
		<div class="buttons-vm">
			<VueJsModal />
			<VueJsModalSmaple2 />
			<VueJsModalSmaple3 />
			<!--<VueJsModalSmaple4 />
			<VueJsModalSmaple5 />-->
		</div>
		<v-card class="mx-auto">
				<v-card-title>
					<v-icon large left color="#26c6da">mdi-twitter</v-icon>
				</v-card-title>
				<v-flex xs12>
					<Timeline :id="user_id" sourceType="profile" :options="{ tweetLimit: '3' }"/>
				</v-flex>
		</v-card>
		<a class="open">
			<div class="icon">📚</div>
			<div class="caption">menu</div>
		</a>
		<VuetifyHeader />
		<div class="main-content">
			<VuetifySlider />
		</div>
		<v-main class="main-content">
			<VuetifyPankuzu />
		</v-main>
	</v-app>
	<!--<ShopHeader />
	<About />-->
  </div>
</template>

<script>
import VuetifySlider from './components/Vuetify_slider.vue'
import VuetifyHeader from './components/Vuetify_header.vue'
import VuetifyPankuzu from './components/Vuetify_pankuzu.vue'
import VueJsModal from './components/VueJsModal.vue'
import VueJsModalSmaple2 from './components/VueJsModal_sample2.vue'
import VueJsModalSmaple3 from './components/VueJsModal_sample3.vue'
//import VueJsModalSmaple4 from './components/VueJsModal_sample4.vue'
//import VueJsModalSmaple5 from './components/VueJsModal_sample5.vue'
//import About from './components/About.vue'
//import ShopHeader from './components/Shop_header.vue'
import Swipetest from './components/Swipetest.vue'
import CommerceTag from './components/Commerce_tag.vue'

export default {
  name: 'App',
  components: {
	VuetifyHeader,
	VuetifyPankuzu,
	VuetifySlider,
	VueJsModal,
	VueJsModalSmaple2,
	VueJsModalSmaple3,
	//VueJsModalSmaple4,
	//VueJsModalSmaple5,
	//About,
	//ShopHeader,
	Swipetest,
	CommerceTag,
  },
  mounted: function() {
	/*--------------------------------------------------------------------------
	*
	* tweet
	*
	*
	--------------------------------------------------------------------------*/
		let tweetScript = document.createElement('script')
		tweetScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
		document.head.appendChild(tweetScript)
  },
  data() {
    return {
      show: "true",
    }
  },
  methods: {
    click: function () {
      this.show = !this.show;
    }
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
.buttons-vm {
	width: 100%;
	display: flex;
	justify-content: space-between;
}
</style>