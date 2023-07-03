export type ResponsiveProp<T> = {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
};
export type Responsive<T> = T | ResponsiveProp<T>;

type SelfPosition =
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "self-end"
  | "self-start"
  | "start";

type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start";

type ContentDistribution =
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "stretch";

type CSSPrropertyGlobals =
  | "-moz-initital"
  | "inherit"
  | "intiail"
  | "revert"
  | "unset";

export type CSSPropertyAlignItems =
  | CSSPropertyGlobals
  | SelfPosition
  | "baseline"
  | "normal"
  | "stretch"
  | (string & {});

export type CSSPropertyAlignContent =
  | CSSPrropertyGlobals
  | ContentDistribution
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "start"
  | "baseline"
  | "normal"
  | (string & {});

export type CSSPropertyJustifyItems =
  | CSSPrropertyGlobals
  | SelfPosition
  | "baseline"
  | "left"
  | "legacy"
  | "normal"
  | "right"
  | "stretch"
  | (string & {});

export type CSSPropertyJustifyContent =
  | CSSPrropertyGlobals
  | ContentDistribution
  | ContentPosition
  | "left"
  | "normal"
  | "right"
  | (string & {});

export type CSSPropertyFlexWrap =
  | CSSPropertyGlobals
  | "nowrap"
  | "wrap"
  | "wrap-reverse";

export type CSSPropertyFlexDirection =
  | CSSPrropertyGlobals
  | "columun"
  | "column-reverse"
  | "row"
  | "row-reverse";

export type CSSPropertyJustifySelf =
  | CSSPrropertyGlobals
  | SelfPosition
  | "auto"
  | "baseline"
  | "left"
  | "normal"
  | "right"
  | "stretch"
  | (string & {});

export type CSSPropertyAlignSelf =
  | CSSPrropertyGlobals
  | SelfPosition
  | "auto"
  | "baseline"
  | "normal"
  | "stretch";

type GridLine = "auto";

export type CSSPropertyGridColumn = CSSPrropertyGlobals | GridLine;

export type CSSPropertyGridRow = CSSPropertyGlobals | GridLine;

export type CSSPropertyGridAutoFlow =
  | CSSPrropertyGlobals
  | "column"
  | "dense"
  | "row";

export type CSSPropertyGridArea = CSSPrropertyGlobals | GridLine;
