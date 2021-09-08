<template>
<v-app>
  <v-responsive class="overflow-y-auto" max-height="700">
    <div class="pa-6 text-center">
      Scroll down
    </div>

    <v-responsive height="200vh" class="text-center pa-2">
      <v-responsive min-height="50vh"></v-responsive>
      <div class="text-center text-body-2 mb-12">
        The card will appear below:
      </div>

      <v-lazy v-model="isActive" :options="{ threshold: 1}" min-height="500" transition="fade-transition" >
        <v-card class="mx-auto" max-width="336">
          <v-card-title>Card title</v-card-title>
          <v-card-text>
            Phasellus magna. Quisque rutrum. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Aliquam lobortis. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna.
            In turpis. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In turpis. Pellentesque dapibus hendrerit tortor. Ut varius tincidunt libero.
          </v-card-text>
        </v-card>
      </v-lazy>
    </v-responsive>
  </v-responsive>
</v-app>
</template>

<script>
export default {
  name: 'Lazytest',
  data: () => ({
      isActive: false,
    }),
}
</script>