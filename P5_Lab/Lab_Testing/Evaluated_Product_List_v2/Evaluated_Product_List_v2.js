app = angular.module('EvaluatedProductList', []);

app.filter('slice', function () {
    return function (arr, start, end) {
        return arr.slice(start, end);
    };
});

app.controller('EPLctrl', function ($scope) {
    // var i,j,temparray,chunk = 10;
    // for (i=0,j=array.length; i<j; i+=chunk) {
    //     temparray = array.slice(i,i+chunk);
    //     // do whatever
    // } //split array into chunks

    //FUTURE OPTIMIZATION: Instead of splitting the array for page iteration, utilize pointers to the array (START and END) that will shift with each page turn
    $scope.tags = {
        DEFAULT: "VIEW ALL",
        FEATURED: "Featured",
        DETECTION: "Detection",
        INCIDENT_MANAGEMENT_REPORTING: "Incident Management/Reporting",
        MEDICAL: "Medical",
        MONITORING: "Monitoring",
        ROBOTICS: "Robotics"
    };
    // $scope.tags_array = Object.keys($scope.tags);
    $scope.corp_list = [
        /* {
            corp: '',
            s_desc: '',
            logo: '',
            pdf: '',
            pdf_text: '',
            desc: [
                '',
            ],
            ctags: [$scope.tags.],
          },   */
        {
            corp: 'Live Earth',
            s_desc: 'Data Analytics and Visualization',
            logo: '//higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/live_earth_logo_RGB_460x200.png',
            pdf: 'https://forms.usm.edu/ncs4/view.php?id=105176',
            pdf_text: 'Technical Report - Live Earth',
            desc: [
                'Live Earth is an Internet of Things (IoT) data analytics and visualization platform developed using advanced GIS mapping software technology on a real-time interactive map.  It is trusted by organizations and agencies around the world to bring time-sensitive information into one visualized platform, helping to drive faster response times, save costs, and better prepare the future with actionable intelligence.',
                'Live Earth was evaluated by a select group of sports safety and security subject matter experts. The collective professional experience of the evaluators encompassed law enforcement for special events and security and operations for professional sports leagues and universities in the United States.'
            ],
            ctags: [$scope.tags.MONITORING, $scope.tags.DETECTION, $scope.tags.INCIDENT_MANAGEMENT_REPORTING]
        },
        {
            corp: 'Cobalt Robotics',
            s_desc: 'Autonomous Security Robotics',
            logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/cobalt.png',
            pdf: 'https://forms.usm.edu/ncs4/view.php?id=104140',
            pdf_text: 'Technical Report - Cobalt Robotics',
            desc: [
                'Cobalt Robotics is an award-winning provider of security services supported by robots. The company’s autonomous indoor robots are remotely managed by the Cobalt Security Operations Center team. By combining the superhuman sensing, unwavering attention, and perfect recall of a robot operating on-site with the warmth, creativity, and face-to-face interaction of a remote security robotics specialist, Cobalt Robotics provides an innovative solution that addresses important operational issues consistently and accurately. The Cobalt Robot is designed for advanced sensing and detection, maximum efficiency, and enabling real-time response to potential security issues. It is equipped to sense a wide range of incident types, including human activity, open doors, leaks, spills, and unusual sounds. Armed with this array of information, Cobalt Specialists can assess situations, reduce false alarms, and flag verified events immediately.',
                'The Cobalt Robot was evaluated by a select group of subject matter experts (SMEs) from the sports safety and security domain.  The evaluators were professionals serving as a Senior Directors professional and collegiate sports facilities in the United States. The collective groups base of experience encompassed collegiate and professional sports, facility and venue management, and major event safety and security operations.'
            ],
            ctags: [$scope.tags.FEATURED, $scope.tags.DETECTION, $scope.tags.MONITORING, $scope.tags.ROBOTICS],
        },
        {
            corp: 'LiveSky™ Secure Plus Tether-Powered UAS',
            s_desc: 'UAS Surveillance',
            logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/HoverflyLogo2014WhiteBack__1_.jpg',
            pdf: 'https://forms.usm.edu/ncs4/view.php?id=93494',
            pdf_text: 'Technical Report - Hoverfly Technologies',
            desc: [
                'The LiveSky Tether-Powered Unmanned Aerial System (UAS) is next generation aerial technology providing persistent “eyes in the sky” observation to monitor and deliver actionable intelligence to all stakeholders. Ideal for intelligence, surveillance and reconnaissance (ISR) operations where there are mass gatherings of people, LiveSky features unlimited flight time, simple 5-button operation, precision landing and network interoperability for distributed real time video feeds. LiveSky uses high definition electro-optical pan, tilt, zoom and infrared cameras to provide a persistent aerial view at up to 200’, allowing safety and security personnel to see danger from vantage points that were not available before.',
                'The LiveSky Secure Plus Tether-Powered UAS was evaluated by a select group of subject matter experts (SMEs) from the sports security domain. This group consisted of professionals from public safety, sports and athletic facility operations, and information technology. The collective group of SMEs had a base of experience that encompassed collegiate and professional sports, and major event safety and security operations.'
            ],
            ctags: [$scope.tags.DEFAULT, $scope.tags.MONITORING],
        },
        {
            corp: 'FiberStrike®™',
            s_desc: 'Intrusion detection sensors',
            logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/cel.jpg',
            pdf: 'https://forms.usm.edu/ncs4/view.php?id=78256',
            pdf_text: 'Technical Report - FiberStrike®',
            desc: [
                'FiberStrike® fiber optic interlock switches are a solution created for intrusion detection at access portals such as doorways, vaults, hatchways, manholes and hand-holes. FiberStrike® will detect and locate attempts to cut, break, open, tamper, or intrude into integrated areas.  Additionally, sensors are passive and do not require power at the switch. The system can network sensors over non-conductive optical fiber into a single monitoring system that can be tens of kilometers removed from the sensing area. The FiberStrike® system includes patented fiber optic sensors, software, and an interrogator capable of integrating surveillance technology into the intrusion detection system.',
                'The FiberStrike® System was evaluated by a select group of subject matter experts (SMEs) from the sports security domain. This group consisted of professionals from public safety, sports and athletic facility operations, and information technology. The collective group of SMEs had a base of experience that encompassed collegiate and professional sports, and major event safety and security operations. '
            ],
            ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION],
        },
        {
            corp: 'SmartShield™',
            s_desc: 'Radiation Detection',
            logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/Passport_Long.png',
            pdf: 'https://forms.usm.edu/ncs4/view.php?id=76814',
            pdf_text: 'Technical Report - SmartShieldTM',
            desc: [
                'The SmartShield™ system is designed to detect radiological threats. The system provides an interface for the G300 gamma radiation detector and smartphone technology, supporting both local and wide-area networking functionality. The SmartShieldTM product has three components: a hand held or belt clipable sized gamma radiation detector, a smart phone with embedded software, and a Base Control Unit (BCU) laptop that runs SmartShieldTM and links individual detectors to a single platform.',
                'The SmartShield™ system was evaluated by a select group of subject matter experts (SMEs) from the sports security and radiological response domains. The group consisted of professionals from public safety, nuclear operations, emergency management and radiological response. The collective group of SMEs had a base of experience that encompassed sporting and major event safety and security operations.',
            ],
            ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION],
        },
        {
            corp: 'Vapor Wake® Explosive Detection Canines',
            s_desc: 'Explosive Detection Canines (ITC Security Partners replacement)',
            logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/itc.jpg',
            pdf: 'https://forms.usm.edu/ncs4/view.php?id=44045',
            pdf_text: 'Technical Report – Vapor Wake®',
            desc: [
                'ITC Vapor Wake® Canines and Handlers offer mobile explosive detection teams for sport events and other large gatherings of people. Unlike traditional explosive detection canines which smell point sources, Vapor Wake® canines are trained to survey the air to detect and follow the “wake” left behind by explosives. Vapor Wake® is a patented technology, patent number 8931327, developed by Auburn University.',
                'Specific capabilities and functions of Vapor Wake® canines were observed around the three functional areas of Guest Experience, Operational Performance and Efficiency, and Range of Detection Capabilities. The evaluation was conducted by a team of sport security professionals assembled together at AMK9 Academy and a major sporting event. See the full NCS4 report for a complete breakdown and analysis, as well as evaluator comments and suggestions.'
            ],
            ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION],
        },
        {
            corp: 'Metor 6WP Walk Through Metal Detector (WTMD)',
            s_desc: 'Metal Detection and Mobile Trace (previously Safran Morpho)',
            logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/rapiscansystems_logo.png',
            pdf: 'https://forms.usm.edu/ncs4/view.php?id=37518',
            pdf_text: 'Technical Report - Rapiscan Systems',
            desc: [
                'The Metor 6WP WTMD is manufactured by Rapiscan Systems and is used in security screening applications such as airport security, correctional facilities, government buildings, and public events.',
            ],
            ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION],
        },
        {
            corp: 'RONIN Threat Detection Platform - Metal Detection',
            s_desc: 'Metal Detection',
            logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/bds.png',
            pdf: 'https://forms.usm.edu/ncs4/view.php?id=69030',
            pdf_text: 'Technical Report – RONIN Threat Detection Platform',
            desc: [
                'RONIN Threat Detection Platform The RONIN Threat Detection Platform is a smart walk through metal detector offering a threat analytics platform, software dashboard, location specific threat detection, reduced operational costs and high-volume patron throughput. Non-invasive passive scanning automatically pinpoints the location of a threat item on the patron’s front side, backside, bag or cavity; even when in a group. Data driven software based alerts provide assessment and classification Intel of detected threat event and can be pushed over the cloud to smart phone, tablet, or desktop. RONIN also supports multi-sensor fusion and assessments from sensor types such as seismic, acoustic, RF, ultrasound, thermal, RADAR, millimeter wave, chemical detectors, biometrics and more.',
                'The RONIN Threat Detection Platform was evaluated by a select group of subject matter experts (SMEs) from the sports security domain. This group consisted of professionals from public safety, facility operations and emergency management. The collective group of SMEs had a base of experience that encompassed collegiate and professional sporting and major event safety and security operations.'
            ],
            ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION],
        },
        {
            corp: 'Qylatron Entry Experience Solution – Security Screening',
            s_desc: 'Security Screening',
            logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/qylur.png',
            pdf: 'https://forms.usm.edu/ncs4/view.php?id=37982',
            pdf_text: 'Technical Report - Qylur Security Systems',
            desc: [
                'Qylur Security Systems is a US DHS Safety Act designated company and the manufacturer of the Qylatron Entry Experience Solution, a fully integrated security screening solution designed for a wide range of applications such as military and government installations, event venues, and other venues of mass gathering.',
                'This product was evaluated around eight functional areas including Core Security & Detection Capabilities and Serviceability. Most functions performed at or above the levels considered to fully meet each requirement. See the full NCS4 report for a complete breakdown and analysis, as well as evaluator comments and suggestions.'
            ],
            ctags: [$scope.tags.DEFAULT, $scope.tags.DETECTION],
        },
        {
            corp: 'NaviGate – Incident Management<',
            s_desc: 'Incident Management',
            logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/lauren-innovations-logo_0.png',
            pdf: 'https://forms.usm.edu/ncs4/view.php?id=41526',
            pdf_text: 'Technical Report - NaviGate',
            desc: [
                'NaviGate is a web-based system manufactured by Lauren Innovations that can be used to collect, manage and apply an organization’s unique critical information. NaviGate has the US DHS Safety Act Designation qualifying it as an Anti-Terrorism Level Technology.',
                'The evaluation requirements centered around functional areas such as Incident management and Learning management. This product performed at or above the levels considered, by the evaluators, to fully meet each requirement. See the full NCS4 report for a complete breakdown and analysis, as well as evaluator comments and suggestions.'
            ],
            ctags: [$scope.tags.DEFAULT, $scope.tags.INCIDENT_MANAGEMENT_REPORTING],
        },
        {
            corp: 'Griffin Logistics Tramedic™ Medical Kit',
            s_desc: 'Medical Kit',
            logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/tramedic_logo_copy_0.png',
            pdf: 'https://forms.usm.edu/ncs4/view.php?id=36920',
            pdf_text: 'Technical Report - Tramedic™ Medical Kit ',
            desc: [
                'Griffin Logistics provides comprehensive solutions to a broad range of medical, disaster relief, and humanitarian aid initiatives worldwide. Medical response teams are an important part of event operations planning and risk management. The goal of TRAMEDIC™ is real life saving treatments in regular people’s hands because sometimes injuries are so serious you don’t have time to wait for help. TRAMEDIC™ by “incorporating a mix of intuitive products, simple instructions and effective training videos to ensure your organization are prepared for the worst.”',
                'TRAMEDIC™ was evaluated by a select group of subject matter experts from the sports security management domain. This group consisted of professionals from law enforcement, public safety and emergency medical services. The evaluation process was divided into three separate segments, Training Portal, Feasibility, and Kit Contents and Instructions. See the full NCS4 report for a complete breakdown and analysis, as well as evaluator comments and suggestions.'
            ],
            ctags: [$scope.tags.DEFAULT, $scope.tags.MEDICAL],
        },
        {
            corp: 'Babel X Platform',
            s_desc: 'Social Media Monitoring',
            logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/babel_street.jpg',
            pdf: 'https://forms.usm.edu/ncs4/view.php?id=50634',
            pdf_text: 'Technical Report – Babel X Platform',
            desc: [
                'Babel Street, specifically Babel X, is a cloud based collection, search, and analytics platform which monitors publicly available open source data on the web, deep and dark web, and social and commercial media sites. Babel X’s multi-lingual and geo-enabled capabilities have been designed to meet the needs of teams, leagues, venues and a range of customers by fully leveraging Publicly Available Information. Babel X generates real-time, actionable intelligence by persistently monitoring and simultaneously analyzing multiple data sources through advanced statistical, linguistic, and crowd sourcing techniques.',
                'The Babel X Platform was evaluated by a select group of subject matter experts (SMEs) from the sports security and crisis management domain. This group consisted of professionals from public safety, facility operations and crisis management. The collective group of SMEs had a base of experience that encompassed collegiate and professional sporting and major event safety and security operations.'
            ],
            ctags: [$scope.tags.DEFAULT, $scope.tags.MONITORING],
        },
        {
            corp: 'Avigilon',
            s_desc: 'Surveillance',
            logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/avigilon_logos.png',
            pdf: 'https://forms.usm.edu/ncs4/view.php?id=39613',
            pdf_text: 'Technical Report - Avigilon',
            desc: [
                'The Avigilon High Definition Video System represents the next important step in delivering high quality, high resolution images for detection and forensic purposes in a security environment. These systems not only capture video images but also provide enhanced detailed information on objects, persons, and vehicles within the field of view of the cameras.',
                'This product was observed around four functional areas including Capability, Usability, Deployability, and Maintainability. See the full NCS4 report for a complete breakdown and analysis, as well as evaluator comments and suggestions.'
            ],
            ctags: [$scope.tags.DEFAULT, $scope.tags.MONITORING],
        },
        {
            corp: 'Force Protection Alert Tool (FPAT)',
            s_desc: 'Alert Tool',
            logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/radiance_technologies.png',
            pdf: 'https://forms.usm.edu/ncs4/view.php?id=38684',
            pdf_text: 'Technical Report - Radiance Technologies',
            desc: [
                'The Force Protection Alert Tool is under development by Radiance Technologies Inc. The FPAT is an outgrowth of previous research for a system designed to provide threat alerts for military applications. Radiance Technologies is developing private sector applications such as sports and special events.',
                'This product was observed and evaluated around the two functional areas of Alerting and Usability. The system’s ability to trigger alerts with respect to a defined criterion and in a defined geographical area were very valuable enhancements to situational awareness. See the full NCS4 report for a complete breakdown and analysis, as well as evaluator comments and suggestions.'
            ],
            ctags: [$scope.tags.DEFAULT, $scope.tags.MONITORING],
        },
        {
            corp: 'SAFE Sports and Events Access Manager',
            s_desc: 'Access Management',
            logo: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Corporate Logos/quantum_secure.png',
            pdf: 'https://forms.usm.edu/ncs4/view.php?id=73873',
            pdf_text: 'Technical Report - SAFE Sports and Events Access Manager',
            desc: [
                'Quantum Secure’s SAFE Sports and Events Access Manager enables secure and rapid entry to stadiums or other secure venues providing a high-quality, high-security customer experience for temporary or limitedengagement events. This mobile-app solution removes the need to rely on clipboards and lists to manage contractors, vendors, volunteers and thousands of other non-ticket holders who need temporary access to venues. The solution also integrates with IT systems and multiple handheld devices for swift, accurate real-time validation and immediate onboarding and provisioning for a variety of identity types based on each identity’s appropriate access permissions. Additionally, the solution records identity access logs to track key operational and security metrics and streamline compliance processes.',
                'The SAFE Sports and Events Access Manager was evaluated by a select group of subject matter experts (SMEs) from the sports security domain. This group consisted of professionals from public safety, facility operations and emergency management. The collective group of SMEs had a base of experience that encompassed collegiate and professional sporting and major event safety and security operations.'
            ],
            ctags: [$scope.tags.DEFAULT, $scope.tags.MONITORING],
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