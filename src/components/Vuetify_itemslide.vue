<template>
	<div>
		<v-sheet>
			<v-slide-group multiple show-arrows>
				<v-slide-item v-for="n in 8" :key="n">
					<v-card style="margin: 0 20px 0 0; width: 320px; height: 240px;">
						<v-img class="white--text align-end" height="120px" src="https://www.tsuzukiblog.org/_wu/2020/03/shutterstock_1005938026.jpg"></v-img>
						<v-card-title>sample title {{ n }}</v-card-title>
						<v-card-text class="text--primary">
							{{ n }}番目のカードテキスト
						</v-card-text>
					</v-card>
				</v-slide-item>
			</v-slide-group>
		</v-sheet>
	</div>
</template>

<script>
export default {
  name: 'VuetifyItemslide',
}
</script>