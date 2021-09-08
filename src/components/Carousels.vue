<template>
	<v-app>
		<div>
			<v-app-bar color="gray accent-4" dark>
				<v-app-bar-nav-icon></v-app-bar-nav-icon>
				<v-toolbar-title>びゅうてぃふぁい</v-toolbar-title>
				<div class="flex-grow-1"></div>
				<v-btn icon>
					<v-icon>mdi-heart</v-icon>
				</v-btn>
				<v-btn icon>
					<v-icon>mdi-magnify</v-icon>
				</v-btn>
				<v-menu>
					<template v-slot:activator="{ on }">
						<v-btn icon v-on="on">
							<v-icon>mdi-dots-vertical</v-icon>
						</v-btn>
					</template>
					<v-list>
						<v-list-item
							v-for="n in 5"
							:key="n"
							@click="() => {}"
						>
						<v-list-item-title>りんく {{ n }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</v-app-bar>
		</div>
		<div>
			<v-breadcrumbs :items="pankuzu" divider=">"></v-breadcrumbs>
		</div>

		<v-carousel>
			<v-carousel-item v-for="(color, i) in colors" :key="color">
				<v-sheet :color="color" height="100%" tile>
					<v-row class="fill-height" align="center" justify="center">
						<div class="display-3">すらいど {{ i + 1 }}</div>
					</v-row>
				</v-sheet>
			</v-carousel-item>
		</v-carousel>

		<v-expansion-panels>
			<v-expansion-panel v-for="(item,i) in 5" :key="i">
				<v-expansion-panel-header>あこーでぃおん</v-expansion-panel-header>
					<v-expansion-panel-content>
						開くと説明文がでてくるよ。開くと説明文がでてくるよ。開くと説明文がでてくるよ。開くと説明文がでてくるよ。開くと説明文がでてくるよ。開くと説明文がでてくるよ。開くと説明文がでてくるよ。
					</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>

		<v-content>
			<v-container>
				<v-layout wrap>
					<v-flex xs12 sm6 md4 text-center my-5><v-btn>押して</v-btn></v-flex>
					<v-flex xs12 sm6 md4 text-center my-5><v-btn >押して</v-btn></v-flex>
					<v-flex xs12 sm6 md4 text-center my-5><v-btn>押して</v-btn></v-flex>
				</v-layout>
			</v-container>
		</v-content>
		<v-footer>
			<div class="flex-grow-1"></div>
			<div>&copy; 2019 - {{ new Date().getFullYear() }} クモのようにコツコツと</div>
		</v-footer>
	</v-app>
</template>

<script>
export default {
  name: 'Carousels',
  data: () => ({
        //（中略）
        //パンくず
          pankuzu: [
        {
          text: 'Home',
          disabled: false,
          href: 'https://codepen.io/i_ryo',
        },
        {
          text: '会社概要',
          disabled: false,
          href: 'https://codepen.io/i_ryo/pens/public',
        },
        {
          text: 'ごあいさつ',
          disabled: true,
          href: 'https://codepen.io/i_ryo/pen/WNezWJg',
        },
      ],
          colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-window__container {
	width: 1000px!important;
	height: 500px;
}
</style>
