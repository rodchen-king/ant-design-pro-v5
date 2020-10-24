// src/access.ts
export default function access(initialState: { userMenuAuth?: API.AuthMenuData[] }) {
  const { userMenuAuth } = initialState || {};
  return {
    canAdmin: (route: API.Route) =>  canAdmin(route, userMenuAuth)
  };
}

function canAdmin(route: API.Route, userMenuAuth?: API.AuthMenuData[]) {
  return !!userMenuAuth?.filter((item: API.Route) => item.code === route.code).length
}