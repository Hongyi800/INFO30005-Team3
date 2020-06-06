const mydata =
    [{"country":"United States","latitude":37.09024,"longitude":-95.712891,"confirmed_cases":1902031,"death_cases":109146},
    {"country":"Brazil","latitude":-14.235004,"longitude":-51.92528,"confirmed_cases":584562,"death_cases":32568},
    {"country":"Russia","latitude":61.52401,"longitude":105.318756,"confirmed_cases":441108,"death_cases":5384},
    {"country":"Spain","latitude":40.463667,"longitude":-3.74922,"confirmed_cases":287406,"death_cases":27128},
    {"country":"United Kingdom","latitude":55.378051,"longitude":-3.435973,"confirmed_cases":279856,"death_cases":39728},
    {"country":"Italy","latitude":41.87194,"longitude":12.56738,"confirmed_cases":233836,"death_cases":33601},
    {"country":"India","latitude":20.593684,"longitude":78.96288,"confirmed_cases":217541,"death_cases":6091},
    {"country":"Germany","latitude":51.165691,"longitude":10.451526,"confirmed_cases":184425,"death_cases":8699},
    {"country":"Peru","latitude":-9.189967,"longitude":-75.015152,"confirmed_cases":178914,"death_cases":4894},
    {"country":"Turkey","latitude":38.963745,"longitude":35.243322,"confirmed_cases":166422,"death_cases":4609},
    {"country":"Iran","latitude":32.427908,"longitude":53.688046,"confirmed_cases":160696,"death_cases":8012},
    {"country":"France","latitude":46.227638,"longitude":2.213749,"confirmed_cases":151677,"death_cases":29021},
    {"country":"Chile","latitude":-35.675147,"longitude":-71.542969,"confirmed_cases":113628,"death_cases":1275},
    {"country":"Mexico","latitude":23.634501,"longitude":-102.552784,"confirmed_cases":101238,"death_cases":11729},
    {"country":"Canada","latitude":56.130366,"longitude":-106.346771,"confirmed_cases":93085,"death_cases":7498},
    {"country":"Saudi Arabia","latitude":23.885942,"longitude":45.079162,"confirmed_cases":91182,"death_cases":579},
    {"country":"Pakistan","latitude":30.375321,"longitude":69.345116,"confirmed_cases":85264,"death_cases":1770},
    {"country":"China","latitude":35.86166,"longitude":104.195397,"confirmed_cases":83022,"death_cases":4634},
    {"country":"Qatar","latitude":25.354826,"longitude":51.183884,"confirmed_cases":62160,"death_cases":45},
    {"country":"Belgium","latitude":50.503887,"longitude":4.469936,"confirmed_cases":58685,"death_cases":9522},
    {"country":"Bangladesh","latitude":23.684994,"longitude":90.356331,"confirmed_cases":55140,"death_cases":746},
    {"country":"Netherlands","latitude":52.132633,"longitude":5.291266,"confirmed_cases":46733,"death_cases":5977},
    {"country":"Belarus","latitude":53.709807,"longitude":27.953389,"confirmed_cases":45116,"death_cases":248},
    {"country":"Ecuador","latitude":-1.831239,"longitude":-78.183406,"confirmed_cases":40966,"death_cases":3486},
    {"country":"Sweden","latitude":60.128161,"longitude":18.643501,"confirmed_cases":40803,"death_cases":4542},
    {"country":"South Africa","latitude":-30.559482,"longitude":22.937506,"confirmed_cases":37525,"death_cases":103},
    {"country":"Singapore","latitude":1.352083,"longitude":103.819836,"confirmed_cases":36922,"death_cases":24},
    {"country":"United Arab Emirates","latitude":23.424076,"longitude":53.847818,"confirmed_cases":36359,"death_cases":270},
    {"country":"Colombia","latitude":4.570868,"longitude":-74.297333,"confirmed_cases":33354,"death_cases":1045},
    {"country":"Portugal","latitude":39.399872,"longitude":-8.224454,"confirmed_cases":33261,"death_cases":1447},
    {"country":"Switzerland","latitude":46.818188,"longitude":8.227512,"confirmed_cases":30893,"death_cases":1921},
    {"country":"Kuwait","latitude":29.31166,"longitude":47.481766,"confirmed_cases":29359,"death_cases":230},
    {"country":"Egypt","latitude":26.820553,"longitude":30.802498,"confirmed_cases":28615,"death_cases":1088},
    {"country":"Indonesia","latitude":-0.789275,"longitude":113.921327,"confirmed_cases":28233,"death_cases":1698},
    {"country":"Ukraine","latitude":48.379433,"longitude":31.1655799,"confirmed_cases":25411,"death_cases":747},
    {"country":"Ireland","latitude":53.1423672,"longitude":-7.6920536,"confirmed_cases":25111,"death_cases":1659},
    {"country":"Poland","latitude":51.919438,"longitude":19.145136,"confirmed_cases":24826,"death_cases":1117},
    {"country":"Philippines","latitude":12.879721,"longitude":121.774017,"confirmed_cases":19748,"death_cases":974},
    {"country":"Romania","latitude":45.943161,"longitude":24.96676,"confirmed_cases":19669,"death_cases":1296},
    {"country":"Argentina","latitude":-38.416097,"longitude":-63.616672,"confirmed_cases":19268,"death_cases":583},
    {"country":"Dominican Republic","latitude":18.735693,"longitude":-70.162651,"confirmed_cases":18040,"death_cases":516},
    {"country":"Afghanistan","latitude":33.93911,"longitude":67.709953,"confirmed_cases":17891,"death_cases":299},
    {"country":"Israel","latitude":31.046051,"longitude":34.851612,"confirmed_cases":17429,"death_cases":291},
    {"country":"Japan","latitude":36.204824,"longitude":138.252924,"confirmed_cases":16986,"death_cases":900},
    {"country":"Austria","latitude":47.516231,"longitude":14.550072,"confirmed_cases":16771,"death_cases":670},
    {"country":"Panama","latitude":8.537981,"longitude":-80.782127,"confirmed_cases":14609,"death_cases":357},
    {"country":"Oman","latitude":21.4735329,"longitude":55.975413,"confirmed_cases":13538,"death_cases":67},
    {"country":"Bahrain","latitude":26.0667,"longitude":50.5577,"confirmed_cases":12815,"death_cases":20},
    {"country":"Kazakhstan","latitude":48.019573,"longitude":66.923684,"confirmed_cases":12067,"death_cases":48},
    {"country":"Denmark","latitude":56.26392,"longitude":9.501785,"confirmed_cases":11771,"death_cases":580},
    {"country":"Bolivia","latitude":-16.290154,"longitude":-63.588653,"confirmed_cases":11638,"death_cases":400},
    {"country":"South Korea","latitude":35.907757,"longitude":127.766922,"confirmed_cases":11629,"death_cases":273},
    {"country":"Serbia","latitude":44.016521,"longitude":21.005859,"confirmed_cases":11523,"death_cases":245},
    {"country":"Armenia","latitude":40.069099,"longitude":45.038189,"confirmed_cases":11221,"death_cases":176},
    {"country":"Nigeria","latitude":9.081999,"longitude":8.675277,"confirmed_cases":11166,"death_cases":315},
    {"country":"Algeria","latitude":28.033886,"longitude":1.659626,"confirmed_cases":9733,"death_cases":673},
    {"country":"Czech Republic","latitude":49.817492,"longitude":15.472962,"confirmed_cases":9438,"death_cases":325},
    {"country":"Moldova","latitude":47.411631,"longitude":28.369885,"confirmed_cases":8795,"death_cases":310},
    {"country":"Ghana","latitude":7.946527,"longitude":-1.023194,"confirmed_cases":8548,"death_cases":38},
    {"country":"Norway","latitude":60.472024,"longitude":8.468946,"confirmed_cases":8477,"death_cases":237},
    {"country":"Iraq","latitude":33.223191,"longitude":43.679291,"confirmed_cases":8168,"death_cases":256},
    {"country":"Malaysia","latitude":4.210484,"longitude":101.975766,"confirmed_cases":7970,"death_cases":115},
    {"country":"Morocco","latitude":31.791702,"longitude":-7.09262,"confirmed_cases":7922,"death_cases":206},
    {"country":"Australia","latitude":-25.274398,"longitude":133.775136,"confirmed_cases":7240,"death_cases":102},
    {"country":"Finland","latitude":61.92411,"longitude":25.7481511,"confirmed_cases":6911,"death_cases":321},
    {"country":"Cameroon","latitude":7.369722,"longitude":12.354722,"confirmed_cases":6585,"death_cases":200},
    {"country":"Azerbaijan","latitude":40.143105,"longitude":47.576927,"confirmed_cases":6260,"death_cases":76},
    {"country":"Guatemala","latitude":15.783471,"longitude":-90.230759,"confirmed_cases":5760,"death_cases":143},
    {"country":"Honduras","latitude":15.199999,"longitude":-86.241905,"confirmed_cases":5690,"death_cases":234},
    {"country":"Sudan","latitude":12.862807,"longitude":30.217636,"confirmed_cases":5499,"death_cases":314},
    {"country":"Tajikistan","latitude":38.861034,"longitude":71.276093,"confirmed_cases":4191,"death_cases":48},
    {"country":"Puerto Rico","latitude":18.220833,"longitude":-66.590149,"confirmed_cases":4024,"death_cases":140},
    {"country":"Luxembourg","latitude":49.815273,"longitude":6.129583,"confirmed_cases":4024,"death_cases":110},
    {"country":"Hungary","latitude":47.162494,"longitude":19.5033041,"confirmed_cases":3954,"death_cases":539},
    {"country":"Djibouti","latitude":11.825138,"longitude":42.590275,"confirmed_cases":3935,"death_cases":26},
    {"country":"Guinea","latitude":9.945587,"longitude":-9.696645,"confirmed_cases":3933,"death_cases":23},
    {"country":"Senegal","latitude":14.497401,"longitude":-14.452362,"confirmed_cases":3932,"death_cases":47},
    {"country":"Uzbekistan","latitude":41.377491,"longitude":64.585262,"confirmed_cases":3874,"death_cases":16},
    {"country":"DR Congo","latitude":-4.038333,"longitude":21.758664,"confirmed_cases":3644,"death_cases":78},
    {"country":"Ivory Coast","latitude":7.539989,"longitude":-5.54708,"confirmed_cases":3110,"death_cases":35},
    {"country":"Thailand","latitude":15.870032,"longitude":100.992541,"confirmed_cases":3101,"death_cases":58},
    {"country":"Greece","latitude":39.074208,"longitude":21.824312,"confirmed_cases":2937,"death_cases":179},
    {"country":"Gabon","latitude":-0.803689,"longitude":11.609444,"confirmed_cases":2902,"death_cases":20},
    {"country":"El Salvador","latitude":13.794185,"longitude":-88.89653,"confirmed_cases":2705,"death_cases":51},
    {"country":"Haiti","latitude":18.971187,"longitude":-72.285215,"confirmed_cases":2640,"death_cases":50},
    {"country":"Bulgaria","latitude":42.733883,"longitude":25.48583,"confirmed_cases":2585,"death_cases":147},
    {"country":"Bosnia and Herzegovina","latitude":43.915886,"longitude":17.679076,"confirmed_cases":2551,"death_cases":157},
    {"country":"North Macedonia","latitude":41.608635,"longitude":21.745275,"confirmed_cases":2492,"death_cases":145},
    {"country":"Nepal","latitude":28.394857,"longitude":84.124008,"confirmed_cases":2300,"death_cases":9},
    {"country":"Croatia","latitude":45.1,"longitude":15.2000001,"confirmed_cases":2246,"death_cases":103},
    {"country":"Kenya","latitude":-0.023559,"longitude":37.906193,"confirmed_cases":2216,"death_cases":74},
    {"country":"Somalia","latitude":5.152149,"longitude":46.199616,"confirmed_cases":2146,"death_cases":79},
    {"country":"Cuba","latitude":21.521757,"longitude":-77.781167,"confirmed_cases":2107,"death_cases":83},
    {"country":"Mayotte","latitude":-12.8275,"longitude":45.166244,"confirmed_cases":1993,"death_cases":24},
    {"country":"Venezuela","latitude":6.42375,"longitude":-66.58973,"confirmed_cases":1952,"death_cases":20},
    {"country":"Kyrgyzstan","latitude":41.20438,"longitude":74.766098,"confirmed_cases":1899,"death_cases":20},
    {"country":"Estonia","latitude":58.595272,"longitude":25.0136071,"confirmed_cases":1890,"death_cases":69},
    {"country":"Maldives","latitude":3.202778,"longitude":73.22068,"confirmed_cases":1850,"death_cases":7},
    {"country":"Iceland","latitude":64.963051,"longitude":-19.020835,"confirmed_cases":1806,"death_cases":10},
    {"country":"Sri Lanka","latitude":7.873054,"longitude":80.771797,"confirmed_cases":1749,"death_cases":11},
    {"country":"Lithuania","latitude":55.169438,"longitude":23.881275,"confirmed_cases":1687,"death_cases":71},
    {"country":"Slovakia","latitude":48.669026,"longitude":19.699024,"confirmed_cases":1526,"death_cases":28},
    {"country":"New Zealand","latitude":-40.900557,"longitude":174.885971,"confirmed_cases":1504,"death_cases":22},
    {"country":"Ethiopia","latitude":9.145,"longitude":40.489673,"confirmed_cases":1486,"death_cases":17},
    {"country":"Slovenia","latitude":46.151241,"longitude":14.995463,"confirmed_cases":1477,"death_cases":109},
    {"country":"Mali","latitude":17.570692,"longitude":-3.996166,"confirmed_cases":1386,"death_cases":79},
    {"country":"Guinea-Bissau","latitude":11.803749,"longitude":-15.180413,"confirmed_cases":1339,"death_cases":8},
    {"country":"South Sudan","latitude":6.8769919,"longitude":31.3069788,"confirmed_cases":1317,"death_cases":14},
    {"country":"Equatorial Guinea","latitude":1.650801,"longitude":10.267895,"confirmed_cases":1306,"death_cases":12},
    {"country":"Lebanon","latitude":33.854721,"longitude":35.862285,"confirmed_cases":1256,"death_cases":27},
    {"country":"Central African Republic","latitude":6.611111,"longitude":20.939444,"confirmed_cases":1189,"death_cases":4},
    {"country":"Albania","latitude":41.153332,"longitude":20.168331,"confirmed_cases":1184,"death_cases":33},
    {"country":"Costa Rica","latitude":9.748917,"longitude":-83.753428,"confirmed_cases":1157,"death_cases":10},
    {"country":"Kosovo","latitude":42.6026359,"longitude":20.902977,"confirmed_cases":1142,"death_cases":30},
    {"country":"Nicaragua","latitude":12.865416,"longitude":-85.207229,"confirmed_cases":1118,"death_cases":46},
    {"country":"USS Theodore Roosevelt","latitude":0,"longitude":0,"confirmed_cases":1102,"death_cases":1},
    {"country":"Hong Kong","latitude":22.3193039,"longitude":114.1693611,"confirmed_cases":1094,"death_cases":4},
    {"country":"Zambia","latitude":-13.133897,"longitude":27.849332,"confirmed_cases":1089,"death_cases":7},
    {"country":"Tunisia","latitude":33.886917,"longitude":9.537499,"confirmed_cases":1087,"death_cases":49},
    {"country":"Latvia","latitude":56.879635,"longitude":24.603189,"confirmed_cases":1082,"death_cases":25},
    {"country":"Paraguay","latitude":-23.442503,"longitude":-58.443832,"confirmed_cases":1070,"death_cases":11},
    {"country":"Niger","latitude":17.607789,"longitude":8.081666,"confirmed_cases":961,"death_cases":65},
    {"country":"Cyprus","latitude":35.126413,"longitude":33.429859,"confirmed_cases":958,"death_cases":17},
    {"country":"Sierra Leone","latitude":8.460555,"longitude":-11.779889,"confirmed_cases":909,"death_cases":47},
    {"country":"Madagascar","latitude":-18.766947,"longitude":46.869107,"confirmed_cases":908,"death_cases":6},
    {"country":"Burkina Faso","latitude":12.238333,"longitude":-1.561593,"confirmed_cases":884,"death_cases":53},
    {"country":"Andorra","latitude":42.506285,"longitude":1.521801,"confirmed_cases":851,"death_cases":51},
    {"country":"Uruguay","latitude":-32.522779,"longitude":-55.765835,"confirmed_cases":828,"death_cases":23},
    {"country":"Chad","latitude":15.454166,"longitude":18.732207,"confirmed_cases":820,"death_cases":66},
    {"country":"Georgia","latitude":32.1656221,"longitude":-82.9000751,"confirmed_cases":801,"death_cases":13},
    {"country":"Jordan","latitude":30.585164,"longitude":36.238414,"confirmed_cases":757,"death_cases":9},
    {"country":"Mauritania","latitude":21.00789,"longitude":-10.940835,"confirmed_cases":745,"death_cases":34},
    {"country":"Diamond Princess","latitude":40.8642959,"longitude":-73.9614914,"confirmed_cases":712,"death_cases":14},
    {"country":"San Marino","latitude":43.94236,"longitude":12.457777,"confirmed_cases":674,"death_cases":42},
    {"country":"Malta","latitude":35.937496,"longitude":14.375416,"confirmed_cases":622,"death_cases":9},
    {"country":"Congo","latitude":-4.038333,"longitude":21.758664,"confirmed_cases":611,"death_cases":20},
    {"country":"Jamaica","latitude":18.109581,"longitude":-77.297508,"confirmed_cases":591,"death_cases":10},
    {"country":"French Guiana","latitude":3.933889,"longitude":-53.125782,"confirmed_cases":533,"death_cases":1},
    {"country":"Tanzania","latitude":-6.369028,"longitude":34.888822,"confirmed_cases":509,"death_cases":21},
    {"country":"Uganda","latitude":1.373333,"longitude":32.290275,"confirmed_cases":507,"death_cases":0},
    {"country":"Sao Tome and Principe","latitude":0.18636,"longitude":6.613081,"confirmed_cases":484,"death_cases":12},
    {"country":"Runion","latitude":-21.115141,"longitude":55.536384,"confirmed_cases":478,"death_cases":1},
    {"country":"Cape Verde","latitude":16.5388,"longitude":-23.0418,"confirmed_cases":477,"death_cases":5},
    {"country":"Palestine","latitude":31.952162,"longitude":35.233154,"confirmed_cases":457,"death_cases":3},
    {"country":"Togo","latitude":36.4197574,"longitude":-98.7648106,"confirmed_cases":452,"death_cases":13},
    {"country":"Taiwan","latitude":23.69781,"longitude":120.960515,"confirmed_cases":443,"death_cases":7},
    {"country":"Yemen","latitude":15.552727,"longitude":48.516388,"confirmed_cases":419,"death_cases":95},
    {"country":"Rwanda","latitude":-1.940278,"longitude":29.873888,"confirmed_cases":397,"death_cases":2},
    {"country":"Malawi","latitude":-13.254308,"longitude":34.301525,"confirmed_cases":369,"death_cases":4},
    {"country":"Somaliland","latitude":9.4117434,"longitude":46.8252838,"confirmed_cases":359,"death_cases":22},
    {"country":"Isle of Man","latitude":54.236107,"longitude":-4.548056,"confirmed_cases":336,"death_cases":24},
    {"country":"Mauritius","latitude":-20.348404,"longitude":57.552152,"confirmed_cases":335,"death_cases":10},
    {"country":"Vietnam","latitude":14.058324,"longitude":108.277199,"confirmed_cases":328,"death_cases":0},
    {"country":"Montenegro","latitude":42.708678,"longitude":19.37439,"confirmed_cases":324,"death_cases":9},
    {"country":"Liberia","latitude":6.428055,"longitude":-9.429499,"confirmed_cases":316,"death_cases":28},
    {"country":"Mozambique","latitude":-18.665695,"longitude":35.529562,"confirmed_cases":316,"death_cases":2},
    {"country":"Jersey","latitude":49.214439,"longitude":-2.13125,"confirmed_cases":309,"death_cases":30},
    {"country":"Eswatini","latitude":-26.522503,"longitude":31.465866,"confirmed_cases":295,"death_cases":3},
    {"country":"Guernsey","latitude":49.4481982,"longitude":-2.58949,"confirmed_cases":252,"death_cases":13},
    {"country":"Benin","latitude":9.30769,"longitude":2.315834,"confirmed_cases":244,"death_cases":3},
    {"country":"Myanmar","latitude":21.916221,"longitude":95.955974,"confirmed_cases":233,"death_cases":6},
    {"country":"Zimbabwe","latitude":-19.015438,"longitude":29.154857,"confirmed_cases":222,"death_cases":4},
    {"country":"Martinique","latitude":14.641528,"longitude":-61.024174,"confirmed_cases":200,"death_cases":14},
    {"country":"Libya","latitude":26.3351,"longitude":17.228331,"confirmed_cases":196,"death_cases":5},
    {"country":"Faroe Islands","latitude":61.892635,"longitude":-6.9118061,"confirmed_cases":187,"death_cases":0},
    {"country":"Mongolia","latitude":46.862496,"longitude":103.846656,"confirmed_cases":186,"death_cases":0},
    {"country":"Guam","latitude":13.444304,"longitude":144.793731,"confirmed_cases":177,"death_cases":5},
    {"country":"Gibraltar","latitude":36.140751,"longitude":-5.353585,"confirmed_cases":173,"death_cases":0},
    {"country":"Guadeloupe","latitude":16.265,"longitude":-61.551,"confirmed_cases":162,"death_cases":14},
    {"country":"Cayman Islands","latitude":19.3133,"longitude":-81.2546,"confirmed_cases":156,"death_cases":1},
    {"country":"Guyana","latitude":4.860416,"longitude":-58.93018,"confirmed_cases":153,"death_cases":12},
    {"country":"Brunei","latitude":4.535277,"longitude":114.727669,"confirmed_cases":141,"death_cases":2},
    {"country":"Bermuda","latitude":32.3078,"longitude":-64.7505,"confirmed_cases":141,"death_cases":9},
    {"country":"Comoros","latitude":-11.6455,"longitude":43.3333,"confirmed_cases":132,"death_cases":2},
    {"country":"Cambodia","latitude":12.565679,"longitude":104.990963,"confirmed_cases":125,"death_cases":0},
    {"country":"Syria","latitude":34.802075,"longitude":38.996815,"confirmed_cases":123,"death_cases":6},
    {"country":"Trinidad and Tobago","latitude":10.691803,"longitude":-61.222503,"confirmed_cases":117,"death_cases":8},
    {"country":"Northern Cyprus","latitude":35.2480359,"longitude":33.6577243,"confirmed_cases":108,"death_cases":4},
    {"country":"Bahamas","latitude":25.03428,"longitude":-77.39628,"confirmed_cases":102,"death_cases":11},
    {"country":"Aruba","latitude":12.52111,"longitude":-69.968338,"confirmed_cases":101,"death_cases":3},
    {"country":"Monaco","latitude":43.7384176,"longitude":7.4246158,"confirmed_cases":99,"death_cases":4},
    {"country":"Barbados","latitude":13.193887,"longitude":-59.543198,"confirmed_cases":92,"death_cases":7},
    {"country":"Angola","latitude":-11.202692,"longitude":17.873887,"confirmed_cases":86,"death_cases":4},
    {"country":"Liechtenstein","latitude":47.166,"longitude":9.555373,"confirmed_cases":82,"death_cases":1},
    {"country":"Sint Maarten","latitude":18.04248,"longitude":-63.05483,"confirmed_cases":77,"death_cases":15},
    {"country":"Suriname","latitude":3.919305,"longitude":-56.027783,"confirmed_cases":74,"death_cases":1},
    {"country":"U.S. Virgin Islands","latitude":18.335765,"longitude":-64.896335,"confirmed_cases":70,"death_cases":6},
    {"country":"Burundi","latitude":-3.373056,"longitude":29.918886,"confirmed_cases":63,"death_cases":1},
    {"country":"French Polynesia","latitude":-17.679742,"longitude":-149.406843,"confirmed_cases":60,"death_cases":0},
    {"country":"Artsakh","latitude":39.796249,"longitude":46.6550799,"confirmed_cases":57,"death_cases":0},
    {"country":"Bhutan","latitude":27.514162,"longitude":90.433601,"confirmed_cases":47,"death_cases":0},
    {"country":"Macau","latitude":22.198745,"longitude":113.543873,"confirmed_cases":45,"death_cases":0},
    {"country":"Saint Martin","latitude":18.0708298,"longitude":-63.0500809,"confirmed_cases":41,"death_cases":3},
    {"country":"Botswana","latitude":-22.328474,"longitude":24.684866,"confirmed_cases":40,"death_cases":1},
    {"country":"Eritrea","latitude":15.179384,"longitude":39.782334,"confirmed_cases":39,"death_cases":0},
    {"country":"Abkhazia","latitude":43.0015544,"longitude":41.023407,"confirmed_cases":28,"death_cases":1},
    {"country":"Antigua and Barbuda","latitude":17.060816,"longitude":-61.796428,"confirmed_cases":26,"death_cases":3},
    {"country":"Gambia","latitude":13.443182,"longitude":-15.310139,"confirmed_cases":26,"death_cases":1},
    {"country":"St. Vincent Grenadines","latitude":12.984305,"longitude":-61.287228,"confirmed_cases":26,"death_cases":0},
    {"country":"Namibia","latitude":-22.95764,"longitude":18.49041,"confirmed_cases":25,"death_cases":0},
    {"country":"East Timor","latitude":-8.874217,"longitude":125.727539,"confirmed_cases":24,"death_cases":0},
    {"country":"Grenada","latitude":12.1165,"longitude":-61.679,"confirmed_cases":23,"death_cases":0},
    {"country":"Northern Mariana Islands ","latitude":15.0979,"longitude":145.6739,"confirmed_cases":23,"death_cases":2},
    {"country":"Cura莽ao","latitude":12.16957,"longitude":-68.99002,"confirmed_cases":21,"death_cases":1},
    {"country":"New Caledonia","latitude":-20.904305,"longitude":165.618042,"confirmed_cases":20,"death_cases":0},
    {"country":"Laos","latitude":19.85627,"longitude":102.495496,"confirmed_cases":19,"death_cases":0},
    {"country":"Dominica","latitude":15.414999,"longitude":-61.370976,"confirmed_cases":18,"death_cases":0},
    {"country":"Saint Lucia","latitude":13.909444,"longitude":-60.978893,"confirmed_cases":18,"death_cases":0},
    {"country":"Belize","latitude":17.189877,"longitude":-88.49765,"confirmed_cases":18,"death_cases":2},
    {"country":"Fiji","latitude":-17.713371,"longitude":178.065032,"confirmed_cases":18,"death_cases":0},
    {"country":"Saint Kitts and Nevis","latitude":17.357822,"longitude":-62.782998,"confirmed_cases":15,"death_cases":0},
    {"country":"Greenland","latitude":71.706936,"longitude":-42.604303,"confirmed_cases":13,"death_cases":0},
    {"country":"MS Zaandam","latitude":0,"longitude":0,"confirmed_cases":13,"death_cases":4},
    {"country":"Falkland Islands","latitude":-51.796253,"longitude":-59.523613,"confirmed_cases":13,"death_cases":0},
    {"country":"Turks and Caicos","latitude":21.694025,"longitude":-71.797928,"confirmed_cases":12,"death_cases":1},
    {"country":"Coral Princess","latitude":26.648165,"longitude":-82.035419,"confirmed_cases":12,"death_cases":2},
    {"country":"Vatican City","latitude":41.902916,"longitude":12.453389,"confirmed_cases":12,"death_cases":0},
    {"country":"Montserrat","latitude":16.742498,"longitude":-62.187366,"confirmed_cases":11,"death_cases":1},
    {"country":"Seychelles","latitude":-4.679574,"longitude":55.491977,"confirmed_cases":11,"death_cases":0},
    {"country":"British Virgin Islands","latitude":18.420695,"longitude":-64.639968,"confirmed_cases":8,"death_cases":1},
    {"country":"Papua New Guinea","latitude":-6.314993,"longitude":143.95555,"confirmed_cases":8,"death_cases":0},
    {"country":"St. Barth","latitude":17.9,"longitude":-62.833333,"confirmed_cases":6,"death_cases":0},
    {"country":"Lesotho","latitude":-29.609988,"longitude":28.233608,"confirmed_cases":4,"death_cases":0},
    {"country":"Anguilla","latitude":18.220554,"longitude":-63.068615,"confirmed_cases":3,"death_cases":0},
    {"country":"Sint Eustatius","latitude":17.4890306,"longitude":-62.973555,"confirmed_cases":2,"death_cases":0},
    {"country":"Saint Pierre Miquelon","latitude":46.8852,"longitude":-56.3159,"confirmed_cases":1,"death_cases":0}];