// $("#header").append(["Daria"]);
//var name = "Daria Alekseeva";
//var age = 26;
// console.log(firstName);

//var awesomeThoughts = 'I am Daria and I am AWESOME!'
//console.log(awesomeThoughts)

//var funThougths = awesomeThoughts.replace(["AWESOME"],['FUN'])
//console.log(funThougths)

//var role = ['Data Analyst']


var bio = {
	'name' : 'Daria Alekseeva',
	'age' : 26,
	'role' : 'Data Analyst',
	'contacts' : {
		'email' : 'alekseevadd@gmail.com',
		'location' : 'Greater London',
		'GitHub' : 'https://github.com/DariaAlekseeva',
		'RPubs' : 'https://rpubs.com/Daria',
		'mobile' : '07426711537'
	}, 
	'welcome message' : 'I am excited to start my career',
	'photo' : 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/09e/2e2/31f95b4.jpg',
	'skills' : ['Python', 'R', 'Exploratory Data Analysis', 'Statistical Data Analysis', 'Data Cleaning', 'Data Wrangling', 'Machine Learning models', 'Basic HTML', 'Basic CSS', 'SQL', 'MongoDB', 'Data Visualization', 'D3.js', 'Excel', 'Presentations'],
	'summary' : 'I’m excited to start my career as Data Analyst because I like to improve life around me, find hidden explanations and understand patterns in data. I find thrilling not only to explore data on the surface but also uncovering the story behind the data. I’m coming from financial background. While working in Client Business Department in bank I was always excited about tasks require analytical skills and used in-house software or Excel to perform analysis on bank customer database to find out trends in clients’ choices and needs. In Project Finance Department it was essential to analyze clients’ financial condition using financial statements. In that time my other responsibility was to prepare presentations of projects and present them to managers. I enjoy analysis process since I create a complete, structured and logically built project from raw data. Presenting is also exciting because it allows me to bring my message to the audience and share my findings. I started my journey of acquiring the most essential of Data Analyst skills like data wrangling, programming skills (python, R), statistics, SQL, visualization etc. I took various online Data Science classes. These classes are either taught by industry leaders like Facebook, Google, MongoDB or by respected academic institutions like Johns Hopkins University and Massachusetts Institute of Technology. I feel lucky having an opportunity to join Data Science community and develop myself in this field.'
}

//$("#header").append(bio['contacts']['email']);
//$("#header").append(bio['contacts']['location']);
//$("#main").append(bio['skills']);


var work = {
	'jobs' : [
		{ 
			'employer' : 'Udacity',
	 		'title' : 'Udacity Code Reviewer',
	 		'city' : 'London, UK',
	 		'years' : 'from 01.2015',
	 		'description' : 'I am one of the very first Udacity Code Reviewers, where I review student project submissions. For each submission, I do both a thorough code review and project evaluation. I strive to give actionable and helpful feedback to students while also improving my code reviewing skills at the same time.'
		},
		{
			'employer' : 'VTB24',
			'title' : 'Head of Client Business, Corporate Business Division',
			'city' : 'Moscow, Russia',
			'years' : '11.2013 - 03.2014',
			'description' : 'high level negotiations with costumer to maintain loan, bank guarantee and LC portfolio within TCB and VTB 24 integration period, conflict solution with customers within TCB and VTB 24 integration period, completion of corporate business integration process, Bank corporate products presentation to costumer, analysis of loan projects and financial condition of potential borrowers, preparation of credit and bank guarantee memoranda for Credit Committee, project agreements, financial borrower conditions and obligations monitoring, interaction with appraisers, evaluation agreements’ negotiation, negotiation of individual contracts and tariffs, drafting loan, mortgage and guarantees agreements, weekly analytics of dynamics in deposit portfolio, costumers’ account balance and service income, analytical reports preparation, weekly control of meeting the quarterly Division targets, creation management reporting forms for the Division, distribution customer service areas among employees, daily fulfillment pursuance execution control.'
		},
		{
			'employer' : 'TransCreditBank',
			'title' : 'Analyst Assistant, Project Manager',
			'city' : 'Moscow, Russia',
			'years' : '02.2012 - 10.2013',
			'description' : 'project coordination and planning, projects terms negotiation with clients, participation in investment deals, preparation of materials’ to the customer’s Board of Directors, drafting loan, mortgage, guarantee and consultancy agreements, internal communication realization, necessary for project work, executive analytic report preparation, principal, interest and fee payments control, project agreements monitoring and pledge insurance contracts validation, leasing, real estate and industry projects management, ABS Diasoft, Oracle user, сommunicating with legal, accounting, treasury department during planning and execution of projects, project documentation and maintenance, quarterly borrower financial condition monitoring , key ratio calculations, loan agreements conditions and covenants monitoring, internal and external document preparation.'
		},
		{
			'employer' : 'TransCreditBank',
			'title' : 'Client Manager, Corporate Business Department',
			'city' : 'Moscow, Russia',
			'years' : '10.2010 – 12.2011',
			'description' : 'initial negotiations with customer, presentation of bank product line to the customers, full customer service, drafted credit memorandum to be submitted to the Bank Credit Committee; prepared lending decisions and loan agreements, issued credits; fully supported customer within post issuance period, monitored payment, provided re-lending.'
		},
		{
			'employer' : 'Embassy of Russia in Peru',
			'title' : 'Head of Administrative Department, Personal Assistant to the Ambassador',
			'city' : 'Lima, Peru',
			'years' : '10.2010 – 12.2011',
			'description' : 'managed documentation and provided full administrative support to the Ambassador; provided coordination between Embassy and senior delegations within APEC Peru 2008.'
		}
	]	
}

var education = {
	'schools' : [
	 	{
		'name' : 'University by Industry (Udacity)',
		'years' : '2014 - 2015',
 		'city' : 'USA, online from London',
 		'degree' : 'Data Analyst Nanodegree'
 		}, 
 		{
		'name' : 'Finance University under the Government of the Russian Federation',
		'years' : '2011 - 2014',
 		'city' : 'Moscow',
 		'degree' : 'Bachelor of Economics, Finance and Credit'
 		}, 
 		{
 		'name' : 'Moscow Finance and Production Academy',
		'years' : '2007 - 2011',
 		'city' : 'Moscow',
 		'degree' : 'Bachelor of Management'
		},
		{
 		'name' : 'Russian Ministry of Foreign Affairs College',
		'years' : '2005 - 2007',
 		'city' : 'Moscow',
 		'degree' : 'Documentation and Archive specialist'
		}
	]
}

var projects = { 'projects' : 
	[
		{'title': 'New York Subway Ridership Data Analysis',
		 'description' : 'I did data wrangling, visualization and statistical analysis using python pandas and numpy packages. I found out whether more people ride metro in rainy or not rainy days, built model to predict ridership and evaluated the model.',
		 'years' : '2015',
		 'url' : 'http://nbviewer.ipython.org/github/DariaAlekseeva/Analyzing_NYC_Subway_Dataset/blob/master/NYC_Subway.ipynb'},
		{'title': 'Enron Fraud Detection',
		 'description' : 'I used python and applied machine learning and visualization skills to build an algorithm to identify Enron Employees who may have committed fraud, based on the public Enron financial and email data set.',
		 'years' : '2015',
		 'url' : 'http://github.com/DariaAlekseeva/Enron_Dataset'},
		 {'title': 'Global Economic Development and Urbanization',
		  'description' : 'I used R to pre-process The World Bank data and used D3.js, HTML and CSS to create a dynamic and interactive visualization. This visualization tells an interesting story about world urbanization and economic growth in the last 50 years. ',
		 'years' : '2015',
 		 'url' : 'http://bl.ocks.org/DariaAlekseeva/fde6999e69da2158ade6'},
		 {'title': 'Red and White Wine Quality',
		 'description' : 'I used R code and Markdown techniques to analyse characteristics of wine (input variables)  to predict wine quality (output variable) .',
		 'years' : '2015',
 		 'url' : 'http://rpubs.com/Daria/57835'},
		 {'title': 'East London Map Data Analysis',
		 'description' : 'I did data wrangling using python and MongoDB to unify data from Open Street Map  and explore it via queries. ',
		 'years' : '2015',
		 'url' : 'http://nbviewer.ipython.org/github/DariaAlekseeva/OpenStreetMap_Project_Udacity/blob/master/Mongo_Database.ipynb'},
		 {'title': 'Earthquakes: consequences of disasters',
		 'description' : 'I used R to explore data set from The Gapminder and arrive to conclusions about most seismoactive countries.',
		 'years' : '2015',
 		 'url' : 'https://rpubs.com/Daria/52549'},

	]
}
//$("#main").append(work['current_position']['employer']);
//$("#main").append(education['last_school']['name']);

var displayProjects = function() {

}

projects.display = function() {
	for (project in projects.projects) {
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace
		("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace
		("%data%", projects.projects[project].years);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace
		("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	

	}

//if (projects.projects[project].images.length > 0) {
//		for (image in projects.projects[project].images) {
//			var formattedprojImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
//			$(".project-entry:last").append(formattedprojImage);
//			}
//		}
}	

projects.display()

//for (project in projects.projects) {
//	document.getElementById("ptitle").href=projects.projects[project].url; 
//	debugger;
//}


function displayWork() {

var formattedName = HTMLheaderName.replace('%data%',bio.name)
var formattedRole = HTMLheaderRole.replace('%data%',bio.role)
var formattedGit = HTMLgithub.replace('%data%',bio.contacts.GitHub)
var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email)
var formattedRPubs = HTMLRPubs.replace('%data%',bio.contacts.RPubs)
var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile)
var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location)

$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);
$("#topContacts").prepend([formattedLocation]);
$("#topContacts").prepend([formattedGit]);
$("#topContacts").prepend([formattedRPubs]);
$("#topContacts").prepend([formattedEmail]);
$("#topContacts").prepend([formattedMobile]);



var formattedPic = HTMLbioPic.replace('%data%', bio.photo)
$("#header").append([formattedPic]);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace
	("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace
	("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace
	("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace
	("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace
	("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace
	("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace
	("%data%", bio.skills[6]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace
	("%data%", bio.skills[7]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace		
	("%data%", bio.skills[8]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace
	("%data%", bio.skills[9]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace
	("%data%", bio.skills[10]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace
	("%data%", bio.skills[11]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace
	("%data%", bio.skills[12]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace
	("%data%", bio.skills[13]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace
	("%data%", bio.skills[14]);
	$("#skills").append(formattedSkill);	
}

var formattedSummary = HTMLWelcomeMsg.replace('%data%', bio.summary)
$("#header").append([formattedSummary]);

for (job in work.jobs) {
	$('#workExperience').append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace
	('%data%', work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace
	('%data%', work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	
	$(".work-entry:last").append(formattedEmployerTitle);


	var formattedDates = HTMLworkDates.replace
	('%data%', work.jobs[job].years);
	var formattedLocation = HTMLworkLocation.replace
	('%data%', work.jobs[job].city);
	var formattedDescription = HTMLworkDescription.replace
	('%data%', work.jobs[job].description);

	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDescription);

	}
for (school in education.schools) {
	$('#education').append(HTMLschoolStart);
	var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
	$(".education-entry:last").append(formattedName);
	var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].years);
	$(".education-entry:last").append(formattedDates);
	var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].city);
	$(".education-entry:last").append(formattedLocation);
	var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
	$(".education-entry:last").append(formattedDegree);
	}

}

displayWork();

$(document).click(function(loc) {
 	var x = loc.pageX;
 	var y = loc.pageY;

 	logClicks(x,y);
});



function locationizer(work_obj) {
    var myLocations = [];
    for (var i in work_obj.jobs) {
        var loc = work_obj.jobs[i].location;
        myLocations.push(loc);
    }
    return myLocations;
}


function inName() {
	var oldName = bio.name;
    var finalName = oldName;
    array = oldName.split(' ');
    finalName = array[0][0].toUpperCase() + array[0].slice(1).toLowerCase() + ' ' + array[1].toUpperCase()
        return finalName;
};


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
