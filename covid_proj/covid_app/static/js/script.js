


$(document).ready(function(){
    // get state abbreviation from html
        var state_abbr = document.getElementById('abbr').innerHTML;
        var html_str = "";
        html_str += "<table><tr>";
    // filter json by state abbreviation
        $.get("https://covidtracking.com/api/v1/states/" + state_abbr + "/current.json", function(res) {
            var stats = {
                'Positive': res.positive,
                'Hospitalized': res.hospitalized,
                'Death': res.death,
            }
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