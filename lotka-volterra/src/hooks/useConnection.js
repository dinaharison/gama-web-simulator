import { useEffect, useState, useLayoutEffect } from "react";
import useWebSocket from "react-use-websocket";
import useConnectionStore from "../store/useConnectionStore";
import configs from "../data/config";
import {
  CommandMessageType,
  CommandType,
  ServerStatus,
} from "../data/ServerStatus";
import { useParameterStore } from "../store/useParameterStore";
import { useSimulationStore } from "../store/useSimulationStore";

const loadModelJSON = {
  type: "load",
  model: "/opt/gama-platform/headless/PredatorPrey/Lotka-Volterra.gaml",
  experiment: "maths",
  parameters: [],
  until: "cycle>=50",
};

/**
 * Opens a conncetion to a websocket server
 * @returns an object
 * @property {string} connectionStatus : describes server connection's state
 * @property {callback} sendJsonMessage: a callback function that allows you to send a JSON message
 * @property {object} lastJsonMessage : a state that holds the last message the server has sent
 * @property {number} readyState: a number checking if the server is ready or not
 */
const useConnection = () => {
  const [connectionStatus, setConnectionStatus] = useState(
    ServerStatus.disconnected
  );

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    configs.server_url,
    {
      onOpen: () => setConnectionStatus(ServerStatus.connected),
      onClose: () => setConnectionStatus(ServerStatus.disconnected),
      onError: () => setConnectionStatus(ServerStatus.error),
      shouldReconnect: () => true,
    }
  );

  const { updateLastMessage, updateServerState } = useConnectionStore();
  const { parameters } = useParameterStore();
  const { setData } = useSimulationStore();

  useLayoutEffect(() => {
    if (lastJsonMessage) {
      updateLastMessage(lastJsonMessage);
      if (
        lastJsonMessage.type ===
          CommandMessageType.CommandExecutedSuccessfully &&
        lastJsonMessage.command.type === CommandType.load
      ) {
        updateServerState("experimentId", lastJsonMessage.content);
      }

      if (lastJsonMessage.type === CommandMessageType.SimulationOutput) {
        const data = JSON.parse(lastJsonMessage.content.message);
        setData(data);
      }
    }
  }, [lastJsonMessage]);

  useEffect(() => {
    updateServerState("serverStatus", connectionStatus);
    updateServerState("sendMessage", sendJsonMessage);
    //load the model
    sendJsonMessage({ ...loadModelJSON, parameters: parameters });
  }, [connectionStatus]);

  return { sendJsonMessage, lastJsonMessage, readyState, connectionStatus };
};

export default useConnection;
