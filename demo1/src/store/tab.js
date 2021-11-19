export default {
    state:{
        isCollapse:false,
        currentMenu:null,
        tagsList:[
            {
                path:'/',
                name:'home',
                label:'首页',
            }
        ]

    },
    mutations:{
        collapseMenu (state){
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val){
            // val.name === 'home' ? (state.currentMenu = null) : state.currentMenu = val;

            if(val.name === 'home'){
                state.currentMenu = null;
            }else{
                state.currentMenu =val;
                //新增tablist
                let result = state.tagsList.findIndex(item => item.name == val.name)
                result === -1 ? state.tagsList.push(val) : ""
            }
        },
        deleteTag(state,val){
            let result = state.tagsList.findIndex(item => item.name === val.name)
            state.tagsList.splice(result,1)

        }
    }
}

