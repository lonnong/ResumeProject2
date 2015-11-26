
 var work = 
 {
 	"jobs" : 
 	[
 			
 			{"employer"	: "Jacobs",
 	    	"title"		: "Software Engineer",
 			"location"	: "Orlando",
 			"startDate"	: "April 4, 2003 to June 15, 2014",
 			"endDate"	: "",
 			"description" : ["Automated deployment of Marine software training packages using Ruby scripts.",
 							"Developed technical solutions; writing automation test scripts, updating online delivery methods, and made web based open source solutions.", 
							"Created cutting edge solutions with Ruby on Rails and Python in Windows 7 and Linux Environments."]
 		},
 			{"employer" : "SESI",
 			"title" 	: "Software Engineer",
 			"location"	: "Orlando",
 			"startDate"	: "April 4, 2003 to June 15, 2014",
 			"endDate"	: "",
 			"description" : ["Developed a simulation / robotics demonstration using several I-ROBOTS in an object orientation framework",
 							"Reviewed by the Under Secretary of Defense.",
 							"Worked independently on multiple projects that were highly technical, challenging, and time sensitive."]

 		},
 			{"employer"	: "SAIC",
 	    	"title"		: "Software Engineer",
 			"location"	: "Orlando",
 			"startDate"	: "Jan 15 1998 to March 23 1999",
 			"endDate"	: "",
 			"description" : ["Led a four member team that developed a helicopter model for an Army simulation to replace a $4m yearly licensed Canadian simulator.",
 							"Integrated upgrades and patches on large scale software application with a 30 member maintenance team using CVS.",
 							"Partnered with research and development team for cutting edge prototypes."]
 	  }

 	]
 }

 var projects =
 {
 	"projects" : 
 	[
 		{
 			"title"			: "rails project",
 			"datesStarted"	: "March 13 2012",
 			"description"	: "Pretty colors",
 			"imageArray"	: "picture goes here" 
 		}
 	] 
 }
 var bio = 
 {
 	
 	"name"		: "Gene Lonnon",
 	"role"		: "Web Application Engineer",
 	"WelcomeMessage"	: "DON'T CLICK ME DUDE",
 	"contacts"	: "none",
 	"email" : "gene_lonnon@yahoo.com",
			"github" : "gene_lonnon",
			"online" : "GeneLonnon.com",
			"linkedin" : "Gene Lonnon",
			"mobile" : "407-929-4078",
			"location" : "Orlando, Florida",
 	"skills"	: ["Rails", "Unix", "HTML5", "CSS", "Bootstrap", "Jquery"]
}

var education = 
{
	"school" :
	[
		{	
		"name" 	: "University of Minnesota",
		"location"	: "Minneapolis, MN", 
		"Degree"	: "B.S.",
		"Majors"	: "Electrical Engineering",
		"GradDate"	: "long ago",
		"urlCourse"	: "www.udacity.com",
		},
		{
		"name"	: "University of Central Florida",
		"location"	: "Orlando. Florida",
		"Degree"	: "Undergrad Courses",
		"Majors"	: "Computer Science",
		"GradDate"	: "1999",
		"urlCourse"	: "none",
		}
	]
}	


function displayWork() {
	//Header Info
var formattedEmail = HTMLemail.replace("%data%", bio.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);





var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedLoc = HTMLlocation.replace("%data%", bio.location);
$("#topContacts").append(formattedLoc);
$("#footerContacts").append(formattedLoc);



var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
$("#header").append(formattedWelcomeMsg);



$("#header").append(HTMLskillsStart)
if (bio.skills.length > 0) {
	for (skill in bio.skills) {
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill)
	} 
}

for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattEmployer + formattTitle;
	
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattStartDates = HTMLworkDates.replace("%data%", work.jobs[job].startDate)
	var formattEndDates = HTMLworkDates.replace("%data%", work.jobs[job].endDate)
	var formattDates = formattStartDates + formattEndDates;
	$(".work-entry:last").append(formattDates);

	for (skill in work.jobs[job].description) 
	{
		var formattDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[skill]);
		$(".work-entry:last").append(formattDescription);
	}
}
	

}


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

		logClicks(x,y);
	});

function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

projects.display = function() 
{
	for (project in projects.projects) 
	{
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].datesStarted)
		$(".project-entry:last").append(formattedDates);


		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description)
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].imageArray.length > 0)
		{
			for (image in projects.projects[project].images) 
			{
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

education.display = function() 
{
	for (school in education.school) 
	{
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLschoolName.replace("%data%", education.school[school].name);
		$(".education-entry:last").append(formattedTitle);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.school[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDates = HTMLschoolDates.replace("%data%", education.school[school].GradDate);
		$(".education-entry:last").append(formattedDates);	

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.school[school].Majors);
		$(".education-entry:last").append(formattedMajor); 

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.school[school].Degree);
		$(".education-entry:last").append(formattedDegree);

		

		

		
/*

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description)
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].imageArray.length > 0)
		{
			for (image in projects.projects[project].images) 
			{
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		} */
	}
}
displayWork();
education.display();
projects.display();
initializeMap();
$("#mapDiv").append(googleMap);

