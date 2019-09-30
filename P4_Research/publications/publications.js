app = angular.module("Publications", []);

app.filter("slice", function () {
  return function (arr, start, end) {
    return arr.slice(start, end);
  };
});

app.controller("PubCtrl", function ($scope) {

  $scope.reverse = true;
  $scope.propertyName = 'year';

  $scope.sortBy = function (propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
  

  $scope.filt = [
    '-year',
    'nauthors'
  ];


  $scope.tags = {
    _00_DEFAULT: "Show All",
    _01_TRAINING: "Training and Education",
    _02_FAN_PERCEPTION: "Fan/Supporter Perception",
    _03_STAKEHOLDER_PERCEPTION: "Stakeholder Perception",
    _04_EVACUATION: "Evacuation",
    _05_CROWD_DISORDER: "Crowd Violence/Disorder",
    _06_CRIME_DISORDER_VENUES: "Crime and Disorder around Venues",
    _07_POLICY_EVALUATIONS: "Policy Evaluations",
    _08_ALCOHOL: "Alcohol-related",
    _09_BEST_PRACTICES: "Best-Practices",
    _10_EMERGENCY_COMMUNICATIONS: "Emergency/Crisis Communications",
    _11_RISK_MANAGEMENT: "Risk Management"
  }
  $scope.auth = {
    HALL: "Hall, S.",
    MENAKER: "Menaker, B.",
    GORDON: "Gordon, K.O.",
    Humphreys: "Humphreys, B.",
    MILLER: "Miller, J.",
    KURLAND: "Kurland, J.",
    MARCIANI: "Marciani, L.",
    PYUN: "Pyun, H.",
    RISTEA: "Ristea, A.",
    TEKIN: "Tekin, D.",
    ZALE: "Zale, J.",
  }
  $scope.years = [
    2019,
    2018,
    2017,
    2016,
    2015,
    2014,
    2013,
    2012,
    2011,
    2010,
    2009,
    2008,
    2007,
    2006,
    2005,
    2003,
    2002,
    2001,
    2000,
    1999
  ]
  /*
    {
      "nauthors": "",
      "authors": "",
      "year": ,
      "desc": [
        ""
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT]
    },
  */
  $scope.pubList = [{
      "nauthors": "Hall, S.",
      "authors": "Newland, B., Hall, S., & Koba, A. L.",
      "year": 2018,
      "desc": [
        "Sport Facility and Event Management. In Pedersen, P. & Thibault, L. (Eds.). Contemporary Sport Management. (6th ed.). Champaign, IL: Human Kinetics."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._05_CROWD_DISORDER, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Hall, S., Manning, D., Keiper, M., Jenny, S., & Allen, B. ",
      "year": 2019,
      "desc": [
        "Stakeholders’ Perception of Critical Risks and Challenges Hosting Marathon Events: An Exploratory Study. Journal of Contemporary Athletics, 13(1), 11-22."
      ],
      "link": "https://search.proquest.com/openview/b5c4b8eb76c09723e196347c2a2e363a/1?cbl=2034846&pq-origsite=gscholar",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._03_STAKEHOLDER_PERCEPTION]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Schwarz, E. C., Hall, S., & Shibli, S.",
      "year": 2019,
      "desc": [
        "Sport Facility Operations Management: A Global Perspective. (3rd ed.). London and New York: Routledge, Taylor & Francis Group. "
      ],
      "link": "https://www.taylorfrancis.com/books/9780429026102",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._04_EVACUATION, $scope.tags._05_CROWD_DISORDER, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Zale, J.",
      "authors": "Zale, J., Kar, B., & Cochran, D.",
      "year": 2018,
      "desc": [
        "Optimizing Stadium Evacuation By Integrating Geo-Computation And Affordance Theory. Journal Of Emergency Management 16(2): 81-93",
      ],
      "link": "https://www.wmpllc.org/ojs-2.4.2/index.php/jem/article/view/1539",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._04_EVACUATION]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Kurland, J.",
      "year": 2019,
      "desc": [
        "Arena-based events and crime: An analysis of hourly robbery data. Applied Economics, 51(36), 3947-3957.",
      ],
      "link": "https://ideas.repec.org/a/taf/applec/v51y2019i36p3947-3957.html",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": ["Ristea, A.", "Kurland, J."],
      "authors": "Ristea, A., Kurland, J., Resch, B., Leitner, M., & Langford, C.",
      "year": 2018,
      "desc": [
        "Estimating the spatial distribution of crime events around a football stadium for georeferenced tweets. ISPRS International Journal of Geo-Information, 7(2), 43.",
      ],
      "link": "https://www.mdpi.com/2220-9964/7/2/43",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Kurland, J., Tilley, N., & Johnson, S. D.",
      "year": 2018,
      "desc": [
        "Football pollution: an investigation of spatial and temporal patterns of crime in and around stadia in England. Security Journal, 31(3), 665-684.",
      ],
      "link": "https://link.springer.com/article/10.1057/s41284-017-0123-0",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Kurland, J. & Piza, E.",
      "year": 2018,
      "desc": [
        "The Devil You Don’t Know: A spatial analysis of crime at Newark’s Prudential Center on hockey game days. Journal of Sport Safety and Security. 3(1), 1.",
      ],
      "link": "https://aquila.usm.edu/jsss/vol3/iss1/1/",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Kurland, J. & Chen, P.",
      "year": 2017,
      "desc": [
        "Evolution of a Riot: An agent-based model of contagion during public demonstrations. Oriental Journal of Computer Science and Technology. 9(3).",
      ],
      "link": "http://www.computerscijournal.org/vol9no3/simulating-civil-disorderanagent-based-modeling-approach/",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Kurland, J., Johnson, S.D., & Tilley, N.",
      "year": 2017,
      "desc": [
        "\"Hotspotting and Football Violence: Current Statistics and Implications for Prevention.\" In Sturmey, P. (Ed.), The Wiley Handbook of Violence and Aggression, Volume 3. Societal Interventions. John Wiley & Sons.",
      ],
      "link": "https://onlinelibrary.wiley.com/doi/abs/10.1002/9781119057574.whbva112",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Hall, S., Allen, B., & Phillips, D.",
      "year": 2016,
      "desc": [
        "Continuity of operations planning in college athletic programs: The case for incorporating FEMA guidelines. Journal of Emergency Management, 14(1), 71-77.",
      ],
      "link": "https://europepmc.org/abstract/med/26963231",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Filce, R., Hall, S., & Phillips, D.",
      "year": 2016,
      "desc": [
        "Stadium alcohol management: A best practices approach. International Journal of Sport Management, Recreation, and Tourism, 21(c), 48-65.",
      ],
      "link": "http://www.ijsmart.eu/onlinepic/vol21_c_Stacey%20A.%20Hall.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._08_ALCOHOL, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Schwarz, E. C., Hall, S., & Shibli, S.",
      "year": 2015,
      "desc": [
        "Sport Facility Operations Management: A Global Perspective. (2nd ed.). London and New York: Routledge, Taylor & Francis Group.",
      ],
      "link": "https://www.taylorfrancis.com/books/9781315736815",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._04_EVACUATION, $scope.tags._05_CROWD_DISORDER, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Allen, B., Hall, S., & Phillips, D.",
      "year": 2015,
      "desc": [
        "Continuity of operations planning (COOP) preparedness of NCAA Division I athletic departments. International Journal of Sport Management, 16(1), 1-15.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Hall, S. ",
      "year": 2016,
      "desc": [
        "Crisis Management. In Byers, T. & Gorse, S. (Eds.). Contemporary Issues in Sport Management: A Critical Introduction. London, UK: Sage Publications.",
      ],
      "link": "https://books.google.com/books?hl=en&lr=&id=rCSJCwAAQBAJ&oi=fnd&pg=PP1&dq=Hall,+S.+(2015).+Crisis+Management.+In+Byers,+T.+%26+Gorse,+S.+(Eds.).+Contemporary+Issues+in+Sport+Management:+A+Critical+Introduction.+London,+UK:+Sage+Publications.&ots=hGmuqrtaTp&sig=Yb6piFLKn28q961DqQPXg-tiLeo#v=onepage&q&f=false",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._04_EVACUATION, $scope.tags._05_CROWD_DISORDER, $scope.tags._09_BEST_PRACTICES, $scope.tags._10_EMERGENCY_COMMUNICATIONS]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Hall, S.",
      "year": 2015,
      "desc": [
        "Crisis Communications: Best Practices for Sport Safety and Security Teams. The International Centre for Sports Security Journal, 3(2), 25-29.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, , $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": ["Hall, S.", "Marciani, L."],
      "authors": "Hall, S., Cooper, W.E., Marciani, L., & Cieslak, T. J.",
      "year": 2014,
      "desc": [
        "Assessing the effectiveness of a national sport event risk management training program for college command groups: A pilot study. International Journal of Sport Management, 15(1), 118-128.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": ["Hall, S.", "Marciani, L."],
      "authors": "Hall, S., Cooper, W.E., Marciani, L., & McGee, J.A.",
      "year": 2014,
      "desc": [
        "Security Management for Sports and Special Events – An Interagency Approach. Korean Language Edition: Green Publishing Company and Human Kinetics.",
      ],
      "link": "https://books.google.com/books?hl=en&lr=&id=zO96DwAAQBAJ&oi=fnd&pg=PT11&dq=Security+Management+for+Sports+and+Special+Events+%E2%80%93+An+Interagency+Approach.+Korean+Language+Edition:+Green+Publishing+Company+and+Human+Kinetics.&ots=BGEloO7VBi&sig=v7_Zsv0PvYFytEo97618b2sLCGM#v=onepage&q&f=false",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._04_EVACUATION, $scope.tags._05_CROWD_DISORDER, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._08_ALCOHOL, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Kurland, J., Johnson, S. D., & Tilley, N.",
      "year": 2014,
      "desc": [
        "Offenses around Stadiums: A Natural Experiment on Crime Attraction and Generation. Journal of Research in Crime and Delinquency. 51(1), 5–28.",
      ],
      "link": "https://journals.sagepub.com/doi/full/10.1177/0022427812471349",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Kurland, J., Tilley, N., & Johnson, S.D.",
      "year": 2014,
      "desc": [
        "“A Football Hotspot Matrix: A Framework for Targeting of Football-related Crime and Disorder” in M. Hopkins & J. Treadwell (Eds.), Football Hooliganism, Crime and Crowd Management: Contemporary perspectives. Palgrave MacMillan.",
      ],
      "link": "https://books.google.com/books?hl=en&lr=&id=85mxAwAAQBAJ&oi=fnd&pg=PP1&dq=A+Football+Hotspot+Matrix:+A+Framework+for+Targeting+of+Football-related+Crime+and+Disorder+in+M.+Hopkins+%26+J.+Treadwell+(Eds.),+Football+Hooliganism,+Crime+and+Crowd+Management:+Contemporary+perspectives.+Palgrave+MacMillan.&ots=yTtCLitUub&sig=GjT5s9Cm-Yk3PuxHV8DggCKjwMs#v=onepage&q&f=false",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Hall, S.",
      "year": 2013,
      "desc": [
        "Development of a national risk management training program for college sport event security command groups. Journal of Emergency Management, 11(4), 313-320.",
      ],
      "link": "https://europepmc.org/abstract/med/24303775",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "McGee, J.A., Mey, R., & Hall, S.",
      "year": 2013,
      "desc": [
        "Securing Venues of Mass Gatherings. The Journal of the Global Homeland Security Education Network,Issue 2.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Hall, S.,Byon, K., & Baker, T.",
      "year": 2013,
      "desc": [
        "Managing the threat of terrorism in sport: A Performance and Importance Analysis (IPA) of safety and security preparedness for NCAA sport facilities. International Journal of Sport Management,14(4), 1-23.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Cieslak, T. J., & Hall, S.",
      "year": 2013,
      "desc": [
        "Standardization of match day security for Australian football stadia. International Journal of Sport Management, 14(2), 1-16.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Hall, S.",
      "year": 2013,
      "desc": [
        "Training Needs of Sport and Event Organizations. The International Centre for Sports Security Journal. September Issue, 2013.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": ["Hall, S.", "Marciani, L."],
      "authors": "Hall, S., Cooper, W.E., Marciani, L., & McGee, J.A.",
      "year": 2012,
      "desc": [
        "Security Management for Sports and Special Events – An Interagency Approach. Champaign, IL: Human Kinetics.",
      ],
      "link": "https://books.google.com/books?hl=en&lr=&id=zO96DwAAQBAJ&oi=fnd&pg=PT11&dq=Security+Management+for+Sports+and+Special+Events+%E2%80%93+An+Interagency+Approach.+Champaign,+IL:+Human+Kinetics.&ots=BGEloO8VEj&sig=OvMje3TZ3cWfW-hFwytRGO_7QLA#v=onepage&q&f=false",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._04_EVACUATION, $scope.tags._05_CROWD_DISORDER, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._08_ALCOHOL, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Hall, S.",
      "year": 2012,
      "desc": [
        "Training and Education in Sport Safety and Security. Security Magazine, p.54-55.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Hall, S.",
      "year": 2012,
      "desc": [
        "The Emerging Field of Sport Safety and Security Management. Homeland Security Education Guide.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Hall, S.",
      "year": 2011,
      "desc": [
        "Control for Safety of Fans/Athletes/Volunteers. In L.E. Swayne & J.G. Golson (Eds.), Encyclopedia of Sports Management and Marketing. Thousand Oaks, CA: SAGE Publications Inc.",
      ],
      "link": "https://books.google.com/books?hl=en&lr=&id=TjDiwwaN5VsC&oi=fnd&pg=PR5&dq=Encyclopedia+of+Sports+Management+and+Marketing&ots=x5ncPVjOe2&sig=qFlyCVQCtuEjNZaJ6p5kl_q4S3s#v=onepage&q&f=false",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._05_CROWD_DISORDER, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Hall, S.",
      "year": 2011,
      "desc": [
        "Crowd Management and Security. Security Magazine,p.18.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER]
    },
    {
      "nauthors": "Zale, J.",
      "authors": "Zale, J. & Kar, B.",
      "year": 2012,
      "desc": [
        "A GIS-based football stadium evacuation model. Southeastern Geographer. 52(1): 70-89.",
      ],
      "link": "https://www.jstor.org/stable/26228996?seq=1#page_scan_tab_contents",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._04_EVACUATION]
    },
    {
      "nauthors": ["Hall, S.", "Marciani, L."],
      "authors": "Hall, S., Fos, P., Marciani, L., & Zhang, L.",
      "year": 2011,
      "desc": [
        "Multiple criteria decision making (MCDM) application in evaluating protective security measures for major sport events. International Journal of Sport Management, 12(2), 191-207.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._03_STAKEHOLDER_PERCEPTION, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Hamilton-Smith, N., Bradford, B., Hopkins, M., Kurland, J., Lightowler, C., McArdle, D., & Tilley, N.",
      "year": 2011,
      "desc": [
        "Final Report: An Evaluation of Football Banning Orders in Scotland. Scottish Government Social Research.",
      ],
      "link": "https://www.researchgate.net/profile/Justin_Kurland/publication/309911644_An_Evaluation_of_Football_Banning_Orders_in_Scotland/links/58262e1208ae950ace6a802a/An-Evaluation-of-Football-Banning-Orders-in-Scotland.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._04_EVACUATION]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Kurland, J., Johnson, S.D., & Tilley, N.",
      "year": 2011,
      "desc": [
        "An analysis of the Spatio-temporal ‘footprint’ in and around Aston Villa FC (Villa Park). Association of Chief Police Officers.",
      ],
      "link": "https://www.researchgate.net/profile/Justin_Kurland/publication/310318308_An_analysis_of_the_Spatio-temporal_'footprint'_of_crime_in_and_around_Aston_Villa_FC_Villa_Park/links/582b443b08aef19cb806b1d5/An-analysis-of-the-Spatio-temporal-footprint-of-crime-in-and-around-Aston-Villa-FC-Villa-Park.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Kurland, J., Johnson, S.D., & Tilley, N.",
      "year": 2011,
      "desc": [
        "An analysis of the Spatio-temporal ‘footprint’ in and around Sheffield Wednesday (Hillsborough). Association of Chief Police Officers.",
      ],
      "link": "https://nam05.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.researchgate.net%2Fpublication%2F310322119_An_analysis_of_the_Spatio-temporal_%27footprint%27_of_crime_in_and_around_Sheffield_Wednesday_FC_Hillsborough&data=02%7C01%7C%7C5302bd69a00340db6c9d08d7142c22b8%7C7f3da4be2722432ebfa764080d1eb1dc%7C0%7C0%7C637000052109478637&sdata=u1rULGlptp5N8WheqfPXP7YmHbGapapprn730og9L8U%3D&reserved=0",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES, , $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Kurland, J., Johnson, S.D., & Tilley, N.",
      "year": 2011,
      "desc": [
        "An analysis of the Spatio-temporal ‘footprint’ in and around Sheffield United (Bramall Lane). Association of Chief Police Officers.",
      ],
      "link": "https://www.researchgate.net/profile/Justin_Kurland/publication/310321041_An_analysis_of_the_Spatio-temporal_%27footprint%27_of_crime_in_and_around_Sheffield_United_FC_Bramall_Lane/links/582b528b08aef19cb806b4e0/An-analysis-of-the-Spatio-temporal-footprint-of-crime-in-and-around-Sheffield-United-FC-Bramall-Lane.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Kurland, J., Johnson, S.D., & Tilley, N.",
      "year": 2011,
      "desc": [
        "An analysis of the Spatio-temporal ‘footprint’ in and around Leeds United (Elland Road). Association of Chief Police Officers.",
      ],
      "link": "https://www.researchgate.net/publication/310319529_An_analysis_of_Spatio-temporal_'footprint'_of_crime_in_and_around_Leeds_United_FC_Elland_Road",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Kurland, J., Johnson, S.D., & Tilley, N.",
      "year": 2011,
      "desc": [
        "An analysis of the Spatio-temporal ‘footprint’ in and around Wolverhampton (Molineux). Association of Chief Police Officers.",
      ],
      "link": "https://www.researchgate.net/profile/Justin_Kurland/publication/310322578_An_analysis_of_the_Spatio-temporal_%27footprint%27_of_crime_in_and_around_Wolverhampton_Wanderers_FC_Molineux_Stadium/links/582b5c8e08ae138f1bf4a717/An-analysis-of-the-Spatio-temporal-footprint-of-crime-in-and-around-Wolverhampton-Wanderers-FC-Molineux-Stadium.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Kurland, J. & Kautt, P.",
      "year": 2011,
      "desc": [
        "“The Event Effect: Demonstrating the Impact of Denominator Selection on ‘Floor’ and ‘Ceiling’ Crime Rate Estimates in the Context of Public Events” in A.D. Morina (Ed.), Crime Rates, Types and Hot Spots. Nova Science Publishers. Hauppauge, NY.",
      ],
      "link": "http://discovery.ucl.ac.uk/1322278/",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Hall, S.",
      "year": 2010,
      "desc": [
        "Sport Event Safety and Security: The Importance of Training Your People. Security Magazine, 66-70.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": ["Hall, S.", "Marciani, L."],
      "authors": "Hall, S., Marciani, L., Cooper, W.E, & Phillips, J.",
      "year": 2010,
      "desc": [
        "Needs, concerns, and future challenges in security management of NCAA Division I football events: An intercollegiate facility management perspective. Journal of Venue and Event Management, 1(2), 1-16.",
      ],
      "link": "https://www.sc.edu/study/colleges_schools/hrsm/research/journal_venue_and_event_management_archives/jvem_pdfs/vol1_no2/security_management_ncaa_d1.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Hall, S.",
      "year": 2010,
      "desc": [
        "An Examination of British Sport Security Strategies, Legislation, and Risk Management Practices: Lessons Learned from the English Football League. The Sport Journal, 13(2), 1-7.",
      ],
      "link": "https://go.galegroup.com/ps/anonymous?id=GALE%7CA227012839&sid=googleScholar&v=2.1&it=r&linkaccess=abs&issn=15439518&p=AONE&sw=w",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._05_CROWD_DISORDER, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": ["Hall, S.", "Marciani, L."],
      "authors": "Hall, S., Cieslak, T., Marciani, L., Cooper, W.E., & McGee, J.A.",
      "year": 2010,
      "desc": [
        "Protective security measures for major sport events: A baseline standard. Journal of Emergency Management, 8(1), 47-55.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._03_STAKEHOLDER_PERCEPTION, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Hamilton-Smith, N., Bradford, B., Hopkins, M., Kurland, J., Lightowler, C., McArdle, D., Tilley, N.",
      "year": 2010,
      "desc": [
        "Interim Report: An Evaluation of Football Banning Orders in Scotland. Scottish Government Social Research.",
      ],
      "link": "https://www.researchgate.net/profile/Justin_Kurland/publication/309911644_An_Evaluation_of_Football_Banning_Orders_in_Scotland/links/58262e1208ae950ace6a802a/An-Evaluation-of-Football-Banning-Orders-in-Scotland.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Marciani, L.",
      "authors": "Marciani, L.",
      "year": 2010,
      "desc": [
        "Choosing a Sport Security Firm: What You Need to Know.  Sports Destination Management. May/June, 2010, pages 10-14.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._02_FAN_PERCEPTION, $scope.tags._03_STAKEHOLDER_PERCEPTION, $scope.tags._05_CROWD_DISORDER]
    },
    {
      "nauthors": "Kurland, J.",
      "authors": "Kurland, J., Johnson, S.D., & Tilley, N.",
      "year": 2010,
      "desc": [
        "Late weekend kick-offs at premier football matches and their possible link to increased levels of alcohol-related ASB and disorder. Government Office for London.",
      ],
      "link": "https://www.researchgate.net/profile/Shane_Johnson5/publication/265083827_Late_weekend_kick-offs_at_premier_football_matches_and_their_possible_link_to_increased_levels_of_alcohol-related_ASB_and_disorder/links/543fadbe0cf2be1758ced83e.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES, $scope.tags._08_ALCOHOL]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Schwarz, E. C., & Hall, S., & Shibli, S.",
      "year": 2010,
      "desc": [
        "Sport Facility Operations Management: A Global Perspective. Oxford, United Kingdom: Butterworth-Heinemann Business Books.",
      ],
      "link": "https://www.taylorfrancis.com/books/9781856178372",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._04_EVACUATION, $scope.tags._05_CROWD_DISORDER, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Zale, J.",
      "authors": "Zale, J.",
      "year": 2009,
      "desc": [
        "Review of The Flaw of Averages by Sam Savage. Risk Analysis, 29(12), 1807-1808.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": ["Hall, S.", "Marciani, L."],
      "authors": "Hall, S., Cooper, W.E., Marciani, L., & McGee, J.A.",
      "year": 2009,
      "desc": [
        "Protecting U.S. Sports Facilities in the 21st Century: The Sport Event Security Aware System. Security Analysis and Risk Management Association (SARMA) Newsletter.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": ["Hall, S.", "Marciani, L."], // CHECK WITH JUSTIN
      "authors": "Marciani, L., Hall, S., & Finch, B.",
      "year": 2009,
      "desc": [
        "Intercollegiate Athletics Safety and Security – Concerns and Responsibilities in the Post 9/11 Environment. Athletics Administration, Volume 44, No. 2, p. 14-17.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Marciani, L.",
      "authors": "Marciani, L.",
      "year": 2009,
      "desc": [
        "10 Safety and Security Considerations the Right Holder Needs To Consider When Bidding a Sports Event. Sports Destination Management. March/April, 2009, pages 10-16.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._02_FAN_PERCEPTION, $scope.tags._03_STAKEHOLDER_PERCEPTION, $scope.tags._05_CROWD_DISORDER, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._09_BEST_PRACTICES, $scope.tags._10_EMERGENCY_COMMUNICATIONS, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Marciani, L.",
      "authors": "Marciani, L.",
      "year": 2009,
      "desc": [
        "Stadium and Arena Security. Security Technology Executive. Vol 19, No.2, February, 2009, pages 30-33.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._02_FAN_PERCEPTION, $scope.tags._04_EVACUATION, $scope.tags._05_CROWD_DISORDER, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": ["Hall, S.", "Marciani, L."],
      "authors": "Hall, S., Marciani, L., Phillips, D., & Cunningham, T.",
      "year": 2009,
      "desc": [
        "Spectator perceptions of security management at a National Association for Stock Car Auto Racing (NASCAR) event. The Sport Journal, (12) 1, p. 1-7.",
      ],
      "link": "https://go.galegroup.com/ps/anonymous?id=GALE%7CA210520261&sid=googleScholar&v=2.1&it=r&linkaccess=abs&issn=15439518&p=HRCA&sw=w",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": ["Hall, S.", "Marciani, L."],
      "authors": "Hall, S., Marciani, L., & Cooper, W.E.",
      "year": 2008,
      "desc": [
        "Sport venue security: Planning and preparedness for terrorist-related incidents. Sport Management and Related Topics Journal, Vol. 4, Issue 2, 6-15.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Hall, S., Ward, R, Cunningham, T, & Marciani, L.",
      "year": 2008,
      "desc": [
        "Developing a new curriculum in sport security management. Journal of Homeland Security and Emergency Management, Volume 5, Issue 1, Article 16.",
      ],
      "link": "https://www.degruyter.com/view/j/jhsem.2008.5.1/jhsem.2008.5.1.1439/jhsem.2008.5.1.1439.xml",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": ["Hall, S.", "Marciani, L."],
      "authors": "Hall, S., Marciani, L., & Cooper, W.E.",
      "year": 2008,
      "desc": [
        "Emergency management and planning at major sports events. Journal of Emergency Management. January/February 2008, Vol. 6, No.1",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": ["Hall, S.", "Marciani, L."],
      "authors": "Hall, S., Marciani, L., & Cooper, W.E, & Rolen, R.",
      "year": 2007,
      "desc": [
        "Securing sport stadiums in the 21st century: Think security, enhance safety. Homeland Security Institute: Journal of Homeland Security",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": ["Hall, S.", "Marciani, L."],
      "authors": "Hall, S., Marciani, L., Cooper, W.E., & Rolen, R.",
      "year": 2007,
      "desc": [
        "Introducing a risk assessment model for sport venues. The Sport Journal, (10) 2.",
      ],
      "link": "https://go.galegroup.com/ps/anonymous?id=GALE%7CA170414845&sid=googleScholar&v=2.1&it=r&linkaccess=abs&issn=15439518&p=HRCA&sw=w",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": ["Marciani, L.", "Hall, S."],
      "authors": "Marciani, L., & Hall, S.",
      "year": 2007,
      "desc": [
        "Securing your sport venues: Systems design for effective sports event security management. Athletic Management, Vol. XIX, No. 5, p. 65-71.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._09_BEST_PRACTICES, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Hall, S.",
      "authors": "Hall, S.",
      "year": 2006,
      "desc": [
        "Effective security management of university sport venues. The Sport Journal, (9) 4.",
      ],
      "link": "https://www.cabdirect.org/cabdirect/abstract/20073141280",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Marciani, L.",
      "authors": "Marciani, Lou, and Bernard, Bob.",
      "year": 2006,
      "desc": [
        "University Security Management: The Risk is Real. The Timing is Critical. Athletics Administration. Volume 41, Number 6, December 2006, pp.28-30.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J., Pauline, G., & Donahue, P.",
      "year": 2017,
      "desc": [
        "An investigation of safety training for triathlon events: Are volunteers prepared for emergencies? Journal of Contemporary Athletics, 11(2)."
      ],
      "link": "https://www.questia.com/library/journal/1P4-1929049827/an-investigation-of-safety-training-for-triathlon",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J.",
      "year": 2017,
      "desc": [
        "Safety and security. In Petersen, J., Judge, L., & Miller, J. (Eds.), Facility & Event Management: Applications in Sport Settings."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J.",
      "year": 2017,
      "desc": [
        "Unintentional torts. In J. Miller & K. Schoepfer (Eds.), Legal Aspects of Sport. Burlington, MA: Jones & Bartlett Learning."
      ],
      "link": "http://samples.jblearning.com/9781284072471/9781284078701_FMxx.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J.",
      "year": 2017,
      "desc": [
        "Risk management. In J. Miller & K. Schoepfer (Eds.), Legal Aspects of Sport. Burlington, MA: Jones & Bartlett Learning."
      ],
      "link": "http://samples.jblearning.com/9781284072471/9781284078701_FMxx.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J.",
      "year": 2012,
      "desc": [
        "Security issues at sports events. In H. Appenzeller (Ed.), 3rd edition Risk management in sport: Issues and strategies. Carolina Academic Press Publishers: Raleigh, N.C."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J. & Wendt, J.",
      "year": 2010,
      "desc": [
        "Safety and negligence internship issues. In A Practical Guide to Sport Management Internships (Miller, J. & Seidler, T., Eds.). Carolina Academic Press."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J.",
      "year": 2010,
      "desc": [
        "Managing internship risks: Avoidance and retention issues. In A Practical Guide to Sport Management Internships (Miller, J. & Seidler, T., Eds.). Carolina Academic Press."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J. & Wendt, J.",
      "year": 2010,
      "desc": [
        "Managing internship risks: Insurance issues. In A Practical Guide to Sport Management Internships (Miller, J. & Seidler, T., Eds.). Carolina Academic Press."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J., Martin, C. L. L., & Spurlock, A.",
      "year": 2016,
      "desc": [
        "Cheerleading as a sport? Perceptions of intercollegiate athletic directors. International Journal of Sport Management, 17(2), 294-313."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J. & Dunn, A.",
      "year": 2011,
      "desc": [
        "Perceptions of terrorist threat: Implications for intercollegiate basketball venue managers. Journal of Event and Venue Management, 3(1), 2-10."
      ],
      "link": "https://www.sc.edu/study/colleges_schools/hrsm/research/journal_venue_and_event_management_archives/jvem_pdfs/vol3_no1/perceptions_terrorist_threat.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J.",
      "year": 2014,
      "desc": [
        "When fans rush the court: How do basketball venue managers handle it? Journal of Facility Planning, Design, and Management, 2(1), 11-24."
      ],
      "link": "http://lequezspearman.com/wp-content/uploads/2014/03/JFPDM_2014_1-6.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J., Veltri, F. & Gillentine, A.",
      "year": 2008,
      "desc": [
        "Spectator perception of security at the Super Bowl after 9/11: Implications for facility managers. Sport Management and Related Topics Journal, 4(2), 16-25."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J., Wendt, J. T., & Seidler, T.",
      "year": 2008,
      "desc": [
        "Tackling steroid abuse in interscholastic athletics: Perceptions of athletic directors. International Journal of Sport Management, 9(2), 117-133."
      ],
      "link": "http://www.srlawebsite.com/wp-content/uploads/2012/06/Dr.-John-Miller-Ph.D.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J., Gillentine, A. & Veltri, F.",
      "year": 2008,
      "desc": [
        "Risk management strategies at Division I intercollegiate football stadiums: Do spectators perceive they are protected against terrorism? Journal of Contemporary Athletics, 3(1), 65-80."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J., Gillentine, A. & Veltri, F.",
      "year": 2005,
      "desc": [
        "Student perspectives of university intramural sport risk management. Recreation Sports Journal, 29(1), 23-33."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Hart, E. & Miller, J.",
      "year": 2014,
      "desc": [
        "Planning life safety I. IAVM Monographs Topics dealt with Emergency Planning, Importance of Emergency Planning, Development of an emergency plan, Human-Induced Terrorism Emergencies, Active Shooter, Bomb Threat, Fire, Mechanical/Equipment Failure, Severe Weather, Regulatory Components/Issues, Human Components/Issues, Venue Components/Issues, Business Components/Issues, Venue Preparedness, Staff Risk and Security Training, Venue as a Place of Refuge."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._04_EVACUATION, $scope.tags._10_EMERGENCY_COMMUNICATIONS]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Hart, E. & Miller, J.",
      "year": 2014,
      "desc": [
        "Planning life safety II. IAVM Monographs. Topics included Life (Fire) Safety, Alternative Life Safety Measures, Self- Evacuation, Closed Circuit Television (CCTV), Assembly Occupancy, Aisle Accessway, Festival Seating, Flow Time, Life Safety Evaluation, Occupant Load Considerations, Access and Egress Routes within Assembly."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._04_EVACUATION, $scope.tags._10_EMERGENCY_COMMUNICATIONS]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J., Vogt, S., Scroggins, C., & Gillentine, A.",
      "year": 2019,
      "desc": [
        "A content analysis of tailgating alcohol policies at NCAA Division I football games. International Journal of Sport Management, 20, 1-16."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._08_ALCOHOL, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Gillentine, A., Miller, J., Grady, J., & Pettus, K.",
      "year": 2016,
      "desc": [
        "An examination of ADA requirements and implications associated with tailgating activities. Journal of Legal Aspects of Sport, 26(1), 52-65."
      ],
      "link": "https://www.researchgate.net/publication/290221454_Accessible_Tailgating_An_Examination_of_ADA_Requirements_and_Implications_Associated_With_Tailgating_Activities",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Pauline, G., Osborne, B., & Miller, J.",
      "year": 2016,
      "desc": [
        "Do entry form waivers properly inform triathlon participants of the dangers of the sport? Journal of Legal Aspects of Sport, 26(2), 106-126."
      ],
      "link": "http://journals.iupui.edu/index.php/jlas/article/view/22227",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._11_RISK_MANAGEMENT]
    },

    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J. & Ammon, R.",
      "year": 2014,
      "desc": [
        "Concussion management in interscholastic football: A state study. Journal of Contemporary Athletics, 8(3), 141-152."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J., Pauline, G. & Wendt, J. T.",
      "year": 2013,
      "desc": [
        "An investigation of risk management protocols at triathlon events. Journal of Event and Venue Management, 4(2), 16- 33."
      ],
      "link": "https://pdfs.semanticscholar.org/d849/eed0a3cb51cebbb4206dadc6b8d55e3f68d6.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Wendt, J. T. & Miller, J.",
      "year": 2012,
      "desc": [
        "Tragedy at Fujairah: Risk management issues at open-water swimming events. University of Denver Sports and Entertainment Law Journal."
      ],
      "link": "https://www.law.du.edu/documents/sports-and-entertainment-law-journal/issues/12/Wendt-Miller-Tragedy-at-Fujai.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._10_EMERGENCY_COMMUNICATIONS, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J. & Wendt, J. T.",
      "year": 2012,
      "desc": [
        "Heat-related illness in interscholastic football: What coaches and athletic administrators need to understand. Journal of Contemporary Athletics, 6(2), 113-132."
      ],
      "link": "http://www.novapublishers.org/catalog/product_info.php?products_id=30941",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._10_EMERGENCY_COMMUNICATIONS, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J., Wendt, J. T., & Young, P. C.",
      "year": 2010,
      "desc": [
        "Fourth Amendment considerations and application of risk management principles for pat-down searches at professional football games. Journal of Legal Aspects of Sport, 20(2), 108-134."
      ],
      "link": "https://books.google.com/books?id=nE7xDQAAQBAJ&lpg=PA88&ots=7AU5grVjba&dq=Fourth%20Amendment%20considerations%20and%20application%20of%20risk%20management%20principles%20for%20pat-down%20searches%20at%20professional%20football%20games.%20Journal%20of%20Legal%20Aspects%20of%20Sport%2C%2020(2)%2C%20108-134.&pg=PA64#v=onepage&q&f=false",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J., Young, S., & Martin. N.",
      "year": 2009,
      "desc": [
        "To use or not to use? The status of waivers in intramural sports. Recreational Sports Journal, 33(2), 129-138."
      ],
      "link": "https://journals.sagepub.com/doi/abs/10.1123/rsj.33.2.129?journalCode=rsja",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J. & Gillentine, A.",
      "year": 2006,
      "desc": [
        "An analysis of risk management policies for tailgating activities at selected NCAA Division I football games. Journal of the Legal Aspects of Sport, 16(2), 197-215."
      ],
      "link": "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.511.2573&rep=rep1&type=pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._08_ALCOHOL, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J. & Rushing, G.",
      "year": 2002,
      "desc": [
        "Risk management practices of university physical activity supervisors. Journal of Legal Aspects of Sport, 12(2), 117-131."
      ],
      "link": "https://books.google.com/books?id=nE7xDQAAQBAJ&lpg=PA88&ots=7AU5grVke9&dq=Risk%20management%20practices%20of%20university%20physical%20activity%20supervisors.%20Journal%20of%20Legal%20Aspects%20of%20Sport%2C%2012(2)%2C%20117-131.&pg=PA88#v=onepage&q&f=false",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J. & Madison, L.",
      "year": 2017,
      "desc": [
        "Alcohol management. In Petersen, J., Judge, L., & Miller, J. (Eds.), Facility & Event Management: Applications in Sport Settings."
      ],
      "link": "https://he.kendallhunt.com/product/facility-and-event-management-applications-sport",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._08_ALCOHOL]
    },

    {
      "nauthors": "Miller, J.",
      "authors": "Gillentine, A., Miller, J. & Crow, B.",
      "year": 2010,
      "desc": [
        "Developing a “Best Practice” sport model for tailgating events. Journal of Event and Venue Management, 2(2), 54-68."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._08_ALCOHOL, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Gillentine, A. & Miller, J.",
      "year": 2006,
      "desc": [
        "Legal implications of tailgating. International Journal of Sport Management, 7, 100-109."
      ],
      "link": "https://www.nccpsafety.org/assets/files/library/Components_of_Best_Practice_Model_for_Tailgating.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._08_ALCOHOL, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J. & Wendt, J. T.",
      "year": 2012,
      "desc": [
        "The lack of risk communication at an elite sports event: A case study of the FINA 10 K marathon swimming World Cup. International Journal of Sport Communication, 5, 265-278."
      ],
      "link": "https://journals.humankinetics.com/view/journals/ijsc/5/2/article-p265.xml",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._10_EMERGENCY_COMMUNICATIONS, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Wendt, J. & Miller, J.",
      "year": 2015,
      "desc": [
        "“Ref, is this the final?” Concussion issues at the 2014 FIFA Men’s World Cup: A case study. Journal of Legal Aspects of Sport, 25(1), 1-9."
      ],
      "link": "https://www.researchgate.net/publication/276380341_Ref_Is_This_the_Final_Concussion_Issues_at_the_2014_FIFA_Men's_World_Cup_A_Case_Study",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Vogt, S., Mersch, J., & Miller, J.",
      "year": 2015,
      "desc": [
        "Assuming the risks in baseball practices. Journal for Facility Planning, Design, and Management, 3(1), 28-32."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J. & Wendt, J.",
      "year": 2014,
      "desc": [
        "The concussion crisis in the National Hockey League. Journal of Contemporary Athletics, 9(1), 33-48"
      ],
      "link": "https://ir.stthomas.edu/cgi/viewcontent.cgi?article=1051&context=ocbeblpub",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J.",
      "year": 2012,
      "desc": [
        "Concussion issues in interscholastic football. Safety Notebook, 17(2), 1-7. Safety & Risk Management Council of the American Association for Physical Activity and Recreation."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J. J., Wendt, J. T., & Potter, N.",
      "year": 2011,
      "desc": [
        "Implications for concussion assessments and return-to-play standards in intercollegiate football: How are the risks managed? Journal of Sport Administration & Supervision, 3(1), 91-103."
      ],
      "link": "https://quod.lib.umich.edu/j/jsas/6776111.0003.116/--implications-for-concussion-assessments-and-return-to-play?rgn=main;view=fulltext",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Podlog, L., Dimmock, J., & Miller, J.",
      "year": 2011,
      "desc": [
        "A review of return to sport concerns following injury rehabilitation: Practitioner strategies for enhancing recovery outcomes. Physical Therapy in Sport, 12(1), 36-42."
      ],
      "link": "https://www.ncbi.nlm.nih.gov/pubmed/21256448",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J., Wendt, J.T., & Kern, S.",
      "year": 2008,
      "desc": [
        "Steroid use in interscholastic athletics: Is there reasonable suspicion? Journal of Contemporary Athletics, 3(2), 111-128"
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J., Veltri, F., & Phillips, D",
      "year": 2007,
      "desc": [
        "Preparing against a terrorist attack: The application of risk management at intercollegiate football stadiums. Journal of Contemporary Athletics, 2(3), 253-271"
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Rushing, G. & Miller, J.",
      "year": 2007,
      "desc": [
        "Event risk management. In Facilities Planning for Health, Fitness, Physical Activity, and Sports: Concepts and Applications, 12th ed. Sawyer, T.H. (Ed.). Champaign, IL: Sagamore Publishing"
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J. & Veltri, F.",
      "year": 2003,
      "desc": [
        "Security issues in public recreation centers. Journal of Legal Aspects of Sport, 13(3), 265-288."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Miller, J.",
      "authors": "Miller, J. & Veltri, F.",
      "year": 2001,
      "desc": [
        "Campus recreation centers: An examination of security issues. Journal of Legal Aspects of Sport, 11(2), 169-180."
      ],
      "link": "https://journals.iupui.edu/index.php/jlas/article/view/22020/21177",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Menaker, B.",
      "authors": "Menaker, B. E., McGranahan, D. A., & Sheptak Jr., R. D.",
      "year": 2019,
      "desc": [
        " \"Game Day Alters Crime Pattern in the Vicinity of Sport Venues in Cleveland, OH,\" Journal of Sport Safety and Security, 4 (1), Article 1."
      ],
      "link": "http://aquila.usm.edu/jsss/vol4/iss1/1",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Menaker, B.",
      "authors": "Menaker, B. E. & Sheptak Jr, R. D.",
      "year": 2019,
      "desc": [
        "The impact of game day on crime on a university police department: application of the civilizing process to sport-related law enforcement, Journal of Policy Research in Tourism, Leisure and Events"
      ],
      "link": "https://www.tandfonline.com/doi/full/10.1080/19407963.2018.1556675",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Menaker, B.",
      "authors": "Menaker, B. E., Sheptak Jr, R. D., & Curtis, A. K.",
      "year": 2018,
      "desc": [
        "Revelry or Riot? An exploratory study of internet media coverage of sport championship celebrations. Sport Journal, 19."
      ],
      "link": "http://thesportjournal.org/article/revelry-or-riot-an-exploratory-study-of-internet-media-coverage-of-sport-championship-celebrations/",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER]
    },
    {
      "nauthors": "Menaker, B.",
      "authors": "Menaker, B. E., Barry, A. E., & Howell, S. M.",
      "year": 2018,
      "desc": [
        "Identifying the influence of opponent ranking and game characteristics on alcohol-related stadium ejections. The Journal of Primary Prevention, 39(2), 117-128."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._08_ALCOHOL]
    },
    {
      "nauthors": "Menaker, B.",
      "authors": "Menaker, B. E., Chaney, B. H., & Sheptak Jr, R. D.",
      "year": 2016,
      "desc": [
        "Administrative perspectives of stadium alcohol policy: Alcohol-related public safety measures in college football stadia, Journal of Sport Safety and Security, 1(1) Article 1."
      ],
      "link": "https://aquila.usm.edu/jsss/vol1/iss1/1/",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._08_ALCOHOL]
    },
    {
      "nauthors": "Menaker, B.",
      "authors": "Menaker, B. E. & Chaney, E. H.",
      "year": 2014,
      "desc": [
        "College football game day stadium incidents: Policy and environmental effects on alcohol-related ejections and crime. Journal of Policy Research in Tourism, Leisure and Events. 6(2), 119-132"
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._08_ALCOHOL, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Menaker, B.",
      "authors": "Menaker, B.E. & Connaughton, D.P.",
      "year": 2010,
      "desc": [
        "Stadium alcohol policies: A comparison of alcohol policies available on college athletic department websites. International Journal of Sport Communication, 3(2), 151-162"
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._08_ALCOHOL]
    },
    {
      "nauthors": "Tekin, D.",
      "authors": "Tekin, D.",
      "year": 2018,
      "desc": [
        "“Controlling Football-Related Crime in Turkey: Situational Crime Prevention Approach and Implications”, Medeniyet Law Review, 3(4): 83-190."
      ],
      "link": "https://hukuk.medeniyet.edu.tr/tr/yayinlar/medeniyet-law-review",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": ["Tekin, D.", "Kurland, J."],
      "authors": "Tekin, D. & Kurland, J",
      "year": 2019,
      "desc": [
        "“Turkish football fans’ perceptions of the legitimacy of crime prevention measures”, International Journal of Law, Crime and Justice, Volume 58, September 2019, Pages: 56-68"
      ],
      "link": "https://www.sciencedirect.com/science/article/pii/S1756061618303045?via%3Dihub",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Pyun, H.",
      "authors": "Pyun, H.",
      "year": 2019,
      "desc": [
        "Exploring the causal relationship between Major League Baseball games and crime: A synthetic control analysis. Empirical Economics, 57(1), 365-383"
      ],
      "link": "https://doi.org/10.1007/s00181-018-1440-9",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Pyun, H.",
      "authors": "Pyun, H., & Hall, J. C.",
      "year": 2019,
      "desc": [
        "Does the Presence of Professional Football Cause Crime in a City? Evidence from Pontiac, Michigan. Applied Economics, 51(36), 3958-3970."
      ],
      "link": "https://doi.org/10.1080/00036846.2019.1588942",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": ["Gordon, K.O.", "Hall, S."],
      "authors": "Gordon, K.O., Czekanski, W.A., Hall, S.A., & McAfee, K.E.",
      "year": 2019,
      "desc": [
        " Understanding the interface between security and customer service at NCAA Division I FCS football venues. Journal of Contemporary Athletics, 14 (1)."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._02_FAN_PERCEPTION, $scope.tags._03_STAKEHOLDER_PERCEPTION, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Gordon, K.O.",
      "authors": "Gordon, K.O.",
      "year": 2018,
      "desc": [
        "Escape from ‘Owlcatraz’: An interaction ritual case study of the stadium naming rights agreement between Florida Atlantic University and The GEO Group, Inc. Journal of Issues in Intercollegiate Athletics, 11, 214-236."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION, $scope.tags._03_STAKEHOLDER_PERCEPTION, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Gordon, K.O.",
      "authors": "Gordon, K.O., Czekanski, W.A., & DeMeo, J.A.",
      "year": 2016,
      "desc": [
        " Assessing the influence of sport security operations on the guest experience: Using the Delphi method to understand practitioner perspectives. Journal of Sport Safety and Security, 1 (1), Article 2, 1-13."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._02_FAN_PERCEPTION, $scope.tags._03_STAKEHOLDER_PERCEPTION, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R.",
      "year": 2002,
      "desc": [
        "Alternative Measures of Competitive Balance in Sports Leagues, Journal of Sports Economics, vol. 3, no. 2, pp. 133-148."
      ],
      "link": "https://journals.sagepub.com/doi/abs/10.1177/152700250200300203",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Coates, D. & Humphreys, B.R.",
      "year": 2005,
      "desc": [
        "Novelty Effects of New Facilities on Attendance at Professional Sporting Events, Contemporary Economic Policy, vol. 23, no. 3, pp. 436-455."
      ],
      "link": "https://onlinelibrary.wiley.com/doi/full/10.1093/cep/byi033",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Coates, D. & Humphreys, B.R.",
      "year": 2007,
      "desc": [
        "Ticket Prices, Concessions and Attendance at Professional Sporting Events, International Journal of Sport Finance, vol. 2, no. 3, pp. 161-170."
      ],
      "link": "http://econ.unt.edu/~jhauge/Teaching/Sports/monopoly_Coates_Humphreys_2007.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Coates, D. & Humphreys, B.R.",
      "year": 2010,
      "desc": [
        "Week to Week Attendance and Competitive Balance in the National Football League, International Journal of Sport Finance, vol. 5, no. 4, pp. 239-252."
      ],
      "link": "https://www.researchgate.net/profile/Donald_Alexander5/publication/241761031_Does_Athletic_Success_Generate_Legislative_Largess_from_Sports-Crazed_Representatives_The_Impact_of_Athletic_Success_on_State_Appropriations_to_Colleges_and_Universities/links/594931230f7e9b1d9b276a51/Does-Athletic-Success-Generate-Legislative-Largess-from-Sports-Crazed-Representatives-The-Impact-of-Athletic-Success-on-State-Appropriations-to-Colleges-and-Universities.pdf#page=5",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Price, J., Soebbing, B. P., Berri, D., & Humphreys, B.R.",
      "year": 2010,
      "desc": [
        "Tournament Incentives, League Policy, and NBA Team Performance Revisited, Journal of Sports Economics, vol. 11, no. 2, pp. 117-135."
      ],
      "link": "https://journals.sagepub.com/doi/abs/10.1177/1527002510363103",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., & Soebbing, B. P.",
      "year": 2012,
      "desc": [
        "A Test of Monopoly Price Dispersion Under Demand Uncertainty, Economics Letters, vol. 114, issue 3, pp. 304-307."
      ],
      "link": "https://www.sciencedirect.com/science/article/pii/S0165176511004010",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Paul, R., Humphreys, B.R., & Weinbach, A.",
      "year": 2012,
      "desc": [
        "Uncertainty of outcome and attendance in college football: Evidence from Four Conferences, The Economic and Labour Relations Review, vol. 23, no. 2, pp. 69-81."
      ],
      "link": "https://journals.sagepub.com/doi/abs/10.1177/103530461202300206",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Coates, D. & Humphreys, B.R.",
      "year": 2012,
      "desc": [
        "Game Attendance and Outcome Uncertainty in the National Hockey League, Journal of Sports Economics, vol. 13, no. 4, pp. 364-377."
      ],
      "link": "https://journals.sagepub.com/doi/full/10.1177/1527002512450260",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Soebbing, B. P. & Humphreys, B.R.",
      "year": 2013,
      "desc": [
        "Do Gamblers Think That Teams Tank? Evidence from the NBA, Contemporary Economic Policy, vol. 31, no. 2, pp. 301-313."
      ],
      "link": "https://onlinelibrary.wiley.com/doi/full/10.1111/j.1465-7287.2011.00298.x",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Bodvarsson, Ö. B. & Humphreys, B.R.",
      "year": 2013,
      "desc": [
        "Labor Market Discrimination and Capital: The Effects of Fan Discrimination on Stadium and Arena Construction, Contemporary Economic Policy, vol. 31, no. 3, pp. 604-617."
      ],
      "link": "https://onlinelibrary.wiley.com/doi/full/10.1111/j.1465-7287.2011.00303.x",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Soebbing, B. P., Humphreys, B.R., & Mason, D. S.",
      "year": 2013,
      "desc": [
        "Exploring Incentives to Lose in Professional Team Sports: Do Conference Games Matter?, International Journal of Sport Finance, vol. 8, no. 3, pp. 192-207."
      ],
      "link": "http://eds.b.ebscohost.com/abstract?site=eds&scope=site&jrnl=15586235&AN=89868859&h=ut0S1Dg4crKmpllc2yeL19%2fQ9BzvTcczSzs5Pr7CDrZE352PbWnAejXJ4Lf1FEmfvsdcJPiGnUh8FM5IlJdgzA%3d%3d&crl=c&resultLocal=ErrCrlNoResults&resultNs=Ehost&crlhashurl=login.aspx%3fdirect%3dtrue%26profile%3dehost%26scope%3dsite%26authtype%3dcrawler%26jrnl%3d15586235%26AN%3d89868859",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Lei, X., & Humphreys, B.R.",
      "year": 2013,
      "desc": [
        "Game Importance as a Dimension of Uncertainty of Outcome, Journal of Quantitative Analysis in Sports, vol. 9 issue 1, pp. 25-36."
      ],
      "link": "https://www.degruyter.com/view/j/jqas.2013.9.issue-1/jqas-2012-0019/jqas-2012-0019.xml",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Coates, D., Humphreys, B.R., & Zhou, L.",
      "year": 2014,
      "desc": [
        "Reference-dependent Preferences, Loss Aversion and Live Game Attendance, Economic Inquiry, vol. 52, no. 3, pp. 959-973."
      ],
      "link": "https://onlinelibrary.wiley.com/doi/full/10.1111/ecin.12061",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., & Zhou, L.",
      "year": 2015,
      "desc": [
        "Reference-Dependent Preferences, Team Relocations, and Major League Expansion. Journal of Economic Behavior and Organization, vol. 109, pp. 10-25."
      ],
      "link": "https://www.sciencedirect.com/science/article/pii/S0167268114002960",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., & Zhou, L.",
      "year": 2015,
      "desc": [
        "The Louis-Schmelling Paradox and the League Standing Effect Reconsidered, Journal of Sports Economics, vol. 16, pp. 835-852."
      ],
      "link": "https://journals.sagepub.com/doi/full/10.1177/1527002515587260",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Soebbing, B. P., Mason, D. S., & Humphreys, B.R.",
      "year": 2016,
      "desc": [
        "Novelty Effects and Sports Facilities in Smaller Cities: Evidence From Canadian Hockey Arenas, Urban Studies, vol. 53, pp. 1674-1690."
      ],
      "link": "https://journals.sagepub.com/doi/full/10.1177/0042098015576862",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., Johnson, K. B., & Mason, D. S.",
      "year": 2018,
      "desc": [
        "Estimating the Value of Medal Success in the Olympic Games, Journal of Sports Economics, vol. 19, no. 3, pp. 398-416."
      ],
      "link": "https://journals.sagepub.com/doi/full/10.1177/1527002515626221",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., & Pérez, L.",
      "year": 2019,
      "desc": [
        "Loss Aversion, Upset Preference, and Sports Television Viewing Audience Size, Journal of Behavioral and Experimental Economics, vol. 78, pp. 61-67."
      ],
      "link": "https://www.sciencedirect.com/science/article/pii/S2214804318305627",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., & Miceli, T. J.",
      "year": 2019,
      "desc": [
        "The Peculiar Preferences of Sports Fans: Towards a Preference-Based Motivation for the Uncertainty of Outcome Hypothesis, Journal of Sports Economics, vol. 20, no. 6, pp. 782-796."
      ],
      "link": "https://journals.sagepub.com/doi/full/10.1177/1527002518817590",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., Lee, Y. S., & Soebbing, B. P.",
      "year": 2011,
      "desc": [
        "Outcome Uncertainty, Fan Travel, and Aggregate Attendance, Economic Inquiry, Forthcoming. Modeling Consumers' Participation in Gambling Markets and Frequency of Gambling, Journal of Gambling Business and Economics, vol. 5, no. 1, pp. 1-22. "
      ],
      "link": "http://eds.a.ebscohost.com/abstract?site=eds&scope=site&jrnl=17517990&AN=82745550&h=v%2bAKQWsXU5yngMKbmgGdmT0FrHs7zqf%2botoaNlnaQi4QnBaSf4d7R91SwgR0JnfiRS6k%2fI%2f5WMBM7D747cX2YQ%3d%3d&crl=c&resultLocal=ErrCrlNoResults&resultNs=Ehost&crlhashurl=login.aspx%3fdirect%3dtrue%26profile%3dehost%26scope%3dsite%26authtype%3dcrawler%26jrnl%3d17517990%26AN%3d82745550",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., & Pérez, L.",
      "year": 2012,
      "desc": [
        "Who bets on sports? Characteristics of sports bettors and the consequences of expanding sports betting opportunities, Estudios Economia Aplicada, vol. 30, no. 2, pp. 579-597."
      ],
      "link": "https://www.redalyc.org/pdf/301/30124481010.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., Paul, R. J., & Weinbach, A. P.",
      "year": 2013,
      "desc": [
        "Consumption Benefits and Gambling: Evidence From the NCAA Basketball Betting Market, Journal of Economic Psychology, vol. 39, pp. 376-386."
      ],
      "link": "https://www.sciencedirect.com/science/article/pii/S0167487013000652",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Paul, R. J., Weinbach, A. P., & Humphreys, B.R.",
      "year": 2014,
      "desc": [
        "Bettor Belief in the ``Hot Hand'': Evidence from Detailed Betting Data on the NFL, Journal of Sports Economics, vol. 16, no. 6, pp. 636-649."
      ],
      "link": "https://journals.sagepub.com/doi/full/10.1177/1527002512465414",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Feddersen, A., Humphreys, B.R., & Soebbing, B. P.",
      "year": 2017,
      "desc": [
        "Sentiment Bias and Asset Prices: Evidence from Sports Betting Markets and Social Media, Economic Inquiry, vol. 55, no. 2, pp. 1110-1129."
      ],
      "link": "https://onlinelibrary.wiley.com/doi/full/10.1111/ecin.12404",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Feddersen, A., Humphreys, B.R., & Soebbing, B. P.",
      "year": 2018,
      "desc": [
        "Sentiment Bias in National Basketball Association Betting, Journal of Sports Economics, vol. 19, no. 4, pp. 455-492."
      ],
      "link": "https://journals.sagepub.com/doi/full/10.1177/1527002516656726",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": ["Humphreys, B.", "Pyun, H."],
      "authors": "Humphreys, B.R., & Pyun, H.",
      "year": 2018,
      "desc": [
        "Professional Sporting Events and Traffic: Evidence from US Cities, Journal of Regional Science, vol. 58, no. 5, pp. 869-886"
      ],
      "link": "https://onlinelibrary.wiley.com/doi/abs/10.1111/jors.12389",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Carroll, K. A., & Humphreys, B.R.",
      "year": 2000,
      "desc": [
        "Nonprofit Decisionmaking and Social Regulation: The Intended and Unintended Consequences of Title IX, Journal of Economic Behavior and Organization, vol. 43, pp. 359-376."
      ],
      "link": "https://www.sciencedirect.com/science/article/pii/S0167268100001220",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._03_STAKEHOLDER_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R.",
      "year": 2006,
      "desc": [
        "The Relationship Between Big-Time College Football and State Appropriations to Higher Education, International Journal of Sport Finance, vol. 1, no. 2, pp. 119-128."
      ],
      "link": "https://www.researchgate.net/profile/Brad_Humphreys/publication/5142723_The_Relationship_Between_Big-Time_College_Football_and_State_Appropriations_for_Higher_Education/links/0c96052556639c21dc000000/The-Relationship-Between-Big-Time-College-Football-and-State-Appropriations-for-Higher-Education.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._03_STAKEHOLDER_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., & Mondello, M.",
      "year": 2007,
      "desc": [
        "Intercollegiate Athletic Success and Donations at NCAA Division I Institutions, Journal of Sport Management, vol. 21, no. 2, pp. 265-280."
      ],
      "link": "https://journals.humankinetics.com/view/journals/jsm/21/2/article-p265.xml",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._03_STAKEHOLDER_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., & Ruseski, J. E.",
      "year": 2009,
      "desc": [
        "Monitoring Cartel Behavior and Stability: Evidence From NCAA Football, Southern Economic Journal, vol. 79, no. 3, pp. 720-735."
      ],
      "link": "https://www.jstor.org/stable/27751412?seq=1#metadata_info_tab_contents",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._03_STAKEHOLDER_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Carroll, K. A., & Humphreys, B.R.",
      "year": 2016,
      "desc": [
        "Opportunistic Behavior in a Cartel Setting: Effects of the 1984 Supreme Court Decision on College Football Television Broadcasts, Journal of Sports Economics, vol. 17, no. 6, pp. 601-628."
      ],
      "link": "https://journals.sagepub.com/doi/full/10.1177/1527002514535605",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._03_STAKEHOLDER_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Hoffer, A., Humphreys, B.R., & Lacombe, D. J.",
      "year": 2015,
      "desc": [
        "Trends in NCAA Athletic Spending: Arms Race or Rising Tide?, Journal of Sports Economics, vol. 16, no. 6, pp. 576-596."
      ],
      "link": "https://journals.sagepub.com/doi/full/10.1177/1527002515592541",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._03_STAKEHOLDER_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., Paul, R. J., & Weinbach, A. P.",
      "year": 2016,
      "desc": [
        "Performance Expectations and the Tenure of Head Coaches: Evidence from NCAA Football, Research in Economics, vol. 70, issue 3, pp. 482-492.",
      ],
      "link": "https://www.sciencedirect.com/science/article/pii/S1090944316301090",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._03_STAKEHOLDER_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., & Ruseski, J. E.",
      "year": 2018,
      "desc": [
        "Strategic Interaction in a Repeated Game: Evidence from NCAA Football Recruiting Review of Industrial Organization, vol. 52, no. 2, pp. 283-303.",
      ],
      "link": "https://link.springer.com/article/10.1007/s11151-017-9600-1",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._03_STAKEHOLDER_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R.",
      "year": 2011,
      "desc": [
        "On-line Sports Betting and International Relations, The SAIS Review of International Affairs, volume 31, no. 1, pp. 103-116.",
      ],
      "link": "https://muse.jhu.edu/article/425427/summary",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._03_STAKEHOLDER_PERCEPTION]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Coates, D., & Humphreys, B.R.",
      "year": 1999,
      "desc": [
        "The Growth Effects of Sports Franchises Stadia and Arenas, Journal of Policy Analysis and Management, vol. 14, no. 4, pp. 601-624.",
      ],
      "link": "https://onlinelibrary.wiley.com/doi/abs/10.1002/(SICI)1520-6688(199923)18:4%3C601::AID-PAM4%3E3.0.CO;2-A",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Coates, D., & Humphreys, B.R.",
      "year": 2002,
      "desc": [
        "The Economic Impact of Postseason Play in Professional Sports, Journal of Sports Economics, vol. 3, no. 3, pp. 291-299.",
      ],
      "link": "https://journals.sagepub.com/doi/abs/10.1177/1527002502003003005",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Coates, D., & Humphreys, B.R.",
      "year": 2001,
      "desc": [
        "The Economic Consequences of Professional Sports Lockouts and Strikes, Southern Economic Journal, vol. 67, no. 3, pp. 737-747.",
      ],
      "link": "https://www.jstor.org/stable/1061462?seq=1#metadata_info_tab_contents",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Coates, D., & Humphreys, B.R.",
      "year": 2003,
      "desc": [
        "The Effects of Professional Sports on Earnings and Employment in the Retail and Services Sectors of U.S. Cities, Regional Science and Urban Economics, vol. 33, no. 2, pp. 175-198.",
      ],
      "link": "https://www.sciencedirect.com/science/article/pii/S0166046202000108",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Coates, D., & Humphreys, B.R.",
      "year": 2003,
      "desc": [
        "Professional Sports Facilities, Franchises and Urban Economic Development, Public Finance and Management, vol. 3, no. 3, pp. 335-357.",
      ],
      "link": "https://core.ac.uk/download/pdf/7068694.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Coates, D., & Humphreys, B.R.",
      "year": 2006,
      "desc": [
        "Proximity Benefits and Voting on Stadium and Arena Subsidies, Journal of Urban Economics, vol. 59, no. 2, pp. 285-299.",
      ],
      "link": "https://www.sciencedirect.com/science/article/pii/S0094119005000732",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Coates, D., & Humphreys, B.R.",
      "year": 2006,
      "desc": [
        "\"Compensating Differentials and the Social Benefits of the NFL\" - A Comment, Journal of Urban Economics, vol. 60, no. 1, pp. 124-131.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., & Prokopowicz, S.",
      "year": 2007,
      "desc": [
        "Assessing the Impact of Sports Mega-Events in Transition Economies: EURO 2012 in Poland and Ukraine, International Journal of Sport Management and Marketing, vol 2, no. 5-6, pp. 496-509.",
      ],
      "link": "https://s3.amazonaws.com/academia.edu.documents/3253262/ijsmm_uefa.pdf?response-content-disposition=inline%3B%20filename%3DAssessing_the_Impact_of_Sports_Mega-Even.pdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWOWYYGZ2Y53UL3A%2F20190925%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190925T141840Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=0ca333f59e1fd617a4e3d2af443e98526ac285841c1796a3aafd972221f01c67",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., & Ruseski, J. E.",
      "year": 2009,
      "desc": [
        "Estimates of the Dimensions of the Sports Market in the US, International Journal of Sport Finance, vol. 4, no. 2, pp. 94-113.",
      ],
      "link": "https://www.researchgate.net/profile/Wen_Jhan_Jane/publication/46532382_The_Causality_between_Salary_Structures_and_Team_Performance_A_Panel_Analysis_in_a_Professional_Baseball_League/links/56b17c8608aed7ba3feb257a.pdf#page=24",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Coates, D., & Humphreys, B.R.",
      "year": 2008,
      "desc": [
        "Do Economists Reach a Conclusion on Subsidies for Sports Franchises, Stadiums, and Mega-Events?, Econ Journal Watch, vol. 5, no. 3, pp. 294-315.",
      ],
      "link": "http://college.holycross.edu/RePEc/spe/CoatesHumphreys_LitReview.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Coates, D., & Humphreys, B.R.",
      "year": 2011,
      "desc": [
        "The Effect of Professional Sports on the Earnings of Individuals: Evidence from Microeconomic Data, Applied Economics, vol. 43, issue 29, pp. 4449-4459.",
      ],
      "link": "https://www.tandfonline.com/doi/full/10.1080/00036846.2010.491464",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Feng X., & Humphreys, B.R.",
      "year": 2012,
      "desc": [
        "The Impact of Professional Sports Facilities on Housing Values: Evidence from Census Block Group Data, City, Culture and Society, vol. 3, no. 3, pp. 189-200.",
      ],
      "link": "https://www.sciencedirect.com/science/article/pii/S187791661200029X",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R.",
      "year": 2014,
      "desc": [
        "New Sports Facilities and Residential Housing Markets, Journal of Regional Science, vol. 54, no. 4, pp. 629-663.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., & Zhou, L.",
      "year": 2015,
      "desc": [
        "Sports Facilities, Agglomeration, and Public Subsidies, Regional Science and Urban Economics, vol. 54, pp. 60-73.",
      ],
      "link": "https://www.sciencedirect.com/science/article/pii/S0166046215000630",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., & Nowak, A.",
      "year": 2017,
      "desc": [
        "Professional Sports Facilities, Teams and Property Values: Evidence from NBA Team Departures. Regional Science and Urban Economics, vol. 66, no. 1, pp 39-51.",
      ],
      "link": "https://www.sciencedirect.com/science/article/pii/S0166046217301175",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Feng, A., & Humphreys, B.R.",
      "year": 2018,
      "desc": [
        "Assessing the Economic Impact of Sports Facilities on Residential Property Values: A Spatial Hedonic Approach, Journal of Sports Economics, vol. 19, no. 2, pp. 188-210.",
      ],
      "link": "https://journals.sagepub.com/doi/full/10.1177/1527002515622318",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Chikish, Y., Humphreys, B.R., & Nowak, A.",
      "year": 2019,
      "desc": [
        "Sports Arenas, Teams and Property Values: Temporary and Permanent Shocks to Local Amenity Flows, Journal of Regional Analysis \& Policy, vol. 49, n0. 1, pp. 1-12.",
      ],
      "link": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3254241",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Harger, K., Humphreys, B.R., & Ross, A.",
      "year": 2016,
      "desc": [
        "Do New Sports Facilities Attract New Businesses?, Journal of Sports Economics, vol. 17, no. 5, pp. 483-500.",
      ],
      "link": "https://journals.sagepub.com/doi/full/10.1177/1527002516641168",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R.",
      "year": 2019,
      "desc": [
        "Should the Construction of New Professional Sports Facilities Be Subsidized?, Journal of Policy Analysis and Management, vol. 38, no. 1, pp. 264-270.",
      ],
      "link": "https://onlinelibrary.wiley.com/doi/full/10.1002/pam.22099",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Chikish, Y., Humphreys, B.R., Liu, C., & Nowak, A.",
      "year": 2019,
      "desc": [
        "Sports-led Tourism, Spatial Displacement, and Hotel Demand, Economic Inquiry, vol. 57, no. 4, pp. 1859-1878.",
      ],
      "link": "https://onlinelibrary.wiley.com/doi/full/10.1111/ecin.12820",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Humphreys, B.",
      "authors": "Humphreys, B.R., & Ruseski, J. E.",
      "year": 2006,
      "desc": [
        "Financing Intercollegiate Athletics: The Role of Monitoring and Enforcing NCAA Recruiting Regulations, International Journal of Sport Finance, vol. 1, no. 3, pp. 151-161.",
      ],
      "link": "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.606.5182&rep=rep1&type=pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Ristea, A.",
      "authors": "Ristea, A., Leitner, M., & Martin, A. A.",
      "year": 2018,
      "desc": [
        "Opinion mining from Twitter and spatial crime distribution for hockey events in Vancouver. In Proceedings of the 21th AGILE International Conference on Geographic Information Science, Lund. Sweden (pp. 12-15)",
      ],
      "link": "https://pdfs.semanticscholar.org/b20e/60d3c5f7107afc3775688b9edde49472ff5e.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Ristea, A.",
      "authors": "Ristea, A., Langford, C., & Leitner, M.",
      "year": 2017,
      "desc": [
        "Relationships between crime and twitter activity around stadiums. In 2017 25th International Conference on Geoinformatics (pp. 1-5). IEEE.",
      ],
      "link": "https://ieeexplore.ieee.org/abstract/document/8090933",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Ristea, A.",
      "authors": "Krauthausen, P., Leitner, M., Ristea, A., & Curtis, A.",
      "year": 2019,
      "desc": [
        "Collecting and analyzing soccer-related graffiti with the spatial video technology and GIS: a case study in Krakow, Poland. Urban Development Issues, 62(1), 61-73.",
      ],
      "link": "https://content.sciendo.com/view/journals/udi/62/1/article-p61.xml?lang=de",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Ristea, A.",
      "authors": "Ristea, A., Andresen, M. A., & Leitner, M.",
      "year": 2018,
      "desc": [
        "Using tweets to understand changes in the spatial crime distribution for hockey events in Vancouver. The Canadian Geographer/Le Géographe canadien, 62(3), 338-351.",
      ],
      "link": "https://onlinelibrary.wiley.com/doi/abs/10.1111/cag.12463",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
  ];
});