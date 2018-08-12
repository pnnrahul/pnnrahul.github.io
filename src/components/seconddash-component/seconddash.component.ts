import { Component, OnInit ,NgZone} from '@angular/core';

@Component({
  selector: 'seconddash-component',
  templateUrl: './seconddash.component.html',
  styleUrls: ['./seconddash.component.scss']
})

export class SecondDashComponent implements OnInit {
	
	constructor() { 
		this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
	}
	options: Object;

	ngOnInit() {}
}