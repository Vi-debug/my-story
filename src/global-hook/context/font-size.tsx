import React, { useMemo } from "react";
import useWindowDimensions from "../dimension";

export interface IFontSizeContext {
	heading1: number,
  title1: number;
  title2: number;
  body1: number;
  body2: number;
}

export interface IFontSizeProvider {
  children?: any;
}

export const FontSizeContext = React.createContext<IFontSizeContext>({
	heading1: 0,
  title1: 0,
  title2: 0,
  body1: 0,
  body2: 0,
});

export const FontSizeProvider = (props: IFontSizeProvider) => {
	const {width}	= useWindowDimensions();
	const calculateFontSize: IFontSizeContext = useMemo(() => {
		if (width  > 1000) {
			return {
				heading1: 50,
				title1: 32,
				title2: 24,
				body1: 18,
				body2: 14,
			}
		} else {
			return {
				heading1: 40,
        title1: 24,
        title2: 18,
        body1: 14,
        body2: 10,
      }
		}
	}, [width]);
  return (
    <FontSizeContext.Provider value={calculateFontSize}>
      {props.children}
    </FontSizeContext.Provider>
  );
};
