import { CommonThemeProps } from '../types';
import { SelectVariants } from './Select.types';
export declare const StyledInner: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledSelectContent: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledSelectWrapper: import("styled-components").StyledComponent<"div", any, {
    $shadow?: boolean | undefined;
} & {
    $disabled?: boolean | undefined;
    native?: boolean | undefined;
    variant?: SelectVariants | undefined;
} & CommonThemeProps, never>;
export declare const StyledFlatSelectWrapper: import("styled-components").StyledComponent<"div", any, {
    $disabled?: boolean | undefined;
    native?: boolean | undefined;
    variant?: SelectVariants | undefined;
} & CommonThemeProps, never>;
export declare const StyledNativeSelect: import("styled-components").StyledComponent<"select", any, {}, never>;
export declare const StyledDropdownButton: import("styled-components").StyledComponent<"button", any, {
    $active?: boolean | undefined;
    $disabled?: boolean | undefined;
    $fullWidth?: boolean | undefined;
    $primary?: boolean | undefined;
    $size?: import("../types").Sizes | undefined;
    $square?: boolean | undefined;
    $variant?: "default" | "menu" | "flat" | "raised" | "thin" | undefined;
} & {
    'aria-hidden': "true";
} & {
    $disabled?: boolean | undefined;
    native?: boolean | undefined;
    $variant?: "default" | "flat" | "raised" | undefined;
}, "aria-hidden">;
export declare const StyledDropdownIcon: import("styled-components").StyledComponent<"span", any, {
    $disabled?: boolean | undefined;
    native?: boolean | undefined;
    variant?: SelectVariants | undefined;
} & CommonThemeProps, never>;
export declare const StyledDropdownMenu: import("styled-components").StyledComponent<"ul", any, {
    $variant?: SelectVariants | undefined;
}, never>;
export declare const StyledDropdownMenuItem: import("styled-components").StyledComponent<"li", any, {
    $active: boolean;
}, never>;
//# sourceMappingURL=Select.styles.d.ts.map