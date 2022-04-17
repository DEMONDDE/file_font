<template>
  <el-container>
    <el-aside >
      <file-tree></file-tree>
    </el-aside>
    <el-container>
      <el-header >
        <upload></upload>
      </el-header>
      <el-main >
        <shows></shows>
      </el-main>
    </el-container>
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