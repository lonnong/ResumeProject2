/* `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (works with a hyphen between them)
                 description: string 
            display: function taking no parameters
*/
 var work = 
 {
 	"jobs" : 
 	[
 			
 			{"employer"	: "Jacobs",
 	    	"title"		: "Software Engineer",
 			"location"	: "Orlando",
 			"dates"	: "April 4, 2003 to June 15, 2014",
 			"description" : ["Automated deployment of Marine software training packages using Ruby scripts.",
 							"Developed technical solutions; writing automation test scripts, updating online delivery methods, and made web based open source solutions.", 
							"Created cutting edge solutions with Ruby on Rails and Python in Windows 7 and Linux Environments."]
 		},
 			{"employer" : "SESI",
 			"title" 	: "Software Engineer",
 			"location"	: "Orlando",
 			"dates"		: "April 4, 2003 to June 15, 2014",
 			"description" : ["Developed a simulation / robotics demonstration using several I-ROBOTS in an object orientation framework",
 							"Reviewed by the Under Secretary of Defense.",
 							"Worked independently on multiple projects that were highly technical, challenging, and time sensitive."]

 		},
 			{"employer"	: "SAIC",
 	    	"title"		: "Software Engineer",
 			"location"	: "Orlando",
 			"dates"	: "Jan 15 1998 to March 23 1999",
 			"description" : ["Led a four member team that developed a helicopter model for an Army simulation to replace a $4m yearly licensed Canadian simulator.",
 							"Integrated upgrades and patches on large scale software application with a 30 member maintenance team using CVS.",
 							"Partnered with research and development team for cutting edge prototypes."]
 	 	}

 	]
 };
 /* `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters */

 var projects =
 {
 	"projects" : 
 	[
 		{
 			"title"			: "rails project",
 			"dates"	: "March 13 2012",
 			"description"	: "Pretty colors",
 			"images"	: "images/box.jpg" 
 		},
 		{
 			"title"			: "rails project",
 			"dates"	: "March 13 2012",
 			"description"	: "Pretty colors",
 			"images"	: "images/box.jpg" 
 		}
 	] 
 };
 /*`bio` contains:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string 
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: url
            display: function taking no parameters */
 var bio = 
 {
 	
 	"name"		: "Gene Lonnon",
 	"role"		: "Web Application Engineer",
 	"welcomeMessage"	: "DON'T CLICK ME DUDE",
 	"skills"	: ["Rails", "Unix", "HTML5", "CSS", "Bootstrap", "Jquery"],
 	"biopic"	: "images/fry.jpg",
 	"contacts"	:
 	

 	
 			{"email" : "gene_lonnon@yahoo.com",
			"github" : "gene_lonnon",
			"online" : "GeneLonnon.com",
			"linkedin" : "Gene Lonnon",
			"mobile" : "407-929-4078",
			"location" : "Orlando, Florida"
		} 	
};
/* `education` contains:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: integer (graduation date)
                 url: string
            onlineCourses: array with
                 title: string
                 school: string
                 date: integer (date finished)
                 url: string
            display: function taking no parameters */

var education = 
{
	"schools" :
	[
		{	
		"name" 	: "University of Minnesota",
		"location"	: "Minneapolis, MN", 
		"Degree"	: "B.S.",
		"Majors"	: "Electrical Engineering",
		"dates"	: "long ago",
		"url"	: "www.udacity.com"
		},
		{
		"name"	: "University of Central Florida",
		"location"	: "Orlando. Florida",
		"Degree"	: "Undergrad Courses",
		"Majors"	: "Computer Science",
		"dates"	: "1999",
		"url"	: "none"
		}
	],
	"onlineCourses" :
	[
		{
		"title" : "Front End Developer",
		"school" : "Udacity",
		"date"	: "15 Nov 2015",
		"url"	: "www.udacity.com"
		}
	]

		
};	

var data = '%data%';
var $header = $('#header');
var $workExperience = $("#workExperience");
var $topContacts = $("#topContacts");
var $footerContacts = $("#footerContacts");
var $skills = $("#skills");
var $projects = $("#projects");
var $education = $("#education");


$('#main').append(internationalizeButton);
$(document).click(function(loc) 
	{
		var x = loc.pageX;
		var y = loc.pageY;

			logClicks(x,y);
			console.log(x,y);
	});

function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

work.display = function()
{

	for (job in work.jobs)
	{
			$workExperience.append(HTMLworkStart);

			var formattEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
			var formattTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
			var formattedEmployerTitle = formattEmployer + formattTitle;
			
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattDates = HTMLworkDates.replace(data, work.jobs[job].dates);
			
			$(".work-entry:last").append(formattDates);

			for (skill in work.jobs[job].description) 
				{
					var formattDescription = HTMLworkDescription.replace(data, work.jobs[job].description[skill]);
					$(".work-entry:last").append(formattDescription);
				}
			}

	};


bio.display = function()
{

	var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
	$topContacts.append(formattedEmail);
	$footerContacts.append(formattedEmail);

	var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
	$topContacts.append(formattedGithub);
	$footerContacts.append(formattedGithub);

	var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
	$topContacts.append(formattedMobile);
	$footerContacts.append(formattedMobile);

	var formattedLoc = HTMLlocation.replace(data, bio.contacts.location);
	$topContacts.append(formattedLoc);
	$footerContacts.append(formattedLoc); 

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
	$header.append(formattedWelcomeMsg);


	$header.append(HTMLskillsStart);
	
	if (bio.skills.length > 0) 
	{
		for (skill in bio.skills)
		{	
			var formattedSkill = HTMLskills.replace(data, bio.skills[skill]);
			$("#skills").append(formattedSkill);
		} 
	}

};


projects.display = function()
{
	for (project in projects.projects) 
	{
		$projects.append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);


		var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedImageCool = HTMLprojectImage.replace(data, projects.projects[project].images);
		$(".project-entry:last").append(formattedImageCool);

	}
};



education.display = function() 
{
	for (inst in education.schools) 
	{
		$education.append(HTMLschoolStart);

		var formattedTitle = HTMLschoolName.replace(data, education.schools[inst].name);
		$(".education-entry:last").append(formattedTitle);

		var formattedLocation = HTMLschoolLocation.replace(data, education.schools[inst].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDates = HTMLschoolDates.replace(data, education.schools[inst].dates);
		$(".education-entry:last").append(formattedDates);	

		var formattedMajor = HTMLschoolMajor.replace(data, education.schools[inst].Majors);
		$(".education-entry:last").append(formattedMajor); 

		var formattedDegree = HTMLschoolDegree.replace(data, education.schools[inst].Degree);
		$(".education-entry:last").append(formattedDegree);
	}
};



/*function where(work_object) {
	var locationArray = [];

	for (var job in work_obj.jobs) {
		var newLoc = work_obj.jobs[job].location;
		locationArray.push(newLoc);
	}

	return locationArray;
}*/

$("#mapDiv").append(googleMap);
education.display();
work.display();
bio.display();
projects.display();




initializeMap();



