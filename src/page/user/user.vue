<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { Table, TableColumn, Icon, Popover, Tag, Button } from 'element-ui';
export default {
  components: {
    ElTable: Table,
    ElTableColumn: TableColumn,
    ElIcon: Icon,
    ElPopover: Popover,
    ElTag: Tag,
    ElButton: Button
  },
  data () {
    return {
      tableData: [{
        date: '2017-08-06',
        name: 'sosout',
        address: '浙江省杭州市滨江区'
      }, {
        date: '2017-08-06',
        name: 'sosout',
        address: '浙江省杭州市滨江区'
      }, {
        date: '2017-08-06',
        name: 'sosout',
        address: '浙江省杭州市滨江区'
      }, {
        date: '2017-08-06',
        name: 'sosout',
        address: '浙江省杭州市滨江区'
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>

</style>
