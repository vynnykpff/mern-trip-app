export const changeSymbols = (replaceString:string, currentSymbol:string, changeSymbol:string) => {
	return replaceString.split(currentSymbol).join(changeSymbol);
}
