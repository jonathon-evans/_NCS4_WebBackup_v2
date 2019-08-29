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
    STACEY: "Hall, S",
    JUSTIN: "Kurland, J",
    LOU: "Marciani, L",
    JOSLYN: "Zale, J",
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
    2005
  ]
  /*
    {
      "authors": "",
      "year": ,
      "desc": [
        ""
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT]
    },
  */
  $scope.pubList = [
    {
      "nauthors": "Hall",
      "authors": "Newland, B., Hall, S., & Koba, A. L.",
      "year": 2018,
      "desc": [
        "Sport Facility and Event Management. In Pedersen, P. & Thibault, L. (Eds.). Contemporary Sport Management. (6th ed.). Champaign, IL: Human Kinetics."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._05_CROWD_DISORDER, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S., Manning, D., Keiper, M., Jenny, S., & Allen, B. ",
      "year": 2019,
      "desc": [
        "Stakeholders’ Perception of Critical Risks and Challenges Hosting Marathon Events: An Exploratory Study. Journal of Contemporary Athletics, 13(1), 11-22."
      ],
      "link": "https://search.proquest.com/openview/b5c4b8eb76c09723e196347c2a2e363a/1?cbl=2034846&pq-origsite=gscholar",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._03_STAKEHOLDER_PERCEPTION]
    },
    {
      "nauthors": "Hall",
      "authors": "Gordon, K.O., Czekanski, W.A., Hall, S., & McAfee, K.E.",
      "year": 2019,
      "desc": [
        "Understanding the interface between security and customer service at NCAA Division I FCS football venues. Journal of Contemporary Athletics, 14(1)."
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Hall",
      "authors": "Schwarz, E. C., Hall, S., & Shibli, S.",
      "year": 2019,
      "desc": [
        "Sport Facility Operations Management: A Global Perspective. (3rd ed.). London and New York: Routledge, Taylor & Francis Group. "
      ],
      "link": "https://www.taylorfrancis.com/books/9780429026102",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._04_EVACUATION, $scope.tags._05_CROWD_DISORDER, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Zale",
      "authors": "Zale, J., Kar, B., & Cochran, D.",
      "year": 2018,
      "desc": [
        "Optimizing Stadium Evacuation By Integrating Geo-Computation And Affordance Theory. Journal Of Emergency Management 16(2): 81-93",
      ],
      "link": "https://www.wmpllc.org/ojs-2.4.2/index.php/jem/article/view/1539",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._04_EVACUATION]
    },
    {
      "nauthors": "Kurland",
      "authors": "Kurland, J.",
      "year": 2019,
      "desc": [
        "Arena-based events and crime: An analysis of hourly robbery data. Applied Economics, 51(36), 3947-3957.",
      ],
      "link": "https://ideas.repec.org/a/taf/applec/v51y2019i36p3947-3957.html",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Kurland",
      "authors": "Tekin, D., & Kurland, J",
      "year": 2019,
      "desc": [
        "Turkish football fans\" perceptions of the legitimacy of crime prevention measures. International Journal of Law, Crime and Justice.",
      ],
      "link": "https://www.sciencedirect.com/science/article/pii/S1756061618303045",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Kurland",
      "authors": "Ristea, A., Kurland, J., Resch, B., Leitner, M., & Langford, C.",
      "year": 2018,
      "desc": [
        "Estimating the spatial distribution of crime events around a football stadium for georeferenced tweets. ISPRS International Journal of Geo-Information, 7(2), 43.",
      ],
      "link": "https://www.mdpi.com/2220-9964/7/2/43",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Kurland",
      "authors": "Kurland, J., Tilley, N., & Johnson, S. D.",
      "year": 2018,
      "desc": [
        "Football pollution: an investigation of spatial and temporal patterns of crime in and around stadia in England. Security Journal, 31(3), 665-684.",
      ],
      "link": "https://link.springer.com/article/10.1057/s41284-017-0123-0",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Kurland",
      "authors": "Kurland, J. & Piza, E.",
      "year": 2018,
      "desc": [
        "The Devil You Don’t Know: A spatial analysis of crime at Newark’s Prudential Center on hockey game days. Journal of Sport Safety and Security. 3(1), 1.",
      ],
      "link": "https://aquila.usm.edu/jsss/vol3/iss1/1/",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Kurland",
      "authors": "Kurland, J. & Chen, P.",
      "year": 2017,
      "desc": [
        "Evolution of a Riot: An agent-based model of contagion during public demonstrations. Oriental Journal of Computer Science and Technology. 9(3).",
      ],
      "link": "http://www.computerscijournal.org/vol9no3/simulating-civil-disorderanagent-based-modeling-approach/",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER]
    },
    {
      "nauthors": "Kurland",
      "authors": "Kurland, J., Johnson, S.D., & Tilley, N.",
      "year": 2017,
      "desc": [
        "\"Hotspotting and Football Violence: Current Statistics and Implications for Prevention.\" In Sturmey, P. (Ed.), The Wiley Handbook of Violence and Aggression, Volume 3. Societal Interventions. John Wiley & Sons.",
      ],
      "link": "https://onlinelibrary.wiley.com/doi/abs/10.1002/9781119057574.whbva112",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S., Allen, B., & Phillips, D.",
      "year": 2016,
      "desc": [
        "Continuity of operations planning in college athletic programs: The case for incorporating FEMA guidelines. Journal of Emergency Management, 14(1), 71-77.",
      ],
      "link": "https://europepmc.org/abstract/med/26963231",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Filce, R., Hall, S., & Phillips, D.",
      "year": 2016,
      "desc": [
        "Stadium alcohol management: A best practices approach. International Journal of Sport Management, Recreation, and Tourism, 21(c), 48-65.",
      ],
      "link": "http://www.ijsmart.eu/onlinepic/vol21_c_Stacey%20A.%20Hall.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._08_ALCOHOL, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Schwarz, E. C., Hall, S., & Shibli, S.",
      "year": 2015,
      "desc": [
        "Sport Facility Operations Management: A Global Perspective. (2nd ed.). London and New York: Routledge, Taylor & Francis Group.",
      ],
      "link": "https://www.taylorfrancis.com/books/9781315736815",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._04_EVACUATION, $scope.tags._05_CROWD_DISORDER, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Allen, B., Hall, S., & Phillips, D.",
      "year": 2015,
      "desc": [
        "Continuity of operations planning (COOP) preparedness of NCAA Division I athletic departments. International Journal of Sport Management, 16(1), 1-15.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S. ",
      "year": 2016,
      "desc": [
        "Crisis Management. In Byers, T. & Gorse, S. (Eds.). Contemporary Issues in Sport Management: A Critical Introduction. London, UK: Sage Publications.",
      ],
      "link": "https://books.google.com/books?hl=en&lr=&id=rCSJCwAAQBAJ&oi=fnd&pg=PP1&dq=Hall,+S.+(2015).+Crisis+Management.+In+Byers,+T.+%26+Gorse,+S.+(Eds.).+Contemporary+Issues+in+Sport+Management:+A+Critical+Introduction.+London,+UK:+Sage+Publications.&ots=hGmuqrtaTp&sig=Yb6piFLKn28q961DqQPXg-tiLeo#v=onepage&q&f=false",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._04_EVACUATION, $scope.tags._05_CROWD_DISORDER, $scope.tags._09_BEST_PRACTICES, $scope.tags._10_EMERGENCY_COMMUNICATIONS]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S.",
      "year": 2015,
      "desc": [
        "Crisis Communications: Best Practices for Sport Safety and Security Teams. The International Centre for Sports Security Journal, 3(2), 25-29.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, , $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S., Cooper, W.E., Marciani, L., & Cieslak, T. J.",
      "year": 2014,
      "desc": [
        "Assessing the effectiveness of a national sport event risk management training program for college command groups: A pilot study. International Journal of Sport Management, 15(1), 118-128.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S., Cooper, W.E., Marciani, L., & McGee, J.A.",
      "year": 2014,
      "desc": [
        "Security Management for Sports and Special Events – An Interagency Approach. Korean Language Edition: Green Publishing Company and Human Kinetics.",
      ],
      "link": "https://books.google.com/books?hl=en&lr=&id=zO96DwAAQBAJ&oi=fnd&pg=PT11&dq=Security+Management+for+Sports+and+Special+Events+%E2%80%93+An+Interagency+Approach.+Korean+Language+Edition:+Green+Publishing+Company+and+Human+Kinetics.&ots=BGEloO7VBi&sig=v7_Zsv0PvYFytEo97618b2sLCGM#v=onepage&q&f=false",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._04_EVACUATION, $scope.tags._05_CROWD_DISORDER, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._08_ALCOHOL, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland",
      "authors": "Kurland, J., Johnson, S. D., & Tilley, N.",
      "year": 2014,
      "desc": [
        "Offenses around Stadiums: A Natural Experiment on Crime Attraction and Generation. Journal of Research in Crime and Delinquency. 51(1), 5–28.",
      ],
      "link": "https://journals.sagepub.com/doi/full/10.1177/0022427812471349",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Kurland",
      "authors": "Kurland, J., Tilley, N., & Johnson, S.D.",
      "year": 2014,
      "desc": [
        "“A Football Hotspot Matrix: A Framework for Targeting of Football-related Crime and Disorder” in M. Hopkins & J. Treadwell (Eds.), Football Hooliganism, Crime and Crowd Management: Contemporary perspectives. Palgrave MacMillan.",
      ],
      "link": "https://books.google.com/books?hl=en&lr=&id=85mxAwAAQBAJ&oi=fnd&pg=PP1&dq=A+Football+Hotspot+Matrix:+A+Framework+for+Targeting+of+Football-related+Crime+and+Disorder+in+M.+Hopkins+%26+J.+Treadwell+(Eds.),+Football+Hooliganism,+Crime+and+Crowd+Management:+Contemporary+perspectives.+Palgrave+MacMillan.&ots=yTtCLitUub&sig=GjT5s9Cm-Yk3PuxHV8DggCKjwMs#v=onepage&q&f=false",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S.",
      "year": 2013,
      "desc": [
        "Development of a national risk management training program for college sport event security command groups. Journal of Emergency Management, 11(4), 313-320.",
      ],
      "link": "https://europepmc.org/abstract/med/24303775",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": "Hall",
      "authors": "McGee, J.A., Mey, R., & Hall, S.",
      "year": 2013,
      "desc": [
        "Securing Venues of Mass Gatherings. The Journal of the Global Homeland Security Education Network,Issue 2.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S.,Byon, K., & Baker, T.",
      "year": 2013,
      "desc": [
        "Managing the threat of terrorism in sport: A Performance and Importance Analysis (IPA) of safety and security preparedness for NCAA sport facilities. International Journal of Sport Management,14(4), 1-23.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Cieslak, T. J., & Hall, S.",
      "year": 2013,
      "desc": [
        "Standardization of match day security for Australian football stadia. International Journal of Sport Management, 14(2), 1-16.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S.",
      "year": 2013,
      "desc": [
        "Training Needs of Sport and Event Organizations. The International Centre for Sports Security Journal. September Issue, 2013.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S., Cooper, W.E., Marciani, L., & McGee, J.A.",
      "year": 2012,
      "desc": [
        "Security Management for Sports and Special Events – An Interagency Approach. Champaign, IL: Human Kinetics.",
      ],
      "link": "https://books.google.com/books?hl=en&lr=&id=zO96DwAAQBAJ&oi=fnd&pg=PT11&dq=Security+Management+for+Sports+and+Special+Events+%E2%80%93+An+Interagency+Approach.+Champaign,+IL:+Human+Kinetics.&ots=BGEloO8VEj&sig=OvMje3TZ3cWfW-hFwytRGO_7QLA#v=onepage&q&f=false",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._04_EVACUATION, $scope.tags._05_CROWD_DISORDER, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._08_ALCOHOL, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S.",
      "year": 2012,
      "desc": [
        "Training and Education in Sport Safety and Security. Security Magazine, p.54-55.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S.",
      "year": 2012,
      "desc": [
        "The Emerging Field of Sport Safety and Security Management. Homeland Security Education Guide.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S.",
      "year": 2011,
      "desc": [
        "Control for Safety of Fans/Athletes/Volunteers. In L.E. Swayne & J.G. Golson (Eds.), Encyclopedia of Sports Management and Marketing. Thousand Oaks, CA: SAGE Publications Inc.",
      ],
      "link": "https://books.google.com/books?hl=en&lr=&id=TjDiwwaN5VsC&oi=fnd&pg=PR5&dq=Encyclopedia+of+Sports+Management+and+Marketing&ots=x5ncPVjOe2&sig=qFlyCVQCtuEjNZaJ6p5kl_q4S3s#v=onepage&q&f=false",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._05_CROWD_DISORDER, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S.",
      "year": 2011,
      "desc": [
        "Crowd Management and Security. Security Magazine,p.18.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER]
    },
    {
      "nauthors": "Zale",
      "authors": "Zale, J. & Kar, B.",
      "year": 2012,
      "desc": [
        "A GIS-based football stadium evacuation model. Southeastern Geographer. 52(1): 70-89.",
      ],
      "link": "https://www.jstor.org/stable/26228996?seq=1#page_scan_tab_contents",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._04_EVACUATION]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S., Fos, P., Marciani, L., & Zhang, L.",
      "year": 2011,
      "desc": [
        "Multiple criteria decision making (MCDM) application in evaluating protective security measures for major sport events. International Journal of Sport Management, 12(2), 191-207.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._03_STAKEHOLDER_PERCEPTION, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland",
      "authors": "Hamilton-Smith, N., Bradford, B., Hopkins, M., Kurland, J., Lightowler, C., McArdle, D., & Tilley, N.",
      "year": 2011,
      "desc": [
        "Final Report: An Evaluation of Football Banning Orders in Scotland. Scottish Government Social Research.",
      ],
      "link": "https://www.researchgate.net/profile/Justin_Kurland/publication/309911644_An_Evaluation_of_Football_Banning_Orders_in_Scotland/links/58262e1208ae950ace6a802a/An-Evaluation-of-Football-Banning-Orders-in-Scotland.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._04_EVACUATION]
    },
    {
      "nauthors": "Kurland",
      "authors": "Kurland, J., Johnson, S.D., & Tilley, N.",
      "year": 2011,
      "desc": [
        "An analysis of the Spatio-temporal ‘footprint’ in and around Aston Villa FC (Villa Park). Association of Chief Police Officers.",
      ],
      "link": "https://www.researchgate.net/profile/Justin_Kurland/publication/310318308_An_analysis_of_the_Spatio-temporal_'footprint'_of_crime_in_and_around_Aston_Villa_FC_Villa_Park/links/582b443b08aef19cb806b1d5/An-analysis-of-the-Spatio-temporal-footprint-of-crime-in-and-around-Aston-Villa-FC-Villa-Park.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland",
      "authors": "Kurland, J., Johnson, S.D., & Tilley, N.",
      "year": 2011,
      "desc": [
        "An analysis of the Spatio-temporal ‘footprint’ in and around Sheffield Wednesday (Hillsborough). Association of Chief Police Officers.",
      ],
      "link": "https://nam05.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.researchgate.net%2Fpublication%2F310322119_An_analysis_of_the_Spatio-temporal_%27footprint%27_of_crime_in_and_around_Sheffield_Wednesday_FC_Hillsborough&data=02%7C01%7C%7C5302bd69a00340db6c9d08d7142c22b8%7C7f3da4be2722432ebfa764080d1eb1dc%7C0%7C0%7C637000052109478637&sdata=u1rULGlptp5N8WheqfPXP7YmHbGapapprn730og9L8U%3D&reserved=0",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES,, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland",
      "authors": "Kurland, J., Johnson, S.D., & Tilley, N.",
      "year": 2011,
      "desc": [
        "An analysis of the Spatio-temporal ‘footprint’ in and around Sheffield United (Bramall Lane). Association of Chief Police Officers.",
      ],
      "link": "https://www.researchgate.net/profile/Justin_Kurland/publication/310321041_An_analysis_of_the_Spatio-temporal_%27footprint%27_of_crime_in_and_around_Sheffield_United_FC_Bramall_Lane/links/582b528b08aef19cb806b4e0/An-analysis-of-the-Spatio-temporal-footprint-of-crime-in-and-around-Sheffield-United-FC-Bramall-Lane.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland",
      "authors": "Kurland, J., Johnson, S.D., & Tilley, N.",
      "year": 2011,
      "desc": [
        "An analysis of the Spatio-temporal ‘footprint’ in and around Leeds United (Elland Road). Association of Chief Police Officers.",
      ],
      "link": "https://www.researchgate.net/publication/310319529_An_analysis_of_Spatio-temporal_'footprint'_of_crime_in_and_around_Leeds_United_FC_Elland_Road",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland",
      "authors": "Kurland, J., Johnson, S.D., & Tilley, N.",
      "year": 2011,
      "desc": [
        "An analysis of the Spatio-temporal ‘footprint’ in and around Wolverhampton (Molineux). Association of Chief Police Officers.",
      ],
      "link": "https://www.researchgate.net/profile/Justin_Kurland/publication/310322578_An_analysis_of_the_Spatio-temporal_%27footprint%27_of_crime_in_and_around_Wolverhampton_Wanderers_FC_Molineux_Stadium/links/582b5c8e08ae138f1bf4a717/An-analysis-of-the-Spatio-temporal-footprint-of-crime-in-and-around-Wolverhampton-Wanderers-FC-Molineux-Stadium.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland",
      "authors": "Kurland, J. & Kautt, P.",
      "year": 2011,
      "desc": [
        "“The Event Effect: Demonstrating the Impact of Denominator Selection on ‘Floor’ and ‘Ceiling’ Crime Rate Estimates in the Context of Public Events” in A.D. Morina (Ed.), Crime Rates, Types and Hot Spots. Nova Science Publishers. Hauppauge, NY.",
      ],
      "link": "http://discovery.ucl.ac.uk/1322278/",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._06_CRIME_DISORDER_VENUES]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S.",
      "year": 2010,
      "desc": [
        "Sport Event Safety and Security: The Importance of Training Your People. Security Magazine, 66-70.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S., Marciani, L., Cooper, W.E, & Phillips, J.",
      "year": 2010,
      "desc": [
        "Needs, concerns, and future challenges in security management of NCAA Division I football events: An intercollegiate facility management perspective. Journal of Venue and Event Management, 1(2), 1-16.",
      ],
      "link": "https://www.sc.edu/study/colleges_schools/hrsm/research/journal_venue_and_event_management_archives/jvem_pdfs/vol1_no2/security_management_ncaa_d1.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S.",
      "year": 2010,
      "desc": [
        "An Examination of British Sport Security Strategies, Legislation, and Risk Management Practices: Lessons Learned from the English Football League. The Sport Journal, 13(2), 1-7.",
      ],
      "link": "https://go.galegroup.com/ps/anonymous?id=GALE%7CA227012839&sid=googleScholar&v=2.1&it=r&linkaccess=abs&issn=15439518&p=AONE&sw=w",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._05_CROWD_DISORDER, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S., Cieslak, T., Marciani, L., Cooper, W.E., & McGee, J.A.",
      "year": 2010,
      "desc": [
        "Protective security measures for major sport events: A baseline standard. Journal of Emergency Management, 8(1), 47-55.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._03_STAKEHOLDER_PERCEPTION, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Kurland",
      "authors": "Hamilton-Smith, N., Bradford, B., Hopkins, M., Kurland, J., Lightowler, C., McArdle, D., Tilley, N.",
      "year": 2010,
      "desc": [
        "Interim Report: An Evaluation of Football Banning Orders in Scotland. Scottish Government Social Research.",
      ],
      "link": "https://www.researchgate.net/profile/Justin_Kurland/publication/309911644_An_Evaluation_of_Football_Banning_Orders_in_Scotland/links/58262e1208ae950ace6a802a/An-Evaluation-of-Football-Banning-Orders-in-Scotland.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._07_POLICY_EVALUATIONS]
    },
    {
      "nauthors": "Marciani",
      "authors": "Marciani, L.",
      "year": 2010,
      "desc": [
        "Choosing a Sport Security Firm: What You Need to Know.  Sports Destination Management. May/June, 2010, pages 10-14.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._02_FAN_PERCEPTION, $scope.tags._03_STAKEHOLDER_PERCEPTION, $scope.tags._05_CROWD_DISORDER]
    },
    {
      "nauthors": "Kurland",
      "authors": "Kurland, J., Johnson, S.D., & Tilley, N.",
      "year": 2010,
      "desc": [
        "Late weekend kick-offs at premier football matches and their possible link to increased levels of alcohol-related ASB and disorder. Government Office for London.",
      ],
      "link": "https://www.researchgate.net/profile/Shane_Johnson5/publication/265083827_Late_weekend_kick-offs_at_premier_football_matches_and_their_possible_link_to_increased_levels_of_alcohol-related_ASB_and_disorder/links/543fadbe0cf2be1758ced83e.pdf",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._05_CROWD_DISORDER, $scope.tags._06_CRIME_DISORDER_VENUES, $scope.tags._08_ALCOHOL]
    },
    {
      "nauthors": "Hall",
      "authors": "Schwarz, E. C., & Hall, S., & Shibli, S.",
      "year": 2010,
      "desc": [
        "Sport Facility Operations Management: A Global Perspective. Oxford, United Kingdom: Butterworth-Heinemann Business Books.",
      ],
      "link": "https://www.taylorfrancis.com/books/9781856178372",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._04_EVACUATION, $scope.tags._05_CROWD_DISORDER, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Zale",
      "authors": "Zale, J.",
      "year": 2009,
      "desc": [
        "Review of The Flaw of Averages by Sam Savage. Risk Analysis, 29(12), 1807-1808.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S., Cooper, W.E., Marciani, L., & McGee, J.A.",
      "year": 2009,
      "desc": [
        "Protecting U.S. Sports Facilities in the 21st Century: The Sport Event Security Aware System. Security Analysis and Risk Management Association (SARMA) Newsletter.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Marciani", // CHECK WITH JUSTIN
      "authors": "Marciani, L., Hall, S., & Finch, B.",
      "year": 2009,
      "desc": [
        "Intercollegiate Athletics Safety and Security – Concerns and Responsibilities in the Post 9/11 Environment. Athletics Administration, Volume 44, No. 2, p. 14-17.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Marciani",
      "authors": "Marciani, L.",
      "year": 2009,
      "desc": [
        "10 Safety and Security Considerations the Right Holder Needs To Consider When Bidding a Sports Event. Sports Destination Management. March/April, 2009, pages 10-16.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._02_FAN_PERCEPTION, $scope.tags._03_STAKEHOLDER_PERCEPTION, $scope.tags._05_CROWD_DISORDER, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._09_BEST_PRACTICES, $scope.tags._10_EMERGENCY_COMMUNICATIONS, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Marciani",
      "authors": "Marciani, L.",
      "year": 2009,
      "desc": [
        "Stadium and Arena Security. Security Technology Executive. Vol 19, No.2, February, 2009, pages 30-33.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._02_FAN_PERCEPTION, $scope.tags._04_EVACUATION, $scope.tags._05_CROWD_DISORDER, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S., Marciani, L., Phillips, D., & Cunningham, T.",
      "year": 2009,
      "desc": [
        "Spectator perceptions of security management at a National Association for Stock Car Auto Racing (NASCAR) event. The Sport Journal, (12) 1, p. 1-7.",
      ],
      "link": "https://go.galegroup.com/ps/anonymous?id=GALE%7CA210520261&sid=googleScholar&v=2.1&it=r&linkaccess=abs&issn=15439518&p=HRCA&sw=w",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._02_FAN_PERCEPTION]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S., Marciani, L., & Cooper, W.E.",
      "year": 2008,
      "desc": [
        "Sport venue security: Planning and preparedness for terrorist-related incidents. Sport Management and Related Topics Journal, Vol. 4, Issue 2, 6-15.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S., Ward, R, Cunningham, T, & Marciani, L.",
      "year": 2008,
      "desc": [
        "Developing a new curriculum in sport security management. Journal of Homeland Security and Emergency Management, Volume 5, Issue 1, Article 16.",
      ],
      "link": "https://www.degruyter.com/view/j/jhsem.2008.5.1/jhsem.2008.5.1.1439/jhsem.2008.5.1.1439.xml",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S., Marciani, L., & Cooper, W.E.",
      "year": 2008,
      "desc": [
        "Emergency management and planning at major sports events. Journal of Emergency Management. January/February 2008, Vol. 6, No.1",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S., Marciani, L., & Cooper, W.E, & Rolen, R.",
      "year": 2007,
      "desc": [
        "Securing sport stadiums in the 21st century: Think security, enhance safety. Homeland Security Institute: Journal of Homeland Security",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S., Marciani, Cooper, W.E., & Rolen, R.",
      "year": 2007,
      "desc": [
        "Introducing a risk assessment model for sport venues. The Sport Journal, (10) 2.",
      ],
      "link": "https://go.galegroup.com/ps/anonymous?id=GALE%7CA170414845&sid=googleScholar&v=2.1&it=r&linkaccess=abs&issn=15439518&p=HRCA&sw=w",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Marciani",
      "authors": "Marciani, L., & Hall, S.",
      "year": 2007,
      "desc": [
        "Securing your sport venues: Systems design for effective sports event security management. Athletic Management, Vol. XIX, No. 5, p. 65-71.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._01_TRAINING, $scope.tags._07_POLICY_EVALUATIONS, $scope.tags._09_BEST_PRACTICES, $scope.tags._11_RISK_MANAGEMENT]
    },
    {
      "nauthors": "Hall",
      "authors": "Hall, S.",
      "year": 2006,
      "desc": [
        "Effective security management of university sport venues. The Sport Journal, (9) 4.",
      ],
      "link": "https://www.cabdirect.org/cabdirect/abstract/20073141280",
      "ctags": [$scope.tags._00_DEFAULT, $scope.tags._09_BEST_PRACTICES]
    },
    {
      "nauthors": "Marciani",
      "authors": "Marciani, Lou, and Bernard, Bob.",
      "year": 2006,
      "desc": [
        "University Security Management: The Risk is Real. The Timing is Critical. Athletics Administration. Volume 41, Number 6, December 2006, pp.28-30.",
      ],
      "link": "",
      "ctags": [$scope.tags._00_DEFAULT]
    },
  ];
});