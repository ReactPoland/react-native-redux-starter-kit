import routes from '../routes'

let reducers = {};
routes.childRoutes.map((route)=>{
	reducers[route.reducer.name] = route.reducer;
});

export { reducers };
