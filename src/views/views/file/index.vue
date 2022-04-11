<template>
  <el-container>
    <el-aside >
      <file-tree></file-tree>
    </el-aside>
    <el-header>
      <upload></upload>
    </el-header>
    <el-main>
      <shows></shows>
      <upload></upload>
    </el-main>
  </el-container>
</template>

<script>
import FileTree from "@/views/file/fileTree";
import Shows from "@/views/file/shows";
import Upload from "@/views/file/upload";
export default {
  name: "file",
  components: {Upload, Shows, FileTree},
  methods:{

  }
}
</script>

<style>

</style>