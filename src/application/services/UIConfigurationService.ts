import { CognitiveState } from "../../domain/entities/CognitiveState";

export const getConfigByState = (state: CognitiveState) =>{
    const configs = {
        [CognitiveState.LOW_ENERGY]: {
            density: 'minimal',
            animationSpeed: 'slow',
            notifications: false,
            showTimer: false
        },
        [CognitiveState.FOCUS]: {
            density: 'clean',
            animationSpeed: 'normal',
            notifications: 'minimal',
            showTimer: true
        },
        [CognitiveState.HIGH_SENSITIVITY]: {
            density: 'low',
            animationSpeed: 'none',
            notifications: false,
            showTimer: false
        },
    };
    return configs;
}