const state = {
    id: ''
}

const mutations = {
    UPDATE_DATE(state, fileType){
        state.id = fileType.id;
    }
}

const actions = {
    updateDate({commit}, fileType){
        console.log(commit);
        console.log(fileType)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
