var resolutionX = 1024;
var resolutionY = 768;
var radius = 45;
var beginX = resolutionX/5.75;
var beginY = 20;

var fontSize = 14;

var widthMultiplier = 2;
var evenMultiplier = 5;
var xGap = 10, yGap = 10;

var xDiff = (Math.cos(Math.PI/6)*2*radius)*widthMultiplier;
var yDiff = 3*radius/2;//(Math.sin(Math.PI/2)*radius)-(Math.sin(Math.PI*5/6)*radius);

var testNodes = [
    // Row 0
    { name: [], x: Math.round(beginX+((xDiff+xGap)*-2)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY-(yDiff+yGap)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*-1)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY-(yDiff+yGap)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*0)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY-(yDiff+yGap)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*1)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY-(yDiff+yGap)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*2)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY-(yDiff+yGap)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*3)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY-(yDiff+yGap)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*4)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY-(yDiff+yGap)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*5)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY-(yDiff+yGap)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*6)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY-(yDiff+yGap)), class:"" },
    // Row 1
    { name: [], x: Math.round(beginX+((xDiff+xGap)*-2)-(radius*widthMultiplier)), y: Math.round(beginY), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*-1)-(radius*widthMultiplier)), y: Math.round(beginY), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*0)-(radius*widthMultiplier)), y: Math.round(beginY), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*1)-(radius*widthMultiplier)), y: Math.round(beginY), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*2)-(radius*widthMultiplier)), y: Math.round(beginY), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*3)-(radius*widthMultiplier)), y: Math.round(beginY), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*4)-(radius*widthMultiplier)), y: Math.round(beginY), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*5)-(radius*widthMultiplier)), y: Math.round(beginY), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*6)-(radius*widthMultiplier)), y: Math.round(beginY), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*7)-(radius*widthMultiplier)), y: Math.round(beginY), class:"" },
    // Row 2
    { name: [], x: Math.round(beginX+((xDiff+xGap)*-2)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY+(yDiff+yGap)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*-1)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY+(yDiff+yGap)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*0)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY+(yDiff+yGap)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*1)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY+(yDiff+yGap)), class:"" },
    { name: ["Doctoral", "Degree"], x: Math.round(beginX+((xDiff+xGap)*2)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY+(yDiff+yGap)), class:"future" },
    { name: ["Master's", "Degree"], x: Math.round(beginX+((xDiff+xGap)*3)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY+(yDiff+yGap)), class:"future" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*4)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY+(yDiff+yGap)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*5)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY+(yDiff+yGap)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*6)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY+(yDiff+yGap)), class:"" },
    // Row 3
    { name: [], x: Math.round(beginX+((xDiff+xGap)*-1)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*2)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*0)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*2)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*1)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*2)), class:"" },
    { name: ["Mechanical","Engineer"], x: Math.round(beginX+((xDiff+xGap)*2)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*2)), class:"occupation",
        steps:["High", "Intern", "4 Year"],
        options:["GED", "Certificate", "2 Year", "Master's", "Doctoral"]
    },
    { name: ["Geoscientist"], x: Math.round(beginX+((xDiff+xGap)*3)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*2)), class:"occupation",
        steps:["High", "4 Year"],
        options:["GED", "Intern", "Certificate", "2 Year", "Master's", "Doctoral"]
    },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*4)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*2)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*5)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*2)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*6)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*2)), class:"" },
    // Row 4
    { name: [], x: Math.round(beginX+((xDiff+xGap)*-2)-(widthMultiplier*evenMultiplier)), y: beginY+((yDiff+yGap)*3), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*-1)-(widthMultiplier*evenMultiplier)), y: beginY+((yDiff+yGap)*3), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*0)-(widthMultiplier*evenMultiplier)), y: beginY+((yDiff+yGap)*3), class:"" },
    { name: ["Machinist"], x: Math.round(beginX+((xDiff+xGap)*1)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY+((yDiff+yGap)*3)), class:"occupation",
        steps:["High", "Apprentice", "Certificate"],
        options:["GED", "Intern", "2 Year", "4 Year"]
    },
    { name: ["4 Year", "Bachelor's","Degree"], x: Math.round(beginX+((xDiff+xGap)*2)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY+((yDiff+yGap)*3)), class:"" },
    { name: ["Real Estate", "Inspector"], x: Math.round(beginX+((xDiff+xGap)*3)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY+((yDiff+yGap)*3)), class:"occupation",
        steps:["High", "Certificate", "2 Year"],
        options:["GED", "Intern", "4 Year"]
    },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*4)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY+((yDiff+yGap)*3)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*5)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY+((yDiff+yGap)*3)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*6)-(widthMultiplier*evenMultiplier)), y: Math.round(beginY+((yDiff+yGap)*3)), class:"" },
    // Row 5
    { name: [], x: Math.round(beginX+((xDiff+xGap)*-1)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*4)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*0)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*4)), class:"" },
    { name: ["Carpenter"], x: Math.round(beginX+((xDiff+xGap)*1)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*4)), class:"occupation",
        steps:["High", "Apprentice"],
        options:["GED", "Intern", "2 Year", "Certificate", "4 Year"]
    },
    { name: ["Certificate", "Program"], x: Math.round(beginX+((xDiff+xGap)*2)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*4)), class:"" },
    { name: ["2 Year", "Associate's", "Degree"], x: Math.round(beginX+((xDiff+xGap)*3)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*4)), class:"" },
    { name: ["Assembler"], x: Math.round(beginX+((xDiff+xGap)*4)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*4)), class:"occupation",
        steps:["High", "On-the-Job"],
        options:["GED", "Intern", "2 Year", "Certificate", "4 Year"]
    },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*5)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*4)), class:"" },
    { name: [], x: Math.round(beginX+((xDiff+xGap)*6)-(radius*widthMultiplier)), y: Math.round(beginY+((yDiff+yGap)*4)), class:"" },
    // Row 6
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*-1)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*5))},
    { name:["Plumber"],class: "occupation",x:Math.round(beginX+((xDiff+xGap)*0)-(widthMultiplier*evenMultiplier)), y:Math.round(beginY+((yDiff+yGap)*5)),
        steps:["High", "Apprentice"],
        options:["GED"]
    },
    { name:["Apprentice"],class:"",x:Math.round(beginX+((xDiff+xGap)*1)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*5))},
    { name:["Intern"],class:"",x:Math.round(beginX+((xDiff+xGap)*2)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*5))},
    { name:["On-the-Job","Training"],class:"",x:Math.round(beginX+((xDiff+xGap)*3)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*5))},
    { name:["Landscaper"],class: "occupation",x:Math.round(beginX+((xDiff+xGap)*4)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*5)),
        steps:["High", "On-the-Job"],
        options:["GED", "2 Year", "Certificate", "4 Year"]
    },
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*5)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*5))},
    // Row 7
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*-1)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*6))},
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*0)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*6))},
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*1)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*6))},
    { name:["High", "School"],class:"",x:Math.round(beginX+((xDiff+xGap)*2)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*6))},
    { name:["GED"],class:"",x:Math.round(beginX+((xDiff+xGap)*3)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*6))},
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*4)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*6))},
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*5)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*6))},
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*6)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*6))},
    // Row 8
    { name:[],class: "",x:Math.round(beginX+((xDiff+xGap)*-1)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*7))},
    { name:[],class: "",x:Math.round(beginX+((xDiff+xGap)*0)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*7))},
    { name:[],class: "",x:Math.round(beginX+((xDiff+xGap)*1)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*7))},
    { name:["You Are", "Here"],class: "start",x:Math.round(beginX+((xDiff+xGap)*2)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*7))},
    { name:[],class: "",x:Math.round(beginX+((xDiff+xGap)*3)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*7))},
    { name:[],class: "",x:Math.round(beginX+((xDiff+xGap)*4)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*7))},
    { name:[],class: "",x:Math.round(beginX+((xDiff+xGap)*5)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*7))},
    // Row 9
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*-1)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*8))},
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*0)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*8))},
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*1)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*8))},
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*2)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*8))},
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*3)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*8))},
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*4)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*8))},
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*5)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*8))},
    { name:[],class:"",x:Math.round(beginX+((xDiff+xGap)*6)-(radius*widthMultiplier)),y:Math.round(beginY+((yDiff+yGap)*8))},
    // Row 10
    { name:[],class: "",x:Math.round(beginX+((xDiff+xGap)*-1)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*9))},
    { name:[],class: "",x:Math.round(beginX+((xDiff+xGap)*0)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*9))},
    { name:[],class: "",x:Math.round(beginX+((xDiff+xGap)*1)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*9))},
    { name:[],class: "",x:Math.round(beginX+((xDiff+xGap)*2)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*9))},
    { name:[],class: "",x:Math.round(beginX+((xDiff+xGap)*3)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*9))},
    { name:[],class: "",x:Math.round(beginX+((xDiff+xGap)*4)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*9))},
    { name:[],class: "",x:Math.round(beginX+((xDiff+xGap)*5)-(widthMultiplier*evenMultiplier)),y:Math.round(beginY+((yDiff+yGap)*9))},
];
