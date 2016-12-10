import { EDITOR } from './const';

export function addComponent(componentType) {
  return {
    type: "ADD_COMPONENT",
    componentType
  }
}

export function editComponent(componentId, params) {
  return {
    type: "EDIT_COMPONENT",
    params
  }
}

export function removeComponent(componentId) {
  return {
    type: "REMOVE_COMPONENT",
    componentId
  }
}

export function selectComponents(componentIds) {
  return {
    type: "SELECT_COMPONENTS",
    componentIds
  }
}
