export const state = () => ({
    datas: [],
    dataReady: false,
    clients: [],
    projects: [],
    targets: [],
    settings: [],
    false_contacts: [],
    moas: [],
    competences: [],
    sendForm: false,
    formSend: false,
    questions: [
        {
            slug: "c_conavnt", val: null, label: 'Connaissiez-vous mon activité avant ?', type: 'radio-group', part: "content",
            list: [
                'oui',
                "j'ai jamais rien compris",
                'non'
            ]
        },
        {
            slug: "c_mieux", val: null, label: 'Ce site vous a-t-il aidé à mieux comprendre mon activité ?', part: "content", type: 'radio-group',
            list: [
                'oui',
                "c'est pire...",
                'non'
            ]
        },
        {
            slug: "c_interess", val: null, label: 'La partie du site la plus interessante ?', part: "content", type: 'combo',
            list: [
                'les missions',
                'les cibles',
                'les projets'
            ]
        },
        {
            slug: "c_partinut", val: null, label: 'Une partie inutile ?', part: "content", type: 'combo',
            list: [
                'tout est au top, bravo !',
                'les missions',
                'les cibles',
                'les projets'
            ]
        },
        { slug: "c_aimetrouv", right: true, val: null, label: "Quel type d'info auriez-vous aimé trouver ?", part: "content", type: 'text' },
        { slug: "c_comment", right: true, val: null, label: 'Autres commentaires sur le contenu !', part: "content", type: 'text' },
        {
            slug: "g_nav", val: null, label: 'La navigation est : ', part: "graph", type: 'radio-group',
            list: [
                'simple et claire',
                'trop complexe',]
        },
        {
            slug: "g_logique", val: null, label: 'Le site vous semble-t-il logique ? ', part: "graph", type: 'radio-group',
            list: [
                'oui',
                'non',
            ]
        },
        { slug: "g_comment", val: null, right: true, label: 'Un commentaire sur la forme !', part: "graph", val: null, type: 'text' },
        { slug: "e_name", val: null, label: 'Votre nom', part: "end", type: 'label' },
        { slug: "e_comment", val: null, right: true, label: 'Un dernier mot ?', part: "end", type: 'text' },
    ]
})

export const getters = {
    dataReady: state => {
        return state.dataReady;
    },
    dataNotReady: state => {
        return !state.dataReady;
    },
    AppTabActive: (state) => (i) => {
        //return state.datas['application']['tab_'+i+"_active"]
    },
    clients: state => {
        return state.clients;
    },
    projects: state => {
        return state.projects;
    },
    projects_carousel: state => {
        var filtered = state.projects.filter(function (hero) {
            return hero.show_carousel == true
        });
        return filtered;
    },
    targets: state => {
        return state.targets;
    },
    moas: state => {
        return state.moas;
    },
    oneTarget: (state) => (slug) => {
        return state.targets.find(obj => obj.slug === slug);
    },
    competenceToString: (state, getters) => (array) => {
        let newArray = getters.shuffleAraay(array)
        let txt = ''
        newArray.forEach(function (element) {
            txt += element.name + ' | '
        });
        return txt
    },
    shuffleAraay: (state) => (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    },
    competences: (state) => (filter) => {
        if (filter == null) {
            return state.competences
        } else {
            return state.competences
        }
    },
    settings: state => {
        return state.settings;
    },
    settings_contacts: state => {
        return state.settings.contacts;
    },
    false_contacts: state => {
        return state.false_contacts;
    },
    gi: (state) => (slug) => {
        if (slug == undefined) {
            //console.log("error : "+slug);
        } else {
            return process.env.MEDIA_PATH + slug
        }

    },
    questions: (state) => (slug) => {
        return state.questions.find(obj => obj.slug === slug);
    },
    filterQuestions: (state) => (part, right = false) => {
        let filterQuestions = state.questions.filter(function (question) {
            if (right) {
                return question.part == part && question.right == true
            }
            return question.part == part && question.right != true
        });
        return filterQuestions
    },
    sendForm: state => {
        return state.sendForm;
    },
    formSend: state => {
        return state.formSend;
    }


}

export const mutations = {
    SET_CLIENTS: (state, datas) => {
        state.clients = datas
    },
    SET_PROJECTS: (state, datas) => {
        state.projects = datas
    },
    SET_SETTINGS: (state, datas) => {
        state.settings = datas

    },
    SET_CONTACTS: (state, datas) => {
        state.false_contacts = datas

    },
    SET_COMPETENCES: (state, datas) => {
        state.competences = datas
    },
    SET_TARGETS: (state, datas) => {
        state.targets = datas
    },
    SET_MOAS: (state, datas) => {
        state.moas = datas
    },
    SET_NOT_READY: (state) => {
        state.dataReady = false;
    },
    SET_READY: (state) => {
        state.dataReady = true;
    },
    SET_SEND_FORM: (state) => {
        state.sendForm = true;
    },
    SET_OK_SEND_FORM: (state) => {
        state.sendForm = false;
        state.formSend = true;
    },
}

export const actions = {
    getSettings({ commit, rootState }, app) {
        return this.$axios.get(process.env.API_PATH + 'settings/')
            .then(response => {
                commit('SET_SETTINGS', response.data.settings);
                commit('SET_CONTACTS', response.data.false_contacts);
                //commit('SET_CLIENTS', response.data.clients);
                commit('SET_PROJECTS', response.data.projects);
                //commit('SET_TARGETS', response.data.targets);
                commit('SET_MOAS', response.data.moas);
                commit('SET_READY');
            })
            .catch(function (error) {
                let MyError = {}
                MyError.type = "type_error.request"
                MyError.message = error.response.request.responseURL + " " + error.response.request.statusText
                MyError.solution = "solution_error.refresh"
                commit("errors/newError", MyError, { root: true })
            })
    },
    getCompetences({ commit, rootState }, app) {
        commit('SET_NOT_READY');
        return this.$axios.get(process.env.API_PATH + 'competences/')
            .then(response => {
                commit('SET_COMPETENCES', response.data);
            })
            .catch(function (error) {
                let MyError = {}
                MyError.type = "type_error.request"
                MyError.message = error.response.request.responseURL + " " + error.response.request.statusText
                MyError.solution = "solution_error.refresh"
                commit("errors/newError", MyError, { root: true })
            })
    },
    sendQuestions({ commit, state, getters }, questions) {
        commit('SET_SEND_FORM');
        let name = getters.questions('e_name').val
        return this.$axios.post(process.env.API_PATH + 'mg/formSubmit', { questions: state.questions, name: name })
            .then(response => {
                commit('SET_OK_SEND_FORM');
            })
            .catch(function (error) {
                commit('SET_ERROR_SEND_FORM');
                let MyError = {}
                MyError.type = "type_error.request"
                MyError.message = error.response.request.responseURL + " " + error.response.request.statusText
                MyError.solution = "solution_error.refresh"
                commit("errors/newError", MyError, { root: true })
            })
    },

}
