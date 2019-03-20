<template>
  <div style="width: 100%;background-color: #ecf0f5;min-height: 510px;">
  <el-transfer v-model="value1" :data="data" :left-default-checked="[2, 3]"></el-transfer>
  </div>
</template>

<script>
    export default {
        name: "transfer",
      data() {
        const generateData = _ => {
          const data = [];
          for (let i = 1; i <= 15; i++) {
            data.push({
              key: i,
              label: `备选项 ${ i }`,
              disabled: i % 4 === 0
            });
          }
          return data;
        };
        return {
          data: generateData(),
          value1: [1, 4]
        };
      }
    }
</script>

<style scoped>
.el-transfer{padding: 50px 10px 25px 10px;}
</style>
