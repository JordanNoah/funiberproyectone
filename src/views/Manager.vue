<template>
  <v-container fluid>
    <div v-show="$store.state.dataTable.length != 0">
      <TableCharged />
    </div>
    <div v-show="$store.state.dataTable.length == 0">
      <TableSkeleton />
    </div>
  </v-container>
</template>

<script>
export default {
  data:()=>({
    data:[]
  }),
  beforeCreate:function(){
    this.$store.commit('chargeDataTable')
  },
  components:{
    TableSkeleton: () => import('../components/TableSkeleton.vue'),
    TableCharged: () => import('../components/TableCharged')
  }
}
</script>