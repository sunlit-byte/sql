<template>

  <div>

    <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button> -->
    <el-button @click="clearFilter">清除所有过滤器</el-button>
    <el-table
        border
        stripe
        ref="filterTable"
        :data="tableData"
        style="width: 60%">

      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>

      <el-table-column
          prop="address"
          label="编号"
          :formatter="formatter">
      </el-table-column>

      <el-table-column
          prop="score"
          label="成绩"
          sortable
          width="180"
          column-key="score"
          :filters="[{text: '100', value: '100'}, {text: '97', value: '97'}, {text: '98', value: '98'}, {text: '99', value: '99'}]"
          :filter-method="filterHandler"
      >
      </el-table-column>

      <el-table-column
          prop="tag"
          label="项目"
          width="100"
          :filters="[{ text: '标枪', value: '标枪' }, { text: '体操', value: '体操' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
              :type="scope.row.tag === '标枪' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        score: '94',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '标枪'
      }, {
        score: '88',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        tag: '体操'
      }, {
        score: '100',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        tag: '标枪'
      }, {
        score: '76',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '体操'
      }]
    }
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('score');
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  }
}
</script>