<template>
	<div>
		<v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
	</div>
</template>

<script>
export default {
  name: 'VuetifyPankuzu',
  data: () => ({
        //（中略）
        //パンくず
          items: [
        {
          text: 'Home',
          disabled: false,
          href: 'https://codepen.io/i_ryo',
        },
        {
          text: '金ぴかくじ',
          disabled: false,
          href: 'https://codepen.io/i_ryo/pens/public',
        },
        {
          text: 'ゴールデン装備くじ',
          disabled: true,
          href: 'https://codepen.io/i_ryo/pen/WNezWJg',
        },
      ],
  })
}
</script>