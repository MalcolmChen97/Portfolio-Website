var abouttext=["","Gift for Boys is a website focused on gift ideas for males. Although there are some websites that offer gift ideas, they mainly focus on gifts for women. Oftentimes, people do not know what gift to give to men during the holidays or any other special occasion. This website offers many ideas so that boys will be satisfied with their gift.","This is the game project for CPSC 131, a game development course. The whole game is done by a group of six people. The player control the character navigate around the map and collect different resources to update his weapon. The main goal of the game is to beat the Boss and flee away.","This is the class project for CPSC 310, a software engineering course. The whole project is done by a group of two people. The user can make queries about UBC's classrooms and courses by filling a pre-designed form. Then the server can give certain response back to the user.","This is the course project for CPSC 210, a software development course. The whole project is done myself. The user can find nearby subway stations on a map interface. The app also allows users to find nearest station, to get the timetable of certain lines, etc.","This is the person project done by a group of 10 people. We started everything from the scratch. The focus is on design processes including selecting game ideas, determining final game, writing game description, etc. It is like minecraft, with enriched story as the background. Models are square-made."];

var lessonlearned=["","I have taken a database course before. However, I used Oracle Sql and Java to do that project. For this project, I got the chance to use PHP, which is a really popular language. The website itself was designed simply due to time, but I really learn not only about the application of two languages, but also how client/server work.","For this project, all of us are programmer, meaning that we do not an art person. This really limited our final result. Overall, I get more familiar with unity 3D and C#. And I can definitely apply the concepts learnt from lectures to my future games.","I got to know web development due to this project. Concepts like callback, and promise are really interesting, and I truely want to dive into them later.","I mainly got to know how to trun codes into real application while creating this app. I really didn't get the reason to have things like Android Studio before I really created one Android app.","This is my first game project(using Unity 3D). I used to use c++ to create games. It was just borning and hard. I learnt what a engine is, and most importantly, the teamwork. My team members are all my friends, it was pretty hard to get everyone work on schedule. I think I really improved my project management skill due to the project."]



$(window).scroll(function(){
    
    scrollFunction();
    if(isScrolledIntoView($(".pro"))){
        $(".pro").css("opacity", $(window).scrollTop() / 700)
    }   
  
	
});
var buback='<br><br><button onclick="about(3)">About</button><button onclick="lesson(3)">Lesson Learned</button>';
var ps = $(".haha");
function about(pnum){
    var buback='<br><br><button onclick="about('+pnum+')">About</button><button onclick="lesson('+pnum+')">Lesson Learned</button>';
    ps[pnum-1].innerHTML = abouttext[pnum]+buback;
}
function lesson(pnum){
    var buback='<br><br><button onclick="about('+pnum+')">About</button><button onclick="lesson('+pnum+')">Lesson Learned</button>';
    ps[pnum-1].innerHTML = lessonlearned[pnum]+buback;
}





function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
//From w3c School
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
}