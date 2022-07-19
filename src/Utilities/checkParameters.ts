import { checkAllParams, checkWidthAndHeight } from './check';

interface Params {
  filename: string;
  width: number;
  height: number;
}

const checkParams = (query: Params): boolean => {
  const params: string[] = ['filename', 'width', 'height'];
  const paramsKeys: string[] = Object.keys(query);
  const widthAndHeight: number[] = [Number(query.width), Number(query.height)];

  // check if all the required parameters (params) are included in the query (paramsKeys) and if the width and height are both numbers
  return (
    checkAllParams(params, paramsKeys) && checkWidthAndHeight(widthAndHeight)
  );
};

export { checkParams, Params };
