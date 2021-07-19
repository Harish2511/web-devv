anychart.onDocumentReady(function() {

  // set the data
  var data = [
    {
      labels:['Coimbatore-North','Coimbatore-South','Mettupalayam','Pollachi','Valparai','Sulur'],
      datasets:[ {
        label:'Confirmed',
        data:[
          66789,44567,32009,19808,1099,35838

        ],
        backgroundColor:['blue','green','pink','purple','red','white']
      ,
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
    }

  ];

  // create the chart
  var chart = anychart.pie();

  // set the chart title
  chart.title("Confirmed cases");

  // add the data
  chart.data(data);

  // display the chart in the container
  chart.container('container');
  chart.draw();

});