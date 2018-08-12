import { Component, OnInit ,NgZone, ViewChild} from '@angular/core';


@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
	
	public sideBarItems:Array<any>;
	public _opened: boolean = false;
	public slideOpen:boolean;
	@ViewChild('buttonCollapse') buttonCollapse;
	@ViewChild('sidebarUl') sidebarUl;
	constructor() { 
		this.sideBarItems = [
			{
				"name": "Dashboard",
				"path": "company",
				"icon": "fa fa-newspaper-o"
			},
			{
				"name": "Analytics",
				"path": "ambassador",
				"icon": "fa fa-object-ungroup"
			},
			{
				"name": "Reports",
				"path": "employee",
				"icon": "fa fa-bar-chart"
			},
			{
				"name": "Timelines",
				"path": "customer",
				"icon": "fa fa-qrcode"
			}
		],
		this.slideOpen = true;

	}

	public _toggleSidebar() {
		this._opened = !this._opened;
	}

	ngOnInit() {}

	buttonCollapseClick(){
		// this.buttonCollapse.sideNav();
		// var sideNavScrollbar = this.sidebarUl;
		// Ps.initialize(sideNavScrollbar);
		// if(!!this.slideOpen){
		// 	this.slideOpen = false;
		// }
		// else{
		// 	this.slideOpen = true;
		// }
	}

	activeSidebarEl(idx){
		console.log(idx);
	}
	selectedSidebarEl(i){
		console.log(i);
	}
}