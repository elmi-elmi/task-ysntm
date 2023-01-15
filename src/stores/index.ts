import { createStore } from "vuex";
import actions from "@/stores/actions";
import getters from "@/stores/getters";
import mutations from "@/stores/mutations";
export default createStore({
  state: { articles: [] },
  mutations,
  actions,
  getters,
});
