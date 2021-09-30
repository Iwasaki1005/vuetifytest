<template>
	<div>
		<div class="align-center">
			<p class="fs-0_8rem co-brown m-right-1rem">タグ一覧</p>
			<button @click="tagallactive" class="bt-allon m-right-05rem">All ON</button>
			<button @click="tagallremove" class="bt-alloff">All OFF</button>
		</div>

		<div class="display-flex m-top-05rem">
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

		<!-- いらすとや1 男の子 女の子 複数人 -->
		<div v-if="ontag.includes('yanky')"></div>
		<div v-else class="illust-div bgil-1"></div>

		<!-- いらすとや2 男の子 ヤンキー 複数人 -->
		<div v-if="ontag.includes('onnanoko')"></div>
		<div v-else class="illust-div bgil-2"></div>

		<!-- いらすとや3 女の子 -->
		<div v-if="ontag.includes('otokonoko') || ontag.includes('hukusuunim') || ontag.includes('yanky')"></div>
		<div v-else class="illust-div bgil-3"></div>

		<!-- いらすとや4 女の子 !特殊 -->
		<div v-if="ontag.includes('otokonoko') || ontag.includes('hukusuunim') || ontag.includes('yanky')"></div>
		<div v-else class="illust-div bgil-4"></div>

		<!-- いらすとや5 女の子 -->
		<div v-if="ontag.includes('otokonoko') || ontag.includes('hukusuunim') || ontag.includes('yanky')"></div>
		<div v-else class="illust-div bgil-5"></div>

		<!-- いらすとや6 女の子 複数人 -->
		<div v-if="ontag.includes('otokonoko') || ontag.includes('yanky')"></div>
		<div v-else class="illust-div bgil-6"></div>

		<!-- いらすとや7 男の子 -->
		<div v-if="ontag.includes('onnanoko') || ontag.includes('hukusuunim') || ontag.includes('yanky')"></div>
		<div v-else class="illust-div bgil-7"></div>

		</div>
	</div>
</template>

<script>
export default {
  name: 'CommerceTag',
  data: () => ({
     ontag: [],
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
      }
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
</style>