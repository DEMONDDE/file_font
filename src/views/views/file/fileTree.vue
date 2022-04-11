<template>
  <el-card>
    <el-tree :data="trees" :expand-on-click-node="false" style="height: 100%">
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <el-icon @click.stop="append(data)"><plus /></el-icon>
            <el-icon @click.stop="remove(node, data)"><close /></el-icon>
          </span>
        </span>
      </template>
    </el-tree>
  </el-card>
</template>

<script>
import {Plus, Close} from '@element-plus/icons-vue'
export default {
  name: "fileTree",
  components:{
    Plus,
    Close
  },
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
      };
      data.children.push({
        label : 'test',
      })
    },
    remove(node, data){
    }
  }
}
</script>

<style scoped>
  .el-tree{
    height: 94vh !important;
  }
</style>