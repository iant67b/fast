import { css } from "@microsoft/fast-element";
import {
    AccentButtonStyles,
    accentFillActiveBehavior,
    accentFillHoverBehavior,
    accentFillRestBehavior,
    accentForegroundActiveBehavior,
    accentForegroundCutRestBehavior,
    accentForegroundHoverBehavior,
    accentForegroundRestBehavior,
    BaseButtonStyles,
    HypertextStyles,
    LightweightButtonStyles,
    neutralFillActiveBehavior,
    neutralFillFocusBehavior,
    neutralFillHoverBehavior,
    neutralFillRestBehavior,
    neutralFillStealthActiveBehavior,
    neutralFillStealthHoverBehavior,
    neutralFillStealthRestBehavior,
    neutralFocusBehavior,
    neutralFocusInnerAccentBehavior,
    neutralForegroundRestBehavior,
    neutralOutlineActiveBehavior,
    neutralOutlineHoverBehavior,
    neutralOutlineRestBehavior,
    OutlineButtonStyles,
    StealthButtonStyles,
} from "../styles/";

export const AnchorStyles = css`
    ${BaseButtonStyles}
    ${AccentButtonStyles}
    ${HypertextStyles}
    ${LightweightButtonStyles}
    ${OutlineButtonStyles}
    ${StealthButtonStyles}
`.withBehaviors(
    accentFillActiveBehavior,
    accentFillHoverBehavior,
    accentFillRestBehavior,
    accentForegroundActiveBehavior,
    accentForegroundCutRestBehavior,
    accentForegroundHoverBehavior,
    accentForegroundRestBehavior,
    neutralFillActiveBehavior,
    neutralFillFocusBehavior,
    neutralFillHoverBehavior,
    neutralFillRestBehavior,
    neutralFillStealthActiveBehavior,
    neutralFillStealthHoverBehavior,
    neutralFillStealthRestBehavior,
    neutralFocusBehavior,
    neutralFocusInnerAccentBehavior,
    neutralForegroundRestBehavior,
    neutralOutlineActiveBehavior,
    neutralOutlineHoverBehavior,
    neutralOutlineRestBehavior
);
