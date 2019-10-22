app = angular.module('BestPractices', []);

app.filter('slice', function () {
  return function (arr, start, end) {
    return arr.slice(start, end);
  };
});

app.controller('BPctrl', function ($scope) {
  // var i,j,temparray,chunk = 10;
  // for (i=0,j=array.length; i<j; i+=chunk) {
  //     temparray = array.slice(i,i+chunk);
  //     // do whatever
  // } //split array into chunks

  //FUTURE OPTIMIZATION: Instead of splitting the array for page iteration, utilize pointers to the array (START and END) that will shift with each page turn
  $scope.tags = {
    DEFAULT: "VIEW ALL",
    ACCESS_CONTROL: 'Access Control',
    COMMUNICATIONS: 'Communications',
    CREDENTIALING: 'Credentialing',
    CONTRACTED_SERVICES: 'Contracted Services',
    DESIGN_CONSTRUCTION: 'Design/Construction',
    DETECTION_SCREENING: 'Detection/Screening',
    EVENT_STAFFING: 'Event Staffing',
    MEDICAL: 'Medical',
    MONITORING: 'Monitoring',
    REPORTING: 'Reporting',
    SECURITY_DOOR_HARDWARE: 'Security Door and Gate Hardware',
    SITUATIONAL_AWARENESS: 'Situational Awareness',
    SURVEILLANCE_TECH: 'Surveillance Technology',
    TRAINING: 'Training',
    UNIFORMS_EQUIPMENT_ACCESSORIES: 'Uniforms/Equipment Accessories',
    VIDEO: 'Video',
  };
  // $scope.tags_array = Object.keys($scope.tags);
  $scope.corp_list = [{
      corp: 'Athena Security',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate%20Logos/athena_logo.png',
      pdf: null,
      website_text: 'https://www.Athena-Security.com',
      website_link: 'https://www.Athena-Security.com',
      desc: [
        'Early threat detection for Guns, Knives, and Fights through video surveillance feeds.',
      ],
      ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION_SCREENING, $scope.tags.MONITORING, $scope.tags.SITUATIONAL_AWARENESS, $scope.tags.SURVEILLANCE_TECH, $scope.tags.VIDEO]
    }, {
      corp: 'Concentric Security',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/concentric_logo_4_29_o.jpg',
      pdf: null,
      website_text: 'https://vehiclemitigation.com/',
      website_link: 'https://vehiclemitigation.com/',
      desc: [
        'Concentric Security is a turn-key Perimeter Security Solutions Integrator serving sporting venues, government, and commercial organizations. Since 1996 we have delivered the full range of security services including assessments, engineering, construction, and maintenance.',
        'We know your venue is unique. You have different security needs, challenges, stakeholders and technology requirements. This is where we shine. We have seen it all and know there is no one-size-fits-all solution.',
        'Helping stadiums with perimeter security solutions - assessment, engineering, and construction - that is what we do. We look forward to serving you!'
      ],
      ctags: [$scope.tags.DEFAULT, $scope.tags.DESIGN_CONSTRUCTION, $scope.tags.ACCESS_CONTROL]
    },
    {
      corp: 'CHA Consulting, Inc.',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/CHA.jpg',
      pdf: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/Buyers_Guide/cha_companies.pdf',
      website_text: 'http://chacompanies.com/markets/sports/',
      website_link: 'http://chacompanies.com/markets/sports/',
      desc: [
        'CHA is a highly diversified, full service engineering and construction management firm providing a wide range of planning, design and construction services to public, private and institutional clients worldwide. The firm employs over 1,000 people in 42 offices In the US and Canada, and is named among Engineering News-Record’s Top 100 US design firms.',
        'For 60 years, we have served a diverse set of clients including: sports organizations; manufacturing firms; industrial plants; educational institutions; local, county and state governments; federal agencies; transportation agencies; freight rail companies; transit agencies; airports; land developers; banks; law and insurance firms; health care and justice facilities; telecommunications companies; retailers and distributors; construction companies; and architects.',
        'Our wide range of expertise allows us to supply all the engineering, planning, security design, surveying, permitting, environmental, and construction inspection and administration services needed for most projects. This eliminates the need for multiple subcontracts, increasing efficiency and reducing costs.'
      ],
      ctags: [$scope.tags.DEFAULT, $scope.tags.ACCESS_CONTROL, $scope.tags.VIDEO, $scope.tags.DESIGN_CONSTRUCTION],
    },
    {
      corp: 'Qylur',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/qylur.png',
      pdf: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/Buyers_Guide/qylur.pdf',
      website_text: 'www.qylur.com',
      website_link: 'https://www.qylur.com/',
      desc: [
        'Qylur Intelligent Systems is transforming the operational intelligence market through significantly smarter adaptive systems that deliver great user experiences. Qylur develops software and system solutions that are vertically integrated across the entire IIoT/M2M stack and employ social networks of machines, machine learning and human interaction design (M2H). Qylur’s solutions sense-think-act-learn in a variety of markets including sports and entertainment, government and transportation.',
        'The company\'s Qylatron Entry Experience Solution offers guests a fun, respectful and personalized self-service entry process while helping venues to continuously optimize their operations. The Qylatron combines access control, security screening, greeting and brand marketing for 5 guests at a time. The solution has received the US Department of Homeland Security SAFETY Act designation. '
      ],
      ctags: [$scope.tags.DEFAULT, $scope.tags.ACCESS_CONTROL, $scope.tags.DETECTION_SCREENING],
    },
    {
      corp: 'Quantum Secure',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/quantum_secure.png',
      pdf: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/Buyers_Guide/quantum_secure.pdf',
      website_text: 'www.quantumsecure.com',
      website_link: 'https://www.quantumsecure.com/',
      desc: [
        'Quantum Secure, part of HID Global, entered and defined the Physical Identity and Access Management market in 2004 by launching its award-winning Enterprise Software Suite – SAFE™ – to address challenges associated with physical identities lifecycle management (on/off -board, access assignment & revocation, change management, etc.) and the related audit and compliance pressures within diverse and disjointed physical security infrastructure. Through its SAFE Software Suite™, Quantum Secure enables enterprises to integrate multiple physical security systems into a common enterprise infrastructure to automate the lifecycle management for employees, visitors and contractors in order to provide a strong framework for compliance to mitigate risks and reduce operational costs. Our robust integration platform coupled with the unique patented policy and workflow automation engine, manages critical business rules across the physical security access infrastructure resulting in a unified security operation with a common platform to measure key security metrics and management objectives.',
        'Quantum Secure was recently acquired by HID Global, an ASSA ABLOY Group brand and headquartered in San Jose, California with offices throughout the world.',
        'SAFE is an innovative enterprise software suite that reduces risks and lowers costs while increasing compliance by applying business process automation around the management of employees, visitors and contractors.'
      ],
      ctags: [$scope.tags.DEFAULT, $scope.tags.ACCESS_CONTROL, $scope.tags.CREDENTIALING],
    },
    {
      corp: 'DC Rentals',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/dcrentals.jpg',
      pdf: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/Buyers_Guide/dc_rentals.pdf',
      website_text: 'dcrentals.net',
      website_link: 'https://dcrentals.net/',
      desc: ['DC Rentals is a national, multi-faceted communications and audio/video solutions company with over 20 years of industry experience. With a fleet of over 5,000 two-way radios, we can offer communications for an event of any size. In addition to two-way communications, we also offer satellite phones, audio/video equipment, event/security camera rentals and much more. From political campaigns to marathons to charity events, DC Rentals has worked with clients across the nation to fulfill their rental needs. We pride ourselves upon outstanding customer service, reliable state-of-the-art equipment, and competitive pricing. Please contact us at info@dcrentals.net or 781-289-3000 to learn how we can fulfill your unique needs. '],
      ctags: [$scope.tags.DEFAULT, $scope.tags.COMMUNICATIONS, $scope.tags.VIDEO],
    },
    {
      corp: 'Landmark Event Staffing Services',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/LandmarkLogo-300x300.png',
      pdf: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/Buyers_Guide/landmark.pdf',
      website_text: 'landmarkeventstaff.com',
      website_link: 'http://landmarkeventstaff.com/',
      desc: ['Crowd management, security, event staffing and consulting services to the sports, entertainment and convention industries'],
      ctags: [$scope.tags.DEFAULT, $scope.tags.EVENT_STAFFING]
    },
    {
      corp: 'Chesely Brown International',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/chesley_brown.png',
      pdf: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/Buyers_Guide/chesley_brown.pdf',
      website_text: 'www.chesleybrown.com',
      website_link: 'http://www.chesleybrown.com/',
      desc: ['Chesley Brown is a security management company providing security consulting and advisory services. Uniformed officers (armed and unarmed), Command Centers and corporate investigations.'],
      ctags: [$scope.tags.DEFAULT, $scope.tags.CONTRACTED_SERVICES]
    },
    {
      corp: 'Broadband Discovery Systems, Inc.',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/bds.png',
      pdf: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/Buyers_Guide/broadband_discovery_systems.pdf',
      website_text: 'www.broadbanddiscovery.com',
      website_link: 'https://www.broadbanddiscovery.com/',
      desc: ['Broadband Discovery Systems (BDS) is a technology innovation company that has created groundbreaking, intelligent physical security, forensics and access control solutions that offer unique event detection and assessment capabilities for the marketplace. BDS technology is U.S. Government vetted and provides intelligent event detection by delivering actionable assessment information to users in commercial security, law enforcement, defense and military markets. BDS’ current and future generation software products support global safety and security initiatives through the development and delivery of leading edge sensor technology that can intelligently alleviate the risk of attacks.',
        'Founded in 2006, BDS focuses its development efforts on the goal of delivering the most cost effective and highest quality sensor technology and maintains control of  its core technologies in order to drive technical innovation. The Company currently has a strong intellectual property pipeline. Today, BDS technology is being used in a variety of sensor applications, automated threat assessment systems and integrated into system-of-systems products. BDS is partnered with systems integrators and U.S. government agencies providing commercial and public-sector applications, such as: access control, checkpoint security, perimeter protection, explosive device discovery and order protection, among others.',
        'RONIN is the worlds first intelligent threat detection platform. RONIN is an easy to operate smart walk through metal detector offering threat analytics, location specific threat detection, reduced operational costs and unmatched patron throughput.',
        'Proprietary sensors and signal processing algorithms create the most cutting edge threat detection system available on the market today. Passive scanning automatically pinpoints the location of a threat item on the patron’s front side, backside, bag or cavity; even when in a group.'
      ],
      ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION_SCREENING, $scope.tags.VIDEO]
    },
    {
      corp: 'CEIA USA',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/CEIA USA.jpg',
      pdf: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/Buyers_Guide/ceia_final_2.pdf',
      website_text: 'www.ceia-usa.com',
      website_link: 'http://www.ceia-usa.com/',
      desc: ['CEIA is a world leading manufacturing company specialized in the design, engineering and production of Metal Detectors and Electromagnetic Inspection Devices. CEIA USA offers a broad range of simple, fast and effective metal detection and security screening solutions to improve fan safety and game-day experience. CEIA USA provides nationwide sales, service and customer support to customers in North America. Dynamic solutions and exceptional service are the foundation of CEIA USA’s commitment to customer satisfaction. ISO 9001 Certified, GSA Contract Holder and DHS SAFETY Act Certified.'],
      ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION_SCREENING]
    },
    {
      corp: 'Rapiscan Systems',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/rapiscansystems_logo.png',
      pdf: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/Buyers_Guide/rapiscan_systems.pdf',
      website_text: 'www.rapiscansystems.com',
      website_link: 'https://www.rapiscansystems.com/',
      desc: ['As the world’s leading security screening provider, Rapiscan Systems provides state of the art products, solutions and services that meet our customers’ most demanding threat detection needs while improving operational efficiency. Since 1993, we have been a proud and trusted partner of government agencies and private security operations around the world. Rapiscan offers a broad portfolio of products and solutions to meet all security screening needs.',
        'Rapiscan Systems internationally recognized Metor metal detectors have been in development since the 1960s, evolving into the intelligent, cost-effective solutions of today. These devices offer outstanding reliability, ease-of-use, and superior detection performance along with innovations commonly used in the industry today. ',
        'The NCS4 Lab Tested Metor 6WP is a versatile, state-of-the-art metal detector that combines advanced metal detection technology with an appealing, but practical design. The Metor 6WP is a lightweight, easy to carry unit which requires no tools to assemble within minutes, making it an excellent choice for temporary and permanent installations both indoors and outdoors depending on your application. '
      ],
      ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION_SCREENING]
    },
    {
      corp: 'Cleveland Electric Laboratories',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/ClevelandElectricLaboratories.png',
      pdf: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/Buyers_Guide/cleveland_electric_labs.pdf',
      website_text: 'www.clevelandelectriclabs.com',
      website_link: 'http://www.clevelandelectriclabs.com/',
      desc: ['FiberStrike® will detect and locate any attempts to cut, break, open, tamper, or intrude any secure area. Additional advantages include the passive nature of each sensor with no need for power at any sensor location, immunity to environmental problems that  plague electrically-based sensors, and the ability to network virtually any number of sensors over nonconductive optical fiber into a single monitoring system that can be tens of kilometers removed from the sensing area.',
        'FiberStrike® fiber optic interlock switches are the most advanced solution for monitoring the status of virtually any access portal (manholes, hand holes, doorways, vaults and power grids) today. Benefiting from the nearly limitless working distances allowed by fiber optics, these interlock switches can be networked over a wide perimeter while taking advantage of existing standard communication fiber networks.  ',
        'Cleveland Electric Laboratories (CEL) is a 97-year-old innovative sensing company that serves customers nationally & internationally. Our FiberStrike family of sensor products addresses a host of common weaknesses for three primary areas: Security; Structural Health Monitoring & Leak Detection. '
      ],
      ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION_SCREENING, $scope.tags.MONITORING]
    },
    {
      corp: 'TekConnX',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/12461857-tekconnx.png',
      pdf: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/Buyers_Guide/tekconnx.pdf',
      website_text: 'www.tekconnx.com',
      website_link: 'https://www.tekconnx.com/',
      desc: ['TekConnX is dedicated to the design, installation, and integration of 21st Century State of the Art ProActive Deterrent LED Lighting, Safety and Security Solutions that expands the security perimeter beyond the center of the event and into the parking lots. Our integrated solution is Sustainable, Green, HD Cameras, has Solar power capability, (as a failsafe in the event of power outages), embedded analytics that proactively report Smoke, Thermal hazards, (Heat & Fire), Gunshot and Shooter Detection, to name a few. This is the solution that further protects the Human Asset, and the Facilities that gives permissions based views and alerts to event management & staff, Police, security, EMS, fire and rescue solid intelligence BEFORE AND EVENT, not after.. The Benefits are many....Fans feel safer, the cost savings from the energy efficient lighting more than pays for the solution, and the risks of hurt harm and danger and property damage are significantly reduced. Last but not least litigation and associated cost from damage claims can also be reduced .'],
      ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION_SCREENING, $scope.tags.MONITORING, $scope.tags.REPORTING, $scope.tags.SITUATIONAL_AWARENESS, $scope.tags.VIDEO]
    },
    {
      corp: 'Babel Street',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate%20Logos/Primary-Lightbabelstreet.png',
      pdf: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/Buyers_Guide/babel_street2.pdf',
      website_text: 'www.babelstreet.com',
      website_link: 'http://www.babelstreet.com/',
      desc: ['Babel Street, specifically Babel X, is a cloud based collection, search, and analytics platform which monitors publically available open source data on the web, deep and dark web, and social and commercial media sites. Babel X’s multi-lingual and geo-enabled capabilities have been designed to meet the needs of teams, leagues, venues, Intelligence Community, and law enforcement customers by fully leveraging Publicly Available Information. Babel Street provides a tool to manage information in this era of overwhelming quantities that are geographically diverse, in hundreds of languages, and from numerous social media channels. Babel X generates real-time, actionable intelligence by persistently monitoring and simultaneously analyzing multiple data sources through advanced statistical, linguistic, and crowd sourcing techniques.',
        'The platform offers a unique cross-lingual searching capability. Users have the ability to collect, monitor, and search terms in their language of choice and retrieve multi-lingual results on a single pane of glass. Users may also collect, monitor, and search using: keywords, hashtags, language, author, emoji, date/time, and regular expressions. Users can assess items based  on sentiment, significance, reach, popularity, concepts, entities, trends and data type. Additionally, the ability to collaborate within the tool exists in many forms.'
      ],
      ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION_SCREENING, $scope.tags.MONITORING, $scope.tags.SITUATIONAL_AWARENESS]
    },
    {
      corp: 'Unitex Direct, Inc.',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/Unitex.jpg',
      pdf: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/Buyers_Guide/unitex_direct_2.pdf',
      website_text: 'www.unitexdirect.com',
      website_link: 'http://www.unitexdirect.com/',
      desc: ['Since 1992, Unitex Direct has established itself as one of the premier uniform and accessory providers dedicated to the security industry across the USA. We provide a complete uniform package of high quality products with excellent deliveries at the lowest possible cost. Our 19,000 sq. foot warehouse stocks a large assortment of products to meet any security company’s operating needs.'],
      ctags: [$scope.tags.DEFAULT, $scope.tags.UNIFORMS_EQUIPMENT_ACCESSORIES]
    },
    {
      corp: 'Report it com Inc',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/report it logo see it say it.png',
      pdf: null,
      website_text: 'www.reportit.com',
      website_link: 'http://www.reportit.com/',
      desc: ['Founded in 1999 report it® has become the most reputable and trusted leader of anonymous hotline and tip line services. ', 'report it® Crowd Connect is designed for sports and entertainment venues and is ideally suited for soliciting the assistance of the general public for any large organized event. Whether your venue or event is populated by 100 people or 60,000, indoors or outdoors, report it® is the right tool to engage the public and enable attendees to “say something” if they “see something”.', 'The report it® platform helps your event participants instantly engage with Event Management and Security partners. Whether it be safety concerns or customer service comments, report it® alerts the right people at the right time. Programs like “If you See Something, Say Something™” underscore the concept that an alert and engaged public plays a critical role, yet they are confusing and underutilized. If people “see something” at your event that causes concerns, you want to know about it—and fast! report it®'],
      ctags: [$scope.tags.DEFAULT, $scope.tags.REPORTING]
    },
    {
      corp: 'Detex Corporation',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/Detex.jpg',
      pdf: null,
      website_text: 'www.detex.com/sports',
      website_link: 'http://www.detex.com/sports',
      desc: ['Detex manufacturers superior, heavy duty products made to withstand the high use and abuse typically associated with entertainment and amusement facilities, such as sports stadiums, water parks and theme parks. Focused on designing product around easy installation, superior durability and providing a variety of field selectable options, Detex is sure to provide door hardware ideally suited for your ticketing booths, employee side entrances, ADA swing door entrances, receiving doors, and trash removal doors. Other applications might include authorized entry through optical turnstiles, door prop alarms for overhead rollup doors, lockdown systems for main entry doors, and controlled entry and exit systems for exterior gates. Customers are often surprised to learn that Detex manufacturers products suited for most of their life safety and security door hardware applications as well as products for guard tour and integrated door hardware systems.'],
      ctags: [$scope.tags.DEFAULT, $scope.tags.SECURITY_DOOR_HARDWARE]
    },
    {
      corp: 'Advanced OPS International LLC',
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/Advanced_OPS_International_Logo.jpg',
      pdf: null,
      website_text: 'www.advancedopsinternational.com',
      website_link: 'http://www.advancedopsinternational.com/',
      desc: ['Advanced OPS International, LLC manufactures and supplies innovative security products, services, and solutions for private industry, law enforcement, correctional facilities, government agencies, and the military, in the U.S. and around the world. In addition to proprietary Remote Electronically Activated Control Technology (REACT®) in our less-lethal control and restraint products, we also supply industry leading body armor and X-ray/scanning solutions, including walk-through metal detectors, handheld metal detection and whole-body contraband detection systems.”.', 'In addition to providing the best security products and services in the industry, AOI develops customized support plans based on your specific needs. AOI\'s mission is to ensure that your screening sites are operating optimally as they scan your patrons’ bags/parcels and the screening security systems we provide are in top working order.  We will be thinking of you, so you won’t have to be thinking of us.'],
      ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION_SCREENING, $scope.tags.EVENT_STAFFING, $scope.tags.TRAINING]
    },
    {
      corp: 'Kromek',
      website_text: 'www.kromek.com',
      website_link: 'https://www.kromek.com',
      desc: ['Kromek is a radiation detection solutions group with a portfolio of cutting-edge high-resolution products that enable direct materials identification in the security screening, civil nuclear and medical imaging markets.', 'Kromek’s D3S ID is a belt wearable RIID (Radioisotope Identifying Device) that rapidly detects and identifies both gamma and neutron isotopes. Designed with all of the capability of a handheld RIID, the half-pound D3S ID is ideal for the discriminating professional responder yet simple and intuitive enough for anyone to make an accurate and definitive identification. As the only approved RIID from the DARPA SIGMA Program, the D3S ID can also be networked through the SIGMA cloud SaaS to create the ultimate field of radiation threat detection for a stadium, a public event, a city, or anywhere superior isotope detection is needed on the front lines.'],
      ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION_SCREENING, $scope.tags.MONITORING],
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/kromek_corp__1_.jpg',
      pdf: null,
    },
    { ///GET THIS WORKING======================================
      corp: 'Dell EMC',
      website_text: 'www.DellEMC.com/surveillance',
      website_link: 'https://www.DellEMC.com/surveillance',
      desc: ['Surveillance and IoT solutions are evolving at a pace most businesses can’t keep up with. Rapid technology advancements, regulation requirements and government initiatives are forcing the road to quick adoption. Dell EMC is at the forefront of this trend and has built dedicated engineering teams and validation labs, designed to help reduce the risk of surveillance transformation for our customers. Protecting what matters to make the world safer. That’s what inspires our team. Every. Single. Day.'],
      ctags: [$scope.tags.DEFAULT, $scope.tags.VIDEO, $scope.tags.SURVEILLANCE_TECH],
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/dellemc.png',
      pdf: null,
    },
    {
      corp: 'SENGEX LLC',
      website_text: 'www.sengex.com',
      website_link: 'https://www.sengex.com',
      desc: ['Sengex is a leader in large scale cyber and physical threat detection and mitigation. Our security engineering practice develops, integrates and deploys the most complete threat detection, identification, and mitigation solutions in the areas of medical devices, wireless devices, UAV/Drones and weapons, resulting in the removal of targeted threats.'],
      ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION_SCREENING, $scope.tags.MONITORING, $scope.tags.SITUATIONAL_AWARENESS, $scope.tags.TRAINING],
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/Sengex_logo.png',
      pdf: null,
    },
    {
      corp: 'DSA Detection',
      website_text: 'www.dsadetection.com',
      website_link: 'https://www.dsadetection.com/',
      desc: ['DSA Detection manufactures and distributes its own brand of DHS-approved trace detection consumables used in the operation and maintenance of all explosive trace detection (ETD) instruments commercially available. DSA also manufactures X-ray correct inert explosive simulants, IED training aids, and test articles used in training screeners to identify threats and to verify security checkpoint equipment is properly identifying threats. DSA then combines all its products and training expertise into comprehensive and in-depth classroom training for threat recognition and security equipment operation, tailored to meet all levels of detection.'],
      ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION_SCREENING, $scope.tags.SITUATIONAL_AWARENESS, $scope.tags.TRAINING],
      logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate%20Logos/DSALogo_8000x1512_600ppi.jpg',
      pdf: null,
    },
  ]

  //cuts array into seperate arrays based on chunk size for page indexing
  $scope.getMaxPages = function (chunk_size = 10, list_len) {
    try {
      if (list_len < chunk_size) return 1;
      var counter = 0;
      for (let i = 1; i < list_len; i += chunk_size) {
        counter += 1;
      }
    } catch (e) {
      console.log(e);
    }
    return counter;
  }
  $scope.chunk_size = 6;
  $scope.page = {
    active: 1,
    max: $scope.getMaxPages($scope.chunk_size, $scope.corp_list.length),
    flip: (direction) => {
      console.log(direction == -1 ? "dec" : "inc")
      if ($scope.page.active + direction <= $scope.page.max && $scope.page.active + direction >= 1) {
        $scope.page.active += direction;
      }
      console.log($scope.filtered_list.length)
      console.log($scope.page.active)
    },
  }
  $scope.prev = [];
  $scope.$watch('filtered_list.length', (newVal, oldVal) => {
    $scope.page.active = 1;
    $scope.page.max = $scope.getMaxPages($scope.chunk_size, newVal)
  });

});