export const remoteDataSource = {
  url: '/api/rule',
  method: 'GET',
  convertParams({ params }) {
    
    return {
      pageSize: params.pageSize,
      pageNumber: params.current,
      ...params,
    };
  },
  converter({ data, response: { total } }) {
    return {
      list: data,
      total: total,
    };
  },
};
export const queryFields = (number = 1) => {
  return Array(number)
    .fill(0)
    .map((_, index) => {
      return {
        name: `input${index}`,
        label: `Input${index}`,
        field: 'input',
      };
    });
};