app = angular.module("AdvisoryCommittees", []);

app.controller("ACctrl", function ($scope) {
  $scope.intercollegiate = [{
      fname: "David",
      lname: "Allison",
      org: "University of Texas",
    },
    {
      fname: "Jeff",
      lname: "Bacon",
      org: "Mid-American Conference",
    },
    {
      fname: "Jamie",
      lname: "Breslin",
      org: "Stanford University",
    },
    {
      fname: "Andrew",
      lname: "Burchfield",
      org: "University of Michigan",
    },
    {
      fname: "Ryan",
      lname: "Cakerice",
      org: "Duke University",
    },
    {
      fname: "Matt",
      lname: "Elliott",
      org: "University of Alabama",
    },
    {
      fname: "Jason",
      lname: "Weaving",
      org: "Boise State University",
    },
    {
      fname: "Sharon",
      lname: "Cessna",
      org: "NCAA",
    },
    {
      fname: "Brian",
      lname: "Cordill",
      org: "Kansas State University",
    },
    {
      fname: "Matt",
      lname: "Davidson",
      org: "University of Nebraska",
    },
    {
      fname: "Scott",
      lname: "Dickson",
      org: "The Ohio State University",
    },
    {
      fname: "James",
      lname: "Entwistle",
      org: "Rochester Institute of Technology",
    },
    {
      fname: "Evan",
      lname: "Feinglass",
      org: "University of Connecticut",
    },
    {
      fname: "Gloria",
      lname: "Graham",
      org: "University of Virginia",
    },
    {
      fname: "Mike",
      lname: "Gregory",
      org: "University of Tennessee",
    },
    {
      fname: "Lee",
      lname: "Harris",
      org: "University of California, Berkley",
    },
    {
      fname: "David",
      lname: "Hensgen",
      org: "University of Texas, El Paso",
    },
    {
      fname: "Orville",
      lname: "Jennings",
      org: "Central Michigan University",
    },
    {
      fname: "Brian",
      lname: "Kelly",
      org: "Southern Methodist University",
    },
    {
      fname: "Keith",
      lname: "Kopinsk",
      org: "Univeristy of Notre Dame",
    },
    {
      fname: "Keri",
      lname: "Luchowski",
      org: "North Coast Athletic Conference",
    },
    {
      fname: "Jason",
      lname: "Meisner",
      org: "Colorado State University",
    },
    {
      fname: "Joe",
      lname: "Monroe",
      org: "University of Kentucky",
    },
    {
      fname: "Jeff",
      lname: "Morgan",
      org: "University of Central Florida",
    },
    {
      fname: "David",
      lname: "Oliver",
      org: "Western Kentucky University",
    },
    {
      fname: "Hatcher",
      lname: "Parnell",
      org: "University of Southern California",
    },
    {
      fname: "Drew",
      lname: "Pittman",
      org: "Baylor University",
    },
    {
      fname: "Nicholas",
      lname: "Scull",
      org: "Georgia Southern University",
    },
    {
      fname: "Jeff",
      lname: "Steele",
      org: "Auburn University",
    },
    {
      fname: "Jeffery",
      lname: "Stoll",
      org: "Grand Valley State University",
    },
    {
      fname: "Liz",
      lname: "Woollen",
      org: "University of Oklahoma",
    },

  ];
  $scope.interscholastic = [{
      fname: "Raymond",
      lname: "Barnhart",
      org: "Maryville Police Department",
    },
    {
      fname: "Amy",
      lname: "Benton-Skeens",
      org: "Carmel High School",
    },
    {
      fname: "Brett",
      lname: "Coulter",
      org: "Maryville City Schools",
    },
    {
      fname: "Randy",
      lname: "Councell",
      org: "Cherry Creek Schools",
    },
    {
      fname: "Lamont",
      lname: "Dodson",
      org: "Cleveland Metropolitan School District",
    },
    {
      fname: "Wayne",
      lname: "Folkes",
      org: "Lamar County School District",
    },
    {
      fname: "Guy",
      lname: "Grace",
      org: "Littleton Public Schools",
    },
    {
      fname: "Dale",
      lname: "Hackbarth",
      org: "St. Marks School of Texas",
    },
    {
      fname: "Jay",
      lname: "Hackett",
      org: "Milton Academy",
    },
    {
      fname: "Elliot",
      lname: "Hopkins",
      org: "National Federation High School Act.",
    },
    {
      fname: "Jim",
      lname: "Inskeep",
      org: "Carmel High School",
    },
    {
      fname: "Larry",
      lname: "Johnston",
      org: "Grand Rapids Public Schools",
    },
    {
      fname: "Steve",
      lname: "Krukowski",
      org: "Nassau County Police Department",
    },
    {
      fname: "Arthur",
      lname: "O'Neal",
      org: "Saginaw Public Schools",
    },
    {
      fname: "Kenna",
      lname: "Powell",
      org: "Providence Day School",
    },
    {
      fname: "Ben",
      lname: "Rolens",
      org: "Katy School District",
    },
    {
      fname: "Jack",
      lname: "Sample",
      org: "Nettleton School District",
    },
    {
      fname: "Gary",
      lname: "Stevens",
      org: "Thornton Academy",
    },
    {
      fname: "Lonnie",
      lname: "Tillman",
      org: "Mississippi High School Association",
    },
    {
      fname: "Andre",
      lname: "Walker",
      org: "Houston ISD",
    }

  ];
  $scope.marathon = [{
      fname: "Michael",
      lname: "Finley",
      org: "NCS4",
    },
    {
      fname: "Stuart",
      lname: "Wall",
      org: "Boston Athletic Association",
    },
    {
      fname: "Virginia",
      lname: "Brophy Achman",
      org: "Twin Cities Marathon",
    },
    {
      fname: "George",
      lname: "Banker",
      org: "Army ten-Miler",
    },
    {
      fname: "John",
      lname: "Bertsch",
      org: "Ironman World Championships",
    },
    {
      fname: "Tim",
      lname: "Burkett",
      org: "Louisville Metro Police",
    },
    {
      fname: "Stacy",
      lname: "Embretson",
      org: "Lost Angeles Marathon",
    },
    {
      fname: "Eddie",
      lname: "Grant",
      org: "City of Savannah",
    },
    {
      fname: "Rich",
      lname: "Harshbarger",
      org: "Running USA",
    },
    {
      fname: "Mark",
      lname: "Klukow",
      org: "Minneapolis Police",
    },
    {
      fname: "Shawn",
      lname: "Krizaj",
      org: "Duluth Fire Department",
    },
    {
      fname: "Lou",
      lname: "Marciani",
      org: "NCS4",
    },
    {
      fname: "Patrice",
      lname: "Matamoros",
      org: "Pittsburgh Marathon",
    },
    {
      fname: "Ted",
      lname: "Metellus",
      org: "New York Marathon",
    },
    {
      fname: "Todd",
      lname: "Metro",
      org: "New York Marathon",
    },
    {
      fname: "Wade",
      lname: "Morehead",
      org: "Houston Marathon",
    },
    {
      fname: "Mike",
      lname: "Nishi",
      org: "Chicago Marathon",
    },
    {
      fname: "P.Z.",
      lname: "Pearce",
      org: "RNRSports Medicine",
    },
    {
      fname: "Bill",
      lname: "Roberts",
      org: "Twin Cities Marathon",
    },
    {
      fname: "Ed",
      lname: "Trapp",
      org: "Pittsburgh Police",
    },

  ];
  $scope.psecurity = [{
      fname: "Edgar",
      lname: "Bustamante",
      org: "5 Star Event Services",
    },
    {
      fname: "Juan",
      lname: "Gaytan",
      org: "Monterrey Security",
    },
    {
      fname: "Scott",
      lname: "Gurka",
      org: "G4s Sports Facilities & Events",
    },
    {
      fname: "Ed",
      lname: "Harris",
      org: "BCM Solutions, Inc.",
    },
    {
      fname: "Tom",
      lname: "Hauck",
      org: "Securitas Security Services",
    },
    {
      fname: "Gus",
      lname: "Kontopuls",
      org: "Elite Services",
    },
    {
      fname: "Pete",
      lname: "Kranske",
      org: "Landmark Event Staffing Services",
    },
    {
      fname: "Gordon",
      lname: "Marrin",
      org: "Accurate Event Group",
    },
    {
      fname: "Cory",
      lname: "Meredith",
      org: "Staff Pro",
    },
    {
      fname: "Tom",
      lname: "Smith",
      org: "Argus Event Staffing",
    },
    {
      fname: "Jeff",
      lname: "Spoerndle",
      org: "Whelan Event Services",
    },
    {
      fname: "Anthony",
      lname: "Squeo",
      org: "SPPLUS",
    },
    {
      fname: "Windy",
      lname: "Swetman",
      org: "Swetman Security",
    },
    {
      fname: "Daniel",
      lname: "Tumminello",
      org: "S.A.F.E. Management",
    },
    {
      fname: "Dane",
      lname: "Vontobel",
      org: "Andy Frain Services",
    },

  ];
  $scope.pro = [{
      fname: "John",
      lname: "Ball",
      org: "Pacers Sports & Entertainment",
    },
    {
      fname: "Mike",
      lname: "Bates",
      org: "IndyCar",
    },
    {
      fname: "Steve",
      lname: "Beres",
      org: "Daytona International Speedway",
    },
    {
      fname: "David",
      lname: "Born",
      org: "STAPLES Center",
    },
    {
      fname: "Troy",
      lname: "Brown",
      org: "Cleveland Browns",
    },
    {
      fname: "Vernon",
      lname: "Conaway",
      org: "Maryland Stadium Authority",
    },
    {
      fname: "Joe",
      lname: "Coomer",
      org: "Mercedes-Benz Stadium",
    },
    {
      fname: "Mario",
      lname: "Coutinho",
      org: "Toronto Blue Jays",
    },
    {
      fname: "Sal",
      lname: "DeAngelis",
      org: "Philadelphia Phillies",
    },
    {
      fname: "Danny",
      lname: "DeLorenzi",
      org: "MetLife Stadium",
    },
    {
      fname: "Richard",
      lname: "Fenton",
      org: "Ilitch Holdings",
    },
    {
      fname: "Kevin",
      lname: "Henry",
      org: "Pocono Raceway",
    },
    {
      fname: "Brian",
      lname: "Herbert",
      org: "Cleveland Cavaliers",
    },
    {
      fname: "Jim",
      lname: "Hosfelt",
      org: "Dover International Speedway",
    },
    {
      fname: "Darren",
      lname: "Johnson",
      org: "Detroit Lions",
    },
    {
      fname: "Billy",
      lname: "Lagenstein",
      org: "National Football League",
    },
    {
      fname: "Todd",
      lname: "Letcher",
      org: "Yankee Stadium",
    },
    {
      fname: "Andrew",
      lname: "Maxwell",
      org: "Sporting Kansas City",
    },
    {
      fname: "John",
      lname: "McKay",
      org: "New York Mets",
    },
    {
      fname: "Toby",
      lname: "McSwain",
      org: "Sea Pines",
    },
    {
      fname: "Angie",
      lname: "Nix",
      org: "San Fransisco 49ers",
    },
    {
      fname: "Bill",
      lname: "Squires",
      org: "New York Football Giants",
    },
    {
      fname: "Barry",
      lname: "Stanford",
      org: "AEG Worldwide",
    },
    {
      fname: "Ben",
      lname: "Williams",
      org: "Houston Astros",
    },
    {
      fname: "Paul",
      lname: "Turner",
      org: "AT&T Dallas Cowboys",
    },
  ];



});