import '../js/myMap.js';
var myChart = echarts.init(document.querySelector(".map1 .chart"));

var shanxi = "json/610000_full.json";


var provinces ={
    '西安市':"json/610100_full.json", 
    '铜川市':"json/610200_full.json",
    '宝鸡市':"json/610300_full.json",    
    '咸阳市':"json/610400_full.json",    
    '渭南市':"json/610500_full.json",    
    '延安市':"json/610600_full.json",    
    '汉中市':"json/610700_full.json",    
    '榆林市':"json/610800_full.json",    
    '安康市':"json/610900_full.json",    
    '商洛市':"json/611000_full.json",} ;

    var allData = [
        { name: '西安市' },
        { name: '铜川市' },
        { name: '宝鸡市' }, 
        { name: '咸阳市' }, 
        { name: '渭南市' }, 
        { name: '延安市' }, 
        { name: '汉中市' },
        { name: '榆林市' },
        { name: '安康市' }, 
        { name: '商洛市' }];

        for (var i = 0; i < allData.length; i++) {
            allData[i].value = Math.round(Math.random() * 100);
          }
          
          
          loadMap('json/610000_full.json', 'shanxi'); //初始化全国地图
          
          var timeFn = null;
          
          //单击切换到省级地图，当mapCode有值,说明可以切换到下级地图
          myChart.on('click', function(params) {
            clearTimeout(timeFn);
            //由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
            timeFn = setTimeout(function() {
              var name = params.name; //地区name
              var mapCode = provinces[name]; //地区的json数据
              if (!mapCode) {
                alert('无此区域地图显示');
                return;
              }
          
              loadMap(mapCode, name);
          
            },
              250);
          });
          
          
          // 绑定双击事件，返回全国地图
          myChart.on('dblclick', function(params) {
            //当双击事件发生时，清除单击事件，仅响应双击事件
            clearTimeout(timeFn);
          
            //返回全国地图
            loadMap('json/610000_full.json','shanxi');
          });
          
          /**
          获取对应的json地图数据，然后向echarts注册该区域的地图，最后加载地图信息
          @params {String} mapCode:json数据的地址
          @params {String} name: 地图名称
          */
          function loadMap(mapCode, name) {
            $.get(mapCode, function(data) {
              if (data) {
                echarts.registerMap(name, data);
                var option = {
                  tooltip: {
                    show: true,
                    formatter: function(params) {
                      if (params.data) return params.name + ':' + params.data['value']
                    },
                  },
                  visualMap: {
                    type: 'continuous',
                    text: ['',
                      ''],
                    showLabel: true,
                    left: '50',
                    min: 0,
                    max: 100,
                    inRange: {
                      color: ['#edfbfb',
                        '#b7d6f3',
                        '#40a9ed',
                        '#3598c1',
                        '#215096',
                      ]
                    },
                    splitNumber: 0
                  },
                  series: [{
                    name: 'MAP',
                    type: 'map',
                    mapType: name,
                    selectedMode: 'false',
                    //是否允许选中多个区域
                    label: {
                      normal: {
                        show: true
                      },
                      emphasis: {
                        show: true
                      }
                    },
                    data: allData
                  }]
                };
                
                myChart.setOption(option);
                // curMap = {
                //     mapCode: mapCode,
                //     mapName: name
                // };
              } else {
                alert('无法加载该地图');
              }
            });
          }