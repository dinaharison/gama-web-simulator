import { create } from "zustand";
import { ServerStatus } from "../data/ServerStatus";

const useConnectionStore = create((set) => ({
  sendMessage: () => {},
  lastMessage: [],
  isServerReady: false,
  serverStatus: ServerStatus.disconnected,
  experimentId: undefined,
  updateLastMessage: (message) => {
    set((state) => (state.lastMessage = [...state.lastMessage, message]));
  },
  setExperimentId: () => {
    set((state) => {
      if (state.lastMessage.content) {
        return { ...state, experimentId: state.lastMessage.content };
      }
    });
  },
  /**
   *
   * @param {string} key : name of the property :
   * - "lastMessage" : last message sent by the server
   * - "isServerReady" : boolean desining if the server is ready to receive a message
   * - "serverStatus" : the connection status
   * - "experimentId" : the id of the ongoing simulation
   * - "sendMessage" : a callback for sending a message to the server
   * @param {*} value : value of the property
   */
  updateServerState: (key, value) =>
    set((state) => ({ ...state, [key]: value })),

  updateServerStates: (ServerState) =>
    set((state) => ({
      ...state,
      lastMessage: [...state.lastMessage, ServerState.lastJsonMessage],
      sendMessage: ServerState.sendJsonMessage,
      serverStatus: ServerState.connectionStatus,
    })),
}));

export default useConnectionStore;
