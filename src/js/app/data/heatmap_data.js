(function(){
'use strict';

var heatmapGradients = [
    [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
    ],
    [
        'rgba(0, 155, 255, 0)',
        'rgba(0, 150, 155, 1)',
        'rgba(0, 150, 100, 1)',
        'rgba(0, 27, 130, 1)',
        'rgba(0, 63, 120, 1)',
        'rgba(5, 42, 150, 1)',
        'rgba(18, 22, 131, 1)',
        'rgba(30, 12, 121, 1)',
        'rgba(45, 0, 103, 1)',
        'rgba(55, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
    ]
];

var welderPoints = [
    {lat: 31.31332556, lng: -90.10500333},
    {lat: 33.05462275, lng: -90.10493099},
    {lat: 31.97949075, lng: -89.38505496},
    {lat: 31.00743864, lng: -90.13857727},
    {lat: 33.3738764,  lng: -89.54494885},
    {lat: 32.64811879, lng: -89.7913772},
    {lat: 31.8842209,  lng: -89.57882711},
    {lat: 32.06093667, lng: -89.52947206},
    {lat: 31.71369861, lng: -88.57490358},
    {lat: 32.98885269, lng: -89.5247639},
    {lat: 32.60553787, lng: -89.46263124},
    {lat: 30.89603613, lng: -88.50717859},
    {lat: 33.21830346, lng: -88.6734276},
    {lat: 30.93609731, lng: -89.01477433},
    {lat: 30.79233051, lng: -88.66001462},
    {lat: 33.87738071, lng: -89.1849024},
    {lat: 33.01982252, lng: -90.03378696},
    {lat: 31.07234885, lng: -90.09203592},
    {lat: 31.03778178, lng: -88.43723415},
    {lat: 33.80631039, lng: -89.68920637},
    {lat: 32.96448189, lng: -88.4524452},
    {lat: 33.79969708, lng: -89.98731731},
    {lat: 34.51567645, lng: -89.40336206},
    {lat: 33.87402479, lng: -89.6846643},
    {lat: 34.54677731, lng: -89.35538531},
    {lat: 31.64075407, lng: -89.76075321},
    {lat: 32.34999565, lng: -89.34157789},
    {lat: 33.15188259, lng: -89.98476089},
    {lat: 33.21981289, lng: -88.63338955},
    {lat: 31.41021875, lng: -89.97861545},
    {lat: 34.29311027, lng: -89.03432912},
    {lat: 33.42013555, lng: -89.62499249},
    {lat: 33.46729131, lng: -88.88035672},
    {lat: 31.65430793, lng: -89.82732779},
    {lat: 32.77668752, lng: -89.14944459},
    {lat: 31.46199372, lng: -89.26143392},
    {lat: 32.55307892, lng: -88.70243756},
    {lat: 31.86353547, lng: -89.00601008},
    {lat: 33.48541655, lng: -88.86800061},
    {lat: 32.40464155, lng: -89.43214024},
    {lat: 34.08060205, lng: -89.76232283},
    {lat: 30.60820221, lng: -89.06351266},
    {lat: 33.17354527, lng: -89.36038809},
    {lat: 34.87268145, lng: -89.01219829},
    {lat: 30.46859804, lng: -88.55672656},
    {lat: 32.95840357, lng: -89.16623302},
    {lat: 33.8062673,  lng: -90.00839864},
    {lat: 32.84393378, lng: -88.79329279},
    {lat: 32.57083694, lng: -89.91791706},
    {lat: 32.54231182, lng: -89.09766655},
    {lat: 32.54193229, lng: -89.99435721},
    {lat: 31.79680938, lng: -89.26654531},
    {lat: 30.68353203, lng: -89.59750502},
    {lat: 31.01734416, lng: -89.15963307},
    {lat: 33.66447234, lng: -89.40158366},
    {lat: 32.01497078, lng: -88.85027225},
    {lat: 34.348897,   lng: -89.98748788},
    {lat: 30.96179943, lng: -89.01672842},
    {lat: 33.35784018, lng: -89.17501361},
    {lat: 34.7423649,  lng: -90.14568648},
    {lat: 31.89726881, lng: -89.98286946},
    {lat: 32.16663755, lng: -88.56513518},
    {lat: 33.42298008, lng: -89.0726907},
    {lat: 33.42173449, lng: -89.01105122},
    {lat: 34.89254082, lng: -89.69518403},
    {lat: 34.77270415, lng: -88.88181576},
    {lat: 30.50876877, lng: -88.75674201},
    {lat: 33.40769942, lng: -88.6628845},
    {lat: 33.88386044, lng: -89.84083586},
    {lat: 31.3048609,  lng: -89.13992167},
    {lat: 33.87098234, lng: -89.73415768},
    {lat: 32.36538085, lng: -89.50486214},
    {lat: 33.40765229, lng: -88.98733793},
    {lat: 34.33431212, lng: -88.86486954},
    {lat: 31.7177867,  lng: -89.36111968},
    {lat: 31.90298985, lng: -89.75568503},
    {lat: 32.24263987, lng: -89.75686145},
    {lat: 30.95147895, lng: -89.29119809},
    {lat: 32.01972574, lng: -88.49332237},
    {lat: 32.53967881, lng: -90.08269116},
    {lat: 34.12902188, lng: -89.60833413},
    {lat: 34.59761242, lng: -88.72049753},
    {lat: 32.85973786, lng: -90.10182414},
    {lat: 34.17598586, lng: -89.40893303},
    {lat: 32.21754257, lng: -89.96141119},
    {lat: 33.55473865, lng: -89.90621423},
    {lat: 33.9663616,  lng: -89.74625451},
    {lat: 34.89133129, lng: -89.22163948},
    {lat: 32.45247137, lng: -88.94220513},
    {lat: 33.83437067, lng: -89.41854438},
    {lat: 34.61079893, lng: -89.20745158},
    {lat: 33.83200321, lng: -90.04270115},
    {lat: 30.84882827, lng: -88.50188869},
    {lat: 34.56524417, lng: -88.59475083},
    {lat: 30.89106333, lng: -89.06486256},
    {lat: 32.64863011, lng: -89.72794523},
    {lat: 32.73025517, lng: -89.14415108},
    {lat: 32.82240544, lng: -89.06968741},
    {lat: 30.72087434, lng: -89.72325209},
    {lat: 32.99054721, lng: -89.93266513},
    {lat: 31.75163196, lng: -89.16698266},
    {lat: 34.51021951, lng: -90.14741181},
    {lat: 31.74589152, lng: -89.59330089},
    {lat: 30.78366264, lng: -89.4863345},
    {lat: 31.8456544,  lng: -89.59758918},
    {lat: 31.50130062, lng: -89.8345538},
    {lat: 34.92449746, lng: -90.03034224},
    {lat: 31.14940746, lng: -89.65778266},
    {lat: 34.55387716, lng: -89.59724512},
    {lat: 34.22181951, lng: -88.44895739},
    {lat: 31.37442758, lng: -89.12814082},
    {lat: 34.57188165, lng: -88.53243413},
    {lat: 33.26444372, lng: -88.78928979}
];

var engineerPoints = [
    {lat: 33.18174669, lng: -90.26436417},
    {lat: 33.02998665, lng: -90.43614649},
    {lat: 32.02072258, lng: -89.0726159},
    {lat: 31.91042113, lng: -90.09468339},
    {lat: 31.44576161, lng: -89.17070228},
    {lat: 32.00929274, lng: -89.09160856},
    {lat: 33.54233371, lng: -90.41252632},
    {lat: 30.91494271, lng: -89.26614924},
    {lat: 30.49180245, lng: -89.02574789},
    {lat: 31.97357784, lng: -90.1843881},
    {lat: 31.10182574, lng: -89.57757797},
    {lat: 30.68385454, lng: -89.52153958},
    {lat: 33.49379564, lng: -89.50609226},
    {lat: 32.73888121, lng: -90.10230224},
    {lat: 31.59510081, lng: -88.50117001},
    {lat: 33.06005661, lng: -90.31734515},
    {lat: 31.12018847, lng: -88.89316865},
    {lat: 30.69308106, lng: -89.25355898},
    {lat: 31.50449509, lng: -88.64354127},
    {lat: 33.18373852, lng: -89.62049812},
    {lat: 30.95548704, lng: -88.62481966},
    {lat: 33.13305562, lng: -89.01164779},
    {lat: 31.18082425, lng: -90.29443693},
    {lat: 32.24807217, lng: -88.83286453},
    {lat: 33.69970727, lng: -89.37835551},
    {lat: 30.78929385, lng: -89.26657577},
    {lat: 31.19377025, lng: -89.13744169},
    {lat: 30.84162116, lng: -88.77371985},
    {lat: 32.48244823, lng: -89.16431137},
    {lat: 32.00141226, lng: -89.83893868},
    {lat: 32.40013846, lng: -89.33098127},
    {lat: 32.65170498, lng: -88.53973229},
    {lat: 33.24100133, lng: -90.12883959},
    {lat: 32.63515551, lng: -89.12325826},
    {lat: 32.54255474, lng: -89.51734908},
    {lat: 31.40031308, lng: -89.43764953},
    {lat: 31.28951654, lng: -89.20112388},
    {lat: 30.82951803, lng: -89.48409756},
    {lat: 33.38289399, lng: -89.74398941},
    {lat: 32.42564237, lng: -88.71117749},
    {lat: 31.86958088, lng: -89.44542685},
    {lat: 33.49592491, lng: -89.54529316},
    {lat: 30.55686712, lng: -88.98369776},
    {lat: 32.16992904, lng: -89.57296848},
    {lat: 31.06582639, lng: -89.59104067},
    {lat: 33.49700944, lng: -90.31333546},
    {lat: 33.76073912, lng: -88.8607277},
    {lat: 31.91117115, lng: -90.19729552},
    {lat: 30.73981775, lng: -89.72239369},
    {lat: 31.09096359, lng: -88.71626325}
];

var machinistsPoints = [
    {lat: 32.92816747, lng: -89.01677211},
    {lat: 32.28009224, lng: -89.37085591},
    {lat: 32.33201212, lng: -88.78172803},
    {lat: 31.90971497, lng: -89.55971166},
    {lat: 31.98885338, lng: -89.28055612},
    {lat: 32.39852395, lng: -90.06829987},
    {lat: 32.47002801, lng: -89.41712268},
    {lat: 32.42521983, lng: -89.25548328},
    {lat: 32.39666177, lng: -90.20026031},
    {lat: 32.01967314, lng: -88.94977537},
    {lat: 31.98271874, lng: -89.22299831},
    {lat: 31.79338028, lng: -88.88913844},
    {lat: 31.97666973, lng: -88.78435728},
    {lat: 31.67367402, lng: -89.38105612},
    {lat: 32.15458087, lng: -89.07389571},
    {lat: 32.19604198, lng: -89.32741723},
    {lat: 32.54324569, lng: -88.98702266},
    {lat: 32.937606,   lng: -89.37895248},
    {lat: 32.98476012, lng: -89.12961152},
    {lat: 32.15076051, lng: -89.24018503},
    {lat: 32.60551774, lng: -89.20482459},
    {lat: 32.19784423, lng: -88.96234896},
    {lat: 32.25222889, lng: -89.16202797},
    {lat: 31.68265675, lng: -89.53530278},
    {lat: 32.14823283, lng: -89.67541697},
    {lat: 32.48535226, lng: -89.62716474},
    {lat: 32.64501937, lng: -89.47254362},
    {lat: 32.31133267, lng: -89.76568451},
    {lat: 32.68318859, lng: -89.89798423},
    {lat: 33.01157902, lng: -89.4300364,},
    {lat: 32.75669805, lng: -89.79211182},
    {lat: 32.06517488, lng: -89.77219388},
    {lat: 32.41456423, lng: -89.82795402},
    {lat: 31.98415979, lng: -89.00773112},
    {lat: 32.55260285, lng: -89.47751314},
    {lat: 32.9309514,  lng: -89.84569931},
    {lat: 32.30618138, lng: -89.38849654},
    {lat: 32.41107361, lng: -89.64011822},
    {lat: 32.42276332, lng: -88.96873809},
    {lat: 32.30556413, lng: -90.20349272},
    {lat: 31.82100437, lng: -89.87732636},
    {lat: 31.79776254, lng: -89.34300198},
    {lat: 32.02550679, lng: -89.63530071},
    {lat: 32.3945494,  lng: -88.82177317},
    {lat: 31.75267588, lng: -89.24090478},
    {lat: 32.3597939,  lng: -89.09532296},
    {lat: 32.51050159, lng: -89.89851648},
    {lat: 31.72513184, lng: -89.53779853},
    {lat: 32.77716019, lng: -88.81507436},
    {lat: 32.30693988, lng: -89.25121243},
    {lat: 32.94921554, lng: -89.03608478},
    {lat: 33.80589719, lng: -90.02578511},
    {lat: 31.36389094, lng: -89.97980087},
    {lat: 32.92529761, lng: -89.76117023},
    {lat: 32.56883899, lng: -89.26201146},
    {lat: 34.66284199, lng: -89.30075904},
    {lat: 31.80100178, lng: -89.4414921},
    {lat: 31.57265826, lng: -89.68810741},
    {lat: 33.72117549, lng: -90.03978166},
    {lat: 31.97524221, lng: -89.54512795},
    {lat: 33.93840028, lng: -89.66777599},
    {lat: 31.74541452, lng: -89.22272106},
    {lat: 33.13683385, lng: -88.88172092},
    {lat: 30.68105807, lng: -88.65383296},
    {lat: 30.6434835,  lng:-89.26302855},
    {lat: 32.24452451, lng: -89.44422469},
    {lat: 32.77282209, lng: -89.15443212},
    {lat: 31.99897515, lng: -89.96469665},
    {lat: 33.4438342,  lng:-90.05816052},
    {lat: 33.69238254, lng: -88.56426942},
    {lat: 33.77489573, lng: -88.77606483},
    {lat: 33.94359729, lng: -89.9996436},
    {lat: 32.69310753, lng: -89.05011904},
    {lat: 30.59664915, lng: -88.81802115},
    {lat: 31.32301972, lng: -89.07156134},
    {lat: 34.19902987, lng: -89.20241124},
    {lat: 34.41854413, lng: -89.76156658},
    {lat: 30.71033232, lng: -89.89247151},
    {lat: 31.92947777, lng: -89.97817028},
    {lat: 34.34923044, lng: -89.98994433},
    {lat: 32.86532964, lng: -88.988679},
    {lat: 33.20616693, lng: -89.92728729},
    {lat: 34.65615474, lng: -88.9761905},
    {lat: 30.64059729, lng: -90.12706926},
    {lat: 30.77847215, lng: -89.64245668},
    {lat: 30.63192429, lng: -89.70422996},
    {lat: 32.7573723,  lng:  -88.60867632},
    {lat: 33.11196686, lng: -89.50583305},
    {lat: 34.31898022, lng: -88.81259433},
    {lat: 31.35829235, lng: -88.62625968},
    {lat: 34.57604576, lng: -89.38006476},
    {lat: 33.60250729, lng: -89.03448118},
    {lat: 33.92545701, lng: -88.72365721},
    {lat: 30.67946615, lng: -90.1288225},
    {lat: 32.02131876, lng: -88.71426647},
    {lat: 33.01314374, lng: -88.93070658},
    {lat: 32.27795516, lng: -89.64219771},
    {lat: 31.28767098, lng: -90.13660051},
    {lat: 34.38029811, lng: -88.99349633},
    {lat: 32.63277224, lng: -88.65128467},
    {lat: 33.32261193, lng: -89.7072742},
    {lat: 31.85643776, lng: -89.11662584},
    {lat: 31.83108192, lng: -88.92254999},
    {lat: 30.91362349, lng: -88.81942422},
    {lat: 32.3146918,  lng:  -89.68591395},
    {lat: 32.32339043, lng: -89.42288224},
    {lat: 32.3760559,  lng:  -89.40902455},
    {lat: 31.34065577, lng: -88.84676922},
    {lat: 30.7266297,  lng:  -88.56545017},
    {lat: 32.65980728, lng: -90.13997365},
    {lat: 30.53017175, lng: -89.35345521},
    {lat: 34.56115134, lng: -89.36631889},
    {lat: 31.53293899, lng: -90.00866626},
    {lat: 31.01720141, lng: -88.91481949},
    {lat: 30.57110412, lng: -89.07150783},
    {lat: 32.50648891, lng: -88.74572057},
    {lat: 30.65693205, lng: -90.09587222},
    {lat: 33.60604819, lng: -89.1861632},
    {lat: 32.871884,   lng:   -89.27514262},
    {lat: 31.51433114, lng: -88.69445123},
    {lat: 31.92196686, lng: -88.73316174},
    {lat: 31.3440923,  lng:  -89.11202765},
    {lat: 30.53083605, lng: -89.52495305},
    {lat: 34.61515903, lng: -89.78283082},
];

angular.module('demoApp')
    .constant('HEATMAP_GRADIENTS', heatmapGradients)
    .constant('WELDER_POINTS', welderPoints)
    .constant('ENGINEER_POINTS', engineerPoints)
    .constant('MACHINISTS_POINTS', machinistsPoints)
;

}());