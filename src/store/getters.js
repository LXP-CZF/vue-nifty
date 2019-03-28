const getters={
	boxlay:state=>state.layout.boxlay,
	asideSetting:state=>state.layout.asideSetting,
	colorSetting:state=>state.layout.colorSetting,
	isAside:state=>state.layout.isAside,
	isFooter:state=>state.layout.isFooter,
	// backgroundImg:state=>state.layout.boxlay.backgroundImg,
	// colortext:state=>state.layout.colortext,
	iscolors:state=>state.layout.iscolors,
	icon:state=>state.app.icon,
	theme_color:state=>state.app.theme_color,
	fixed:state=>state.app.fixed,
	classA:state=>state.app.classA,
	sidebar: state => state.app.sidebar,
}
export default getters
