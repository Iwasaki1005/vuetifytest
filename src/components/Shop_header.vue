<template>
	<v-app>
		<div>
			<v-app-bar color="gray accent-4" dark>
				<v-app-bar-nav-icon></v-app-bar-nav-icon>
				<v-toolbar-title>(ユーザー名など仮の情報)</v-toolbar-title>
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

		<v-carousel cycle show-arrows-on-hover>
    <a v-for="(item,i) in items" :key="i" v-bind:href=item.link>
      <v-carousel-item :key="i" :src="item.src"></v-carousel-item>
    </a>
	<template v-slot:prev="{ on, attrs }">
      <v-btn
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

  <!-- サイドバー仮 -->
  <v-card height="350px">
    <v-navigation-drawer
      absolute
      permanent
      right
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
	</v-app>
</template>

<script>
export default {
  name: 'ShopHeader',
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
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ]
      }
    }
}
</script>