<template>
  <highcharts  :options="chartOptions"/>
</template>
<script>
  import {Chart} from 'highcharts-vue'
  export default {
    name: 'AreaChart',
    components:{
      highcharts: Chart,
    },
    data(){
      return{
        chartOptions: {
          chart: {
            type: 'areaspline'
          },
          title: {
            text: 'Receitas e Despesas 2020'
          },
          // subtitle: {
          //   text: 'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
          //     'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
          //     'armscontrol.org</a>'
          // },
          xAxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Des'],
            allowDecimals: false,
            labels: {
              formatter: function () {
                return this.value; // clean, unformatted number for year
              }
            },
            accessibility: {
              rangeDescription: 'Meses: Janeiro a Desembro.'
            }
          },
          yAxis: {
            title: {
              text: 'Valor em Reais R$'
            },
            labels: {
              formatter: function () {
                return this.value + ' R$';
              }
            }
          },
          tooltip: {
            pointFormat: '{series.name} <b>{point.y:,.2f} R$</b><br/>no mês {point.x}'
          },
          plotOptions: {
            area: {
              pointStart: 1,
              marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          },
          series: [
            {
              name: 'Receitas',
              data: [ 1000,1500,1000,800,2500,3000]
            },
            {
              name: 'Despesas',
              data: [ 300,400,800,900,1500,2000 ]
            }
          ]
        }
      }
    }
  }
</script>
