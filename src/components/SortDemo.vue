<template>
  <div class="sortdemo">
    <h2>{{ mes }}</h2>
    <button :class="sorttype ? 'ase' : 'desc'" @click="eventSortType" v-text="sorttype"></button>
    <table class="table" v-for="item in orderItems">
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import _ from 'lodash'
  export default {
    name: 'sortdemo',
    data () {
        return {
          mes: 'Sort Demo',
          sorttype: true,
          items: [
            {
              name: 'zhang',
              age: '10'
            },
             {
              name: 'wang',
              age: '18'
            },
            {
              name: 'li',
              age: '30'
            },
            {
              name: 'zhao',
              age: '23'
            },
            {
              name: 'wang',
              age: '22'
            }
          ]
        }
    },
    methods: {
      eventSortType () {
        this.sorttype = !this.sorttype
      }
    },
    computed: {
      orderItems () {
        let v = this.sorttype ? 'desc' : 'ase'
        return _.orderBy(this.items,['name', 'age'],[v, v])
      }
    }
  }
</script>
<style>
  .ase {
    background-color: darkgreen;
  }
  .desc {
    background-color: darkcyan;
  }
</style>
