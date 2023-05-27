import packageJson from "../package.json";
// https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json

const manifest = {
	manifest_version: 3,
	name: packageJson.name,
	version: packageJson.version,
	description: packageJson.description,
	host_permissions: ['*://*/*'],
	omnibox: {
		keyword: 'af'
	},
	// 设置
	options_page: "option.html",
	// 后台运行
	background: {
		service_worker: "src/background/background.js",
	},
	// 点击图标Popup
	action: {
		default_popup: "popup.html",
		//default_icon: "icons/34x34.png",
	},
	sidebar: {},
	// 注入到页面
	// content_scripts: [
	// 	{
	// 		matches: ['http://*/*', 'https://*/*', '<all_urls>'],
	// 		js: ['src/content/content.js'],
	// 		css: ['src/content/style.css'],
	// 	},
	// ],
	chrome_url_overrides: {
		newtab: 'home.html'
	},
}

export default manifest