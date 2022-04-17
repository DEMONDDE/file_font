<template>
  <el-card>
    <el-tree :data="trees" :expand-on-click-node="false" style="height: 100%">
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <i @click.stop="append(data)" class="el-icon-plus"></i>
            <i @click.stop="remove(node, data)" class="el-icon-minus"></i>
          </span>
        </span>
      </template>
    </el-tree>
  </el-card>
</template>

<script>
export default {
  name: "fileTree",
  data(){
    return{
      trees: []
    }
  },
  created() {
    this.trees  = [
      {
        label: "node1",
        children: [
          {
            label: "node11"
          }
        ]
      },
      {
        label: "node2"
      }
    ]
  },
  methods:{
    append(data){
      if(!data.children){
        data.children = [];
      }
      data.children.push({
        label : 'test',
      })
    },
    remove(node, data){
      console.log(node);
      console.log(data)
    }
  }
}
</script>

<style scoped>
  .el-tree{
    height: 94vh !important;
  }
</style>