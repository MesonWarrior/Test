import axios from 'axios';
import * as endpoints from './constants/endpoints';

const GUID = '{6873070D-DA25-4CBD-A210-304F880739B9}';

export const getTree = async () => {
    return (
        await axios.post(endpoints.getTree, null, {
            params: { treeName: GUID },
        })
    ).data;
};

export const createNode = async (parentNodeId, nodeName) => {
    return (
        await axios.post(endpoints.createNode, null, {
            params: { treeName: GUID, parentNodeId, nodeName },
        })
    ).data;
};

export const renameNode = async (nodeId, newNodeName) => {
    return (
        await axios.post(endpoints.renameNode, null, {
            params: { treeName: GUID, nodeId, newNodeName },
        })
    ).data;
};

export const deleteNode = async (nodeId) => {
    return (
        await axios.post(endpoints.deleteNode, null, {
            params: { treeName: GUID, nodeId },
        })
    ).data;
};
