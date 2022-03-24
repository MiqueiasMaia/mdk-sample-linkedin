{
	"_Name": "VaeesMDK",
	"Version": "/VaeesMDK/Globals/AppDefinition_Version.global",
	"MainPage": "/VaeesMDK/Pages/Main.page",
	"OnLaunch": [
		"/VaeesMDK/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/VaeesMDK/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/VaeesMDK/Actions/Service/InitializeOffline.action",
	"Styles": "/VaeesMDK/Styles/Styles.less",
	"Localization": "/VaeesMDK/i18n/i18n.properties",
	"_SchemaVersion": "6.1"
}