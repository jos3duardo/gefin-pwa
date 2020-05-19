<template>
 <highcharts  :options="chartOptions"/>
</template>

<script>
  import {Chart} from 'highcharts-vue'
  export default {
    name: 'Chart',
    // props: ['width'],
    components:{
      highcharts: Chart,
    },
    data () {
      return {
        // width: 100,
        chartOptions: {
          chart: {
            // width: this.width,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
          },
          title: {
            text: 'Despesas'
          },
          credits: {
            enabled: false
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.2f} R$</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: false
            }
          },
          series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
              name: 'Chrome',
              y: 61.41
            }, {
              name: 'Internet Explorer',
              y: 11.84
            }, {
              name: 'Firefox',
              y: 10.85
            }, {
              name: 'Edge',
              y: 4.67
            }, {
              name: 'Safari',
              y: 4.18
            }, {
              name: 'Other',
              y: 7.05
            }]
          }]
        }
      }
    },
    created () {

    },
  }
</script>

<style scoped>
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  #colorPicker {
    border: 0;
    padding: 0;
    margin: 0;
    width: 30px;
    height: 30px;
  }
  .numberInput {
    width: 30px;
  }
</style>
