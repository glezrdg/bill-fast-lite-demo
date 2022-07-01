import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from  'chart.js'
import { AuthoService } from 'src/app/services/autoservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashBoardComponent implements OnInit {

    result: any;
  coinPrice: any;
  coinName: any;
  chart: any = [];


    constructor(private service: AuthoService){
        Chart.register(...registerables)
    
      }
      ngOnInit(){
        this.service.cryptoData().then((res) => {
          this.result = res;
    
          this.coinPrice = this.result.data.coins.map((coin: any) => coin.price)
          this.coinPrice.length = 3;
    
          this.coinName = this.result.data.coins.map((coin: any) => coin.name)
          this.coinName.length = 3;
          
          console.log(this.coinName);
          console.log(this.coinPrice);
    
          // Chart LOL
    
          this.chart = new Chart('canvas', {
           type: 'bar',
           data: {
            labels: this.coinName,
            datasets: [
              {
                label: 'Coin Price',
                data: this.coinPrice,
                borderWidth: 3,
                
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
            }]
        },
        options: {
          responsive: true
        }
    
          })
          
          this.chart.canvas.parentNode.style.width = '220px';

        });


        this.service.cryptoDato().then((res) => {
          this.result = res;
    
          this.coinPrice = this.result.data.coins.map((coin: any) => coin.price)
          this.coinPrice.length = 4;
    
          this.coinName = this.result.data.coins.map((coin: any) => coin.name)
          this.coinName.length = 4;
          
          console.log(this.coinName);
          console.log(this.coinPrice);
    
          // Chart LOL
    
          this.chart = new Chart('canvasito', {
           type: 'line',
           data: {
            labels: this.coinName,
            datasets: [
              {
                label: 'Coin Price',
                data: this.coinPrice,
                borderWidth: 3,
                
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
            }]
        },
        options: {
          responsive: true
        }
    
          })
          
          this.chart.canvas.parentNode.style.width = '320px';

        })
        

        
      }
  


}
