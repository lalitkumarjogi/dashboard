function barchart(){
    const ctx = document.getElementById('myChart');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [10, 8, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }
  barchart()
  
  
  
  anychart.onDocumentReady(function () {
    
    // add data
    var data = anychart.data.set([
     
      ['Apple Music', 21],
      ['Amazon Music', 15],
    
    ]);
    
    // create a pie chart with the data
    var chart = anychart.pie(data);
    
    // set the chart radius making a donut chart
    chart.innerRadius('55%')
  
    // create a color palette
    var palette = anychart.palettes.distinctColors();
   
    // set the colors according to the brands
    palette.items([
      { color: '#7BFC99' },
      { color: '#72EB4B' },
    ]);
  
    // apply the donut chart color palette
    chart.palette(palette);
    
    // set the position of labels
    
    // disable the legend
    chart.legend(false);
    
    // format the donut chart tooltip
  
    // create a standalone label
    var label = anychart.standalones.label();
  
    // configure the label settings
    label
      .useHtml(true)
      .position('center')
      .anchor('center')
      .hAlign('center')
      .vAlign('middle');
    
    // set the label as the center content
    
    // set container id for the chart
    chart.container('container');
    
    // initiate chart drawing
    chart.draw();
  
  });
  anychart.onDocumentReady(function () {
    
    // add data
    var data = anychart.data.set([
    
      ['Apple Music', 29],
      ['Amazon Music', 71],
   
    ]);
    
    // create a pie chart with the data
    var chart = anychart.pie(data);
    
    // set the chart radius making a donut chart
    chart.innerRadius('55%')
  
    // create a color palette
    var palette = anychart.palettes.distinctColors();
   
    // set the colors according to the brands
    palette.items([
      { color: '#7BFC99' },
      { color: '#72EB4B' },
    
    ]);
  
    // apply the donut chart color palette
    chart.palette(palette);
    
    // set the position of labels
    
    // disable the legend
    chart.legend(false);
    
    // format the donut chart tooltip
  
    // create a standalone label
    var label = anychart.standalones.label();
  
    // configure the label settings
    label
      .useHtml(true)
      .position('center')
      .anchor('center')
      .hAlign('center')
      .vAlign('middle');
    
    // set the label as the center content
    
    // set container id for the chart
    chart.container('containe');
    
    // initiate chart drawing
    chart.draw();
  
  });
  
  anychart.onDocumentReady(function () {
    
    // add data
    var data = anychart.data.set([
      ['Spotify', 34],
      ['Apple Music', 56],
     
     
      
    ]);
    
    // create a pie chart with the data
    var chart = anychart.pie(data);
    
    // set the chart radius making a donut chart
    chart.innerRadius('55%')
  
    // create a color palette
    var palette = anychart.palettes.distinctColors();
   
    // set the colors according to the brands
    palette.items([
      { color: '#7BFC99' },
      { color: '#72EB4B' },
    ]);
  
    // apply the donut chart color palette
    chart.palette(palette);
    
    // set the position of labels
    
    // disable the legend
    chart.legend(false);
    
    // format the donut chart tooltip
  
    // create a standalone label
    var label = anychart.standalones.label();
  
    // configure the label settings
    label
      .useHtml(true)
      .position('center')
      .anchor('center')
      .hAlign('center')
      .vAlign('middle');
    
    // set the label as the center content
    
    // set container id for the chart
    chart.container('contain');
    
    // initiate chart drawing
    chart.draw();
  
  });
  
  
  