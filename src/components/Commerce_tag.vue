<template>
	<div>
		<v-app-bar color="gray accent-4" dark>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
			<v-toolbar-title>Live-commerce(image)</v-toolbar-title>
			<div class="flex-grow-1"></div>
			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
			<v-menu left bottom>
				<template v-slot:activator="{ on }">
					<v-btn icon v-on="on">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-item v-for="n in 5" :key="n" @click="() => {}">
						<v-list-item-title>リンク {{ n }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-app-bar>

		<h2 style="margin-top: 2rem;" class="width90">人気の配信</h2>
		<div class="display-flex m-top-05rem width90">
			<div v-if="ontag.includes('otokonoko')" class="tag-on" @click="removetagOtokonoko">男の子(削除)</div>
			<div v-else class="tag-off" @click="addtagOtokonoko">男の子</div>

			<div v-if="ontag.includes('onnanoko')" class="tag-on" @click="removetagOnnanoko">女の子(削除)</div>
			<div v-else class="tag-off" @click="addtagOnnanoko">女の子</div>

			<div v-if="ontag.includes('hukusuunim')" class="tag-on" @click="removetagHukusuunim">複数人(削除)</div>	
			<div v-else class="tag-off" @click="addtagHukusuunim">複数人</div>

			<div v-if="ontag.includes('yanky')" class="tag-on" @click="removetagYanky">ヤンキー(削除)</div>
			<div v-else class="tag-off" @click="addtagYanky">ヤンキー</div>
		</div>

		<div class="flex-wrap width90 center">
			

		<v-slide-group multiple show-arrows>
		<!-- いらすとや1 男の子 女の子 複数人 -->
		<transition name="bounce">
		<div key="hoge" v-if="ontag.includes('yanky')"></div>
		<div key="huga" v-else class="illust-div bgil-1"  v-on:click="show2">
			<div class="live"><span class="liveicon">Live</span>1000人視聴中</div>
			<div style="margin-left: 1rem;">#男の子 #女の子 #複数人</div>
			<div style="color: red; margin-left: 1rem;">※クリックで動画が開きます</div>
		</div>
		</transition>

		<transition name="bounce">
		<!-- いらすとや2 男の子 ヤンキー 複数人 -->
		<div key="1" v-if="ontag.includes('onnanoko')"></div>
		<div key="2" v-else class="illust-div bgil-2"  v-on:click="show3">
			<div class="live"><span class="liveicon">Live</span>3000人視聴中</div>
			<div style="margin-left: 1rem;">#男の子 #ヤンキー</div>
			<div style="color: red; margin-left: 1rem;">※クリックで動画が開きます</div>
		</div>
		</transition>

		<!-- いらすとや3 女の子 -->
		<transition name="bounce">
		<div key="3" v-if="ontag.includes('otokonoko') || ontag.includes('hukusuunim') || ontag.includes('yanky')"></div>
		<div key="4" v-else class="illust-div bgil-3">
			<div class="live"><span class="liveicon">Live</span>500人視聴中</div>
			<div style="margin-left: 1rem;">#女の子</div>
		</div>
		</transition>

		<!-- いらすとや4 女の子 !特殊 -->
		<transition name="bounce">
		<div key="5" v-if="ontag.includes('otokonoko') || ontag.includes('hukusuunim') || ontag.includes('yanky')"></div>
		<div key="6" v-else class="illust-div bgil-4">
			<div class="live"><span class="liveicon">Live</span>1000人視聴中</div>
			<p style="margin-left: 1rem;">#女の子</p>
		</div>
		</transition>

		<!-- いらすとや5 女の子 -->
		<transition name="bounce">
		<div key="7" v-if="ontag.includes('otokonoko') || ontag.includes('hukusuunim') || ontag.includes('yanky')"></div>
		<div key="8" v-else class="illust-div bgil-5">
			<div class="live"><span class="liveicon">Live</span>1000人視聴中</div>
			<p style="margin-left: 1rem;">#女の子</p>
		</div>
		</transition>

		<!-- いらすとや6 女の子 複数人 -->
		<transition name="bounce">
		<div key="9" v-if="ontag.includes('otokonoko') || ontag.includes('yanky')"></div>
		<div key="10" v-else class="illust-div bgil-6">
			<div class="live"><span class="liveicon">Live</span>1000人視聴中</div>
			<p style="margin-left: 1rem;">#女の子 #複数人</p>
		</div>
		</transition>

		<!-- いらすとや7 男の子 -->
		<transition name="bounce">
		<div key="11" v-if="ontag.includes('onnanoko') || ontag.includes('hukusuunim') || ontag.includes('yanky')"></div>
		<div key="12" v-else class="illust-div bgil-7">
			<div class="live"><span class="liveicon">Live</span>1000人視聴中</div>
			<p style="margin-left: 1rem;">#男の子</p>
		</div>
		</transition>
		</v-slide-group>
		


		</div>
	</div>
</template>

<script>
export default {
  name: 'CommerceTag',
  data: () => ({
     ontag: [],
     show: true
  }),
  methods: {
      addtagOtokonoko : function() {
        this.ontag.push('otokonoko')
      },
      removetagOtokonoko : function() {
		let targettag = 'otokonoko'
		let ontagcall = this.ontag
		let passindex = ontagcall.findIndex(element => element === targettag);
		this.ontag.splice( passindex, 1 );
      },
      addtagOnnanoko : function() {
        this.ontag.push('onnanoko')
      },
       removetagOnnanoko : function() {
		let targettag = 'onnanoko'
		let ontagcall = this.ontag
		let passindex = ontagcall.findIndex(element => element === targettag);
		this.ontag.splice( passindex, 1 );
      },
      addtagHukusuunim : function() {
        this.ontag.push('hukusuunim')
      },
      removetagHukusuunim : function() {
		let targettag = 'hukusuunim'
		let ontagcall = this.ontag
		let passindex = ontagcall.findIndex(element => element === targettag);
		this.ontag.splice( passindex, 1 );
      },
      addtagYanky : function() {
        this.ontag.push('yanky')
      },
      removetagYanky : function() {
		let targettag = 'yanky'
		let ontagcall = this.ontag
		let passindex = ontagcall.findIndex(element => element === targettag);
		this.ontag.splice( passindex, 1 );
      },
      tagallactive : function() {
		this.ontag.splice(0, this.ontag.length)
		this.ontag.push('otokonoko')
		this.ontag.push('onnanoko')
		this.ontag.push('hukusuunim')
		this.ontag.push('yanky')
      },
      tagallremove : function() {
        this.ontag.splice(0, this.ontag.length)
      },
      show2 : function() {
      this.$modal.show('example');
    },
    hide2 : function () {
      this.$modal.hide('example');
    },
	show3 : function() {
      this.$modal.show('example3');
    },
    hide3 : function () {
      this.$modal.hide('example3');
    },
  },
}
</script>

<style>
.illust-div {
	width: 16vw;
	height: 32vw;
	border: 0.2vw solid black;
	border-radius: 1vw;
	margin: 1vw;
}

.bgil-1 {
	background-image: url(./illustrations/イラスト1、男の子、女の子、複数人.png);
	background-position: center;
}

.bgil-2 {
	background-image: url(./illustrations/イラスト2、男の子、複数人、ヤンキー.png);
	background-position: center;
}

.bgil-3 {
	background-image: url(./illustrations/イラスト3、女の子.png);
	background-position: center;
}

.bgil-4 {
	background-image: url(./illustrations/イラスト4、女の子、特殊.png);
	background-position: center;
}

.bgil-5 {
	background-image: url(./illustrations/イラスト5、女の子、男の子.png);
	background-position: center;
}

.bgil-6 {
	background-image: url(./illustrations/イラスト６、女の子、複数人.png);
	background-position: center;
}

.bgil-7 {
	background-image: url(./illustrations/イラスト７、男の子.png);
	background-position: center;
}


.bt-allon {
	background-color: black;
	border: 0.1vw solid black;
	font-size: 1.2rem;
	border-radius: 0.8vw;
	padding: 0.1vw 0.5vw;
	color: white;
}

.bt-alloff {
	background-color: white;
	border: 0.1vw solid black;
	font-size: 1.2rem;
	border-radius: 0.8vw;
	padding: 0.1vw 0.5vw;
	color: black;
}

.tag-on {
	background-color: black;
	border: 0.1vw solid black;
	font-size: 1.2rem;
	padding: 0.1vw 0.5vw;
	color: white;
	margin-right: 0.5rem
}

.tag-off {
	background-color: white;
	border: 0.1vw solid black;
	font-size: 1.2rem;
	padding: 0.1vw 0.5vw;
	color: black;
	margin-right: 0.5rem
}

.display-flex {
	display: flex;
}

.flex-wrap {
	display: flex;
	flex-wrap: wrap;
}

.liveicon {
	background-color: red;
	padding: 0.1rem 0.4rem;
	color: white;
	font-weight: bold;
}

.live {
	margin: 1rem 0 0 1rem;
}

.width90 {
	width: 90%;
	margin: 0 auto;
}


.transition-duration05s {
	transition-duration: 0.5s;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>