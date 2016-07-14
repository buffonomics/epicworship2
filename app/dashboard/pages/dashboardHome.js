/**
 * Created by iyobo on 6/30/16.
 */
import {Component} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';
const ipc = electron.ipcRenderer;

@Component({
	templateUrl: 'pages/dashboardHome.html'
})
export class DashboardHome {
	constructor() {
		this.foo = "bar";
	}

	ngOnInit() {
		console.log('loaded');

		//ipc callbacks
		ipc.on('dashhome:chooseBackground', function (event, path) {
			console.log(`Selected: ${path}`);
			//TODO: Usually we want to just add the path to something

			//This time, let's send it to the projector
			ipc.send("toProjector","main",{
				background: path
			})
		})
	}

	chooseBackground() {

		ipc.send('chooseFile', {
			returnChannel: "dashhome:chooseBackground",
			title: "Choose a background...",
			properties:['openFile']
		});
	}
}
