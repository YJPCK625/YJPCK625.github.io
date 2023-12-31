var chartDom = document.getElementById("newmap");
var myChart = echarts.init(chartDom);
var option;

const data = [
  { name: "采集点1", value: 99 },
  { name: "采集点2", value: 99 },
  { name: "采集点3", value: 99 },
  { name: "采集点4", value: 99 },
  { name: "采集点5", value: 99 },
  { name: "采集点6", value: 99 },
  { name: "采集点7", value: 99 },
  { name: "采集点8", value: 99 },
  { name: "采集点9", value: 99 },
  { name: "采集点10", value: 99 },
  { name: "采集点11", value: 99 },
  { name: "采集点12", value: 99 },
  { name: "采集点13", value: 99 },
  { name: "采集点14", value: 99 },
  { name: "采集点15", value: 99 },
  { name: "采集点16", value: 99 },
  { name: "采集点17", value: 99 },
  { name: "采集点18", value: 99 },
  { name: "采集点19", value: 99 },
  { name: "采集点20", value: 99 },
  { name: "采集点21", value: 99 },
  { name: "采集点22", value: 99 },
  { name: "采集点23", value: 99 },
  { name: "采集点24", value: 99 },
  { name: "采集点25", value: 99 },
  { name: "采集点26", value: 99 },
  { name: "采集点27", value: 99 },
  { name: "采集点28", value: 99 },
  { name: "采集点29", value: 99 },
  { name: "采集点30", value: 99 },
  { name: "采集点31", value: 99 },
  { name: "采集点32", value: 99 },
  { name: "采集点33", value: 99 },
  { name: "采集点34", value: 99 },
  { name: "采集点35", value: 99 },
  { name: "采集点36", value: 99 },
  { name: "采集点37", value: 99 },
  { name: "采集点38", value: 99 },
  { name: "采集点39", value: 99 },
  { name: "采集点40", value: 99 },
  { name: "采集点42", value: 99 },
  { name: "采集点43", value: 99 },
  { name: "采集点44", value: 99 },
  { name: "采集点45", value: 99 },
  { name: "采集点46", value: 99 },
  { name: "采集点47", value: 99 },
  { name: "采集点48", value: 99 },
  { name: "采集点49", value: 99 },
  { name: "采集点50", value: 99 },
  { name: "采集点51", value: 99 },
  { name: "采集点52", value: 99 },
  { name: "采集点53", value: 99 },
  { name: "采集点54", value: 99 },
  { name: "采集点55", value: 99 },
  { name: "采集点56", value: 99 },
  { name: "采集点57", value: 99 },
  { name: "采集点58", value: 99 },
  { name: "采集点59", value: 99 },
  { name: "采集点60", value: 99 },
  { name: "采集点61", value: 99 },
  { name: "采集点62", value: 99 },
  { name: "采集点63", value: 99 },
  { name: "采集点64", value: 99 },
  { name: "采集点65", value: 99 },
  { name: "采集点66", value: 99 },
  { name: "采集点67", value: 99 },
  { name: "采集点68", value: 99 },
  { name: "采集点69", value: 99 },
  { name: "采集点70", value: 99 },
  { name: "采集点71", value: 99 },
  { name: "采集点72", value: 99 },
  { name: "采集点73", value: 99 },
  { name: "采集点74", value: 99 },
  { name: "采集点75", value: 99 },
  { name: "采集点76", value: 99 },
  { name: "采集点77", value: 99 },
  { name: "采集点78", value: 99 },
  { name: "采集点79", value: 99 },
  { name: "采集点80", value: 99 },
  { name: "采集点81", value: 99 },
  { name: "采集点82", value: 99 }
];
const geoCoordMap = {
  采集点1: [106.494181 ,33.109372],
  采集点2: [106.517465,33.120016],
  采集点3: [106.576106,	33.137915],
  采集点4: [106.684478,	33.154602],
  采集点5: [106.770715,	33.138157],
  采集点6: [106.923481,	33.758512  ],
  采集点7: [106.952514,	33.751308  ],
  采集点8: [106.938015,	33.589246],
  采集点9: [106.991177,	33.079303 ],
  采集点10: [107.001525,33.065749 ],
  采集点11: [107.022222,	33.053162  ],
  采集点12: [107.032571,	33.058487 ],
  采集点13: [107.054544,	33.034249],
  采集点14: [107.035212,	33.024199],
  采集点15: [107.030685,	33.009184],
  采集点16: [107.412429,	33.152758],
  采集点17: [107.380521,	33.163639],
  采集点18: [107.344301,	33.194823],
  采集点19: [107.641964,	33.18733],
  采集点20: [107.714403,	33.18733],
  采集点21: [107.833985,	33.198932],
  采集点22: [107.984613,	33.446908],
  采集点23: [107.985763,	33.480881],
  采集点24: [107.994674,	33.526639],
  采集点25: [108.359602,	33.306657],
  采集点26: [108.419393,	33.316311],
  采集点27: [108.41774,	32.926368],
  采集点28: [108.58734,	32.846811],
  采集点29: [108.787123,	32.734873],
  采集点30: [108.491275,	32.905968  ],
  采集点31: [108.510822,	32.90136  ],
  采集点32: [108.522464,	32.884261  ],
  采集点33: [108.542919,	32.522894],
  采集点34: [108.533721,	32.527521],
  采集点35: [108.530846,	32.525695],
  采集点36: [109.34735,	32.76838],
  采集点37: [109.357987,	32.769594],
  采集点38: [109.358202,	32.773177  ],
  采集点39: [109.175669,	33.433357],
  采集点40: [109.177659,	33.433403  ],
  采集点41: [109.178818,	33.433836],
  采集点42: [109.115787,	33.706612],
  采集点43: [109.113927,	33.70511],
  采集点44: [109.11178,	33.703781],
  采集点45: [109.381479,	32.38151],
  采集点46: [109.374292,	32.378309],
  采集点47: [109.374544,	32.376327],
  采集点48: [109.308074,	33.815116  ],
  采集点49: [109.275879,	33.821834  ],
  采集点50: [109.253974,	33.824151  ],
  采集点51: [107.547408,	33.250242  ],
  采集点52: [109.75894,	33.50777],
  采集点53: [109.784404,	33.517519],
  采集点54: [110.336108,	33.682074],
  采集点55: [110.330359,	33.696973],
  采集点56: [110.296152,	33.697213],
  采集点57: [110.283503,	33.70322],
  采集点58: [110.259932,	33.714992],
  采集点59: [109.939237,	33.852987],
  采集点60: [110.789476,	33.443799  ],
  采集点61: [110.787033,	33.437713],
  采集点62: [110.812329,	33.438918  ],
  采集点63: [110.715551,	33.447598  ],
  采集点64: [110.73438,	33.437597  ],
  采集点65: [110.75522,	33.435186  ],
  采集点66: [110.041966,33.81192  ],
  采集点67: [110.147176,	33.768236  ],
  采集点68: [110.147751,	33.766315  ],
  采集点69: [109.18333,	33.414576  ],
  采集点70: [109.189079,	33.401315  ],
  采集点71: [109.191666,	33.367552  ],
  采集点72: [106.352158,	33.06696  ],
  采集点73: [106.37343,	33.065507  ],
  采集点74: [107.050681,	33.716481  ],
  采集点75: [109.930145,	33.533949  ],
  采集点76: [107.994261,	33.51854  ],
  采集点77: [107.983912,	33.487713  ],
  采集点78: [107.980463,	33.462176  ],
  采集点79: [109.357098,	32.762048  ],
  采集点80: [108.336048,	33.306744  ],
  采集点81: [107.535909,	33.293709  ],
  采集点82: [107.566667,	33.268839  ]
};
const convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
};
option = {
  title: {
    text: "水质样本采集点",
    left: "center",
  },
 
  bmap: {
    center: [104.114129, 37.550339],
    zoom: 5,
    roam: true,
    mapStyle: {
      styleJson: [
        {
          featureType: "water",
          elementType: "all",
          stylers: {
            color: "#d1d1d1",
          },
        },
        {
          featureType: "land",
          elementType: "all",
          stylers: {
            color: "#f3f3f3",
          },
        },
        {
          featureType: "railway",
          elementType: "all",
          stylers: {
            visibility: "off",
          },
        },
        {
          featureType: "highway",
          elementType: "all",
          stylers: {
            color: "#fdfdfd",
          },
        },
        {
          featureType: "highway",
          elementType: "labels",
          stylers: {
            visibility: "off",
          },
        },
        {
          featureType: "arterial",
          elementType: "geometry",
          stylers: {
            color: "#fefefe",
          },
        },
        {
          featureType: "arterial",
          elementType: "geometry.fill",
          stylers: {
            color: "#fefefe",
          },
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: {
            visibility: "off",
          },
        },
        {
          featureType: "green",
          elementType: "all",
          stylers: {
            visibility: "off",
          },
        },
        {
          featureType: "subway",
          elementType: "all",
          stylers: {
            visibility: "off",
          },
        },
        {
          featureType: "manmade",
          elementType: "all",
          stylers: {
            color: "#d1d1d1",
          },
        },
        {
          featureType: "local",
          elementType: "all",
          stylers: {
            color: "#d1d1d1",
          },
        },
        {
          featureType: "arterial",
          elementType: "labels",
          stylers: {
            visibility: "off",
          },
        },
        {
          featureType: "boundary",
          elementType: "all",
          stylers: {
            color: "#fefefe",
          },
        },
        {
          featureType: "building",
          elementType: "all",
          stylers: {
            color: "#d1d1d1",
          },
        },
        {
          featureType: "label",
          elementType: "labels.text.fill",
          stylers: {
            color: "#999999",
          },
        },
      ],
    },
  },
  series: [
    {
      type: "scatter",
      coordinateSystem: "bmap",
      data: convertData(data),
      symbolSize: function (val) {
        return val[2] / 10;
      },
      value:{
        show:false
      },
      encode: {
        value: 2,
      },
      label: {
        formatter: "{b}",
        position: "right",
        show: false,
      },
      emphasis: {
        label: {
          show: true,
        },
      },
    },
    {
      name: "Top 5",
      type: "effectScatter",
      coordinateSystem: "bmap",
     
      symbolSize: function (val) {
        return val[2] / 10;
      },
      encode: {
        value: 2,
      },
      showEffectOn: "render",
      rippleEffect: {
        brushType: "stroke",
      },
      label: {
        formatter: "{b}",
        position: "right",
        show: true,
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: "#333",
      },
      emphasis: {
        scale: true,
      },
      zlevel: 1,
    },
  ],
};

option && myChart.setOption(option);
