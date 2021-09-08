<template>
  <div class="vue">
      <ul class="tabs">
        <li v-on:click="change('1')" v-bind:class="{'active': isActive === '1'}">タブ1</li>
        <li v-on:click="change('2')" v-bind:class="{'active': isActive === '2'}">タブ2</li>
        <li v-on:click="change('3')" v-bind:class="{'active': isActive === '3'}">タブ3</li>
      </ul>

      <ul class="contents">
        <li v-if="isActive === '1'"><Item1 /></li>
        <li v-else-if="isActive === '2'"><Item2 /></li>
        <li v-else-if="isActive === '3'"><Item3 /></li>
      </ul>
  </div>
</template>

<script>
import Item1 from './item1.vue'
import Item2 from './item2.vue'
import Item3 from './item3.vue'


export default {
  name: 'About',
  components: {
	Item1,
	Item2,
	Item3,
  },
  data: function () {
    return {
      isActive: '1'
    }
  },
  methods: {
    change: function(num){
      this.isActive = num
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  .tabs {
    overflow: hidden;
  }
  .tabs li,
  .tabs label {
    float: left;
    padding: 10px 20px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: .3s;
  }
  .tabs li:not(:first-child),
  .tabs label:not(:first-of-type) {
    border-left: none;
  }
  .tabs li.active,
  .tabs :checked + label {
    background-color: #000;
    border-color: #000;
    color: #fff;
    cursor: auto;
  }
  .contents{
    overflow: hidden;
    margin-top: -1px;
  }
  .contents li {
    width: 320px;
    padding: 20px;
    border: 1px solid #ccc;
  }

  .jquery .contents li{
    display: none;
  }
  .jquery .contents li.active {
    display: block;
  }

  .vue_radio input{
    display: none;
  }
</style>
