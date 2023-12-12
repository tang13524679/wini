import { createContext, useContext, useReducer } from "react";
import { produce } from "immer";
import store from "store";

//initial
const initialState = {
  lang: "zh",
  collapsed: false,
  isLoading: false,
  isSearch: false,
  user: null,
  isIframe: false,
  isGaming: false,
  isShowMoney: true,
  isApp: false,
  isRechargeModal: false,
  isAnnouncement: true,
  badge: 0,
  chatWidgetVisible: false,
};

//reducer
function reducer(state, { type, payload }) {
  return produce(state, (draft) => {
    switch (type) {
      case "set_lang": {
        draft.lang = payload;
        store.set("lang", payload);
        break;
      }
      case "set_collapse": {
        draft.collapsed = payload;
        break;
      }
      case "set_loading": {
        draft.isLoading = payload;
        break;
      }
      case "set_search": {
        draft.isSearch = payload;
        break;
      }
      case "set_iframe": {
        draft.isIframe = payload;
        break;
      }
      case "set_chatWidgetVisible": {
        draft.chatWidgetVisible = payload;
        break;
      }
      case "set_gaming": {
        draft.isGaming = payload;
        break;
      }
      case "set_showMoney": {
        draft.isShowMoney = payload;
        store.set("isShowMoney", payload);
        break;
      }
      case "set_app": {
        draft.isApp = payload;
        break;
      }
      case "set_recharge": {
        draft.isRechargeModal = payload;
        break;
      }
      case "set_announcement": {
        draft.isAnnouncement = payload;
        break;
      }
      case "set_user": {
        draft.user = payload;
        break;
      }
      case "set_badge": {
        draft.badge = payload;
        break;
      }
    }
  });
}

//Context
const StateContext = createContext();

//Provider
export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Global State
export const useGlobalState = () => useContext(StateContext);
