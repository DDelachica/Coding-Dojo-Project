


$(document).ready(function(){
    // get state abbreviation from html
        var state_abbr = document.getElementById('abbr').innerHTML;
        var html_str = "";
        html_str += "<table><tr>";
    // filter json by state abbreviation
        $.get("https://covidtracking.com/api/v1/states/" + state_abbr + "/daily.json", function(res) {
            var stats = {
                '1 Day Increase': res[0].positiveIncrease,
                'Positive': res[0].positive,
                'Hospitalized': res[0].hospitalized,
                'Death': res[0].death,
                'Updated (Eastern Time)': res[0].lastUpdateEt,
                'Infection Rate': res[0].positiveIncrease/res[0].positive,
            };
            for(key in stats){
                html_str += "<th>" + key + "</th>";
            }
            html_str += "</tr><tr>";
            for(key in stats){
                    html_str += "<td>" + stats[key] + "</td>" ;
                }
                
                console.log(stats[key])
                            
            html_str += "</tr>"
            html_str += "</table>"
            console.log(res.positive);
            $("#data").html(html_str);
        }, 
        "json");
    })
/* globals Chart:false, feather:false */

(function () {
    'use strict'
  
    feather.replace()
  
    // Graphs
    var ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Mar 12',
          'Mar 16',
          'Mar 20',
          'Mar 24',
          'Mar 28',
          'Apr 1',
          'Apr 5'
        ],
        datasets: [{
          data: [
            361,
            950,
            13178,
            26951,
            50711,
            81871,
            283621
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })
  }())