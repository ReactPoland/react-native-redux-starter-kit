import routes from '../routes'
import session from '../modules/session'

let reducers = {};
reducers['session'] = session;
routes.childRoutes.map((route)=>{
	reducers[route.reducer.name] = route.reducer;
});

export { reducers };
