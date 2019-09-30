angular.module("myApp", []).controller("newsCtrl", function ($scope) {

  $scope.newslist = [{
      "date": "09/26/2019",
      "link": "https://www.usm.edu/news/2019/release/ncs4-interpol-honor-graduating-class.php",
      "img": "https://www.usm.edu/news/2019/images/project-stadia-graduation.jpg",
      "title": "NCS4 and INTERPOL Honor First Graduating Class of Project Stadia in Qatar"
    },
    {
      "title": "Parkland Shooting Survivor Discusses Interscholastic Safety with NCS4 Researchers",
      "link": "https://www.usm.edu/news/2019/release/parkland-shooting-survivor-discusses-safety.php",
      "date": "9/20/2019",
      "img": null
    }, {
      "title": "Distinguished Leadership Award to be Named in Honor of Milton E. Ahlerich",
      "link": "https://www.ncs4.com/aboutncs4/news/distinguished-leadership-award-to-be-named-in-honor-of-milton-e-ahlerich",
      "date": "7/23/2019",
      "img": "https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Pictures/Milt.jpg"
    },
    {
      "title": "Professionals to Receive Recognition during National Sports Security Conference",
      "link": "https://www.ncs4.com/aboutncs4/news/professionals-to-receive-recognition-during-national-sports-security-conference",
      "date": "7/2/2019",
      "img": null
    }, {
      "title": "Axis Communications Senior Director To Be Presented With Sports Security Innovator Award",
      "link": "https://www.ncs4.com/aboutncs4/news/axis-communications-senior-director-to-be-presented-with-sports-security-innovator-award",
      "date": "6/27/2019",
      "img": "https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/About/NEWS/Scott-Dunn-security-innovator-award-887x488.jpg"
    }, {
      "title": "Sport Facilities To Receive Recognition During National Sports Security Conference",
      "link": "https://www.ncs4.com/aboutncs4/news/sport-facilities-to-receive-recognition-during-national-sports-security-conference",
      "date": "6/27/2019",
      "img": "https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/About/NEWS/NCS42019logo_LARGE.jpg"
    }, {
      "title": "NFL’s SVP And Chief Of Security To Be Honored With ‘Champion Of Change’ Award",
      "link": "https://www.ncs4.com/aboutncs4/news/nfls-svp-and-chief-of-security-to-be-honored-with-champion-of-change-award",
      "date": "6/27/2019",
      "img": "https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/About/NEWS/Lanier.jpg"
    }, {
      "title": "Emerging Industry Leader’s To Receive Recognition During National Sports Security Conference",
      "link": "https://www.ncs4.com/aboutncs4/news/emerging-industry-leaders-to-receive-recognition-during-national-sports-security-conference",
      "date": "6/27/2019",
      "img": null
    }, {
      "title": "John King To Be Honored With Lifetime Achievement Award",
      "link": "https://www.ncs4.com/aboutncs4/news/john-king-to-be-honored-with-lifetime-achievement-award",
      "date": "6/27/2019",
      "img": "https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/About/NEWS/John_King_photo.jpg"
    }, {
      "title": "Dodd Presented With Distinguished Leadership Award At National Sports Safety And Security Conference & Exhibition",
      "link": "https://www.ncs4.com/aboutncs4/news/dodd-presented-with-distinguished-leadership-award-at-national-sports-safety-and-security-conference",
      "date": "6/27/2019",
      "img": "https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/SubPages/About/NEWS/Dodd.jpg"
    }, {
      "title": "National Interscholastic Summit Addresses School Safety and Security Issues",
      "link": "https://www.usm.edu/news/2019/release/national-interscholastic-summit-addresses-school-safety-and-security-issues-0.php",
      "date": "03/12/2019",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/Katy Stadium.jpg"
    },
    {
      "title": "ESPN Analyst to Keynote NCS4 Commercial Sports and Entertainment Facilities Summit",
      "link": "https://www.usm.edu/news/2018/release/espn-analyst-keynote-ncs4-commercial-sports-and-entertainment-facilities-summit.php",
      "date": "12/18/2018",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/article_portrait/Jay Bilas Headshot.JPG"
    },
    {
      "title": "USMs National Center for Spectator Sports Safety and Security Signs International Training Agreement in Advance of 2022 World Cup",
      "link": "https://www.usm.edu/news/2018/release/usm-s-national-center-spectator-sports-safety-and-security-signs-international-training-agre.php",
      "date": "12/05/2018",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "NCS4/INTERPOL Training Course Addresses Evacuation  Challenges for International Sporting Events",
      "link": "https://www.usm.edu/news/2018/release/ncs4interpol-training-course-addresses-evacuation-challenges-international-sporting-events.php",
      "date": "10/11/2018",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/STADIA Sport & Security Training_POSTER_1[1].jpg"
    },
    {
      "title": "National Marathon Safety and Security Summit Set for Dec. 11-13",
      "link": "https://www.usm.edu/news/2018/release/national-marathon-safety-and-security-summit-set-dec-11-13.php",
      "date": "10/09/2018",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/article_portrait/Reid.jpg"
    },
    {
      "title": "Senior Level Public Safety Officials Attend NCS4 Sport Event  Risk Management Course in New York City",
      "link": "https://www.usm.edu/news/2018/release/senior-level-public-safety-officials-attend-ncs4-sport-event-risk-management-course-new-york.php",
      "date": "10/02/2018",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/risk management.jpg"
    },
    {
      "title": "Professionals to Receive Recognition during National Sports Security Conference",
      "link": "https://www.usm.edu/news/2018/release/professionals-receive-recognition-during-national-sports-security-conference-2.php",
      "date": "06/27/2018",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "Sport Facilities to Receive Recognition during National Sports Security Conference",
      "link": "https://www.usm.edu/news/2018/release/sport-facilities-receive-recognition-during-national-sports-security-conference.php",
      "date": "06/25/2018",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "Industry Leaders Under 40 to Receive Recognition during National Sports Security Conference",
      "link": "https://www.usm.edu/news/2018/release/industry-leaders-under-40-receive-recognition-during-national-sports-security-conference-0.php",
      "date": "06/22/2018",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "National Hockey Leagues Cunningham Receives Lifetime Achievement Award",
      "link": "https://www.usm.edu/news/2018/release/national-hockey-league-s-cunningham-receives-lifetime-achievement-award.php",
      "date": "06/19/2018",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "Security Director Andrea Cunningham Receives Champion of Change Award",
      "link": "https://www.usm.edu/news/2018/release/security-director-andrea-cunningham-receives-champion-change-award.php",
      "date": "06/13/2018",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/article_portrait/Andreas Profile.jpg"
    },
    {
      "title": "Peter Ciaccia to Receive Leadership Award at NCS4 Conference",
      "link": "https://www.usm.edu/news/2018/release/peter-ciaccia-receive-leadership-award-ncs4-conference.php",
      "date": "06/11/2018",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/article_portrait/Peter_Ciaccia_CP photo.jpg"
    },
    {
      "title": "NCS4/INTERPOL Training Course Addresses Challenges for Major International Sporting Events",
      "link": "https://www.usm.edu/news/2018/release/ncs4interpol-training-course-addresses-challenges-major-international-sporting-events.php",
      "date": "04/19/2018",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/Lou at Interpol.jpg"
    },
    {
      "title": "USMs National Sports Security Center Receives Endowment",
      "link": "https://www.usm.edu/news/2018/release/usm-s-national-sports-security-center-receives-endowment.php",
      "date": "03/23/2018",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/Lou and donation.jpeg"
    },
    {
      "title": "National Sports Security Laboratory Evaluates Emerging Technologies",
      "link": "https://www.usm.edu/news/2018/release/national-sports-security-laboratory-evaluates-emerging-technologies.php",
      "date": "03/14/2018",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/drone.jpeg"
    },
    {
      "title": "University of Floridas Chief of Police Receives Safety and Security Champion of Change Award",
      "link": "https://www.usm.edu/news/2018/release/university-florida-s-chief-police-receives-safety-and-security-champion-change-award.php",
      "date": "01/23/2018",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/champion.jpeg"
    },
    {
      "title": "NFL Chief of Security to Speak at Safety and Security Summits",
      "link": "https://www.usm.edu/news/2017/release/nfl-chief-security-speak-safety-and-security-summits.php",
      "date": "12/05/2017",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/article_portrait/lanier - chief.jpg"
    },
    {
      "title": "Safety and Security Summits To Address Mass Shooting in Las Vegas",
      "link": "https://www.usm.edu/news/2017/release/safety-and-security-summits-address-mass-shooting-las-vegas.php",
      "date": "11/15/2017",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "International Experts Meet on Enhancing Sporting Events Security during NCS4/INTERPOL Training Course",
      "link": "https://www.usm.edu/news/2017/release/international-experts-meet-enhancing-sporting-events-security-during-ncs4interpol-training-c.php",
      "date": "09/14/2017",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/Interpol 1.jpg"
    },
    {
      "title": "Grand Opening of the National Sport Security Laboratorys  Research, Training and Operations Center",
      "link": "https://www.usm.edu/news/2017/release/grand-opening-national-sport-security-laboratory-s-research-training-and-operations-center.php",
      "date": "09/05/2017",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/lab ribbon.JPG"
    },
    {
      "title": "National Marathon Safety and Security Summit set for Dec. 5-7",
      "link": "https://www.usm.edu/news/2017/release/national-marathon-safety-and-security-summit-set-dec-5-7.php",
      "date": "08/29/2017",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/2017 Marathon Banner.jpg"
    },
    {
      "title": "NCS4 Partners with INTERPOL for New Sports Security Course",
      "link": "https://www.usm.edu/news/2017/release/ncs4-partners-interpol-new-sports-security-course.php",
      "date": "08/21/2017",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/ncs4 interpol.jpg"
    },
    {
      "title": "U.S. Olympic Committees Buendorf to Receive Award at National Sports Security Conference",
      "link": "https://www.usm.edu/news/2017/release/us-olympic-committee-s-buendorf-receive-award-national-sports-security-conference.php",
      "date": "06/21/2017",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/LarryBuendorf_print_1.jpg"
    },
    {
      "title": "Facilities to Receive Recognition during National Sports Security Conference",
      "link": "https://www.usm.edu/news/2017/release/facilities-receive-recognition-during-national-sports-security-conference-2.php",
      "date": "06/12/2017",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/Conference Banner 2017.jpg"
    },
    {
      "title": "NCS4 Announces Certified Sport Venue Staff (CSVS) Certification",
      "link": "https://www.usm.edu/news/2017/release/ncs4-announces-certified-sport-venue-staff-csvs-certification.php",
      "date": "04/20/2017",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/CSVS_v4.jpg"
    },
    {
      "title": "National Interscholastic Athletics Safety and Security Summit Set for March 28-30",
      "link": "https://www.usm.edu/news/2017/release/national-interscholastic-athletics-safety-and-security-summit-set-march-28-30.php",
      "date": "02/09/2017",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/2017 Interscholastic Banner.jpg"
    },
    {
      "title": "National Marathon Safety and Security Summit set for Dec. 12-14",
      "link": "https://www.usm.edu/news/2016/release/national-marathon-safety-and-security-summit-set-dec-12-14-0.php",
      "date": "11/21/2016",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/2016 Marathon Banner_1.jpg"
    },
    {
      "title": "National Center for Spectator Sports Safety and Security  Achieves ANSI Accreditation",
      "link": "https://www.usm.edu/news/2016/release/national-center-spectator-sports-safety-and-security-achieves-ansi-accreditation.php",
      "date": "11/17/2016",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/article_portrait/CSSP-mark_1.jpg"
    },
    {
      "title": "National Marathon Safety and Security Summit set for Dec. 12-14",
      "link": "https://www.usm.edu/news/2016/release/national-marathon-safety-and-security-summit-set-dec-12-14.php",
      "date": "08/17/2016",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/2016 Marathon Banner.jpg"
    },
    {
      "title": "Miller Receives Leadership Award at National Sports Safety and Security Conference",
      "link": "https://www.usm.edu/news/2016/release/miller-receives-leadership-award-national-sports-safety-and-security-conference.php",
      "date": "07/14/2016",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/Jeff Miller.jpg"
    },
    {
      "title": "Industry Leaders Under 40 to Receive Recognition during Sports Security Conference",
      "link": "https://www.usm.edu/news/2016/release/industry-leaders-under-40-receive-recognition-during-sports-security-conference.php",
      "date": "06/23/2016",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/NCS4 AZ_1_2.jpg"
    },
    {
      "title": "Facilities to Receive Recognition during National Sports Security Conference",
      "link": "https://www.usm.edu/news/2016/release/facilities-receive-recognition-during-national-sports-security-conference-1.php",
      "date": "06/10/2016",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/NCS4 AZ_1_0.jpg"
    },
    {
      "title": "NCS4 Hosts Crowd Safety and Risk Analysis Workshop",
      "link": "https://www.usm.edu/news/2016/release/ncs4-hosts-crowd-safety-and-risk-analysis-workshop.php",
      "date": "05/18/2016",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/ncs4 workshop.jpg"
    },
    {
      "title": "National Marathon Safety and Security Summit set for Dec. 8-10",
      "link": "https://www.usm.edu/news/2015/release/national-marathon-safety-and-security-summit-set-dec-8-10.php",
      "date": "11/17/2015",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/Marathon Summit Banner.jpg"
    },
    {
      "title": "Carmel Becomes First High School in Nation to Attain Safety and Security Designation",
      "link": "https://www.usm.edu/news/2015/release/carmel-becomes-first-high-school-nation-attain-safety-and-security-designation.php",
      "date": "10/12/2015",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/Carmel high ncs4.jpeg"
    },
    {
      "title": "NCS4 Awards Indiana University Safety and Security Designation",
      "link": "https://www.usm.edu/news/2015/release/ncs4-awards-indiana-university-safety-and-security-designation.php",
      "date": "09/01/2015",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/SESA_logo4c.jpg"
    },
    {
      "title": "NCS4 Launches TOPVenue, a Software System for Venues and Events",
      "link": "https://www.usm.edu/news/2015/release/ncs4-launches-topvenue-software-system-venues-and-events.php",
      "date": "07/28/2015",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/emvideo-youtube-PYHiIs9TIic.jpg"
    },
    {
      "title": "NCS4 Announces Fundraising Campaign Supporting New MBA, Emphasis in Sport Security Management",
      "link": "https://www.usm.edu/news/2015/release/ncs4-announces-fundraising-campaign-supporting-new-mba-emphasis-sport-security-management.php",
      "date": "05/18/2015",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/NCS4 campaign.JPG"
    },
    {
      "title": "First High School Risk Management Course Focuses on Athletic Events, After-School Activities",
      "link": "https://www.usm.edu/news/2015/release/first-high-school-risk-management-course-focuses-athletic-events-after-school-activities.php",
      "date": "05/18/2015",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/HSrisk.jpg"
    },
    {
      "title": "National Summit to Address High School Safety and Security Issues",
      "link": "https://www.usm.edu/news/2015/release/national-summit-address-high-school-safety-and-security-issues.php",
      "date": "03/17/2015",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "2015 National Safety and Security Conference to Incorporate Mock Trial",
      "link": "https://www.usm.edu/news/2015/release/2015-national-safety-and-security-conference-incorporate-mock-trial.php",
      "date": "03/09/2015",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "Interscholastic Athletics and After-School Activities Risk Management Training Course Set for March 2015",
      "link": "https://www.usm.edu/news/2015/release/interscholastic-athletics-and-after-school-activities-risk-management-training-course-set-ma.php",
      "date": "01/20/2015",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/NCS4 Risk Management Instructors.jpg"
    },
    {
      "title": "National Interscholastic Athletics and After School Activities Safety and Security Summit set for March 21-23",
      "link": "https://www.usm.edu/news/2014/release/national-interscholastic-athletics-and-after-school-activities-safety-and-security-summit-se.php",
      "date": "12/08/2014",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "NCS4 to Partner with Athletic Business on Gameday Security",
      "link": "https://www.usm.edu/news/2014/release/ncs4-partner-athletic-business-gameday-security.php",
      "date": "12/02/2014",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "NCS4 Announces 2015 Intercollegiate Athletics Safety and Security Summit",
      "link": "https://www.usm.edu/news/2014/release/ncs4-announces-2015-intercollegiate-athletics-safety-and-security-summit.php",
      "date": "10/06/2014",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "Fenton Receives Award at National Security Conference",
      "link": "https://www.usm.edu/news/2014/release/fenton-receives-award-national-security-conference.php",
      "date": "07/10/2014",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/distinguished-leader0001 (2).jpg"
    },
    {
      "title": "Professionals to Receive Recognition during National Sports Security Conference",
      "link": "https://www.usm.edu/news/2014/release/professionals-receive-recognition-during-national-sports-security-conference.php",
      "date": "07/03/2014",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "Facilities to Receive Recognition during National Sports Security Conference",
      "link": "https://www.usm.edu/news/2014/release/facilities-receive-recognition-during-national-sports-security-conference-0.php",
      "date": "07/03/2014",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "National Center for Spectator Sports Safety and Security Readies for 2014 Conference",
      "link": "https://www.usm.edu/news/2014/release/national-center-spectator-sports-safety-and-security-readies-2014-conference.php",
      "date": "05/21/2014",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/NCS42014logo_noicon.jpg"
    },
    {
      "title": "Computer-Based Simulations Address High School Safety and Security Needs Nationwide",
      "link": "https://www.usm.edu/news/2014/release/computer-based-simulations-address-high-school-safety-and-security-needs-nationwide.php",
      "date": "05/08/2014",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/emvideo-youtube-Nd8ZyI6U44E.jpg"
    },
    {
      "title": "Mississippi Leads Nation in Interscholastic Athletics Risk Management Training",
      "link": "https://www.usm.edu/news/2014/release/mississippi-leads-nation-interscholastic-athletics-risk-management-training.php",
      "date": "03/10/2014",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "Security Company Takes Lead with NCS4s Sport Venue Staff Certification",
      "link": "https://www.usm.edu/news/2014/release/security-company-takes-lead-ncs4-s-sport-venue-staff-certification.php",
      "date": "02/28/2014",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "Southern Miss NPHC Chapter and NCS4 to Honor 9/11 Victims, First Responders",
      "link": "https://www.usm.edu/news/2013/release/southern-miss-nphc-chapter-and-ncs4-honor-911-victims-first-responders.php",
      "date": "08/20/2013",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/Trent Lott Memorial 3D Rendering.jpg"
    },
    {
      "title": "National Center Offers New Certification Program for Sport Venue Staff",
      "link": "https://www.usm.edu/news/2013/release/national-center-offers-new-certification-program-sport-venue-staff.php",
      "date": "08/12/2013",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "National Forum Highlights Challenges/Solutions of Open Access Events",
      "link": "https://www.usm.edu/news/2013/release/national-forum-highlights-challengessolutions-open-access-events.php",
      "date": "07/25/2013",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/NCS4 forum photo.jpg"
    },
    {
      "title": "International Firm to Open U.S. Office at Southern Miss Trent Lott Center",
      "link": "https://www.usm.edu/news/2013/release/international-firm-open-us-office-southern-miss-trent-lott-center.php",
      "date": "07/22/2013",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/New company at TLC 002.jpg"
    },
    {
      "title": "National Sports Safety Conference and Exhibition Forum Line-Up Announced",
      "link": "https://www.usm.edu/news/2013/release/national-sports-safety-conference-and-exhibition-forum-line-announced.php",
      "date": "06/18/2013",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/Houston Marathon Finish Line.jpg"
    },
    {
      "title": "Stanley Security Solutions to Sponsor Award at 2013 NCS4 Conference",
      "link": "https://www.usm.edu/news/2013/release/stanley-security-solutions-sponsor-award-2013-ncs4-conference.php",
      "date": "03/19/2013",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/livesitepromo_academics_a_0.png"
    },
    {
      "title": "NCS4 Hosts Board Summit for Professional and College Sports Leagues",
      "link": "https://www.usm.edu/news/2012/release/ncs4-hosts-board-summit-professional-and-college-sports-leagues.php",
      "date": "12/06/2012",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/article_portrait/Magic.jpg"
    },
    {
      "title": "Southern Miss Faculty Join Trent Lott National Center Fellows Program",
      "link": "https://www.usm.edu/news/2012/release/southern-miss-faculty-join-trent-lott-national-center-fellows-program.php",
      "date": "05/03/2012",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/thumbnail/articles/photos/2012/May/bridget-hayden.jpg"
    },
    {
      "title": "Southern Miss True South Course Draws Participants From Gulf South Region",
      "link": "https://www.usm.edu/news/2011/release/southern-miss-true-south-course-draws-participants-gulf-south-region.php",
      "date": "09/27/2011",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/TrueSouthWelcome2.jpg"
    },
    {
      "title": "Southern Miss Wind Ensemble to Present Final Concert April 28",
      "link": "https://www.usm.edu/news/2011/release/southern-miss-wind-ensemble-present-final-concert-april-28.php",
      "date": "04/25/2011",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/Trevisani.jpg"
    },
    {
      "title": "School of Music Preserves History: The Tuskegee Airmen Fight Song",
      "link": "https://www.usm.edu/news/2011/release/school-music-preserves-history-tuskegee-airmen-fight-song.php",
      "date": "04/14/2011",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/tushegee51's(2).JPG"
    },
    {
      "title": "Southern Miss Percussion Ensemble Presents Multi-Style Concert April 20",
      "link": "https://www.usm.edu/news/2011/release/southern-miss-percussion-ensemble-presents-multi-style-concert-april-20.php",
      "date": "04/13/2011",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/PercussionEnsemble.jpg.jpg"
    },
    {
      "title": "Final Connoisseurs Series Concert to Feature Acclaimed Imani Winds",
      "link": "https://www.usm.edu/news/2011/release/final-connoisseurs-series-concert-feature-acclaimed-imani-winds.php",
      "date": "04/04/2011",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/Imani quintet.jpg"
    },
    {
      "title": "Southern Chorale to Perform New Works on March 29 at Hattiesburg Church",
      "link": "https://www.usm.edu/news/2011/release/southern-chorale-perform-new-works-march-29-hattiesburg-church.php",
      "date": "03/28/2011",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/article_portrait/Mulholland.jpg"
    },
    {
      "title": "Wind Ensemble Concerto Winners Showcased in Concert March 24",
      "link": "https://www.usm.edu/news/2011/release/wind-ensemble-concerto-winners-showcased-concert-march-24.php",
      "date": "03/21/2011",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/concerto winners_8731.jpg"
    },
    {
      "title": "Future Stars Award Winners Showcase Talents With Symphony Orchestra",
      "link": "https://www.usm.edu/news/2011/release/future-stars-award-winners-showcase-talents-symphony-orchestra.php",
      "date": "02/14/2011",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/FutureStars_2011.jpg"
    },
    {
      "title": "Connoisseurs Concert Series Features Russias Chamber Orchestra Kremlin",
      "link": "https://www.usm.edu/news/2011/release/connoisseurs-concert-series-features-russias-chamber-orchestra-kremlin.php",
      "date": "02/09/2011",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/kremlin.jpg"
    },
    {
      "title": "Annual PRISM Concert to Feature Several Ensembles from School of Music",
      "link": "https://www.usm.edu/news/2011/release/annual-prism-concert-feature-several-ensembles-school-music.php",
      "date": "02/03/2011",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/Prism Concert.jpg"
    },
    {
      "title": "Southern Chorale to Perform Free Concert at St. Louis Cathedral in New Orleans",
      "link": "https://www.usm.edu/news/2011/release/southern-chorale-perform-free-concert-st-louis-cathedral-new-orleans.php",
      "date": "02/02/2011",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/Choir_2009_bw.jpg"
    },
    {
      "title": "Taylor, McMunn to Kick Off 2011 Connoisseurs Chamber Music Series in Hattiesburg",
      "link": "https://www.usm.edu/news/2011/release/taylor-mcmunn-kick-2011-connoisseurs-chamber-music-series-hattiesburg.php",
      "date": "01/27/2011",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/darryl_taylor.jpg"
    },
    {
      "title": "School of Music to Host Vocal Arts and Science Symposium Jan. 21-22",
      "link": "https://www.usm.edu/news/2011/release/school-music-host-vocal-arts-and-science-symposium-jan-21-22.php",
      "date": "01/06/2011",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/thumbnail/articles/photos/2011/January/cleveland.jpg"
    },
    {
      "title": "Southern Miss Choral Groups to Perform During West Indies Concert Tour",
      "link": "https://www.usm.edu/news/2010/release/southern-miss-choral-groups-perform-during-west-indies-concert-tour.php",
      "date": "12/14/2010",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/SouthernChorale.jpg"
    },
    {
      "title": "Book Highlights 91 Years of Music by Southern Miss Symphony Orchestra",
      "link": "https://www.usm.edu/news/2010/release/book-highlights-91-years-music-southern-miss-symphony-orchestra.php",
      "date": "12/09/2010",
      "img": "https://www.usm.edu/news-binaries/sites/default/files/imagecache/400xY/SymphonyBook1.jpg"
    }
  ];


  $scope.dateConvert = (str) => {
    return new Date(str);
  }

  // order by most recent date first
  $scope.cust_comparator = function (v1, v2) {
    let date1 = $scope.dateConvert(v1.value);
    let date2 = $scope.dateConvert(v2.value);
    if (date1 > date2) {
      return -1;
    }
    return 1;
  };
});