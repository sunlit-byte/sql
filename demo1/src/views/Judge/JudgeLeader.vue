<template>
	<div class="hello">
		<h1>裁判长，请审查！</h1>
		<el-table :data="tableData" :stripe="true" :border="true" width="70%">
			<el-table-column label="项目" prop="project_id"></el-table-column>
			<el-table-column label="姓名" prop="name"></el-table-column>
			<el-table-column label="编号" prop="player_id"></el-table-column>
            <el-table-column label="裁判员" prop="id_card"></el-table-column>
      <el-table-column label="分数" prop="score"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
                    <el-button type="success"@click="deleteData(scope.$index,tableData)">通过</el-button>
				    <el-button type="danger" @click="deleteData(scope.$index,tableData)">删除</el-button>
					
				</template>
			</el-table-column>
		</el-table>
		<el-dialog :visible.sync="centerDialogVisible" width="30%">
			<el-form  :model="editForm">
				
        <el-form-item label="分数">
					<el-input v-model="editForm.score"></el-input>
				</el-form-item>
			</el-form>
			
		</el-dialog>
	</div>
</template>


<script>
	var _index;
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				centerDialogVisible: false,
				editForm: [],
				pickerOptions: {
                  disabledDate(time) {
                     return time.getTime() > Date.now();
                  }
                },
				tableData: [{
					project_id: '标枪',
					name: '王小虎',
                    player_id :'1',
					score: '111',
                    id_card:'裁判1'
				},
				 {
					project_id: '标枪',
					name: '王小虎',
                    player_id :'2',
					score: '111',
                    id_card:'裁判2'
				}, 
				{
					project_id: '标枪',
					name: '王小虎',
                    player_id :'3',
					score: '111',
                    id_card:'裁判3'
				}, 
				{
					project_id: '标枪',
					name: '王小虎',
                    player_id :'4',
					score: '111',
                    id_card:'裁判4'
				}]
			}
		},
		methods: {
			deleteData(index, row) {
				this.tableData.splice(index, 1)
				console.log("进行了删除操作")
				console.log("index的值是：" + index)
				console.log("row的值是：", row)
			}
			
		}
	}
</script>
